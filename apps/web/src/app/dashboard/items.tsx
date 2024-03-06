/**
 * Inspired by: https://fig.io
 */
'use client'

import { SiGithub } from '@icons-pack/react-simple-icons'
import { Link } from '@zxffo/ui'
import { ArrowRightIcon, Headphones, StarIcon } from 'lucide-react'
import * as React from 'react'
import useSWR, { type SWRConfiguration } from 'swr'

import Counter from '@/components/counter'
import { fetcher } from '@/lib/fetcher'
import { type Github, type LastFMUser } from '@/types'

type Card = {
  icon: React.ReactNode
  title: string
  link: string
  value: number | undefined
  linkText: string
  gradient: {
    startColor: string
    endColor: string
  }
  suffix?: string
}

const Items = () => {
  const swrConfig: SWRConfiguration = {
    revalidateOnFocus: false
  }
  const { data: githubData } = useSWR<Github>('/api/github', fetcher, swrConfig)
  const { data: scrobbleData } = useSWR<LastFMUser>(
    '/api/scrobbles',
    fetcher,
    swrConfig
  )

  const data: Card[] = [
    {
      title: 'LastFM Total Scrobbles',
      link: 'https://www.last.fm/user/lewisblackburn',
      value: scrobbleData?.scrobbles,
      icon: <Headphones className='size-6 text-[#ff0f7b]' />,
      linkText: 'LastFM',
      gradient: {
        startColor: '#ff0f7b',
        endColor: '#f945ff'
      }
    },
    {
      title: 'GitHub Followers',
      link: 'https://github.com/lewisblackburn',
      value: githubData?.followers,
      icon: <SiGithub className='text-[#fee000]' />,
      linkText: 'GitHub',
      gradient: {
        startColor: '#fee000',
        endColor: '#ffce63'
      }
    },
    {
      title: 'GitHub Stars',
      link: 'https://github.com/lewisblackburn',
      value: githubData?.stars,
      icon: <StarIcon className='size-6 text-[#fee000]' />,
      linkText: 'GitHub',
      gradient: {
        startColor: '#fee000',
        endColor: '#ffce63'
      }
    }
  ]

  return (
    <>
      <div className='mb-4 mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {data.map((item, i) => {
          const {
            icon,
            link,
            title,
            value,
            linkText,
            gradient: { startColor, endColor },
            suffix
          } = item

          return (
            <Link
              key={i}
              href={link}
              className='group relative overflow-hidden rounded-lg border p-4 shadow-sm transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800'
            >
              <div className='flex flex-col items-center justify-center gap-2 transition-transform group-hover:-translate-y-24 group-focus:-translate-y-24'>
                <div className='flex items-center gap-2 text-3xl font-bold'>
                  {value === 0 || value !== undefined ? (
                    <>
                      <span>{icon}</span>
                      <div
                        style={{
                          background: `linear-gradient(122.25deg, ${startColor} 12.16%, ${endColor} 70.98%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        <Counter value={Number(value)} />
                        {suffix && <span>{` ${suffix}`}</span>}
                      </div>
                    </>
                  ) : (
                    '--'
                  )}
                </div>
                <div className='text-xl font-medium'>{title}</div>
              </div>
              <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-2xl font-bold opacity-0 transition group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                {linkText}
                <ArrowRightIcon className='size-6' />
              </span>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Items
