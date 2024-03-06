import { unstable_noStore as noStore } from 'next/cache'
import { NextResponse } from 'next/server'

import { getScrobbles } from '@/lib/lastfm'

export const runtime = 'edge'

export const GET = async () => {
  noStore()

  try {
    const response = await getScrobbles()

    if (
      response.status === 204 ||
      response.status > 400 ||
      response?.data === null ||
      !response.data
    ) {
      return NextResponse.json({ value: 0 })
    }

    const scrobbles = response.data

    return NextResponse.json({
      scrobbles
    })
  } catch {
    return NextResponse.json(
      {
        message: 'Error getting scrobbles from LastFM'
      },
      { status: 500 }
    )
  }
}
