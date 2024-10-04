import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPages } from '@/.contentlayer/generated'
import { absoluteUrl } from '@/utils/urls'
import { Article, WithContext } from 'schema-dts'

import { Routes } from '@/config/routes'
import { site } from '@/config/site'
import { getAllPages, getPage } from '@/lib/mdx'
import Mdx from '@/components/mdx/mdx'

const title = 'Uses'
const description = 'A list of the tools, software, and hardware I use for my work and personal projects.'

export function generateStaticParams() {
  const pages = getAllPages('pages')
  return pages.map((page: any) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata(parent: any): Promise<Metadata> {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  const page = getPage('uses')
  if (!page) return {}

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(Routes.Uses),
    },
    openGraph: {
      ...previousOpenGraph,
      url: absoluteUrl(Routes.Uses),
      type: 'article',
      title,
      siteName: site.title,
      description,
      locale: 'en-GB',
      authors: site.url,
      images: [
        {
          // TODO: Create this image
          url: `${site.url}/images/pages/uses/og.png`,
          width: 1200,
          height: 630,
          alt: description,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      ...previousTwitter,
      title,
      description,
      images: [
        {
          url: `${site.url}/images/pages/uses/og.png`,
          alt: description,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export default function Page() {
  const page = allPages.find((p) => p.slug === 'uses')

  if (!page) {
    notFound()
  }

  const jsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',

    'headline': title,
    'description': description,
    'image': `${site.url}/images/blog/uses/og.png`,
    'author': {
      '@type': 'Person',
      'name': 'Lewis Blackburn',
      'url': `${site.url}/uses`,
    },
    'publisher': {
      '@type': 'Person',
      'name': 'Lewis Blackburn',
      'url': `${site.url}/uses`,
    },
  }

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className='w-full'>
        <Mdx code={page.body.code} />
      </article>
    </>
  )
}
