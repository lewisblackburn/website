import { TopAlbum, UserInfo } from '@/lib/lastfm'
import { TopTrack } from '@/lib/spotify'

export enum ApiStatus {
  Success = 'SUCCESS',
  Error = 'ERROR',
}

export type ApiResponseSuccess<T> = {
  status: 'SUCCESS'
  code: string
  data: T
}

export type ApiResponseError = {
  status: 'ERROR'
  code: string
  message: string
  visible: boolean
  message_history: string
  error_history: {
    message: string
    status: number
    code: string
    data: unknown
    visible: boolean
  }[]
}

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError

export type GetSongResponse = {
  isPlaying?: boolean
  name: string
  artist: string
  album: string
  albumImage: string
  songUrl: string
}

export type GetTopTracksResponse = TopTrack[]

export type GetLastFMUserResponse = UserInfo

export type GetLastFMTopAlbumsResponse = TopAlbum[]
