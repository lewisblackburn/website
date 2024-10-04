import { Metadata } from 'next'

type Site = {
  title: string
  description: string
  url: string
  logo: string
}

export const site: Site = {
  title: 'Lewis Blackburn',
  description: 'Lewis Blackburn is a freelance web developer based in The UK.',
  url: process.env.NODE_ENV === 'production' ? 'https://lewisblackburn.me' : 'http://localhost:3000',
  logo: 'https://lewisblackburn.me/images/favicon/android-chrome-192x192.png',
}

export const siteBaseMetadata: Metadata = {
  title: site.title,
  description: site.description,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Lewis Blackburn',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Programming',
    'Development',
    'Freelance',
    'Technology',
  ],
  authors: [{ name: 'Lewis Blackburn', url: 'https://lewisblackburn.me' }],
  creator: 'Lewis Blackburn',
  publisher: 'Lewis Blackburn',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    url: site.url,
    type: 'website',
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: 'en-GB',
    images: [
      {
        url: `${site.url}/images/og/og.png`,
        width: 1200,
        height: 630,
        alt: site.description,
        type: 'image/png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/images/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/images/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/favicon/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/images/favicon/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    site: '@lewisblackburn',
    creator: '@lewisblackburn',
    images: [
      {
        url: `${site.url}/images/og/og.png`,
        width: 1200,
        height: 630,
        alt: site.description,
      },
    ],
  },
  alternates: {
    canonical: site.url,
    types: {
      'application/rss+xml': `${site.url}/rss.xml`,
    },
  },
  category: 'technology',
}
