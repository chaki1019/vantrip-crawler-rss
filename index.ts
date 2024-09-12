import { imageDelete, imageUpload } from './lib/images.js';
import { CreatedPoiDocument, CreatedPoiQuery, CreatedPoiQueryVariables, InsertPoiDocument, InsertPoiMutation, InsertPoiMutationVariables, SearchNeighborsDocument, SearchNeighborsQuery, SearchNeighborsQueryVariables, UpdatePoiDocument, UpdatePoiMutation, UpdatePoiMutationVariables } from './__generated/graphql.js';
import { client } from './lib/graphql-client.js';
import playwright, { Browser } from 'playwright';
import log4js from 'log4js';
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc.js";
import path from 'path';

type Poi = {
  id?: string;
  category: string;
  lat: number;
  lng: number;
  name: string;
  description?: string | null;
  tel?: string | null;
  url?: string | null;
  open_time?: string | null;
  holiday?: string | null;
  price?: string | null;
  toilet?: string | null;
  address?: string | null;
  photos: Array<{
    image: string;
    order_no: number;
  }>
}

const BASE_URL = 'https://www.michi-no-eki.jp';
const logger = log4js.getLogger();
logger.level = 'all'
const slackLogger = log4js.getLogger('slack')
slackLogger.level = 'all'

log4js.configure({
  appenders: {
    file: {
      type: "dateFile",
      filename: "./logs/crawler.log",
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
      token: 'xoxb-3225409639990-7720763023124-eZMWobFMlLUvtf4kYEwTWxqI',
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


dayjs.extend(utc)

const getPageUrls = async (browser: Browser): Promise<Array<string>> => {
  let urls = [];

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
    const context = await browser.newContext();
    const page = await context.newPage();

    const now = dayjs(new Date())

    const pageUrls = await getPageUrls(browser)

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
        throw `${name} 名前、所在地、緯度経度のいずれかに不備があります。`
      }

      // 写真
      let photos = []
      const images = await Promise.all((await page.locator('//div[@class="viewGallery"]/div[1]//img').all()).map(async i => await i.getAttribute('src'))) as Array<string>
      if (images.length > 0) {
        const imageIds = await imageUpload(images)
        photos.push(...imageIds.map((image, idx) => ({image, order_no: idx + 1})))
      }

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
        photos,
      }

      // Hasuraから現在の道の駅を位置情報から取得
      const res = await client.request<SearchNeighborsQuery, SearchNeighborsQueryVariables>(
        SearchNeighborsDocument.toString(), {
          distance: 500,
          lat,
          lng,
        }
      )

      // logger.debug(`[${('0000' + i).slice(-4)}] ${name} ==> ${res.search_neighbors.length == 0 ? '** NEW **' : res.search_neighbors.map(n => n.name.replace(/　/g, ' ') == name!.replace(/　/g, ' ') ? '◯' : n.name).join(', ')}`)

      const poi = res.search_neighbors[0] as Poi
      if (poi) {
        if (poi.photos) {
          await imageDelete(poi.photos.map(p => p.image))
        }

        await client.request<UpdatePoiMutation, UpdatePoiMutationVariables>(
          UpdatePoiDocument.toString(), {
            id: poi.id!,
            _set: {
              name: newPoi.name,
              address: newPoi.address ?? poi.address,
              tel: newPoi.tel ?? poi.tel,
              description: newPoi.description ?? poi.description,
              open_time: newPoi.open_time ?? poi.description,
              url: newPoi.url ?? poi.url,
              lat: newPoi.lat,
              lng: newPoi.lng,
              modified_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
              modified_at: now.utc().format('YYYY-MM-DD HH:mm:ss')
            },
            objects: newPoi.photos.map(p => ({
              image: p.image,
              order_no: p.order_no,
              parent_id: poi.id,
            })),
          }
        )

        logger.info(`[更新] ${('0000' + (i + 1)).slice(-4)}: ${newPoi.name}`)
      } else {
        await client.request<InsertPoiMutation, InsertPoiMutationVariables>(
          InsertPoiDocument.toString(), {
            object: {
              category: 'rss',
              name: newPoi.name,
              address: newPoi.address,
              tel: newPoi.tel,
              description: newPoi.description,
              open_time: newPoi.open_time,
              url: newPoi.url,
              lat: newPoi.lat,
              lng: newPoi.lng,
              created_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
              created_at: now.utc().format('YYYY-MM-DD HH:mm:ss'),
              modified_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
              modified_at: now.utc().format('YYYY-MM-DD HH:mm:ss'),
              photos: {
                data: newPoi.photos
              }
            }
          }
        )

        logger.info(`[新規] ${('0000' + (i + 1)).slice(-4)}: ${newPoi.name}`)
      }
    }

    const ret = await client.request<CreatedPoiQuery, CreatedPoiQueryVariables>(
      CreatedPoiDocument.toString(), {
        createdAt: now.utc().format('YYYY-MM-DD HH:mm:ss'),
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
