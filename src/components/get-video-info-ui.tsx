"use client"
import { Loader, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { client } from "@/server/rpc/api.client"
import { YoutubeDownloaderList } from "@/components/download-info-ui"

export function URLInputComponent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [inputUrl, setInputUrl] = useState("")
  const { isPending, data: Info, mutate } = useMutation({
    mutationKey: ["yt-info"],
    mutationFn: async () => {
      const res = await client.test.hello.$post({ yot: inputUrl });
      return await res.json();
    }
  })
  const GetInfo = () => {
    mutate()
  }
  return (
    <div
      className={cn("flex min-h-svh flex-col items-center justify-center transition-all duration-300", className, `${Info ? "pt-7" : null}`)} {...props}
    >
      <div className="w-full max-w-2xl">
        <div className="flex flex-col gap-1">
          <form onSubmit={(e) => {
            e.preventDefault();
            GetInfo();
          }}>
            <div className="grid gap-6 px-4">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-xl font-bold">ｉｇｒｉｓ</h1>
              </div>
              <div className="flex gap-3">
                <div className="grid w-full relative">
                  <Input
                    disabled={isPending}
                    className="pl-5 h-10 rounded-xl placeholder:text-xs text-xs border-none not-focus-visible:ring-1 not-focus-visible:ring-purple-300 focus-visible:ring-[1.5px] focus-visible:ring-purple-400 focus-visible:border-none transition-all duration-200 text-zinc-800 pr-10"
                    id="url"
                    type="url"
                    onChange={(e) => setInputUrl(e.currentTarget.value)}
                    autoComplete="off"
                    placeholder="Paste the video URL"
                  />
                  <Button type="submit" variant={"search"} className={`${inputUrl ? "scale-100" : "scale-0"} absolute right-0 h-full rounded-r-xl`}>
                    {isPending ? (
                      <Loader className="size-4 animate-spin" />
                    ) :
                      <Search className="size-4 text-zinc-700" strokeWidth={3} />
                    }
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={`${Info ? "opacity-100" : "opacity-0"} mt-5 transition-opacity duration-300`}>
        {Info && <YoutubeDownloaderList videoInfo={{ ...Info.VideoInfo }} formats={{ Media: Info?.Formats?.Media }} />}
      </div>
    </div>
  )
}
