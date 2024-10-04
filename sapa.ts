import { PrefExtent } from './pref-extent.js';
import { imageDelete, imageUpload } from './lib/images.js';
import { CreatedPoiDocument, CreatedPoiQuery, CreatedPoiQueryVariables, InsertAndUpdatePoiDocument, InsertAndUpdatePoiMutation, InsertAndUpdatePoiMutationVariables, PoiDocument, PoiQuery, PoiQueryVariables, SearchNeighborsDocument, SearchNeighborsQuery, SearchNeighborsQueryVariables } from './__generated/graphql.js';
import { client } from './lib/graphql-client.js';
import playwright from 'playwright';
import log4js from 'log4js';
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc.js";
import * as dotenv from 'dotenv'
import { setTimeout } from 'timers/promises';
import { createObjectCsvWriter } from 'csv-writer';
import { Poi } from './type/poi.js';
import { AddressType, Client, Language, Place, PlaceData, PlaceInputType } from '@googlemaps/google-maps-services-js';

dotenv.config()
dayjs.extend(utc)

const BASE_URL = 'https://www.driveplaza.com'
const NOW = dayjs(new Date())

const logger = log4js.getLogger();
logger.level = 'all'
const slackLogger = log4js.getLogger('slack')
slackLogger.level = 'all'

log4js.configure({
  appenders: {
    file: {
      type: "dateFile",
      filename: `./logs/sapa_${NOW.format('YYYYMMDDHHmmss')}.log`,
      layout: {
        type: "pattern",
        pattern: "[%d] [%p] %m"
      }
    },
    console: { 
      type: 'console',
      layout: {
        type: "pattern",
        pattern: "[%d] [%p] %m"
    }
    },
    slack: {
      type: '@log4js-node/slack',
      token: process.env.SLACK_BOT_TOKEN,
      channel_id: 'C07M46S48H0',
      username: 'クローラーボット',
      layout: {
        type: "pattern",
        pattern: "[%d] [%p] %m"
      }
    }
  },
  categories: {
    default: { appenders: [ 'console', 'file' ], level: 'all' },
    slack: {appenders: ['slack'], level: 'all'},
  }
});

const csvWriter = createObjectCsvWriter({
  path: `./logs/sapa_poi_photo_${NOW.format('YYYYMMDDHHmmss')}.csv`,
  header: [
    { id: 'id', title: 'Image ID' },
    { id: 'size', title: 'Size' },
    { id: 'url', title: 'URL' },
  ],
})

type SAPA = {
  name: string
  image: string
  url: string
  lat: number
  lng: number
  address?: string
}


const getHanshin = async (): Promise<Array<SAPA>> => {
  let ret: Array<SAPA> = [];
  const browser = await playwright['chromium'].launch();

  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    const url = `https://www.hanshin-exp.co.jp/drivers/douro/pa_guide/`
    await page.goto(url)
    let sapa = await Promise.all((await page.locator('//*[@id="contentsInner"]/main/article/ul/li/a').all()).map(async a => {
      return {
        name: await a.locator('//following-sibling::span/strong').textContent(),
        url: (new URL(await a.getAttribute('href') as string, url)).toString()
      }
    })) as Array<SAPA>

    let retryCount = 0
    for (let i = 0; i < sapa.length;) {
      const url = sapa[i].url

      try {
        await page.goto(url, {timeout: 60000})
        const imageExist = (await page.locator('//*[@id="contentsInner"]/main/ul[@class="link02"]/following-sibling::*[1]/img').count()) > 0
        if (imageExist) {
          const image = await page.locator('//*[@id="contentsInner"]/main/ul[@class="link02"]/following-sibling::*[1]/img').first().getAttribute('src') as string
          const imageUrl = new URL(image, url)
          sapa[i].image = imageUrl.toString()
        }
        
        // GoogleMap
        if (await page.locator('//a[contains(@href,"https://maps")]').count() > 0) {
          const href = await page.locator('//a[contains(@href,"https://maps")]').getAttribute('href')
          // page.on('response', response => {
          //   console.log('Redirected to:', response.url());
          // });
          // await page.goto(href!, {waitUntil: 'domcontentloaded'})

          await page.goto(href!)
          const response = await page.waitForResponse((response) => response.url().includes('/maps/place/'));
          const matched = response.url().match(/\/@([\d\.]+?),([\d\.]+?),/)
          if (matched?.length == 3) {
            sapa[i].lat = parseFloat(matched[1])
            sapa[i].lng = parseFloat(matched[2])
          }
        }
        
        logger.debug(i, sapa[i])
        i++
        retryCount = 0
      } catch (error) {
        if (retryCount >= 3) {
          throw error
        }
        console.log('***リトライ***', error)
        retryCount++
      } finally {
        await setTimeout(5000)
      }
    }

    ret.push(...sapa)
  } finally {
    await browser.close()
  }

  ret = ret.filter(sapa => sapa.lat && sapa.lng)

  // 住所がないので緯度経度からリバースジオコーディング
  const google = new Client({})
  for (let i = 0; i < ret.length; i++) {
    const sapa = ret[i]
    const {
      data: {
        results
      }
    } = await google.reverseGeocode({
      params: {
        key: process.env.GOOGLE_MAPS_API_KEY!,
        language: Language.ja,
        result_type: [AddressType.point_of_interest],
        latlng: {
          lat: sapa.lat,
          lng: sapa.lng,
        }
      }
    })

    if (results.length > 0) {
      const matched = results.at(0)?.formatted_address.match(/〒[\d\-]+(.*)/)
      if (matched) {
        sapa.address = matched.at(1)?.trim()
      }
    }

    await setTimeout(1000)
  }

  return ret
}

const getSyutoko = async (): Promise<Array<SAPA>> => {
  const ret: Array<SAPA> = [];
  const browser = await playwright['chromium'].launch();

  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`https://www.shutoko.jp/use/pa/`)
    let sapa = await Promise.all((await page.locator('//td/a[contains(@href,"https://www.shutoko-sv.jp/parking_area/pa")]').all()).map(async a => ({name: await a.textContent(), url: await a.getAttribute('href')}))) as Array<SAPA>

    let retryCount = 0
    for (let i = 0; i < sapa.length;) {
      const url = sapa[i].url

      try {
        await page.goto(url, {timeout: 60000})
        const imageExist = (await page.locator('//*[@id="slideshow"]//img').count()) > 0
        if (imageExist) {
          const image = await page.locator('//*[@id="slideshow"]//img').first().getAttribute('src') as string
          const imageUrl = new URL(image, url)
          sapa[i].image = imageUrl.toString()
        }
        
        // 住所はページに書いてないので東京都で決め打ち
        sapa[i].address = '東京都'

        logger.debug(i, sapa[i])
        i++
        retryCount = 0
      } catch (error) {
        if (retryCount >= 3) {
          throw error
        }
        console.log('***リトライ***', error)
        retryCount++
      } finally {
        await setTimeout(5000)
      }
    }

    ret.push(...sapa)
  } finally {
    await browser.close()
  }

  return ret
}

const getNexco = async (): Promise<Array<SAPA>> => {
  const ret: Array<SAPA> = [];
  const browser = await playwright['chromium'].launch();

  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`${BASE_URL}/dp/SAPAServRes?HIGHWAY=AA`)
    let sapa = await Promise.all((await page.locator('main h3.ttl-sapaName > a').all()).map(async a => ({name: await a.textContent(), url: await a.getAttribute('href')}))) as Array<SAPA>

    let retryCount = 0
    for (let i = 0; i < sapa.length;) {
      const url = sapa[i].url

      try {
        await page.goto(url, {timeout: 60000})
        const imageExist = (await page.locator('//*[@class="title-column"]//img').count()) > 0
        if (imageExist) {
          const image = await page.locator('//*[@class="title-column"]//img').getAttribute('src') as string
          const imageUrl = new URL(image, url)
          sapa[i].image = imageUrl.toString()
        }
        
        // 住所
        if (await page.locator('//*[@id="main-content"]/section/div/dl/dd/div//p').count() > 0) {
          const addr = await page.locator('//*[@id="main-content"]/section/div/dl/dd/div//p').textContent()
          sapa[i].address = addr?.replace(/〒[\d\-]*/, '').trim()
        } else if (await page.locator('//*[@id="home"]/main/section/div/div/div/div/p').count() > 0) {
          const addr = await page.locator('//*[@id="home"]/main/section/div/div/div/div/p').textContent()
          sapa[i].address = addr?.replace(/〒[\d\-]*/, '').trim()
        }

        const extUrlExist = (await page.locator('//*[@id="main-content"]/div/div/div/a').count()) > 0
        if (extUrlExist) {
          const extUrl = new URL(await page.locator('//*[@id="main-content"]/div/div/div/a').getAttribute('href') ?? '', BASE_URL)
          sapa[i].url = extUrl.toString()
          await page.goto(sapa[i].url)

          if (extUrl.host == 'sapa.c-nexco.co.jp') {
            // NEXCO中日本
            const gmapLocator = await page.locator('//a[starts-with(@href, "https://www.google.com")]')
            if (await gmapLocator.count() > 0) {
              const mapUrl = await gmapLocator.getAttribute('href')
              const matched = mapUrl?.match(/\/@(\d.*?),(\d.*?),/)
              sapa[i].lat = parseFloat(matched?.[1] || '0')
              sapa[i].lng = parseFloat(matched?.[2] || '0')
    
              // 上段で住所が取れていない場合ここで挑戦
              if (!sapa[i].address) {
                const addr = await page.locator('//*[@class="address"]').textContent()
                sapa[i].address = addr?.replace(/〒[\d\-]*/, '').trim()
              }
            }

            if (await page.locator('//img[@id="slider01-01"]').count() > 0) {
              const image = await page.locator('//img[@id="slider01-01"]').first()
              const imageUrl = new URL(await image.getAttribute('src') as string, extUrl)
              sapa[i].image = imageUrl.toString()
            }
          } else if (extUrl.host == 'www.jb-highway.co.jp') {
            // 本四高速
            if (await page.locator('//*[contains(@class,"swiper-slide")]/img').count() > 0) {
              const image = await page.locator('//*[contains(@class,"swiper-slide")]/img').first()
              const imageUrl = new URL(await image.getAttribute('src') as string, extUrl)
              sapa[i].image = imageUrl.toString()
            }
          } else if (extUrl.host == 'www.w-holdings.co.jp') {
            // NEXCO西日本
            if (await page.locator('//*[@id="vis_1"]/img').count() > 0) {
              const image = await page.locator('//*[@id="vis_1"]/img').getAttribute('src') as string
              const imageUrl = new URL(image, extUrl)
              sapa[i].image = imageUrl.toString()
            }

            // 上段で住所が取れていない場合ここで挑戦
            if (!sapa[i].address) {
              const addr = await page.locator('//*[@id="baseinfo_table"]//*[text()="住所"]/parent::*/following-sibling::td/text()[1]').textContent()
              sapa[i].address = addr?.replace(/〒[\d\-]*/, '').trim()
            }            
          }
        }

        logger.debug(i, sapa[i])
        i++
        retryCount = 0
      } catch (error) {
        if (retryCount >= 3) {
          throw error
        }
        console.log('***リトライ***', error)
        retryCount++
      } finally {
        await setTimeout(5000)
      }
    }

    ret.push(...sapa)
  } finally {
    await browser.close()
  }

  return ret
}

const getSAPA = async (): Promise<Array<SAPA>> => {
  const hanshin = await getHanshin()
  const syutoko = await getSyutoko()
  const nexco = await getNexco()

  return [...hanshin, ...syutoko, ...nexco]
}

(async () => {

  try {
    const insertObjects: Array<Poi> = []
    const updateObjects: Array<Poi> = []
    const oldPhotos: Array<string> = []

    let sapaList = await getSAPA()

    // URLの中で既に登録済みのPOIは除外する
    // TODO: 途中で休業・廃止に変わったPOIはどうするか…
    const { poi: existObjects } = await client.request<PoiQuery, PoiQueryVariables>(
      PoiDocument.toString(), {
        where: {category: {_eq: 'sapa'}, url: {_is_null: false}}
      }
    )
    sapaList = sapaList.filter(sapa => !existObjects.find(o => o.name === sapa.name))

    const google = new Client({})

    // 各URLのページを取得して中身を取得
    for (let i = 0; i < sapaList.length; i++) {
      const sapa = sapaList[i]

      if (!(sapa.lat && sapa.lng)) {
        // 緯度経度がない場合はPlace APIで取る
        let locationbias
        if (sapa.address) {
          const matched = sapa.address.match(/^.+?[都道府県]/)
          if ((matched?.length ?? 0) > 0 && PrefExtent.has(matched!.at(0) as string)) {
            const extent = PrefExtent.get(matched!.at(0) as string)!
            locationbias = `rectangle:${extent.south},${extent.west}|${extent.north},${extent.east}`
          }
        }
        const places = await google.findPlaceFromText({
          params: {
            key: process.env.GOOGLE_MAPS_API_KEY!,
            inputtype: PlaceInputType.textQuery,
            input: sapa.name,
            language: Language.ja,
            fields: ['formatted_address', 'geometry', 'place_id', 'name'],
            locationbias,
          }
        })

        if (places.data.candidates.length == 0) {
          logger.info(`Place APIで"${sapa.name}"が見つからなかったためスキップ`)
          continue
        } else if (places.data.candidates.length > 1) {
          // 複数の結果がある場合、SAPAの上り、下りの両方があり、かつ上りで検索しても下りが1件目にあったりするので
          // 場所名でより近いものを探す
          const found = places.data.candidates.find(p => {
            // 名前の英数字を半角に揃える
            const searchWord = sapa.name.replace(/[！-～]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248))
            const targetWord = p.name?.replace(/[！-～]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248))

            // 愛鷹ＰＡ(上)を愛鷹PAと上に分割
            const matched = searchWord.match(/(.+?[SA|PA])\((.+?)\)/)
            const name = matched?.[1] as string
            const subname = matched?.[2] as string

            return targetWord?.includes(name) && targetWord.replace(name, '').includes(subname)
          })

          let place = places.data.candidates.at(0) as Place
          if (found) {
            place = found
          }

          let addr
          const matched = place.formatted_address?.match(/〒[\d\-]+(.*)/)
          if (matched) {
            addr = matched.at(1)?.trim()
          }
          logger.info(`[PLACE] SA/PA名=${sapa.name} (${sapa.address}), Place名=${place.name} (${addr})`)
          if (addr) {
            sapa.address = addr
          }
          sapa.lat = place.geometry?.location.lat as number
          sapa.lng = place.geometry?.location.lng as number

        } else {
          const place = places.data.candidates.at(0) as Place

          let addr
          const matched = place.formatted_address?.match(/〒[\d\-]+(.*)/)
          if (matched) {
            addr = matched.at(1)?.trim()
          }
          logger.info(`[PLACE] SA/PA名=${sapa.name} (${sapa.address}), Place名=${place.name} (${addr})`)
          if (addr) {
            sapa.address = addr
          }
          sapa.lat = place.geometry?.location.lat as number
          sapa.lng = place.geometry?.location.lng as number
        }
      }

      const newPoi: Poi = {
        category: 'sapa',
        name: sapa.name,
        address: sapa.address,
        url: sapa.url,
        lat: sapa.lat,
        lng: sapa.lng,
        photos: sapa.image ? [{image: sapa.image, order_no: 1}] : [],
        created_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
        created_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
        modified_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
        modified_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
      }

      // Hasuraから現在のSA/PAを位置情報から取得
      const res = await client.request<SearchNeighborsQuery, SearchNeighborsQueryVariables>(
        SearchNeighborsDocument.toString(), {
          distance: 1000,
          lat: sapa.lat,
          lng: sapa.lng,
          category: 'sapa',
        }
      )

      console.log('newPoi', newPoi)

      const neighbor = res.search_neighbors.find(n => {
        const pName = newPoi.name.replace(/[ 　・]/g, '')
        const nName = n.name.replace(/[ 　・]/g, '')
        return pName.includes(nName) || nName.includes(pName)
      })

      logger.debug(`[${('0000' + i).slice(-4)}] ${sapa.name} ==> ${res.search_neighbors.length == 0 || !neighbor ? '** NEW **' : res.search_neighbors.map(n => n.id == neighbor.id ? `[◯] ${n.name}` : `[x] ${n.name}`).join(', ')}`)

      if (neighbor) {
        if (neighbor.photos) {
          oldPhotos.push(...neighbor.photos.map(p => p.image))
        }

        updateObjects.push({...neighbor, ...newPoi})
      } else {
        insertObjects.push(newPoi)
      }

      await setTimeout(1000)
    }

    const uploadImages: Array<{id: string, size: number, url: string}> = []
    try {
      // イメージアップロード
      for (let i = 0; i < insertObjects.length; i++) {
        const o = insertObjects[i]
        const images = o.photos.map(p => p.image)
        const uploads = await imageUpload(images)
        uploadImages.push(...uploads)
        o.photos = uploads.map((u, idx) => ({image: u.id, order_no: idx + 1}))
      }

      for (let i = 0; i < updateObjects.length; i++) {
        const o = updateObjects[i]
        const images = o.photos.map(p => p.image)
        const uploads = await imageUpload(images)
        uploadImages.push(...uploads)
        o.photos = uploads.map((u, idx) => ({image: u.id, order_no: idx + 1}))
      }

      await csvWriter.writeRecords(uploadImages)

      // 登録・更新
      await client.request<InsertAndUpdatePoiMutation, InsertAndUpdatePoiMutationVariables>(
        InsertAndUpdatePoiDocument.toString(), {
          insertObjects: insertObjects.map(o => {
            return {...o, photos: {
              data: o.photos,
            }}
          }),
          updates: updateObjects.map(o => {
            return {
              _set: {
                name: o.name,
                address: o.address,
                tel: o.tel,
                description: o.description,
                open_time: o.open_time,
                holiday: o.holiday,
                url: o.url,
                lat: o.lat,
                lng: o.lng,
                modified_by: o.modified_by,
                modified_at: o.modified_at,
              },
              where: {
                id: {
                  _eq: o.id
                }
              }
            }
          }),
          deletePhotoParentIds: updateObjects.map(o => o.id!),
          insertPhotos: updateObjects.map(o => o.photos.map(p => ({parent_id: o.id, image: p.image, order_no: p.order_no}))).flat(),
        }
      )

      // 旧イメージ削除
      await imageDelete(oldPhotos)

      logger.info(`Deleted images are ${oldPhotos}`)

    } catch (error) {
      // アップロード済みの画像削除
      console.error(`エラーのためアップロード済み画像の削除`, uploadImages)
      // ロールバック
      await imageDelete(uploadImages.map(u => u.id))
      throw error
    }

    const ret = await client.request<CreatedPoiQuery, CreatedPoiQueryVariables>(
      CreatedPoiDocument.toString(), {
        category: 'sapa',
        createdAt: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
      }
    )

    slackLogger.info('SA/PAのクローリングが正常終了しました。')
    if (ret.newPoi.length > 0) {
      const addPois = ret.newPoi.map(p => `[${p.id}] ${p.name} <${p.address}> (写真 ${p.photos.length} 枚)`).join('\n')
      slackLogger.info(`${ret.newPoi.length}件の新規登録を行いました。\n----------\n${addPois}`)
    }

    if (ret.discontinuePoi.length > 0) {
      const disconPois = ret.discontinuePoi.map(p => `[${p.id}] ${p.name} <${p.address}> (写真 ${p.photos.length} 枚)`).join('\n')
      slackLogger.info(`以下のデータはSA/PAから登録抹消されている可能性があります。\n----------\n${disconPois}`)
    }
  } catch (err) {
    logger.error(err)
    slackLogger.error(err)
  }
})();
