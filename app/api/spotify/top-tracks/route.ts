import { z } from 'zod'

import { APIResponse } from '@/lib/api'
import { getTopTracks } from '@/lib/spotify'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export const GET = async () => {
  try {
    const response = await getTopTracks()

    if (response.status === 204 || response.status > 400 || !response.data) {
      return APIResponse.success({ topTracks: null })
    }

    const topTracks = response.data

    return APIResponse.success(topTracks)
  } catch (error: any) {
    console.error('[API] Error fetching top tracks data', error)

    if (error instanceof z.ZodError) {
      return APIResponse.error('Invalid data', 422, error.errors)
    }

    return APIResponse.error(error.message)
  }
}
