import Link from "next/link";
import { memo } from "react";

import { NowPlaying } from "~/components";

import { css } from "~/styles";
import { container, stack, text } from "~/styles/primitives";

const styles = {
  footer: css({
    pt: "$32",
    pb: "$8",
    overflow: "hidden",
  })(),
  links: css({
    display: "flex",
    alignSelf: "center",
    width: "100%",
    mt: "$16",
    "@sm": { mt: "$0" },
    ul: {
      display: "flex",
    },
    li: {},
    a: {
      px: "$4",
      py: "$5",
      xColor: "$fg3",
      xColorOpacity: 0.7,
      "&:hover": {
        xColorOpacity: 0.4,
      },
    },
  })(),
  credit: text({
    size: "xs",
    css: {
      mt: "$4",
      xColor: "$fg3",
      xColorOpacity: "0.4",
      "@sm": {
        mt: "$8",
      },
      a: {
        py: "$5",
        "&:hover": {
          xColor: "$brand",
        },
      },
    },
  }),
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={container({ size: "small" })}>
        <section
          className={stack({
            y: "top",
            dir: {
              "@initial": "col-reverse",
              "@sm": "row",
            },
          })}
        >
          <div className={styles.links}>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <a
                  className="github"
                  href="https://github.com/lewisblackburn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="https://twitter.com/zxffo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <NowPlaying />
        </section>
        <p className={styles.credit}>
          <span>© Lewis Blackburn • </span>
          <a
            href="https://github.com/lewisblackburn/website"
            target="_blank"
            rel="noreferrer"
          >
            View source code
          </a>
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
