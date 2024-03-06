'use client'

import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

import { BlurImage } from './blur-image'

export function Gallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)

  const containerWidth = `${images.length * 100}%`

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className='bg-gray-2 group relative overflow-hidden rounded-md'>
        <motion.div
          animate={{ x: `-${index * (100 / images.length)}%` }}
          style={{ width: containerWidth }}
          className='flex'
        >
          {images.map((image, i) => (
            <BlurImage
              key={i}
              src={image}
              width={1920}
              height={1080}
              quality='100'
              alt='A picture of me sitting on a bench in a park.'
              imageClassName='aspect-[2/1] object-cover object-center grayscale group-hover:grayscale-0'
              draggable={false}
            />
          ))}
        </motion.div>
        <AnimatePresence>
          {index > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0, pointerEvents: 'none' }}
              whileHover={{ opacity: 1 }}
              onClick={() => setIndex(index - 1)}
              className='bg-gray-1 absolute left-4 top-1/2 -mt-4 flex size-8 items-center justify-center rounded-md'
            >
              <ArrowLeft />
            </motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {index + 1 < images.length && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0, pointerEvents: 'none' }}
              whileHover={{ opacity: 1 }}
              onClick={() => setIndex(index + 1)}
              className='bg-gray-1 absolute right-4 top-1/2 -mt-4 flex size-8 items-center justify-center rounded-md'
            >
              <ArrowRight />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}
