import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

const Tag = defineDocumentType(() => ({
  name: "Tag",
  filePathPattern: "tags/*.md",
  bodyType: "none",
  fields: {
    title: { type: "string", required: true },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  contentType: "mdx",
  filePathPattern: `blog/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    cover: { type: "string", required: true },
    tags: { type: "list", of: Tag },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileDir,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  contentType: "mdx",
  filePathPattern: `project/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    cover: { type: "string", required: true },
    position: { type: "number", required: true },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileDir,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Word = defineDocumentType(() => ({
  name: "Word",
  contentType: "mdx",
  filePathPattern: `word/*.mdx`,
  fields: {
    word: { type: "string", required: true },
    pos: { type: "string", required: true },
    pronunciation: { type: "string" },
    definition: { type: "string", required: true },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileDir,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Note = defineDocumentType(() => ({
  name: "Note",
  contentType: "mdx",
  filePathPattern: `note/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileDir,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, Project, Tag, Word, Note],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});
