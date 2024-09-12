import { S3Client } from "@aws-sdk/client-s3";

export const S3 = new S3Client({
  region: "auto",
  endpoint: `https://7c923b0c397ad252fa7be8539b0f7d88.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: '4a647c399a30351d30dbd6387b875c5b',
    secretAccessKey: '8596bba373bf5e53780678658ed0b0bbba6882bf87db33efaf6bce94f7f5628d',
  },
});
