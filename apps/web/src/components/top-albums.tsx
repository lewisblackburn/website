'use client'

import Image from 'next/image'
import useSWR from 'swr'

import { fetcher } from '@/lib/fetcher'
import { type LastFMAlbum } from '@/types'

function Album({ artist, image, name, url }: LastFMAlbum) {
  const _image = image && image[1] && image[1]['#text'] ? image[1]['#text'] : ''

  return (
    <li>
      <a className='group flex select-none items-center gap-3.5' href={url}>
        <div className='shrink-0 overflow-hidden rounded-lg'>
          <Image
            className='rounded-none brightness-[0.8] transition-all duration-500 group-hover:scale-105 group-hover:brightness-100'
            src={_image ?? ''}
            width='80'
            height='80'
            quality='95'
            alt={`Album cover art for ${name}`}
          />
        </div>

        <div className='overflow-hidden leading-none'>
          <div className='flex items-center gap-1.5'>
            <h3 className='w-full truncate text-lg font-medium'>{name}</h3>
          </div>

          <p className='text-gray-11 w-full truncate text-base'>
            {artist.name}
          </p>
        </div>
      </a>
    </li>
  )
}

const TopAlbums = () => {
  const { data, isLoading } = useSWR<{ albums: LastFMAlbum[] }>(
    '/api/top-albums',
    fetcher
  )

  const fakeData = Array.from({ length: 10 })
    .fill(0)
    .map(
      () =>
        ({
          name: 'Album Loading',
          artist: { name: 'Artist Loading' },
          image: [
            {},
            {
              '#text': 'https://via.placeholder.com/150'
            }
          ]
        }) as LastFMAlbum
    )

  return (
    <div className='mt-20'>
      <h1 className='text-3xl font-bold'>Top Albums</h1>
      <ul className='mt-8 grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2'>
        {isLoading && fakeData.map((album, i) => <Album key={i} {...album} />)}
        {data?.albums
          .slice(0, 10)
          .map((album) => <Album key={album.name} {...album} />)}
      </ul>
    </div>
  )
}

export default TopAlbums
