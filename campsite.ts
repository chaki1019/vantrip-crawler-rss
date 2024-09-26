import { imageDelete, imageUpload } from './lib/images.js';
import { CategoryPoiDocument, CategoryPoiQuery, CategoryPoiQueryVariables, CreatedPoiDocument, CreatedPoiQuery, CreatedPoiQueryVariables, InsertAndUpdatePoiDocument, InsertAndUpdatePoiMutation, InsertAndUpdatePoiMutationVariables, SearchNeighborsDocument, SearchNeighborsQuery, SearchNeighborsQueryVariables } from './__generated/graphql.js';
import { client } from './lib/graphql-client.js';
import playwright, { Browser } from 'playwright';
import log4js from 'log4js';
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc.js";
import * as dotenv from 'dotenv'
import { decode } from 'html-entities';
import { setTimeout } from 'timers/promises';
import { createObjectCsvWriter } from 'csv-writer';
import { Poi } from './type/poi.js';

dotenv.config()
dayjs.extend(utc)

const TIMEOUT = 2000
const NOW = dayjs(new Date())
const REGION = [5,6,7,1,2,3,4]
// const REGION = [5]

const logger = log4js.getLogger();
logger.level = 'all'
const slackLogger = log4js.getLogger('slack')
slackLogger.level = 'all'

log4js.configure({
  appenders: {
    file: {
      type: "dateFile",
      filename: `./logs/campsite_${NOW.format('YYYYMMDDHHmmss')}.log`,
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
  path: `./logs/campsite_poi_photo_${NOW.format('YYYYMMDDHHmmss')}.csv`,
  header: [
    { id: 'id', title: 'Image ID' },
    { id: 'size', title: 'Size' },
    { id: 'url', title: 'URL' },
  ],
})

const format = (content: string): string => {
  let text = content.replaceAll(/<[Bb][Rr](\s+\/)?>/ig, '\n').replaceAll(/<[^>]+>/g, '').replaceAll(/[ 　]{2,}/g, ' ')
  return decode(text.trim())
}

const getPageUrls = async (): Promise<Array<string>> => {
  let urls: Array<string> = [];

  for (let i = 0; i < REGION.length; i++) {
    let pageId = 1
    while (true) {
      const url = `https://www.nap-camp.com/api/search?region_id=${REGION[i]}&location_list=&other=26,24&sort_id=21&page_id=${pageId}&facility_id=0&freeword=&count=100`
      const res = await fetch(url)
      const json = await res.json()
      urls.push(...json.result.map((r: any) => `https://www.nap-camp.com/${r.prefecture_name_en}/${r.id}`))

      logger.debug(`URLs length: ${urls.length}`)
      if (!json.info.is_next_page) {
        break;
      }

      pageId++
    }
  }

  return urls
}

(async () => {
  const browser = await playwright['chromium'].launch();

  try {
    const insertObjects: Array<Poi> = []
    const updateObjects: Array<Poi> = []
    const oldPhotos: Array<string> = []

    const context = await browser.newContext();
    const page = await context.newPage();

    let pageUrls = await getPageUrls()

    // URLの中で既に登録済みのPOIは除外する
    // TODO: 途中で休業・廃止に変わったPOIはどうするか…
    const { poi: existObjects } = await client.request<CategoryPoiQuery, CategoryPoiQueryVariables>(
      CategoryPoiDocument.toString(), {
        category: 'campsite',
      }
    )
    pageUrls = pageUrls.filter(url => !existObjects.find(o => o.url === url))

    // 各URLのページを取得して中身を取得
    for (let i = 0; i < pageUrls.length; i++) {
      const url = pageUrls[i]
      await page.goto(url, {timeout: 1800000})
      // await page.screenshot({path: 'test.png', fullPage: true})
      const name = (await page.locator('[class^=CampsiteDetail_site-name]').textContent())?.trim()
      const description = format(await page.locator('[class^=CampsiteDetail_site-main]').first().innerHTML())
      const address = await page.locator('//*[@id="info"]/table/tbody/tr/th[.="住所"]/following-sibling::td[1]').textContent()

      const priceLocator = await page.locator('//*[@id="app"]/div/div/div/div/table/tbody/tr/th[.="料金情報"]/following-sibling::td[1]')
      let subPrice
      // for https://www.nap-camp.com/hyogo/15112
      if (await priceLocator.locator('//th[.="料金"]/following-sibling::td[1]').count() > 0) {
        subPrice = format(await priceLocator.locator('//th[.="料金"]/following-sibling::td[1]').innerHTML())
      }
      const price = subPrice ?? format(await priceLocator.innerHTML())
      // const open_time1 = `${format(await page.locator('//th[.="営業期間"]/following-sibling::td[1]').innerHTML())}`
      const open_time1 = `${format(await page.locator('//*[@id="app"]/div/div/div/div/table/tbody/tr/th[.="営業期間"]/following-sibling::td[1]').innerHTML())}`
      const open_time2 = `チェックイン: ${format(await page.locator('//*[@id="app"]/div/div/div/div/table/tbody/tr/th[.="チェックイン"]/following-sibling::td[1]').innerHTML())}`
      const open_time3 = `チェックアウト: ${format(await page.locator('//*[@id="app"]/div/div/div/div/table/tbody/tr/th[.="チェックアウト"]/following-sibling::td[1]').innerHTML())}`
      const open_time = `${open_time1}\n${open_time2}\n${open_time3}`
      const holiday = `${format(await page.locator('//*[@id="app"]/div/div/div/div/table/tbody/tr/th[.="定休日"]/following-sibling::td[1]').innerHTML())}`

      // GoogleMap
      const iframe = await page.locator('div[class^=MapScreen_map] > iframe');
      const mapSrc = await iframe.getAttribute('src')
      const matched = mapSrc?.match(/q=([0-9\.]+),([0-9\.]+)/)
      let lat = parseFloat(matched?.[1] || '0')
      let lng = parseFloat(matched?.[2] || '0')

      // バリデーション
      if (!(name && lat && lng)) {
        logger.error(`${url} 名前、所在地、緯度経度のいずれかに不備があるためスキップします。`)
        await setTimeout(TIMEOUT)
        continue
      }

      // 名前に休止、廃止を含む場合はスキップ
      if (name.includes('休止') || name.includes('廃止') || name.includes('終了') || name.includes('閉鎖') || name.includes('休業')) {
        logger.info(`[${name}] (${url}) 「休止」「廃止」「終了」「閉鎖」「休業」を含むためスキップします。`)
        await setTimeout(TIMEOUT)
        continue
      }

      // 舞洲バーベキューパーク
      // https://www.nap-camp.com/osaka/14221
      // https://www.nap-camp.com/osaka/12022
      // 同じ場所だがページが違うスポットがあるので既に取得した中に重複がないかをチェックする
      const duplicated = [...insertObjects, ...updateObjects, ...existObjects].find(o => o.name == name && o.address == address)
      if (duplicated) {
        logger.info(`[${name}] (${url}) は重複のためスキップ => [${duplicated.url}]`)
        await setTimeout(TIMEOUT)
        continue
      }

      // 写真
      let images = await Promise.all((await page.locator('[class^=KeyImages_main-images] img').all()).map(async i => {
        const src = await i.getAttribute('src')
        if (src) {
          try {
            const u = new URL(src)
            const params = u.searchParams;
            return `${u.origin}${u.pathname}?fname=${params.get('fname')}`
          } catch (err) {
            return null
          }
        }
      })) as Array<string>
      // null除外
      images = images.filter(v => v)
      // 写真は先頭1件だけにしておく（全部登録したい場合は下のslice(0.1)の行をコメントアウトする）
      images = images.slice(0, 1)

      const newPoi: Poi = {
        category: 'campsite',
        name: name!,
        address,
        description,
        open_time,
        holiday,
        price,
        url,
        lat,
        lng,
        photos: images.map((url, idx) => ({image: url, order_no: idx + 1})),
        created_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
        created_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
        modified_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
        modified_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
      }

      // Hasuraから現在のキャンプ場を位置情報から取得
      const res = await client.request<SearchNeighborsQuery, SearchNeighborsQueryVariables>(
        SearchNeighborsDocument.toString(), {
          distance: 1000,
          lat,
          lng,
          category: 'campsite',
        }
      )

      console.log('newPoi', newPoi)

      const neighbor = res.search_neighbors.find(n => {
        const pName = newPoi.name.replace(/[ 　・]/g, '')
        const nName = n.name.replace(/[ 　・]/g, '')
        return pName.includes(nName) || nName.includes(pName)
      })

      logger.debug(`[${('0000' + i).slice(-4)}] ${name} ==> ${res.search_neighbors.length == 0 || !neighbor ? '** NEW **' : res.search_neighbors.map(n => n.id == neighbor.id ? `[◯] ${n.name}` : `[x] ${n.name}`).join(', ')}`)

      if (neighbor) {
        if (neighbor.photos) {
          oldPhotos.push(...neighbor.photos.map(p => p.image))
        }

        updateObjects.push({...neighbor, ...newPoi})
      } else {
        insertObjects.push(newPoi)
      }

      await setTimeout(TIMEOUT)
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
      // ロールバック
      await imageDelete(uploadImages.map(u => u.id))
      throw error
    }

    const ret = await client.request<CreatedPoiQuery, CreatedPoiQueryVariables>(
      CreatedPoiDocument.toString(), {
        category: 'campsite',
        createdAt: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
      }
    )

    slackLogger.info('キャンプ場のクローリングが正常終了しました。')
    if (ret.newPoi.length > 0) {
      const addPois = ret.newPoi.map(p => `[${p.id}] ${p.name} <${p.address}> (写真 ${p.photos.length} 枚)`).join('\n')
      slackLogger.info(`${ret.newPoi.length}件の新規登録を行いました。\n----------\n${addPois}`)
    }

    if (ret.discontinuePoi.length > 0) {
      const disconPois = ret.discontinuePoi.map(p => `[${p.id}] ${p.name} <${p.address}> (写真 ${p.photos.length} 枚)`).join('\n')
      slackLogger.info(`以下のデータはキャンプ場から登録抹消されている可能性があります。\n----------\n${disconPois}`)
    }
  } catch (err) {
    logger.error(err)
    slackLogger.error(err)
  } finally {
    await browser.close()
  }
})();
