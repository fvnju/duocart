import { Hono } from "hono";
import { cors } from "hono/cors";
import type { ApiResponse } from "shared/dist";
import { createAuth } from "./lib/auth";
import { env } from "hono/adapter";
import type { D1Database } from "@cloudflare/workers-types";

export const app = new Hono()

  .use(cors())

  .get("/", (c) => {
    return c.text("Hello Hono!");
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
    const { DB } = env<{ DB: D1Database }>(c, "workerd");
    return createAuth(DB).handler(c.req.raw);
  });

export default app;