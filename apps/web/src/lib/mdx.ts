import matter from 'gray-matter'
import fs from 'node:fs'
import path from 'node:path'
import getReadingTime from 'reading-time'

export type ProjectMetadata = {
  name: string
  description: string
  homepage: string
  github: string
  techstack: Array<{ label: string }>
  selected: boolean
  slug: string
}

export type BlogMetadata = {
  title: string
  date: string
  modifiedTime: string
  summary: string
  slug: string
  readingTime: ReturnType<typeof getReadingTime>
}

export type PageMetadata = {
  slug: string
}

const mdxFilesRootDirectory = path.join(process.cwd(), 'src', 'content')

const readFile = (filePath: string) => {
  return fs.readFileSync(filePath, 'utf8')
}

const readMDXFile = <T>(filePath: string) => {
  const rawContent = readFile(filePath)
  const { content, data } = matter(rawContent)
  const readingTime = getReadingTime(content)

  return {
    content,
    metadata: {
      ...(data as T),
      readingTime
    }
  }
}

type GetAllPostsOptions = {
  limit?: number
}

export const getPage = <T>(filePath: string) => {
  const fullPath = path.join(mdxFilesRootDirectory, `${filePath}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const { content, metadata } = readMDXFile<T>(fullPath)

  return {
    content,
    metadata: {
      ...metadata,
      slug: filePath.split('/').pop()
    } as T
  }
}

export const getAllPages = <T>(
  directoryPath: string,
  options: GetAllPostsOptions = {}
) => {
  const { limit } = options

  const pagesDirectory = path.join(mdxFilesRootDirectory, directoryPath)

  const fileNames = fs.readdirSync(pagesDirectory)

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(pagesDirectory, fileName)
      const { metadata } = readMDXFile<T>(fullPath)

      return {
        ...metadata,
        slug
      } as T
    })
    .slice(0, limit)
}
