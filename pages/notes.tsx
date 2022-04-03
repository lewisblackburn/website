import { allNotes } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import { MDXComponents } from "~/components";
import { ArticleNoElipsis } from "~/components/Article";
import { Hero } from "~/components/note";
import { attachMainLayout, MainWrapper } from "~/layouts/Main.layout";
import { container } from "~/styles/primitives";
import { NoteWithBody } from "~/types/note.type";

interface PageProps {
  notes: NoteWithBody[];
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  const notes = allNotes.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return { props: { notes } };
};

const Notes = ({ notes }: PageProps) => {
  return (
    <MainWrapper title="Notes">
      <NextSeo title="Notes" />
      {notes.map((note) => {
        const MDXContent = useMDXComponent(note.body.code);

        return (
          <>
            <Hero {...note} />
            <div className={container({ size: "small", css: { mb: "$32" } })}>
              <ArticleNoElipsis>
                <MDXContent components={MDXComponents} />
              </ArticleNoElipsis>
            </div>
          </>
        );
      })}
    </MainWrapper>
  );
};

Notes.layout = attachMainLayout();

export default Notes;
