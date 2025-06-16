import { hcWithType } from "server/dist/src/client";

export const SERVER_URL =
  import.meta.env.BETTER_AUTH_URL || "http://localhost:8787";

export type ResponseType = Awaited<ReturnType<typeof client.hello.$get>>;

export const client = hcWithType(SERVER_URL);
