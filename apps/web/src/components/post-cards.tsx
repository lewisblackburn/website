'use client'

import { BlurImage, Link } from '@zxffo/ui'
import * as React from 'react'

import { useFormattedDate } from '@/hooks/use-formatted-date'
import { type BlogMetadata } from '@/lib/mdx'

type PostCardsProps = {
  posts: BlogMetadata[]
}
type PostCardProps = BlogMetadata

const PostCards = (props: PostCardsProps) => {
  const { posts } = props

  return (
    <div className='grid gap-4 md:grid-cols-2'>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  )
}

const PostCard = (props: PostCardProps) => {
  const { slug, title, summary, date } = props
  const formattedDate = useFormattedDate(date, {
    format: 'LL',
    loading: '--'
  })
  return (
    <Link
      href={`/blog/${slug}`}
      className='group rounded-xl p-2 shadow-feature-card dark:shadow-feature-card-dark'
    >
      <BlurImage
        src={`/images/blog/${slug}/cover.png`}
        className='rounded-lg'
        width={1200}
        height={630}
        imageClassName='transition-transform group-hover:scale-105 w-[480] h-[250]'
        alt={title}
      />
      <div className='flex items-center justify-between gap-2 px-2 pt-4 text-sm text-zinc-500'>
        {formattedDate}
      </div>
      <div className='flex flex-col px-2 py-4'>
        <h3 className='font-title text-2xl font-bold'>{title}</h3>
        <p className='mt-2 text-muted-foreground'>{summary}</p>
      </div>
    </Link>
  )
}

export default PostCards
