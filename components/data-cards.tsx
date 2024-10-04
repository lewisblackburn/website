'use client'

import books from '@/utils/books.json'
import { Book, Headphones } from 'lucide-react'
import useSWR from 'swr'

import { ApiResponseSuccess, GetLastFMUserResponse } from '@/types/api'
import { ApiRoutes } from '@/config/routes'
import { fetcher } from '@/lib/fetcher'
import { cn } from '@/lib/utils'

import Counter from './counter'

export const DataCards = () => {
  const { data: lastFMUser } = useSWR<ApiResponseSuccess<GetLastFMUserResponse>>(ApiRoutes.GetLastFMUser, fetcher)

  return (
    <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-6'>
      <DataCard
        title='LastFM Total Scrobbles'
        href='https://www.last.fm/user/lewisblackburn/library'
        fromColor='from-red-400'
        toColor='to-blue-500'
        icon={Headphones}
        textColor='text-red-400'
        value={lastFMUser?.data.user.playcount ?? '0'}
      />
      <DataCard
        title='LastFM Total Artists'
        href='https://www.last.fm/user/lewisblackburn/library'
        fromColor='from-green-400'
        toColor='to-blue-500'
        icon={Headphones}
        textColor='text-green-400'
        value={lastFMUser?.data.user.artist_count ?? '0'}
      />
      <DataCard
        title='Books Read'
        href=''
        fromColor='from-yellow-400'
        toColor='to-orange-500'
        icon={Book}
        textColor='text-yellow-400'
        value={books.data.length.toString()}
      />
    </div>
  )
}

interface DataCardProps {
  title: string
  href: string
  fromColor: string
  toColor: string
  icon: any
  textColor: string
  value: string
}

const DataCard = ({ title, href, fromColor, toColor, icon: Icon, textColor, value }: DataCardProps) => {
  return (
    <a
      key={title}
      href={href}
      className='group flex flex-col items-center space-y-4 rounded-lg border bg-muted p-4 transition-all duration-150 hover:bg-accent'
      rel='noopener noreferrer'
      target='_blank'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <div
          className={cn(
            'flex items-center gap-2 bg-gradient-to-r bg-clip-text text-5xl font-extrabold text-transparent',
            fromColor,
            toColor,
          )}>
          {Icon && <Icon className={cn('mb-2 size-7', textColor)} size={48} strokeWidth={1} aria-hidden='true' />}
          <h1 className='text-3xl font-bold'>
            <Counter value={parseInt(value, 10)} />
          </h1>
        </div>
        <h2 className='text-xl font-medium'>{title}</h2>
      </div>
    </a>
  )
}
