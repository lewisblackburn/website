import { format, parseISO } from "date-fns";

import { stack, text } from "~/styles/primitives";

const styles = {
  outer: stack({
    dir: "col",
    css: {
      mt: "$2",
      padding: "$4",
      borderRadius: "$xl",
      border: "1px solid transparent",
      cursor: "pointer",
      "&:first-child": {
        mt: 0,
      },
      "&:hover": {
        xBackground: "$brand",
        xBackgroundOpacity: 0.05,
        borderColor: "rgb($rgb$brand / 0.1)",
        h2: {
          xColor: "$brand",
        },
      },
      "@sm": {
        padding: "$6",
      },
    },
  }),
  message: text({
    weight: "bold",
    leading: "snug",
    size: {
      "@initial": "xl",
      "@sm": "2xl",
    },
    css: { xColor: "$fg1" },
  }),
  commits: text({
    size: "base",
    leading: "relaxed",
    css: { xColor: "$fg2" },
  }),
  date: text({
    weight: "medium",
    size: {
      "@initial": "xs",
      "@sm": "sm",
    },
    css: { mb: "$2", xColor: "$fg3" },
  }),
};

const CommitCard = ({ message, name, date, href }: any) => {
  const dateString = format(parseISO(date), "yyyy-MM-dd");

  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.outer}>
      <time className={styles.date} dateTime={dateString}>
        {format(parseISO(dateString), "LLLL d, yyyy")}
      </time>
      <h2 className={styles.message}>{message}</h2>
      <p className={styles.commits}>
        {name} {name > 1 || name == 0 ? "comments" : "comment"}
      </p>
    </a>
  );
};

export default CommitCard;
