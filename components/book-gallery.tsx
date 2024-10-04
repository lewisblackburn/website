import Image from 'next/image'
import books from '@/utils/books.json'

import { Card, CardContent } from './ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

export default function BookGallery() {
  return (
    <div className='mt-16 w-full'>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-bold md:text-2xl'>Books Read</h2>
          <div className='flex items-center gap-3'>
            <CarouselPrevious className='relative inset-0 translate-x-0 translate-y-0' />
            <CarouselNext className='relative inset-0 translate-x-0 translate-y-0' />
          </div>
        </div>
        <CarouselContent className='mt-5'>
          {books.data.map((book) => (
            <CarouselItem key={book.title} className='basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5'>
              <div className='p-1'>
                <Card className='relative'>
                  <CardContent className='flex aspect-[5.5/8.5] items-center justify-center p-6'>
                    <Image
                      src={book.cover}
                      alt={book.title}
                      layout='fill'
                      className='size-full rounded-md object-cover'
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
