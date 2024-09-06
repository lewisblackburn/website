'use client'

import { buttonVariants, Link } from '@zxffo/ui'
import { cn } from '@zxffo/utils'
import { motion, useInView } from 'framer-motion'
import * as React from 'react'

import Gallery from '../mdx/gallery'
import LocationCard from './location-card'

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

const AboutMe = () => {
  const cardsRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
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
        About Me
      </motion.h2>
      <motion.div
        className='mt-12 grid gap-4 lg:grid-cols-2'
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
        <div className='grid gap-4'>
          <LocationCard />
        </div>
        <div className='grid gap-4'>
          <div className='rounded-xl shadow-feature-card dark:shadow-feature-card-dark'>
            <Gallery />
          </div>
        </div>
        {/* <div className='lg:col-span-2'> */}
        {/*   <Connect /> */}
        {/* </div> */}
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
        <Link
          href='/about'
          className={cn(buttonVariants({ variant: 'outline' }), 'rounded-xl')}
        >
          Know more about me
        </Link>
      </div>
    </motion.div>
  )
}

export default AboutMe
