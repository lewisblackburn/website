import { unstable_noStore as noStore } from 'next/cache'
import { NextResponse } from 'next/server'

import { getTopAlbums } from '@/lib/lastfm'

export const runtime = 'edge'

export const GET = async () => {
  noStore()

  try {
    const response = await getTopAlbums()

    if (
      response.status === 204 ||
      response.status > 400 ||
      response?.data === null ||
      !response.data
    ) {
      return NextResponse.json({ albums: [] })
    }

    const albums = response.data

    return NextResponse.json({
      albums
    })
  } catch {
    return NextResponse.json(
      {
        message: 'Error getting Top Albums from LastFM'
      },
      { status: 500 }
    )
  }
}
