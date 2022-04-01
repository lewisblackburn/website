import { prose } from "~/styles/primitives";

interface Props {}

const Article = (props: React.PropsWithChildren<Props>) => {
  return (
    <article
      className={prose({
        size: {
          "@initial": "base",
          "@lg": "lg",
        },
      })}
    >
      {props.children}
    </article>
  );
};

export const ArticleNoElipsis = (props: React.PropsWithChildren<Props>) => {
  return (
    <article
      className={prose({
        size: {
          "@initial": "base",
          "@lg": "lg",
        },
        css: {
          "&:before": {
            display: "none",
          },
        },
      })}
    >
      {props.children}
    </article>
  );
};

export default Article;
