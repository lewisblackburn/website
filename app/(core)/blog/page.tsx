import type { Metadata } from 'next'
import { absoluteUrl } from '@/utils/urls'

import { Routes } from '@/config/routes'
import { getAllBlogPosts } from '@/lib/blog'
import { FilteredPosts } from '@/components/blog/filtered-posts'
import { PageTitle } from '@/components/page-title'

const title = 'Articles'
const description = 'I write about web development, programming, and my personal experiences.'

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
      canonical: absoluteUrl(Routes.Blog),
    },
    openGraph: {
      ...previousOpenGraph,
      url: absoluteUrl(Routes.Blog),
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

export default async function Page() {
  const posts = await getAllBlogPosts()

  return (
    <>
      <PageTitle title={title} description={description} fromColor='from-purple-400' toColor='to-pink-600' />

      <FilteredPosts posts={posts} />
    </>
  )
}
