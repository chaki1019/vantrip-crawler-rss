import fs from 'fs';
import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { S3 } from "./s3-client.js";
import crypto from "crypto";
import log4js from 'log4js';
import { setTimeout } from "timers/promises";
import { PoiImage } from "../type/index.js";
import sharp from "sharp";
import { encode } from "blurhash";

const logger = log4js.getLogger();
logger.level = 'all'

export const imageUpload = async (urls: Array<string>): Promise<PoiImage[]> => {

  const images: PoiImage[] = []

  try {
    for (let i = 0; i < urls.length; i++) {
      // photoURLがある場合はファイルをダウンロードしてCloudflare Imagesへアップロードする
      logger.debug(`Image fetch url: ${urls[i]}`)
      let response = await fetch(urls[i]);
      const contentType = response.headers.get("Content-Type");
      const ab = await response.arrayBuffer();
      // logger.debug(`Image fetched size: ${ab.byteLength / 1024}`)

      const blurhash = await createBlurHash(Buffer.from(ab))

      // メタデータに画像URL残しておく
      let sourceUrl = urls[i]
      const imageUrl = new URL(urls[i])
      const matched = imageUrl.pathname.match(/\.(jpg|jpeg|gif|png|tiff|bmp|svg|webp)$/i)
      if (matched?.[1]) {
        // Pathname末尾が画像拡張子の場合は何らかのパラメータがついていてもキャッシュ回避の無意味なパラメータとして除外する
        sourceUrl = `${imageUrl.origin}${imageUrl.pathname}`
      }

      const imageId = crypto.randomUUID()
      await S3.send(
        new PutObjectCommand({
          Body: Buffer.from(ab),
          Bucket: 'vantrip',
          Key: `images/${imageId}`,
          ContentType: contentType!,
          Metadata: {
            'source': sourceUrl
          }
        })
      )

      images.push({
        id: imageId as string,
        size: ab.byteLength,
        url: urls[i],
        blurhash,
      })

      // await setTimeout(500)
    }

    return images
  } catch (e) {
    // アップロード済みのファイルを削除する
    await imageDelete(images.map(i => i.id))

    throw e
  }

}

export const imageDelete = async (ids: Array<string>): Promise<void> => {

  for (let i = 0; i < ids.length; i++) {
    await S3.send(
      new DeleteObjectCommand({
        Bucket: 'vantrip',
        Key: `images/${ids[i]}`,
      })
    )

    logger.info(`画像を削除: ${ids[i]}`)
  }
}

export async function createBlurHash(
  imageBuffer: Buffer
): Promise<string> {

  try {
    let buffer = imageBuffer
    const type = detectFormat(buffer)
    if (type === 'bmp') {
      const { rgb, width, height } = bmp24ToRgb(buffer);

      buffer = await sharp(rgb, {
        raw: {
          width,
          height,
          channels: 3,
        },
      })
      .png()
      .toBuffer()
    }

    const { data, info } = await sharp(buffer)
      .resize(64, 64, {
        fit: "inside",
      })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    return encode(
      new Uint8ClampedArray(data),
      info.width,
      info.height,
      5,
      5,
    );
  } catch (e) {
    fs.writeFileSync('debug.bin', new Uint8Array(imageBuffer))
    throw e
  }
}

function detectFormat(buffer: Buffer) {
  if (buffer[0] === 0x42 && buffer[1] === 0x4d) return 'bmp'
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return 'jpeg'
  if (buffer[0] === 0x89 && buffer[1] === 0x50) return 'png'
  return 'unknown'
}

function bmp24ToRgb(buffer: Buffer) {
  const width = buffer.readInt32LE(18);
  const height = buffer.readInt32LE(22);
  const offset = buffer.readUInt32LE(10);

  const rgb = Buffer.alloc(width * height * 3);
  const rowSize = Math.ceil((width * 3) / 4) * 4;

  for (let y = 0; y < height; y++) {
    const srcY = height - 1 - y;

    for (let x = 0; x < width; x++) {
      const src = offset + srcY * rowSize + x * 3;
      const dst = (y * width + x) * 3;

      rgb[dst] = buffer[src + 2];
      rgb[dst + 1] = buffer[src + 1];
      rgb[dst + 2] = buffer[src];
    }
  }

  return { rgb, width, height };
}
