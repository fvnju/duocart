import type { Config } from "drizzle-kit";

export default {
  schema: "./auth-schema.ts",
  out: "./drizzle",
  driver: "d1-http",
  dialect: "sqlite",
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID || "",
    databaseId: process.env.DATABASE_ID || "",
    token: process.env.CLOUDFLARE_API_TOKEN || "",
  },
} satisfies Config;
