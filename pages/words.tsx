import { allWords } from "contentlayer/generated";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { attachMainLayout, MainWrapper } from "~/layouts/Main.layout";
import { css } from "~/styles";
import { container, stack } from "~/styles/primitives";
import { WordProperties } from "~/types/word.type";

const styles = {
  title: css({
    fontWeight: "$medium",
  })(),
  words: stack({
    dir: "col",
    css: {
      gap: "$10",
      my: "$10",
    },
  }),
  text: css({
    fontWeight: "$light",
  })(),
};

interface PageProps {
  words: WordProperties[];
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  const words = allWords;

  return { props: { words } };
};

const Words = ({ words }: PageProps) => {
  return (
    <MainWrapper title="Words">
      <div
        className={container({
          size: "small",
          css: { my: "$4" },
        })}
      >
        <NextSeo title="Words" />
        <h1 className={styles.title}>
          Words that I read but didn{"'"}t understand.
        </h1>
        <div className={styles.words}>
          {words.map((word) => (
            <div key={word.word} className={stack({ dir: "col" })}>
              <strong>{word.word}</strong>
              <em className={styles.text}>{word.pos}</em>
              <p className={styles.text}>{word.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

Words.layout = attachMainLayout();

export default Words;
