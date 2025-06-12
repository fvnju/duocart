import { SERVER_URL } from "@/constants";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: SERVER_URL,
});
// Read https://www.better-auth.com/docs/basic-usage

export type SignUpDetails = {
  email: `${string}@${string}.${string}`;
  password: string;
  name: string;
  image?: string; // meant to be a url but i've not added cloud storage
  username?: string;
};
