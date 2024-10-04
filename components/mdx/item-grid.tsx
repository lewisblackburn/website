/**
 * Inspired by https://jahir.dev/uses
 */

import Image from 'next/image'
import { UtmUrl } from '@/utils/urls'

import { UtmMediums } from '@/types/links'

export type Items = Array<{
  image: string
  name: string
  description: string
  url: string
}>

type ItemGridProps = {
  items: Items
}

export const ItemGrid = (props: ItemGridProps) => {
  const { items } = props

  return (
    <div className='mb-9 grid grid-cols-1 gap-4 md:grid-cols-4'>
      {items.map((item) => (
        <a
          key={item.name}
          href={UtmUrl(item.url, {
            medium: UtmMediums.Blog,
            content: 'item_grid',
          })}
          target='_blank'
          rel='noopener noreferrer'
          className='flex gap-6 rounded-lg border bg-muted p-4 no-underline transition-colors duration-200 hover:bg-accent md:flex-col md:gap-3'>
          <Image src={item.image} width={256} height={256} alt={item.name} className='m-0 size-24 md:size-full' />
          <div className='flex flex-col justify-center gap-2'>
            <div className='text-lg font-extrabold'>{item.name}</div>
            <div className='text-sm text-muted-foreground'>{item.description}</div>
          </div>
        </a>
      ))}
    </div>
  )
}
