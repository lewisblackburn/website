import { allQuotes, Quote } from "contentlayer/generated";
import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import { Article, MDXComponents } from "~/components";
import { ArticleNoElipsis } from "~/components/Article";
import { attachMainLayout, MainWrapper } from "~/layouts/Main.layout";
import { container } from "~/styles/primitives";

interface PageProps {
  quotes: Quote;
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  const quotes = allQuotes[0];

  return { props: { quotes } };
};

const Quotes = ({ quotes }: PageProps) => {
  const MDXContent = useMDXComponent(quotes.body.code);

  return (
    <MainWrapper title="Quotes">
      <NextSeo title="Quotes" />
      <div
        className={container({
          size: "small",
        })}
      >
        <ArticleNoElipsis>
          <MDXContent components={MDXComponents} />
        </ArticleNoElipsis>
      </div>
    </MainWrapper>
  );
};

Quotes.layout = attachMainLayout();

export default Quotes;
