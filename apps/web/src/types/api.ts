export type Song =
  | {
    isPlaying: true
    name: string
    artist: string
    album: string
    albumImage: string
    songUrl: string
  }
  | {
    isPlaying: false
  }

export type YouTube = {
  subscribers: number
  views: number
}

export type Github = {
  stars: number
  followers: number
}

export type LastFMUser = {
  scrobbles: number
}

export type Wakatime = {
  seconds: number
}

export type Playlist = {
  collaborative: boolean
  description: string
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: SpotifyImage[]
  name: string
  owner: Owner
  public: boolean
  snapshot_id: string
  tracks: Tracks
  type: string
  uri: string
}

export type ExternalUrls = {
  spotify: string
}

export type Followers = {
  href: string
  total: number
}

export type SpotifyImage = {
  url: string
  height: number
  width: number
}

export type Owner = {
  external_urls: ExternalUrls
  followers?: Followers
  href: string
  id: string
  type: string
  uri: string
  display_name?: string
  name?: string
}

export type Tracks = {
  href: string
  limit: number
  next: string
  offset: number
  previous: string
  total: number
  items: Item[]
}

export type Item = {
  added_at: string
  added_by: Owner
  is_local: boolean
  track: SpotifyTrack
}

export type SpotifyTrack = {
  album: SpotifyAlbum
  artists: SpotifyArtist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIDS
  external_urls: ExternalUrls
  href: string
  id: string
  is_playable: boolean
  linked_from: string
  restrictions: Restrictions
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
  is_local: boolean
}

export type SpotifyAlbum = {
  album_type: string
  total_tracks: number
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: SpotifyImage[]
  name: string
  release_date: string
  release_date_precision: string
  restrictions: Restrictions
  type: string
  uri: string
  copyrights: Copyright[]
  external_ids: ExternalIDS
  genres: string[]
  label: string
  popularity: number
  album_group: string
  artists: Owner[]
}

export type Copyright = {
  text: string
  type: string
}

export type ExternalIDS = {
  isrc: string
  ean: string
  upc: string
}

export type Restrictions = {
  reason: string
}

export type SpotifyArtist = {
  external_urls: ExternalUrls
  followers: Followers
  genres: string[]
  href: string
  id: string
  images: SpotifyImage[]
  name: string
  popularity: number
  type: string
  uri: string
}

export type LastFMAlbum = {
  artist: LastFMArtist
  image: LastFMImage[]
  mbid: string
  url: string
  playcount: string
  name: string
}

export type LastFMArtist = {
  url: string
  name: string
  mbid: string
}

export type LastFMImage = {
  size: string
  '#text': string
}
