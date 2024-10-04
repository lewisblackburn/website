'use client'

import Image from 'next/image'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'
import MetabaseIcon from 'public/images/projects/metabase/icon.png'

import { UtmMediums } from '@/types/links'

import { Icon } from '../icon'
import { Button } from '../ui/button'
import GridIconTwo from '/public/images/home/edge-of-gaping-gill.webp'
import GridWideImage from '/public/images/home/hike.webp'
import GridIconThree from '/public/images/home/top-of-ingelborough.webp'

export function Hero() {
  return (
    <>
      <section id='hero'>
        <Background />

        <div className='flex flex-col'>
          <div className='mt-12 flex flex-col items-center'>
            {/* Name */}
            <h1 className='bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-center text-4xl font-bold text-transparent dark:from-white dark:via-white/80 dark:to-white/60 md:text-7xl'>
              Lewis Blackburn
            </h1>

            {/* Occupation and description */}
            <div className='my-6 space-y-2'>
              <h2 className='flex flex-wrap items-center justify-center gap-4 text-sm font-medium leading-8 md:text-base'>
                web developer @
                <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                  <Link
                    href={UtmUrl('https://drive2learn.co.uk', {
                      medium: UtmMediums.Homepage,
                      content: 'hero',
                    })}>
                    <Icon name='car' width={20} height={20} className='mr-2 inline-block rounded-sm text-red-500' />
                    Drive2Learn
                  </Link>
                </Button>
                <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                  <Link
                    href={UtmUrl('https://fly.metabase.dev', {
                      medium: UtmMediums.Homepage,
                      content: 'hero',
                    })}>
                    <Image
                      src={MetabaseIcon}
                      alt='Metabase logo'
                      width={24}
                      height={24}
                      className='mr-2 inline-block rounded-sm'
                    />
                    Metabase
                  </Link>
                </Button>
              </h2>
            </div>

            {/* CTA */}
            <Button variant={'ghost'} className='-ml-4' asChild>
              <Link href='#about'>
                <p className='mr-2'>find out more about me, in 30 seconds</p>
                <p className='inline-block animate-bounce'> ↓ </p>
              </Link>
            </Button>
          </div>

          {/* Image and grid layout */}
          <div className='mt-12 flex flex-col gap-10 md:grid md:grid-cols-4 md:grid-rows-1'>
            <div className='relative col-span-2 aspect-video w-full'>
              <Image
                src={GridWideImage}
                alt=''
                placeholder='blur'
                className='h-56 w-full rounded-lg object-cover drop-shadow-2xl'
              />
            </div>
            <div className='relative hidden aspect-square md:block'>
              <Image src={GridIconTwo} alt='' className='rounded-lg drop-shadow-2xl' />
            </div>
            <div className='relative hidden aspect-square md:block'>
              <Image
                src={GridIconThree}
                alt=''
                placeholder='blur'
                className='h-64 rotate-3 rounded-lg object-cover drop-shadow-2xl transition-all duration-200 hover:rotate-0'
              />
            </div>
          </div>

          {/* Announcement text that always stays below the image */}
          <div className='mx-auto mt-12 md:mt-8'>
            <div className='rounded-md border bg-muted p-4 text-sm md:p-2'>
              <Link
                href={UtmUrl('/projects/metabase', {
                  medium: UtmMediums.Homepage,
                  content: 'hero',
                })}>
                Metabase has just reached its alpha stage 🎉
                <span className='ml-1 underline underline-offset-2'> Read the announcement</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Background() {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className='absolute inset-0 -z-10 size-full bg-[linear-gradient(to_right,#ffffff11_1px,transparent_1px),linear-gradient(to_bottom,#ffffff11_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]'></div>
  )
}
