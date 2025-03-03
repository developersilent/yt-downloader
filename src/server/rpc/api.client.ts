import type { AppRouter } from "@/server/rpc/root"
import { createClient } from "jstack"

/**
 * Your type-safe API client
 * @see https://jstack.app/docs/backend/api-client
 */
export const client = createClient<AppRouter>({
  baseUrl: "https://yt-downloader-lovat-five.vercel.app/api",
})
