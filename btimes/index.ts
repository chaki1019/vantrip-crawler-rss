import fs from 'fs';
import { parse, stringify, } from 'csv';
import mesh1 from '../lib/mesh1'
import mesh2 from '../lib/mesh2'
import { BTimesMapPark, Mesh, ParkingResponse, Poi } from '../type/index.js';
import { mesh2ToMesh3, progress } from '../lib/util.js';
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from 'node:fs/promises';
import { client } from '../lib/graphql-client';
import { CategoryPoiDocument, CategoryPoiQuery, CategoryPoiQueryVariables, InsertSinglePoiDocument, InsertSinglePoiMutation, InsertSinglePoiMutationVariables, Poi_Insert_Input, UpdateSinglePoiLatLngDocument, UpdateSinglePoiLatLngMutation, UpdateSinglePoiLatLngMutationVariables } from '../__generated/graphql';
import playwright, { Browser, Page } from 'playwright';
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc.js";
import { imageUpload } from '../lib/images';
import log4js from 'log4js';

dayjs.extend(utc)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputCsvFile = path.join(__dirname, "output.csv");

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const waitTime = 500;
let reqCount = 0;
const NOW = dayjs(new Date())

log4js.configure({
  appenders: {
    file: {
      type: "dateFile",
      filename: path.join(__dirname, `./logs/btimes_${NOW.format('YYYYMMDDHHmmss')}.log`),
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
  },
  categories: {
    default: { appenders: [ 'file' ], level: 'all' },
    file: { appenders: [ 'console', 'file' ], level: 'all' },
  }
});

const logger = log4js.getLogger();

const fetchByMesh = async (mesh: Mesh) => {
  const {code, bbox} = mesh;

  const centerLon = (bbox[0] + bbox[1]) / 2
  const centerLat = (bbox[2] + bbox[3]) / 2

  const url = new URL('https://btimes.jp/view/teeda.ajax');
  url.searchParams.set('component', 'service_mapService');
  url.searchParams.set('action', 'ajaxMapParkings');
  url.searchParams.set('checked', 'true');
  url.searchParams.set('centerLat', `${centerLat}`);
  url.searchParams.set('centerLon', `${centerLon}`);
  url.searchParams.set('centerLatW', `${centerLat}`);
  url.searchParams.set('centerLonW', `${centerLon}`);
  url.searchParams.set('minLon', `${bbox[0]}`);
  url.searchParams.set('maxLon', `${bbox[1]}`);
  url.searchParams.set('minLat', `${bbox[2]}`);
  url.searchParams.set('maxLat', `${bbox[3]}`);

  try {
    const res = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'accept-language': 'ja',
        'Referer': `https://btimes.jp/view/park/map.jsp?location=true`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
    })
    reqCount++;
    logger.log(`[${reqCount}]: メッシュコード ${code}`);

    if (!res.ok) {
      throw res.status;
    }
    const response = await res.json() as ParkingResponse;
    if (response.status !== 'OK') {
      throw Error(`フェッチエラー: ${res}`)
    }

    if (response.value.length === 0) {
      const msg = `メッシュコード ${code} のデータ件数0.`;
      logger.info(msg);
      return;
    } else if (response.value.length === 100) {
      if (code.length === 4) {
        const msg = `1次メッシュコード:${code} にて取得件数不足!!!`;
        logger.info(msg);

        // 1次メッシュの場合は2次メッシュでトライする
        for (const _mesh of mesh2) {
          if (_mesh.code.startsWith(code)) {
            await sleep(waitTime);
            await fetchByMesh(_mesh);
          }
        }

        return;
      } else if (code.length === 6) {
        const msg = `2次メッシュコード:${code} にて取得件数不足!!!`;
        logger.info(msg);

        // 2次メッシュに含まれる3次メッシュを計算
        const mesh3s = mesh2ToMesh3(mesh)
        for (const mesh3 of mesh3s) {
          await sleep(waitTime);
          await fetchByMesh(mesh3);
        }

        return;
      } else {
        const msg = `3次メッシュコード:${code} にて取得件数不足!!!`;
        logger.info(msg);

        // 3次メッシュで取り切れないなら4次？？？
      }
    }

    //write
    const msg = `メッシュコード ${code}のデータ件数: ${response.value.length}件`;
    logger.info(msg);

    const exists = fs.existsSync(outputCsvFile);

    const records = response.value.map(v => {
      return {
        id: v.matBukId,
        name: v.parkName,
        lat: v.cntLatTd,
        lng: v.cntLngTd,
        url: (new URL(v.detailUrl, 'https://btimes.jp')).toString()
      }
    })
    stringify(records, {
      quoted: true,
      header: !exists,
    }, (error, output) => {
      fs.appendFileSync(outputCsvFile, output);
    });
  } catch (e) {
    logger.error(e);
    throw e;
  }
}

const readCsv = async (): Promise<BTimesMapPark[]> => {
  const file = await readFile(outputCsvFile, "utf-8");

  return new Promise<any[]>((resolve, reject) => {
    parse(file, { columns: true,  cast: true }, (err, records) => {
      if (err) reject(err);
      else resolve(records);
    });
  });
}

const gotoWithRetry = async (
  browser: Browser,
  url: string,
  retries = 3
) => {
  let lastError: any;

  for (let i = 0; i < retries; i++) {
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      const response = await page.goto(url, {
        timeout: 300000,
        waitUntil: 'domcontentloaded',
      });

      // if (!response || response.status() >= 400) {
      //   throw new Error(`Bad response: ${response?.status()}`);
      // }

      return { page, context, response };
    } catch (e: any) {
      lastError = e;
      const msg = e?.message || '';

      logger.error(`goto失敗 (${i + 1}/${retries}): ${msg}`);

      await page.close().catch(() => {});
      await context.close().catch(() => {});

      // リトライ対象か判定
      const retryable =
        msg.includes('ERR_NETWORK_CHANGED') ||
        msg.includes('Timeout') ||
        msg.includes('net::ERR_');

      if (!retryable || i === retries - 1) {
        throw e;
      }

      // バックオフ
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }

  throw lastError;
}

const fetchDetailPages = async () => {
  const browser = await playwright['chromium'].launch();

  try {
    const { poi: existObjects } = await client.request<CategoryPoiQuery, CategoryPoiQueryVariables>(
      CategoryPoiDocument.toString(), {
        category: 'btimes',
      }
    )

    let records = await readCsv()
    records = records.filter(r => !existObjects.find(o => o.url === r.url))

    for (let i = 0; i < records.length; i++) {
      const record = records[i]
      // const exist = existObjects.find(o => o.url === record.url)
      // if (exist && dayjs(exist.modified_at).isAfter(dayjs(exist.created_at))) {
      //   logger.log(`[スキップ] ${exist.name}(${exist.id})`)
      //   continue
      // }

      // await sleep(waitTime);
      logger.log(`${progress(i + 1, records.length)} URL: ${record.url}`)

      // const context = await browser.newContext();
      // const page = await context.newPage();
      // const response = await page.goto(record.url, {
      //   timeout: 300000,
      //   waitUntil: 'domcontentloaded',
      // })

      const { page, context, response } = await gotoWithRetry(
        browser,
        record.url,
        3,
      )

      try {
        if (!response || response.status() >= 400) {
          logger.error(`異常レスポンス: ステータスコード: ${response!.status()}`)
          continue
        }

        let object: Poi_Insert_Input | undefined
        let images: string[] | undefined
        if (response && response.url() !== record.url) {
          logger.log('リダイレクト!!!', response.url())
          if (response.url().startsWith('https://times-info.net/')) {
            ({object, images} = await parseTimesInfoPage(record, page))
          } else {
            throw Error('Not implemented!!!')
          }
        } else {
          ({object, images} = await parseBTimesPage(record, page))
        }

        if (!(object && images)) {
          logger.log('>>> 解析オブジェクトまたはイメージなし')
          continue
        }

        // if (exist) {
        //   /* 更新 */
        //   await client.request<UpdateSinglePoiLatLngMutation, UpdateSinglePoiLatLngMutationVariables>(
        //     UpdateSinglePoiLatLngDocument.toString(), {
        //       id: exist.id,
        //       lat: object.lat!,
        //       lng: object.lng!,
        //       modified_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
        //     }
        //   )
        //   logger.log(`[更新] ${exist.name}(${exist.id}) > lat: ${exist.lat} -> ${object.lat}, lng: ${exist.lng} -> ${object.lng}`)
        // } else {
          /* 新規 */
          // アップロード
          const uploads = await imageUpload(images)
          const photos = uploads.map((u, idx) => ({
            image: u.id,
            order_no: idx + 1,
            blurhash: u.blurhash,
          }))

          object.photos = {
            data: photos
          }

          // 登録
          await client.request<InsertSinglePoiMutation, InsertSinglePoiMutationVariables>(
            InsertSinglePoiDocument.toString(), {
              object,
            }
          )

          logger.log('[新規]', JSON.stringify({
            object, images
          }, null, 2))
        // }
      } finally {
        await page.close();
        await context.close();
      }
    }
  } finally {
    browser.close()
  }
}

const parseTimesInfoPage = async (record: BTimesMapPark, page: Page): Promise<{
  object: Poi_Insert_Input,
  images: string[],
}> => {
  // await page.screenshot({path: 'test.png', fullPage: true})
  const name = (await page.locator('h2.p-reserveParkingDetail_placeName_text').textContent())?.trim()
  const address = (await page.locator('span.p-basicInfo_table_td_address_txt').textContent())?.trim()
  const googlemap = await page.locator('iframe[alt=GoogleMap]').getAttribute('src')
  const googlemapURL = new URL(googlemap!)
  const q = googlemapURL.searchParams.get('q')
  const latlng = q?.split(',')
  if (!latlng || latlng.length != 2) {
    throw Error('緯度経度取得エラー')
  }
  const lat = parseFloat(latlng[0])
  const lng = parseFloat(latlng[1])

  // 予約料金
  const priceTd = page.locator('tr.p-basicInfo_table_tr', {
    has: page.locator('th', { hasText: /^\s*予約料金/,  })
  }).locator('td');
  const price = (await priceTd.allTextContents()).map(t => t.replace(/\s+/g, ' ').trim()).join(' ')

  // 予約受付期間
  const uketsukeTd = page.locator('tr.p-basicInfo_table_tr', {
    has: page.locator('th', { hasText: /^\s*予約受付期間/,  })
  }).locator('td');
  const uketsuke = (await uketsukeTd.allTextContents()).map(t => t.replace(/\s+/g, ' ').trim()).join(' ')

  // 最大利用時間
  const saidaiTd = page.locator('tr.p-basicInfo_table_tr', {
    has: page.locator('th', { hasText: /^\s*最大利用時間/,  })
  }).locator('td');
  const saidai = (await saidaiTd.allTextContents()).map(t => t.replace(/\s+/g, ' ').trim()).join(' ')

  // 予約可能時間
  const kanouTd = page.locator('tr.p-basicInfo_table_tr', {
    has: page.locator('th', { hasText: /^\s*最大利用時間/,  })
  }).locator('td');
  const kanou = (await kanouTd.allTextContents()).map(t => t.replace(/\s+/g, ' ').trim()).join(' ')

  // 予約単位
  const taniTd = page.locator('tr.p-basicInfo_table_tr', {
    has: page.locator('th', { hasText: /^\s*最大利用時間/,  })
  }).locator('td');
  const tani = (await taniTd.allTextContents()).map(t => t.replace(/\s+/g, ' ').trim()).join(' ')

  const description = [
    '[予約受付期間]',
    uketsuke,
    '',
    '[最大利用時間]',
    saidai,
    '',
    '[予約可能時間]',
    kanou,
    '',
    '[予約単位]',
    tani,
  ].join('\n')

  // 画像
  const images = await page.locator('tr.p-basicInfo_table_tr', {
    has: page.locator('th', { hasText: /^\s*駐車場写真/,  })
  })
  .locator('img')
  .evaluateAll((imgs) => {
    return [...new Set(
      imgs.map(img => (img as HTMLImageElement).src)
    )];
  });

  const object: Poi_Insert_Input = {
    category: 'btimes',
    name: name!,
    address,
    description,
    price,
    url: record.url,
    lat,
    lng,
    // photos: {
    //   data: photos,
    // },
    // created_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
    // created_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
    // modified_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
    // modified_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
  }

  return {
    object, images
  }
}

const parseBTimesPage = async (record: BTimesMapPark, page: Page): Promise<{
  object: Poi_Insert_Input,
  images: string[],
}> => {
  // await page.screenshot({path: 'test.png', fullPage: true})
  const name = (await page.locator('#parkName-title').textContent())?.trim()
  const address = (await page.locator('#address').textContent())?.trim()
  const price = (await page.locator('[class=park-detail-ribbon__item--price]').textContent())?.trim()
  const googlemap = await page.locator('a#goGoogleMap').getAttribute('href')
  const googlemapURL = new URL(googlemap!)
  const q = googlemapURL.searchParams.get('q')
  const latlng = q?.split(',')
  if (!latlng || latlng.length != 2) {
    throw Error('緯度経度取得エラー')
  }
  const lat = parseFloat(latlng[0])
  const lng = parseFloat(latlng[1])

  // タイプ`
  const bukType = await page.locator('#bukType').textContent()

  // 対応車種
  const syasyuTd = page.locator('tr', {
    has: page.locator('th', { hasText: '対応車種' })
  }).locator('td');

  // pタグだけ取得（リンクは除外される）
  const syasyuText = await syasyuTd.locator('p:not(.link-news-sub)').allTextContents();
  const syasyu = syasyuText.join('\n');

  // 車室サイズ
  const syashitsuTd = page.locator('tr', {
    has: page.locator('th', { hasText: '車室サイズ' })
  }).locator('td');

  const syashitsuText = await syashitsuTd.locator('ul[class=park-detail-size__list] > li').allTextContents();
  const syashitsu = syashitsuText.map(t => t.replace(/\s+/g, ' ').trim()).join('、');

  // サービス
  const services = await page
    .locator('.park-detail-service--list li')
    .evaluateAll((items) =>
      items.map((item) => {
        const name = item.querySelector('span')?.textContent?.trim() ?? '';
        const ok = item.classList.contains('park-detail-service--item__ok');

        return `${name}: ${ok ? '◯' : 'ー'}`;
      })
    );

  const description = [
    '[タイプ]',
    bukType,
    '',
    '[対応車種]',
    syasyu,
    '',
    '[車室サイズ]',
    syashitsu,
    '',
    '[サービス]',
    services.join('、'),
  ].join('\n')

  // 画像
  const images = await page
    .locator('#d_slickSlider img')
    .evaluateAll((imgs) => {
      return [...new Set(
        imgs.map(img => (img as HTMLImageElement).src)
      )];
    });
  
  const object: Poi_Insert_Input = {
    category: 'btimes',
    name: name!,
    address,
    description,
    price,
    url: record.url,
    lat,
    lng,
    // photos: {
    //   data: photos,
    // },
    // created_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
    // created_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
    // modified_by: '18ee6ccf-7e5f-4390-88a9-13bb2093917b', // VANTRIP
    // modified_at: NOW.utc().format('YYYY-MM-DD HH:mm:ss'),
  }

  return {
    object, images
  }
}

(async () => {

  // STEP1: マップからメッシュで全国のパーキング情報を抽出する
  // logger.log('*** [STEP 1] START')
  // for (let i = 0; i < mesh1.length; i++) {
  //   await sleep(waitTime);
  //   await fetchByMesh(mesh1[i]);
  // }
  // logger.log('*** [STEP 1] FINISH')

  // STEP2: 1つ1つのパーキング情報からURLを読み取り詳細情報を抽出
  logger.log('*** [STEP 2] START')
  await fetchDetailPages();
  logger.log('*** [STEP 2] FINISH')
})();
