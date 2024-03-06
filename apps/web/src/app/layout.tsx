import { cn } from '@zxffo/utils'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import '@/styles/globals.css'
import { AutoRefresh } from '@/components/auto-refresh'
import Footer from '@/components/footer'
import Header from '@/components/header'
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL
} from '@/lib/constants'
import { type BlogMetadata, getAllPages } from '@/lib/mdx'

import Providers from './providers'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/favicon/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: '@zxffo',
    siteId: '1152256803746377730',
    creator: '@zxffo',
    creatorId: '1152256803746377730',
    images: [
      {
        url: `${SITE_URL}/images/og.png`,
        width: 1200,
        height: 630,
        alt: SITE_DESCRIPTION
      }
    ]
  },
  keywords: ['zxffo', 'Next.js', 'React', 'TypeScript', 'Node.js'],
  creator: 'zxffo',
  openGraph: {
    url: SITE_URL,
    type: 'website',
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en-US',
    images: [
      {
        url: `${SITE_URL}/images/og.png`,
        width: 1200,
        height: 630,
        alt: SITE_DESCRIPTION,
        type: 'image/png'
      }
    ]
  },
  icons: {
    icon: '/favicon/favicon.jpg',
    shortcut: '/favicon/favicon.jpg',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png'
      }
    ]
  }
}

export const viewport: Viewport = {
  themeColor: {
    color: '#000000'
  }
}

const calcom = localFont({
  src: '../../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-title'
})

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props
  const posts = getAllPages<BlogMetadata>('blog')

  return (
    <AutoRefresh>
      <html
        lang='en-US'
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          calcom.variable,
          'scroll-smooth'
        )}
      >
        <body>
          <Providers>
            <Header posts={posts} />
            <main
              id='skip-nav'
              className='mx-auto mb-16 max-w-5xl px-5  sm:px-8'
            >
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
      </html>
    </AutoRefresh>
  )
}

export default RootLayout
