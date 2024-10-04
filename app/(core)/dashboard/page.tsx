import { Metadata } from 'next'
import { absoluteUrl } from '@/utils/urls'

import { Routes } from '@/config/routes'
import BookGallery from '@/components/book-gallery'
import { DataCards } from '@/components/data-cards'
import { PageTitle } from '@/components/page-title'
import { TopAlbums } from '@/components/top-albums'
import { TopTracks } from '@/components/top-tracks'

const title = 'Dashboard'
const description = 'Here are some of the latest statistics and insights for my own vein interest.'

type Props = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export async function generateMetadata(_: Props, parent: any): Promise<Metadata> {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(Routes.Contact),
    },
    openGraph: {
      ...previousOpenGraph,
      url: absoluteUrl(Routes.Contact),
      title,
      description,
    },
    twitter: {
      ...previousTwitter,
      title,
      description,
    },
  }
}

export default function Page() {
  return (
    <>
      <PageTitle title={title} description={description} fromColor='from-red-400' toColor='to-blue-500' />
      <DataCards />
      <BookGallery />
      <TopTracks />
      <TopAlbums />
    </>
  )
}
