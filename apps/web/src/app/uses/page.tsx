import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import Mdx from '@/components/mdx'
import PageTitle from '@/components/page-title'
import { SITE_NAME } from '@/lib/constants'
import { getPage, type PageMetadata } from '@/lib/mdx'

const title = 'Uses'
const description =
  'This is the equipment I currently use for gaming, programming, making videos, and every day.'

type UsesPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: UsesPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_NAME}/uses`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${SITE_NAME}/uses`,
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

const UsesPage = () => {
  const page = getPage<PageMetadata>('pages/uses')

  if (!page) {
    return notFound()
  }

  const { content } = page

  return (
    <>
      <PageTitle
        title='Uses'
        description='This page is more of a reference for me for when I get asked about what technologies or equipment I use for programming.'
      />
      <Mdx content={content} />
    </>
  )
}

export default UsesPage
