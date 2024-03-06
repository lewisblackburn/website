'use client'

import { AlertTriangle } from 'lucide-react'
import Image from 'next/image'
import useSWR from 'swr'

import { fetcher } from '@/lib/fetcher'
import { type SpotifyTrack } from '@/types'

function Track({ name, album, artists, uri, explicit }: Partial<SpotifyTrack>) {
  const artist = artists!.map((_artist) => _artist.name).join(', ')
  const image = album!.images[1]?.url

  return (
    <li>
      <a className='group flex select-none items-center gap-3.5' href={uri}>
        <div className='shrink-0 overflow-hidden rounded-lg'>
          <Image
            className='rounded-none brightness-[0.8] transition-all duration-500 group-hover:scale-105 group-hover:brightness-100'
            src={image ?? ''}
            width='80'
            height='80'
            quality='95'
            alt={`Album cover art for ${album!.name}`}
          />
        </div>

        <div className='overflow-hidden leading-none'>
          <div className='flex items-center gap-1.5'>
            {explicit && (
              <AlertTriangle className='shrink-0' width='18' height='18' />
            )}
            <h3 className='w-full truncate text-lg font-medium'>{name}</h3>
          </div>

          <p className='text-gray-11 w-full truncate text-base'>{artist}</p>
        </div>
      </a>
    </li>
  )
}

const TopTracks = () => {
  const { data, isLoading } = useSWR<{ tracks: SpotifyTrack[] }>(
    '/api/top-tracks',
    fetcher
  )
  const fakeData = Array.from({ length: 10 })
    .fill(0)
    .map(
      () =>
        ({
          name: 'Song Loading',
          album: {
            name: 'Lewis',
            images: [
              {},
              {
                url: 'https://via.placeholder.com/150'
              }
            ]
          },
          artists: [{ name: 'Slowy' }],
          uri: '',
          explicit: false
        }) as SpotifyTrack
    )

  return (
    <div className='mt-20'>
      <h1 className='text-3xl font-bold'>Top Tracks</h1>
      <ul className='mt-8 grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2'>
        {isLoading && fakeData.map((track, i) => <Track key={i} {...track} />)}
        {data?.tracks
          .slice(0, 10)
          .map((track) => <Track key={track.id} {...track} />)}
      </ul>
    </div>
  )
}

export default TopTracks
