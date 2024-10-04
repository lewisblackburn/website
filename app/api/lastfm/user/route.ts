import { z } from 'zod'

import { APIResponse } from '@/lib/api'
import { getUserInfo } from '@/lib/lastfm'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export const GET = async () => {
  try {
    const response = await getUserInfo()

    if (response.status === 204 || response.status > 400 || !response.data) {
      return APIResponse.success({ user: null })
    }

    const user = response.data

    return APIResponse.success(user)
  } catch (error: any) {
    console.error('[API] Error fetching user info data', error)

    if (error instanceof z.ZodError) {
      return APIResponse.error('Invalid data', 422, error.errors)
    }

    return APIResponse.error(error.message)
  }
}
