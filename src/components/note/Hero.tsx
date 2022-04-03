import { css } from "~/styles";
import { stack, text } from "~/styles/primitives";
import { NoteProperties } from "~/types/note.type";

const styles = {
  header: css({
    pt: "$0",
    "@sm": { pt: "$8" },
    "@md": { pb: "$6" },
    "@lg": { pt: "$12", pb: "$8" },
  })(),
  container: stack({
    dir: "col",
    css: {
      display: "grid",
      placeItems: "center",
    },
  }),
  postDetails: stack({
    dir: "col",
    css: {
      display: "grid",
      placeItems: "center",
      my: "$6",
      "@sm": {
        mr: "$4",
      },
    },
  }),
  postTitle: text({
    size: {
      "@initial": "3xl",
      "@md": "4xl",
      "@lg": "5xl",
    },
    leading: "tight",
    weight: "extrabold",
    css: { maxWidth: "15ch" },
  }),
  postSnippet: text({
    size: {
      "@initial": "base",
      "@md": "lg",
      "@lg": "xl",
    },
    css: {
      textAlign: "center",
      mt: "$2",
      xColorOpacity: 0.5,
      xColor: "$fg1",
      maxWidth: "35ch",
    },
  }),
  cover: css({
    position: "relative",
    pointerEvents: "none",
    margin: "$10 auto 0",
    width: 280,
    height: 280,
    maxWidth: "88vw",
    maxHeight: "88vw",
    zIndex: 1,
    "@sm": {
      mt: "$0",
      width: 300,
      height: 300,
    },
    "@md": {
      width: 340,
      height: 340,
      maxWidth: "40vw",
      maxHeight: "40vw",
      margin: 0,
    },
    "@lg": {
      width: 420,
      height: 420,
    },
  })(),
  imgOuter: css({
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "3.75%",
    overflow: "hidden",
  })(),
  img: css({
    transitionDuration: "0.5s",
    transitionTimingFunction: "ease-in-out",
  })(),
  imgBlur: css({
    willChange: "transform, filter, opacity",
    transform: "scale(1.05)",
    filter: "blur(8px) saturate(0) !important",
    opacity: 0.1,
  })(),
};

const Hero = ({ title, summary }: NoteProperties) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.postDetails}>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postSnippet}>{summary}</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
