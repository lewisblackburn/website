import { unstable_noStore as noStore } from 'next/cache'
import { NextResponse } from 'next/server'

import { getTopTracks } from '@/lib/spotify'

export const runtime = 'edge'

export const GET = async () => {
  noStore()

  try {
    const response = await getTopTracks()

    if (
      response.status === 204 ||
      response.status > 400 ||
      response?.data === null ||
      !response.data
    ) {
      return NextResponse.json({ tracks: [] })
    }

    const tracks = response.data

    return NextResponse.json({
      tracks
    })
  } catch {
    return NextResponse.json(
      {
        message: 'Error getting Top Tracks from Spotify'
      },
      { status: 500 }
    )
  }
}
