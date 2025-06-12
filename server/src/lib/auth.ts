import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createDb } from "./db";
import type { D1Database } from "@cloudflare/workers-types";

// This is for runtime
export const createAuth = (d1: D1Database) => {
  const db = createDb(d1);
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
    }),
    emailAndPassword: {
      enabled: true,
    },
    plugins: [username()],
  });
};

const db = createDb({} as D1Database);
// This is for the CLI
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [username()],
  // baseURL: process.env.BETTER_AUTH_URL,
  // secret: process.env.BETTER_AUTH_SECRET,
});
