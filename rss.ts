import { imageDelete, imageUpload } from './lib/images.js';
import { CategoryPoiDocument, CategoryPoiQuery, CategoryPoiQueryVariables, CreatedPoiDocument, CreatedPoiQuery, CreatedPoiQueryVariables, InsertAndUpdatePoiDocument, InsertAndUpdatePoiMutation, InsertAndUpdatePoiMutationVariables, SearchNeighborsDocument, SearchNeighborsQuery, SearchNeighborsQueryVariables } from './__generated/graphql.js';
import { client } from './lib/graphql-client.js';
import playwright, { Browser } from 'playwright';
import log4js from 'log4js';
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc.js";
import * as dotenv from 'dotenv'
import { Poi } from './type/poi.js';
import { createObjectCsvWriter } from 'csv-writer';
dotenv.config()
dayjs.extend(utc)

const NOW = dayjs(new Date())
const BASE_URL = 'https://www.michi-no-eki.jp';
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
  path: `./logs/rss_poi_photo_${NOW.format('YYYYMMDDHHmmss')}.csv`,
  header: [
    { id: 'id', title: 'Image ID' },
    { id: 'size', title: 'Size' },
    { id: 'url', title: 'URL' },
  ],
})

const getPageUrls = async (browser: Browser): Promise<Array<string>> => {
  const urls: Array<string> = [];

  const context = await browser.newContext();
  const page = await context.newPage();
  
  let i = 0;
  while (true) {
    const url = `${BASE_URL}/stations/search/all/all/all?page=${i}`
    await page.goto(url);
    const locators = await page.locator('.searchList a').all();

    if (locators.length == 0) {
      break;
    }

    const hrefs = await Promise.all(locators.map(async loc => `${BASE_URL}${await loc.getAttribute('href')}`));
    urls.push(...hrefs);

    logger.debug(url, urls.length)
    i++;
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
    const now = dayjs(new Date())

    let pageUrls = await getPageUrls(browser)

    // URLの中で既に登録済みのPOIは除外する
    // TODO: 途中で休業・廃止に変わったPOIはどうするか…
    const { poi: existObjects } = await client.request<CategoryPoiQuery, CategoryPoiQueryVariables>(
      CategoryPoiDocument.toString(), {
        category: 'rss',
      }
    )
    pageUrls = pageUrls.filter(url => !existObjects.find(o => o.url === url))

    for (let i = 0; i < pageUrls.length; i++) {
      const url = pageUrls[i]

      await page.goto(url)
      const name = await page.locator('//div[@class="info"]//dt[.="道の駅名"]/following-sibling::dd[1]').textContent()
      let address = await page.locator('//div[@class="info"]//dt[.="所在地"]/following-sibling::dd[1]').textContent()
      const addressMatched = address?.match(/^[0-9\- ]+(.+)/)
      address = addressMatched?.[1] ?? null
      const tel = await page.locator('//div[@class="info"]//dt[.="TEL"]/following-sibling::dd[1]').textContent()
      const description = await page.locator('//div[@class="info"]//dt[.="駐車場"]/following-sibling::dd[1]').textContent()
      const open_time = await page.locator('//div[@class="info"]//dt[.="営業時間"]/following-sibling::dd[1]').textContent()

      // GoogleMap
      const mapSrc = await page.locator('//div[@class="viewMap"]/iframe').getAttribute('src')
      const matched = mapSrc?.match(/q=([0-9\.]+),([0-9\.]+)/)
      let lat = parseFloat(matched?.[1] || '0')
      let lng = parseFloat(matched?.[2] || '0')

      if (name == '東松島') {
        // ここはページが変で緯度経度がおかしいので個別対応
        const mapcode = await page.locator('//div[@class="info"]//dt[.="マップコード"]/following-sibling::dd[1]').textContent()
        lng = lat
        lat = parseFloat(mapcode || '0')
      }

      // バリデーション
      if (!(name && lat && lng)) {
        logger.error(`${url} 名前、所在地、緯度経度のいずれかに不備があるためスキップします。`)
        continue
      }

      // 写真
      let photos = []
      let images = await Promise.all((await page.locator('//div[@class="viewGallery"]/div[1]//img').all()).map(async i => await i.getAttribute('src'))) as Array<string>
      // null除外
      images = images.filter(v => v)

      const newPoi: Poi = {
        category: 'rss',
        name: name!,
        address,
        tel,
        description,
        open_time,
        url,
        lat,
        lng,
        photos: images.map((url, idx) => ({image: url, order_no: idx + 1})),
        created_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
        created_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
        modified_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
        modified_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
      }

      // Hasuraから現在の道の駅を位置情報から取得
      const res = await client.request<SearchNeighborsQuery, SearchNeighborsQueryVariables>(
        SearchNeighborsDocument.toString(), {
          distance: 500,
          lat,
          lng,
        }
      )

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
        category: 'rss',
        createdAt: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
      }
    )

    slackLogger.info('道の駅のクローリングが正常終了しました。')
    if (ret.newPoi.length > 0) {
      const addPois = ret.newPoi.map(p => `[${p.id}] ${p.name} <${p.address}> (写真 ${p.photos.length} 枚)`).join('\n')
      slackLogger.info(`${ret.newPoi.length}件の新規登録を行いました。\n----------\n${addPois}`)
    }

    if (ret.discontinuePoi.length > 0) {
      const disconPois = ret.discontinuePoi.map(p => `[${p.id}] ${p.name} <${p.address}> (写真 ${p.photos.length} 枚)`).join('\n')
      slackLogger.info(`以下のデータは道の駅から登録抹消されている可能性があります。\n----------\n${disconPois}`)
    }
  } catch (err) {
    logger.error(err)
    slackLogger.error(err)
  } finally {
    await browser.close()
  }
})();
