import { sha1 } from "./sha1";

export type cloudinaryENV = {
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
};

export const getUploadSignature = async (env: {
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
}) => {
  const timestamp = Math.round(new Date().getTime() / 1000);

  // Create the string to sign
  const stringToSign = `timestamp=${timestamp}${env.CLOUDINARY_API_SECRET}`;

  // Generate signature using Web Crypto API
  const signature = await sha1(stringToSign);

  return {
    signature,
    timestamp,
    cloudName: env.CLOUDINARY_CLOUD_NAME,
    apiKey: env.CLOUDINARY_API_KEY,
  };
};
