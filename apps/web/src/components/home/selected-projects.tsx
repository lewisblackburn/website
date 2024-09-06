'use client'

import { BlurImage, buttonVariants, Link } from '@zxffo/ui'
import { cn } from '@zxffo/utils'
import { motion, useInView } from 'framer-motion'
import * as React from 'react'

import { type ProjectMetadata } from '@/lib/mdx'

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

type ProjectsProps = {
  projects: ProjectMetadata[]
}

type CardProps = {
  project: ProjectMetadata
}

const SelectedProjects = (props: ProjectsProps) => {
  const { projects } = props
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
      className='relative my-24 will-change-[transform,opacity]'
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
        Selected Projects
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
        {projects
          .filter((project) => project.selected)
          .map((project) => (
            <Card key={project.slug} project={project} />
          ))}
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
        <Link
          href='/projects'
          className={cn(
            buttonVariants({
              variant: 'outline'
            }),
            'rounded-xl'
          )}
        >
          See all projects
        </Link>
      </div>
    </motion.div>
  )
}

const Card = (props: CardProps) => {
  const { project } = props
  const { slug, name, description } = project

  return (
    <Link
      key={slug}
      href={`/projects/${slug}`}
      className='group relative rounded-xl p-2 shadow-feature-card dark:shadow-feature-card-dark'
    >
      <div className='absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black group-hover:from-transparent group-hover:to-black' />
      <h3 className='absolute bottom-24 left-7 font-title text-2xl font-bold text-white group-hover:text-zinc-100 dark:group-hover:text-muted-foreground'>
        {name}
      </h3>
      <p className='absolute bottom-6 left-7 text-zinc-100 dark:text-muted-foreground'>
        {description}
      </p>
      <BlurImage
        width={1280}
        height={832}
        src={`/images/projects/${slug}/cover.png`}
        alt={description}
        className='rounded-lg'
      />
    </Link>
  )
}

export default SelectedProjects
