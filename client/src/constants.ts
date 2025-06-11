import { hcWithType } from "server/dist/client";

export const SERVER_URL =
  import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

export type ResponseType = Awaited<ReturnType<typeof client.hello.$get>>;

export const client = hcWithType(SERVER_URL);
