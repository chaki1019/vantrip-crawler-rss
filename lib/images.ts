import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { S3 } from "./s3-client.js";
import crypto from "crypto";
import log4js from 'log4js';
import { setTimeout } from "timers/promises";

const logger = log4js.getLogger();
logger.level = 'all'

export const imageUpload = async (urls: Array<string>): Promise<Array<{id: string, size: number, url: string}>> => {

  const images: Array<{
    id: string
    size: number
    url: string
  }> = []
  for (let i = 0; i < urls.length; i++) {
    // photoURLがある場合はファイルをダウンロードしてCloudflare Imagesへアップロードする
    logger.debug(`Image fetch url: ${urls[i]}`)
    let response = await fetch(urls[i]);
    const contentType = response.headers.get("Content-Type");
    const ab = await response.arrayBuffer();
    // logger.debug(`Image fetched size: ${ab.byteLength / 1024}`)

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

    images.push({id: imageId as string, size: ab.byteLength, url: urls[i]})

    await setTimeout(500)
  }

  return images
}

export const imageDelete = async (ids: Array<string>): Promise<void> => {

  for (let i = 0; i < ids.length; i++) {
    await S3.send(
      new DeleteObjectCommand({
        Bucket: 'vantrip',
        Key: `images/${ids[i]}`,
      })
    )
  }
}
