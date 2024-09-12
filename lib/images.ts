import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { S3 } from "./s3-client.js";
import crypto from "crypto";

export const imageUpload = async (urls: Array<string>): Promise<Array<string>> => {

  let imageIds = []
  for (let i = 0; i < urls.length; i++) {
    // photoURLがある場合はファイルをダウンロードしてCloudflare Imagesへアップロードする
    let response = await fetch(urls[i]);
    const contentType = response.headers.get("Content-Type");
    const ab = await response.arrayBuffer();

    const imageId = crypto.randomUUID()
    await S3.send(
      new PutObjectCommand({
        Body: Buffer.from(ab),
        Bucket: 'vantrip',
        Key: `images/${imageId}`,
        ContentType: contentType!
      })
    )

    imageIds.push(imageId)
  }

  return imageIds
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
