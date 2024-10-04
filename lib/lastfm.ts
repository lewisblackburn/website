import { env } from '@/env.mjs'

export const LastFMUsername = 'lewisblackburn'

const UserInfoEndpoint = `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${LastFMUsername}&api_key=${env.LASTFM_API_KEY}&format=json`
const UserTopAlbumsEndpoint = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${LastFMUsername}&api_key=${env.LASTFM_API_KEY}&format=json`

export type UserInfo = {
  user: {
    name: string
    realname: string
    image: {
      url: string
    }[]
    playcount: string
    artist_count: string
  }
}

export type TopAlbum = {
  name: string
  artist: {
    name: string
  }
  image: {
    '#text': string
  }[]
  url: string
}

export const getUserInfo = async () => {
  const response = await fetch(UserInfoEndpoint, {
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
    const data = (await response.json()) as UserInfo

    return {
      status: response.status,
      data,
    }
  } catch {
    return {
      status: response.status,
    }
  }
}

export const getTopAlbums = async () => {
  const response = await fetch(UserTopAlbumsEndpoint, {
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
    const data = await response.json()

    return {
      status: response.status,
      data: data.topalbums.album as TopAlbum[],
    }
  } catch {
    return {
      status: response.status,
    }
  }
}
