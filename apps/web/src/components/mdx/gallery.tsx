import { Gallery as GalleryUI } from '@zxffo/ui'
import * as React from 'react'

const images = [
  '/images/about/8.jpg',
  '/images/about/2.jpg',
  '/images/about/0.jpg',
  '/images/about/1.jpg',
  '/images/about/4.jpg',
  '/images/about/5.jpg',
  '/images/about/3.jpg',
  '/images/about/6.jpg',
  '/images/about/7.jpg'
]

const Gallery = () => {
  return <GalleryUI images={images} />
}

export default Gallery
