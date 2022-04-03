import { NextSeo } from "next-seo";
import Link from "next/link";
import { MainWrapper } from "~/layouts/Main.layout";
import { container, stack, text } from "~/styles/primitives";
import Blockquote from "./mdx/Blockquote";

const styles = {
  quote: stack({
    dir: "col",
    css: {
      gap: "$4",
    },
  }),
  title: text({
    weight: "medium",
    size: "lg",
  }),
};

interface Props {
  status: number;
}

const Error = ({ status }: Props) => {
  return (
    <MainWrapper title={status.toString().trim() || "Error"}>
      <NextSeo title="404" />

      <div
        className={container({
          size: "small",
        })}
      >
        {status === 404 ? (
          <div className={styles.quote}>
            <h1 className={styles.title}>This page cannot be found.</h1>

            <br />
            <Blockquote>
              <p>
                It doesn’t exist, it never has. I’m nostalgic for a place that
                never existed.
              </p>

              <br />
              <footer>
                — Aaron Swartz,{" "}
                <Link href="http://www.aaronsw.com/weblog/visitingmit">
                  <a>
                    <cite>I Love the University</cite>
                  </a>
                </Link>
              </footer>
            </Blockquote>
          </div>
        ) : (
          <section>
            <span>{status || "?"}</span>
            <p>An error occurred.</p>
          </section>
        )}
      </div>
    </MainWrapper>
  );
};

export default Error;
