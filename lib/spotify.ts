import { env } from '@/env.mjs'

const BasicAuth = Buffer.from(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`).toString('base64')
const NowPlayingEndpoint = 'https://api.spotify.com/v1/me/player/currently-playing'
const TopTracksEndpoint = 'https://api.spotify.com/v1/me/top/tracks'
const TokenEndpoint = 'https://accounts.spotify.com/api/token'

type Song = {
  is_playing: boolean
  item: {
    name: string
    artists: {
      name: string
    }[]
    album: {
      name: string
      images: {
        url: string
      }[]
    }
    external_urls: {
      spotify: string
    }
  }
}

export type TopTrack = {
  album: {
    href: string
    id: string
    images: {
      url: string
    }[]
    name: string
    artists: {
      name: string
    }[]
  }
  artists: {
    name: string
  }[]
  explicit: boolean
  href: string
  id: string
  name: string
  uri: string
}

type AccessToken = {
  access_token: string
}

const getAccessToken = async () => {
  const response = await fetch(TokenEndpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${BasicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: env.SPOTIFY_REFRESH_TOKEN,
    }),
  })

  return (await response.json()) as AccessToken
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  const response = await fetch(NowPlayingEndpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 60,
    },
  })

  if (response.status === 204) {
    return {
      status: response.status,
    }
  }

  try {
    const song = (await response.json()) as Song

    return {
      status: response.status,
      data: song,
    }
  } catch {
    return {
      status: response.status,
    }
  }
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  const response = await fetch(TopTracksEndpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 0,
    },
  })

  if (response.status === 204) {
    return {
      status: response.status,
    }
  }

  try {
    const topTracks = await response.json()

    return {
      status: response.status,
      data: topTracks.items as TopTrack[],
    }
  } catch {
    return {
      status: response.status,
    }
  }
}
