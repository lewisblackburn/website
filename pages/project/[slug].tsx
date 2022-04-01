import { NextSeo } from "next-seo";

import { attachMainLayout, MainWrapper } from "~/layouts/Main.layout";
import { MDXComponents } from "~/components";

import { container } from "~/styles/primitives";

import { pick } from "contentlayer/client";
import { withBlurPlaceholder } from "~/lib/plaiceholder";

import type { GetStaticProps } from "next";
import { ProjectWithCoverAndBody } from "~/types/project.type";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allProjects } from "contentlayer/generated";
import { Hero } from "~/components/project";
import { ArticleNoElipsis } from "~/components/Article";

const ProjectItem = ({ body, ...project }: ProjectWithCoverAndBody) => {
  const MDXContent = useMDXComponent(body.code);

  return (
    <MainWrapper>
      <NextSeo
        title={project.title}
        description={project.description}
        canonical={`https://lew.sh/project/${project.slug}`}
        openGraph={{
          url: `https://lew.sh/project/${project.slug}`,
          images: [
            {
              ...project.cover,
              url: `https://lew.sh{project.cover.src}`,
            },
          ],
        }}
      />
      <Hero {...project} />
      <div className={container({ size: "small" })}>
        <ArticleNoElipsis>
          <MDXContent components={MDXComponents} />
        </ArticleNoElipsis>
      </div>
    </MainWrapper>
  );
};

ProjectItem.layout = attachMainLayout();

export const getStaticPaths = () => {
  return {
    paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectWithCoverAndBody> = async ({
  params,
}) => {
  const project = allProjects.find((p) => p.slug === params?.slug)!;
  const { path, slug, cover: image } = project;

  const cover = await withBlurPlaceholder(`/images/${path}/${slug}/${image}`);

  return {
    props: {
      ...pick(project, [
        "title",
        "description",
        "publishedAt",
        "path",
        "slug",
        "body",
      ]),
      cover,
    },
  };
};

export default ProjectItem;
