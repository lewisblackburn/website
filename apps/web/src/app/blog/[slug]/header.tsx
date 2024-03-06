'use client'

import { BlurImage, Link } from '@zxffo/ui'
import * as React from 'react'
import type readingTime from 'reading-time'

import ImageZoom from '@/components/image-zoom'
import { useFormattedDate } from '@/hooks/use-formatted-date'

type HeaderProps = {
  date: string
  title: string
  slug: string
  modifiedDate: string
  readingTime: ReturnType<typeof readingTime>
}

const Header = (props: HeaderProps) => {
  const { date, modifiedDate, title, slug, readingTime } = props
  const formattedDate = useFormattedDate(date, {
    format: 'LL',
    loading: '--'
  })
  const formattedModifiedDate = useFormattedDate(modifiedDate, {
    format: 'LL',
    loading: '--'
  })

  React.useEffect(() => {
    const increment = async () => {
      await fetch('/api/views', {
        method: 'POST',
        body: JSON.stringify({
          slug
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    increment()
  }, [slug])

  return (
    <div className='space-y-16 py-16'>
      <div className='space-y-16 sm:px-8'>
        <h1 className='bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-center font-title text-4xl font-bold text-transparent dark:from-white dark:via-white/90 dark:to-white/70 md:text-5xl md:leading-[64px]'>
          {title}
        </h1>
        <div className='grid grid-cols-2 text-sm max-md:gap-4 md:grid-cols-4'>
          <div className='space-y-1 md:mx-auto'>
            <div className='text-muted-foreground'>Written by</div>
            <Link
              href='https://github.com/zxffo'
              className='flex items-center gap-2'
            >
              <BlurImage
                src='/images/avatar.jpg'
                className='rounded-full'
                width={24}
                height={24}
                alt='Lewis'
              />
              Lewis
            </Link>
          </div>
          <div className='space-y-1 md:mx-auto'>
            <div className='text-muted-foreground'>Published on</div>
            <div>{formattedDate}</div>
          </div>
          <div className='space-y-1 md:mx-auto'>
            <div className='text-muted-foreground'>Last edited</div>
            <div>{formattedModifiedDate}</div>
          </div>
          <div className='space-y-1 md:mx-auto'>
            <div className='text-muted-foreground'>Reading Time</div>
            <div>{readingTime.text}</div>
          </div>
        </div>
      </div>
      <ImageZoom
        zoomImg={{
          src: `/images/blog/${slug}/cover.png`,
          alt: title
        }}
      >
        <BlurImage
          src={`/images/blog/${slug}/cover.png`}
          className='rounded-lg'
          width={1200}
          height={630}
          lazy={false}
          alt={title}
        />
      </ImageZoom>
    </div>
  )
}

export default Header
