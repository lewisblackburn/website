'use client'

import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'

import { UtmMediums } from '@/types/links'
import { ContactLinks, NavigationLinkGroups, SocialLinks } from '@/config/links'

import NowPlaying from './now-playing'

export function Footer() {
  return (
    <footer className='mx-auto flex max-w-5xl flex-col px-8 pb-8'>
      <NowPlaying />

      <div className='mt-12 grid grid-cols-2 md:grid-cols-3'>
        <div className='col-span-2 mb-10 flex flex-col items-start gap-4 sm:col-span-1'>
          <Link
            key={ContactLinks[0].name}
            href={`mailto:${ContactLinks[0].mailto}`}
            className='text-muted-foreground transition-colors duration-150 hover:text-accent-foreground'>
            {ContactLinks[0].mailto}
          </Link>
        </div>

        <div className='mb-10 flex flex-col items-start gap-4 pr-4'>
          {NavigationLinkGroups.map((link) => (
            <Link
              key={link.title}
              href={UtmUrl(link.href, {
                medium: UtmMediums.Footer,
              })}
              className='text-muted-foreground transition-colors duration-150 hover:text-accent-foreground'>
              {link.title}
            </Link>
          ))}
        </div>

        <div className='mb-10 flex flex-col items-start gap-4 pr-4'>
          {SocialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className='text-muted-foreground transition-colors duration-150 hover:text-accent-foreground'
              target='_blank'
              rel='noopener noreferrer'>
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div className='mt-20 text-sm'>&copy; Lewis Blackburn, {new Date().getFullYear()}</div>
    </footer>
  )
}
