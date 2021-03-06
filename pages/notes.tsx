import { allNotes, Note } from "contentlayer/generated";
import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import { MDXComponents } from "~/components";
import { ArticleNoElipsis } from "~/components/Article";
import { attachMainLayout, MainWrapper } from "~/layouts/Main.layout";
import { container } from "~/styles/primitives";

interface PageProps {
  notes: Note;
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  const notes = allNotes[0];

  return { props: { notes } };
};

const Notes = ({ notes }: PageProps) => {
  const MDXContent = useMDXComponent(notes.body.code);

  return (
    <MainWrapper title="Notes">
      <NextSeo title="Notes" />
      <div className={container({ size: "small" })}>
        <ArticleNoElipsis>
          <MDXContent components={MDXComponents} />
        </ArticleNoElipsis>
      </div>
    </MainWrapper>
  );
};

Notes.layout = attachMainLayout();

export default Notes;
