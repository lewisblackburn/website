'use client'

import { BlurImage, buttonVariants, Link } from '@zxffo/ui'
import { cn } from '@zxffo/utils'
import { motion, useInView } from 'framer-motion'
import * as React from 'react'

import { useFormattedDate } from '@/hooks/use-formatted-date'
import { type BlogMetadata } from '@/lib/mdx'

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

type LatestArticlesProps = {
  posts: BlogMetadata[]
}

const LatestArticles = (props: LatestArticlesProps) => {
  const { posts } = props
  const projectsRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(projectsRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={projectsRef}
      transition={{
        duration: 0.5
      }}
      className='my-24 will-change-[transform,opacity]'
    >
      <motion.h2
        className='text-center font-title text-3xl font-bold sm:text-4xl'
        initial={{
          y: 30,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        Latest Articles
      </motion.h2>
      <motion.div
        className='mt-12 grid gap-4 md:grid-cols-2'
        initial={{
          y: 40,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        {posts.map((post) => (
          <Card key={post.slug} post={post} />
        ))}
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
        <Link
          href='/blog'
          className={cn(
            buttonVariants({
              variant: 'outline'
            }),
            'rounded-xl'
          )}
        >
          See all articles
        </Link>
      </div>
    </motion.div>
  )
}

type CardProps = {
  post: BlogMetadata
}

const Card = (props: CardProps) => {
  const { post } = props
  const { slug, title, summary, date } = post
  const formattedDate = useFormattedDate(date, {
    format: 'LL',
    loading: '--'
  })

  return (
    <Link
      href={`/blog/${slug}`}
      className='group relative rounded-xl p-2 shadow-feature-card dark:shadow-feature-card-dark'
    >
      <BlurImage
        width={1200}
        height={630}
        src={`/images/blog/${slug}/cover.png`}
        imageClassName='transition-transform group-hover:scale-105 w-[480] h-[250]'
        alt={title}
        className='rounded-lg'
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

export default LatestArticles
