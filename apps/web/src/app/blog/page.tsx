import type { Metadata, ResolvingMetadata } from 'next'

import FilteredPosts from '@/components/filtered-posts'
import PageTitle from '@/components/page-title'
import { SITE_URL } from '@/lib/constants'
import { type BlogMetadata, getAllPages } from '@/lib/mdx'

const title = 'Blog'
const description =
  'This is the blog of Lewis Blackburn, a software engineer from the UK. I write articles about software and share knowledge.'

type BlogPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/blog`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${SITE_URL}/blog`,
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

const BlogPage = () => {
  const posts = getAllPages<BlogMetadata>('blog').sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <>
      <PageTitle
        title='Blog'
        description={`I share my antics and musings about films and programming in article form. I have written ${posts.length} articles so far.`}
      />
      <FilteredPosts posts={posts} />
    </>
  )
}

export default BlogPage
