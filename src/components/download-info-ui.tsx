"use client"

import Image from "next/image"
import { Film, Music, Download } from "lucide-react"
import { cn } from "@/lib/utils"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Png from "@/../test.png";
import { MediaData, VideoInfoType } from "@/types/video.info";

interface CompactVideoInfoProps {
  videoInfo: VideoInfoType
  formats: MediaData;
  className?: string
}

export function YoutubeDownloaderList({
  videoInfo,
  formats,
  className
}: CompactVideoInfoProps) {
  if (!formats && videoInfo) return
  return (
    <Card className={cn("overflow-hidden p-4 m-0 max-w-lg rounded-none bg-transparent max-sm:border border-none shadow-none", className)}>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
          <div className="relative rounded-xl overflow-hidden flex-shrink-0 w-full md:w-[240px] aspect-video border border-purple-400">
            <Image
              src={Png.src}
              alt={videoInfo?.title || "img"}
              fill
              className="object-cover aspect-video"
            />
            <Badge variant={"secondary"} className="absolute ml-auto bottom-2 rounded-xl right-2 text-white text-[10px] font-medium bg-black/80 select-none">
              {videoInfo?.duration}</Badge>
          </div>

          <div className="flex-1 min-w-0 md:self-center">
            <h3 className="font-semibold text-md md:text-lg line-clamp-2 mb-1">{videoInfo?.title}</h3>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">{videoInfo?.channel}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{videoInfo?.views}</span>
                <span className="text-muted-foreground/50">|</span>
                <span>{videoInfo?.publishedAt}</span>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="video" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-2xl">
            <TabsTrigger
              value="video"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-primary-foreground rounded-2xl"
            >
              <Film className="h-4 w-4 mr-2" />
              Video
            </TabsTrigger>
            <TabsTrigger
              value="audio"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-primary-foreground rounded-2xl"
            >
              <Music className="h-4 w-4 mr-2" />
              Audio
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-auto p-1">
            <TabsContent value="video" className="space-y-2">
              {formats.Media.video?.map((format) => (
                <Button
                  key={format.id}
                  variant="outline"
                  className={cn(
                    "w-full justify-between rounded-2xl bg-purple-50",
                    //selectedFormat === format.id && "border-primary bg-primary/5",
                  )}
                >
                  <div className="flex items-center mx-3">
                    <Film className="h-4 w-4 mr-3 text-zinc-700" />
                    <span className="text-xs text-zinc-900">{format.label}</span>
                  </div>
                  <Badge variant="secondary" className="ml-auto border-purple-300 text-[10px] rounded-2xl">
                    {format.size}
                  </Badge>
                  <Download className="h-4 w-4 mx-2 mr-3 text-zinc-700" />
                </Button>
              ))}
            </TabsContent>



            <TabsContent value="audio" className="space-y-2">
              {formats.Media.audio?.map((format) => (
                <Button
                  key={format.id}
                  variant="outline"
                  className={cn(
                    "w-full justify-between rounded-2xl bg-purple-50",
                    //selectedFormat === format.id && "border-primary bg-primary/5",
                  )}
                >
                  <div className="flex items-center mx-3">
                    <Music className="h-4 w-4 mr-3 text-zinc-700" />
                    <span className="text-xs text-zinc-900">{format.label}</span>
                  </div>
                  <Badge variant="secondary" className="ml-auto border-purple-300 text-[10px] rounded-2xl">
                    {format.size}
                  </Badge>
                  <Download className="h-4 w-4 mx-2 mr-3 text-zinc-700" />
                </Button>
              ))}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </Card>
  )
}

