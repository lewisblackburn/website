import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'

import { UtmMediums } from '@/types/links'

export const metadata = {
  title: '404',
}

export default function NotFound() {
  return (
    <div className='mb-40 mt-52 flex flex-col items-center justify-center gap-12'>
      <h1 className='text-center text-6xl font-bold'>Oops! This page doesn't exist.</h1>
      <Link
        href={UtmUrl('/', {
          medium: UtmMediums.Homepage,
          content: 'hero',
        })}
        className='rounded-lg border px-3 py-2 transition-colors duration-150'>
        Back to Homepage
      </Link>
    </div>
  )
}
