import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { S3 } from "./s3-client.js";
import crypto from "crypto";
import log4js from 'log4js';
import { setTimeout } from "timers/promises";

const logger = log4js.getLogger();
logger.level = 'all'

export const imageUpload = async (urls: Array<string>): Promise<Array<{id: string, size: number, url: string}>> => {

  const images = []
  for (let i = 0; i < urls.length; i++) {
    // photoURLがある場合はファイルをダウンロードしてCloudflare Imagesへアップロードする
    logger.debug(`Image fetch url: ${urls[i]}`)
    let response = await fetch(urls[i]);
    const contentType = response.headers.get("Content-Type");
    const ab = await response.arrayBuffer();
    // logger.debug(`Image fetched size: ${ab.byteLength / 1024}`)

    const imageId = crypto.randomUUID()
    await S3.send(
      new PutObjectCommand({
        Body: Buffer.from(ab),
        Bucket: 'vantrip',
        Key: `images/${imageId}`,
        ContentType: contentType!
      })
    )

    images.push({id: imageId, size: ab.byteLength, url: urls[i]})

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
