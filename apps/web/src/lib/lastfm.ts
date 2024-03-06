import { env } from '@/env'

import { LASTFM_USERNAME } from './constants'

const LASTFM_API_KEY = env.LASTFM_API_KEY

const USER_INFO_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json`
const USER_TOP_ALBUMS_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json`

export const getScrobbles = async () => {
  const response = await fetch(USER_INFO_ENDPOINT)

  if (response.status === 204) {
    return {
      status: response.status
    }
  }

  try {
    const userInformation = await response.json()

    return {
      status: response.status,
      data: userInformation.user.playcount
    }
  } catch {
    return {
      status: response.status
    }
  }
}

export const getTopAlbums = async () => {
  const response = await fetch(USER_TOP_ALBUMS_ENDPOINT)

  if (response.status === 204) {
    return {
      status: response.status
    }
  }

  try {
    const data = await response.json()

    return {
      status: response.status,
      data: data.topalbums.album
    }
  } catch {
    return {
      status: response.status
    }
  }
}
