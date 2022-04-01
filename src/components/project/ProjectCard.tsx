import Link from "next/link";
import { css } from "~/styles";
import { stack, text } from "~/styles/primitives";
import { ProjectProperties } from "~/types/project.type";

const styles = {
  outer: stack({
    dir: "row",
    density: "spaceBetween",
    css: {
      alignItems: "center",
      justifyContent: "center",
      gap: "$3",
      fontWeight: "$light",
      "&:hover": {
        xBackground: "$lighterGray",
      },
      p: "$4",
      mx: "-$4",
      borderRadius: "$md",
    },
  }),
  inner: stack({
    dir: "row",
    css: {
      gap: "$3",
    },
  }),
  title: text({
    css: {
      minWidth: "fit-content",
    },
  }),
  summary: text({
    ellipsis: "true",
    css: {
      xColor: "$alphaGray",
      maxWidth: "$lg",
    },
  }),
  dots: css({
    borderTop: "2px dotted Gray",
    width: "$full",
  })(),
  publishedAt: text({
    tracking: "widest",
    family: "mono",
    css: {
      xColor: "$alphaGray",
    },
  }),
};

const ProjectCard = ({
  title,
  description,
  publishedAt,
  path,
  slug,
}: ProjectProperties) => {
  return (
    <Link href={`/${path}/${slug}`}>
      <a className={styles.outer}>
        <div className={styles.inner}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.summary}>{description}</p>
        </div>
        <div className={styles.dots} />
        <p className={styles.publishedAt}>{publishedAt}</p>
      </a>
    </Link>
  );
};

export default ProjectCard;
