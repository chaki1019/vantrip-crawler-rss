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

dotenv.config()
dayjs.extend(utc)

const NOW = dayjs(new Date())

const logger = log4js.getLogger();
logger.level = 'all'
const slackLogger = log4js.getLogger('slack')
slackLogger.level = 'all'

log4js.configure({
  appenders: {
    file: {
      type: "dateFile",
      filename: `./logs/platpark_${NOW.format('YYYYMMDDHHmmss')}.log`,
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
  path: `./logs/platpark_poi_photo_${NOW.format('YYYYMMDDHHmmss')}.csv`,
  header: [
    { id: 'id', title: 'Image ID' },
    { id: 'size', title: 'Size' },
    { id: 'url', title: 'URL' },
  ],
})

type Kurumatabi = {
  name: string
  open_time: string
  description: string
  image?: string
  url: string
  lat?: number
  lng?: number
}

const parseDetailPage = async (url: string): Promise<Kurumatabi | undefined> => {
  const browser = await playwright['chromium'].launch();

  try {
    const list: Array<Kurumatabi> = []
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url)
    
    const name = await page.locator('//*[@class="facilityDetail"]/*[@class="commonIcoTitle"]/*[not(@class)]').textContent()
    const price = await page.locator('//dt[text()="利用料金"]/following-sibling::dd[1]').textContent()
    const address = (await page.locator('//dt[text()="所在地"]/following-sibling::dd[1]').textContent())?.replace(/〒[\d\-]/, '')
    const googlemap = await page.locator('//p[@class="access"]/a').getAttribute('href')
    const matched = googlemap?.match(/q=([0-9\.]+),([0-9\.]+)/)
    const lat = parseFloat(matched?.[1] || '0')
    const lng = parseFloat(matched?.[2] || '0')

    return
  } finally {
    await browser.close()
  }
}

const getRVPark = async (): Promise<Array<Kurumatabi>> => {
  let ret: Array<Kurumatabi> = [];
  const browser = await playwright['chromium'].launch();
  const BASE_URL = `https://www.kurumatabi.com/rvpark/list.html`

  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(BASE_URL)
    const urls = await Promise.all((await page.locator('//a[*[contains(text(), "施設詳細")]]').all()).map(async a => new URL(await a.getAttribute('href') as string, BASE_URL).toString()))
    for (let i = 0; i < urls.length; i++) {
      const kurumatabi = await parseDetailPage(urls[i])
      if (kurumatabi) {
        ret.push(kurumatabi)
      }
    }
  } finally {
    await browser.close()
  }

  return ret
}

(async () => {

  try {
    const insertObjects: Array<Poi> = []
    const updateObjects: Array<Poi> = []
    const oldPhotos: Array<string> = []

    let list = await getRVPark()

    // URLの中で既に登録済みのPOIは除外する
    // TODO: 途中で休業・廃止に変わったPOIはどうするか…
    const { poi: existObjects } = await client.request<PoiQuery, PoiQueryVariables>(
      PoiDocument.toString(), {
        where: {category: {_eq: 'platpark'}, url: {_is_null: false}}
      }
    )

    list = list.filter(platpark => !existObjects.find(o => o.name === platpark.name))

    // 各URLのページを取得して中身を取得
    for (let i = 0; i < list.length; i++) {
      const platpark = list[i]

      const newPoi: Poi = {
        category: 'platpark',
        name: platpark.name,
        url: platpark.url,
        lat: platpark.lat!,
        lng: platpark.lng!,
        photos: platpark.image ? [{image: platpark.image, order_no: 1}] : [],
        created_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
        created_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
        modified_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
        modified_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
      }

      // Hasuraから現在のぷらっとパークを位置情報から取得
      const res = await client.request<SearchNeighborsQuery, SearchNeighborsQueryVariables>(
        SearchNeighborsDocument.toString(), {
          distance: 1000,
          lat: platpark.lat,
          lng: platpark.lng,
          category: 'platpark',
        }
      )

      console.log('newPoi', newPoi)

      const neighbor = res.search_neighbors.find(n => {
        const pName = newPoi.name.replace(/[ 　・]/g, '')
        const nName = n.name.replace(/[ 　・]/g, '')
        return pName.includes(nName) || nName.includes(pName)
      })

      logger.debug(`[${('0000' + i).slice(-4)}] ${platpark.name} ==> ${res.search_neighbors.length == 0 || !neighbor ? '** NEW **' : res.search_neighbors.map(n => n.id == neighbor.id ? `[◯] ${n.name}` : `[x] ${n.name}`).join(', ')}`)

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

    const nolatlng = [...insertObjects, ...updateObjects].filter(o => !(o.lat && o.lng))
    for (let i = 0; i < nolatlng.length; i++) {
      // SA/PAに合わせて名前を調整
      let zenkaku = nolatlng[i].name.replace(/[!-~]/g, (s) => String.fromCharCode(s.charCodeAt(0) + 65248))
      zenkaku = zenkaku.replace(/[（-）]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248))
      zenkaku = zenkaku.replace(/([上下])り/, '$1')
      const { poi } = await client.request<PoiQuery, PoiQueryVariables>(
        PoiDocument.toString(), {
          where: {category: {_eq: 'sapa'}, name: {_eq: zenkaku}}
        }
      )

      if (poi) {
        nolatlng[i].lat = poi.at(0)?.lat!
        nolatlng[i].lng = poi.at(0)?.lng!
      }
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
        category: 'platpark',
        createdAt: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
      }
    )

    slackLogger.info('ぷらっとパークのクローリングが正常終了しました。')
    if (ret.newPoi.length > 0) {
      const addPois = ret.newPoi.map(p => `[${p.id}] ${p.name} <${p.address}> (写真 ${p.photos.length} 枚)`).join('\n')
      slackLogger.info(`${ret.newPoi.length}件の新規登録を行いました。\n----------\n${addPois}`)
    }

    if (ret.discontinuePoi.length > 0) {
      const disconPois = ret.discontinuePoi.map(p => `[${p.id}] ${p.name} <${p.address}> (写真 ${p.photos.length} 枚)`).join('\n')
      slackLogger.info(`以下のデータはぷらっとパークから登録抹消されている可能性があります。\n----------\n${disconPois}`)
    }
  } catch (err) {
    logger.error(err)
    slackLogger.error(err)
  }
})();
