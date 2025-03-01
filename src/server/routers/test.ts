import { createNewRoute, publicProcedure } from "@/server/rpc/init";
import { MediaData, VideoInfoType } from "@/types/video.info";
import { z } from "zod"

const media = {
  "video": [
    { id: "mp4-1080p", label: "1080p", size: "24.5 mb" },
    { id: "mp4-720p", label: "720p", size: "18.2 mb" },
    { id: "mp4-480p", label: "480p", size: "12.5 mb" },
    { id: "mp4-360p", label: "360p", size: "8.7 mb" },
    { id: "mp4-240p", label: "240p", size: "5.3 mb" },

  ],
  "audio": [
    { id: "mp3-320", label: "320 kbps", size: "7.2 mb" },
    { id: "mp3-256", label: "256 kbps", size: "5.8 mb" },
    { id: "mp3-192", label: "192 kbps", size: "4.3 mb" },
    { id: "mp3-128", label: "128 kbps", size: "2.9 mb" },
    { id: "mp3-64", label: "64 kbps", size: "1.4 mb" },
  ]
}

const mockVideoInfo = {
  id: "dQw4w9WgXcQ",
  title: "In the end ...",
  thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  channel: "Rick Astley",
  duration: "3:33",
  views: "1.2B views",
  publishedAt: "Oct 25, 2009",
}

const testData = z.object({
  yot: z.string()
})
export const testRoute = createNewRoute({
  hello: publicProcedure.input(testData).mutation(async ({ c, input }) => {
    console.log("Queary Test Data", input)

    const VideoInfo: VideoInfoType = mockVideoInfo
    const Formats: MediaData = {
      Media: media
    }
    return c.superjson({
      Message: "Info found...",
      VideoInfo,
      Formats
    })
  })
})
