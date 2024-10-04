import { z } from 'zod'

import { APIResponse } from '@/lib/api'
import { getTopAlbums } from '@/lib/lastfm'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export const GET = async () => {
  try {
    const response = await getTopAlbums()

    if (response.status === 204 || response.status > 400 || !response.data) {
      return APIResponse.success({ topAlbums: null })
    }

    const topAlbums = response.data

    return APIResponse.success(topAlbums)
  } catch (error: any) {
    console.error('[API] Error fetching top albums data', error)

    if (error instanceof z.ZodError) {
      return APIResponse.error('Invalid data', 422, error.errors)
    }

    return APIResponse.error(error.message)
  }
}
