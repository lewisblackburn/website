import { format, parseISO } from "date-fns";
import { BlurImage, VisuallyHidden } from "~/components";
import SquareGlass from "~/components/vectors/SquareGlass";
import GitHubLogo from "~/components/vectors/GitHubLogo";
import TwitterLogo from "~/components/vectors/TwitterLogo";

import { css } from "~/styles";
import { container, stack, text } from "~/styles/primitives";
import themes from "~/styles/themes";

import type { PostProperties, PostWithCover } from "~/types/blog.type";
import Image from "next/image";
import Link from "next/link";

const styles = {
  header: css({
    pt: "$8",
    "@lg": { pt: "$12" },
  })(),
  container: container({
    size: "small",
    css: {
      "@sm": {
        display: "grid",
        alignItems: "center",
      },
    },
  }),
  postDetails: css({
    my: "$6",
    "@sm": {
      mr: "$4",
    },
  })(),
  postTitle: text({
    size: {
      "@initial": "xl",
      "@md": "2xl",
      "@lg": "3xl",
    },
    leading: "tight",
    weight: "extrabold",
  }),
  postSnippet: text({
    size: {
      "@initial": "base",
      "@md": "lg",
      "@lg": "xl",
    },
    css: {
      mt: "$2",
      xColorOpacity: 0.5,
      xColor: "$fg1",
      maxWidth: "35ch",
    },
  }),
  postAuthor: stack({
    dir: "row",
    y: "center",
  }),
  authorDetails: stack({
    dir: "row",
    css: {
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
  }),
  authorPicture: css({
    position: "relative",
    height: 38,
    width: 38,
    boxShadow: "0 0px 0px 2px rgb($rgb$bg), 0 0 0px 4px rgb($rgb$brand)",
    borderRadius: "$full",
    marginRight: "1rem",
    display: "inherit",
    overflow: "hidden",
    "@lg": { width: 48, height: 48 },
  })(),
  authorName: text({
    weight: "medium",
    leading: "none",
    size: {
      "@initial": "sm",
      "@lg": "base",
    },
  }),
  socials: stack({
    css: {
      a: {
        display: "inline-block",
        padding: "$2",
        xColor: "$fg3",
        "&.twitter:hover": { color: "rgb(29, 155, 240)" },
        "&.github:hover": {
          [`.${themes.dark} &`]: { color: "rgb(255, 255, 255)" },
          [`.${themes.light} &`]: { color: "rgb(0, 0, 0)" },
        },
      },
      svg: {
        width: 16,
        height: 16,
      },
    },
  }),
  publishedDate: text({
    leading: "none",
    weight: "medium",
    size: {
      "@initial": "xs",
      "@lg": "sm",
    },
    css: {
      xColor: "$fg1",
      xColorOpacity: 0.5,
    },
  }),
  cover: css({
    position: "relative",
    pointerEvents: "none",
    margin: "$10 auto 0",
    width: "100%",
    height: 145,
    maxWidth: "88vw",
    maxHeight: "88vw",
    zIndex: 1,
    "@md": {
      width: "80%",
      height: 235,
    },
    "@lg": {
      width: "70%",
      height: 340,
    },
    "@3xl": {
      maxWidth: "44vw",
      maxHeight: "44vw",
    },
  })(),
  img: css({
    objectFit: "cover",
    borderRadius: "$2xl",
    transitionDuration: "0.5s",
    transitionTimingFunction: "ease-in-out",
  })(),
  imgBlur: css({
    willChange: "transform, filter, opacity",
    transform: "scale(1.05)",
    filter: "blur(8px) saturate(0) !important",
    opacity: 0.1,
  })(),
  breadcrumbs: css({
    display: "flex",
    alignItems: "center",
    gap: "$2",
    fontSize: "$xs",
    xColor: "$fg1",
    xColorOpacity: 0.5,
  })(),
  link: css({
    textTransform: "capitalize",
    cursor: "pointer",
    transition: "color 0.2s ease-in",
    "&:hover": {
      xColor: "$accent",
      transition: "color 0.2s ease-out",
    },
  })(),
};

const Breadcrumbs = ({
  title,
  tags,
}: Pick<PostProperties, "title" | "tags">) => (
  <div className={styles.breadcrumbs}>
    <Link href="/">
      <a className={styles.link}>Home</a>
    </Link>
    <span>{" > "}</span>
    <Link href="/blog">
      <a className={styles.link}>Blog</a>
    </Link>
    <span>{" > "}</span>
    <Link href="/blog">
      <a className={styles.link}>{tags && tags[0]}</a>
    </Link>
    <span>{" > "}</span>
    <a className={styles.link}>{title}</a>
  </div>
);

const Hero = ({ title, summary, tags, publishedAt, cover }: PostWithCover) => {
  const { width, height, ...img } = cover;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Breadcrumbs title={title} tags={tags} />
        <div className={styles.postDetails}>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postSnippet}>{summary}</p>
        </div>
        <div className={styles.postAuthor}>
          <div className={styles.authorDetails}>
            <strong className={styles.authorName}>Lewis Blackburn</strong>
            <div className={styles.socials}>
              <a
                className="twitter"
                href="https://twitter.com/zxffo"
                target="_blank"
                rel="noreferrer"
              >
                <VisuallyHidden>zxffo&apos;s Twitter</VisuallyHidden>
                <TwitterLogo />
              </a>
              <a
                className="github"
                href="https://github.com/lewisblackburn"
                target="_blank"
                rel="noreferrer"
              >
                <VisuallyHidden>zxffo&apos;s GitHub</VisuallyHidden>
                <GitHubLogo />
              </a>
            </div>
          </div>
        </div>
      </div>
      <figure className={styles.cover}>
        <BlurImage
          {...img}
          className={styles.img}
          blurClassName={styles.imgBlur}
          alt={`${title} Cover Image`}
          layout="fill"
          sizes="50vw"
          priority={true}
        />
      </figure>
    </header>
  );
};

export default Hero;
