
export interface VideoInfoType {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  duration: string;
  views: string;
  publishedAt: string
}


interface FormatsInfo {
  id: string;
  label: string;
  size: string;
}

type MediaTypes = {
  audio?: FormatsInfo[]
  video?: FormatsInfo[]
}

export interface MediaData {
  Media: MediaTypes
}

