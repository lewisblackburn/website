'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'

import { UtmMediums } from '@/types/links'
import { cn, shineAnimation } from '@/lib/utils'

import { Button } from './ui/button'
import { Card, CardDescription, CardFooter, CardHeader } from './ui/card'

export function NotificationPopup() {
  const [isVisibile, setIsVisible] = useState(false)

  useEffect(() => {
    const isVisibleInStorage = localStorage.getItem('notification_popup')

    if (!isVisibleInStorage) {
      localStorage.setItem('notification_popup', 'true')
      setIsVisible(true)
    }
  }, [])

  return (
    isVisibile && (
      <div className='fixed bottom-4 right-4 '>
        <Card className={cn('w-[350px]', shineAnimation)}>
          <CardHeader>
            <div className='font-bold'>✨ I have just launched Metabase ✨</div>
            <CardDescription className='mt-4'>
              Metabase is a comprehensive database that brings together information about films, TV shows, books,
              people, and songs, all in one convenient platform. Just like popular services like TMDB or IMDb, Metabase
              provides a place for users to navigate, create and update their favourite media.
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-end gap-4'>
            <Button variant='outline' size='sm' onClick={() => setIsVisible(false)}>
              Not Now
            </Button>
            <Button size='sm' asChild>
              <Link
                href={UtmUrl('/projects/metabase', {
                  medium: UtmMediums.NotificationPopup,
                  content: 'notification_popup',
                })}>
                Learn More
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  )
}
