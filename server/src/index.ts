import { Hono } from "hono";
import { cors } from "hono/cors";
import type { ApiResponse } from "shared/dist";
import { createAuth } from "./lib/auth";
import { env } from "hono/adapter";
import type { D1Database } from "@cloudflare/workers-types";
import { type cloudinaryENV, getUploadSignature } from "./lib/cloudinary";
import { sha1 } from "./lib/sha1";
import { createDb } from "./lib/db";
import * as schema from "./lib/schema";

export const app = new Hono()

  .use(cors())

  .get("/", (c) => {
    return c.text("Hello, my jolly good fellow!");
  })

  .get("/hello", async (c) => {
    const data: ApiResponse = {
      message: "It's DuoCart!",
      success: true,
    };

    return c.json(data, { status: 200 });
  })

  .post("/hello", async (c) => {
    const data: ApiResponse = {
      message: `Hiiii ${(await c.req.json()).name}`,
      success: true,
    };

    return c.json(data, { status: 200 });
  })

  .on(["POST", "GET"], "/api/auth/**", (c) => {
    const { DB } = env<{ DB: D1Database }>(c);
    return createAuth(DB).handler(c.req.raw);
  })

  .get("/api/upload/signature", async (c) => {
    const signature = await getUploadSignature({
      ...env<cloudinaryENV>(c),
    });

    return c.json(signature);
  })

  .post("/api/upload/image", async (c) => {
    const { DB } = env<{ DB: D1Database }>(c);
    const db = createDb(DB);

    try {
      const formData = await c.req.formData();
      const file = formData.get("file") as File;

      if (!file) {
        return c.json({ error: "No file provided" }, 400);
      }
      const { DB } = env<{ DB: D1Database }>(c);
      const auth = createAuth(DB);
      const session = await auth.api.getSession({ headers: c.req.raw.headers });
      if (
        !session ||
        session.session.expiresAt.getTime() < new Date().getTime()
      ) {
        return c.json(
          { message: "No valid user session", success: false } as ApiResponse,
          { status: 400 }
        );
      }

      const timestamp = Math.round(new Date().getTime() / 1000);
      const envVars = env<cloudinaryENV>(c);
      const stringToSign = `timestamp=${timestamp}${envVars.CLOUDINARY_API_SECRET}`;
      const signature = await sha1(stringToSign);

      // Create form data for Cloudinary upload
      const cloudinaryFormData = new FormData();
      cloudinaryFormData.append("file", file);
      cloudinaryFormData.append("api_key", envVars.CLOUDINARY_API_KEY);
      cloudinaryFormData.append("timestamp", timestamp.toString());
      cloudinaryFormData.append("signature", signature);

      // Upload to Cloudinary
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${envVars.CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: cloudinaryFormData,
        }
      );

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = (await response.json()) as { url: string };

      await db.insert(schema.image).values({
        userId: session.user.id,
        url: result.url,
      });

      return c.json(
        {
          data: result,
          success: true,
          message: "Upload was successful",
        } as ApiResponse,
        { status: 200 }
      );
    } catch (error) {
      console.error("Upload error:", error);
      return c.json({ error: "Upload failed" }, 500);
    }
  });

export default app;