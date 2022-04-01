import Link from "next/link";
import { memo } from "react";
import { ThemeToggle } from "~/components";
import { css } from "~/styles";
import { container, stack } from "~/styles/primitives";
import VisuallyHidden from "./VisuallyHidden";

const styles = {
  header: stack({
    y: "center",
    density: "spaceBetween",
    css: {
      my: "$4",
      xBackground: "$bg",
      position: "sticky",
      top: 0,
      zIndex: 50,
      height: 50,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: "1px solid transparent",
      borderImage:
        "linear-gradient(to right, rgb($rgb$bg / 5%), rgb($rgb$bg / 80%) 30%, rgb($rgb$bg / 20%) 80%, rgb($rgb$bg / 90%) 90%) 1",
      "@supports (backdrop-filter: saturate(180%) blur(1rem))": {
        xBackgroundOpacity: 0.6,
        backdropFilter: "saturate(180%) blur(1rem)",
      },
      "@lg": { height: 60 },
    },
  }),
  container: `${container({ size: "small" })} ${stack({
    y: "center",
    density: "spaceBetween",
  })}`,
  title: css({
    xColor: "$brand",
    xColorOpacity: 0.5,
    fontSize: "$sm",
  })(),
};

const Header = ({ title }: { title?: string }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.title}>
            <VisuallyHidden>{title}</VisuallyHidden>
            {title}
          </a>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default memo(Header);
