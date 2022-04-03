import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from "kbar";
import { useRouter } from "next/router";
import React from "react";
import usePostsActions from "~/hooks/usePostsActions";
import useProjetsActions from "~/hooks/useProjectsActions";
import { saveTheme } from "~/hooks/useTheme";
import useWordsActions from "~/hooks/useWordsActions";
import { css } from "~/styles";
import themes, { allThemeClass, ThemeName } from "~/styles/themes";
import CopyIcon from "./icons/Copy.icon";
import SendIcon from "./icons/Send.icon";
import TerminalIcon from "./icons/Terminal.icon";
import GitHubLogo from "./vectors/GitHubLogo";
import TwitterLogo from "./vectors/TwitterLogo";

const styles = {
  positioner: css({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    inset: "0px",
    padding: "14vh 16px 16px",
    background: "rgba(0, 0, 0, .8)",
    boxSizing: "border-box",
    zIndex: 100,
  })(),
  search: css({
    padding: "12px 16px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    border: "none",
    margin: 0,
    xBackground: "$search",
    xColor: "$searchText",
  })(),
  groupName: css({
    padding: "8px 16px",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    xBackground: "$groupName",
    xColor: "$fg1",
  })(),
  kbd: css({
    xBackground: "$kbd",
    xColor: "$fg1",
    padding: "4px 8px",
    textTransform: "uppercase",
    borderRadius: "$md",
  })(),
  shortcut: css({
    display: "grid",
    gridAutoFlow: "column",
    gap: "4px",
  })(),
  box: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 16px",
    xColor: "$fg3",
  })(),
  activeBox: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 16px",
    xBackground: "$activeBox",
    xColor: "$fg3",
  })(),
  action: css({
    display: "flex",
    gap: "8px",
    alignItems: "center",
    xColor: "$fg3",
  })(),
  actionRow: css({
    display: "flex",
    flexDirection: "column",
    xColor: "$fg3",
  })(),
  animator: css({
    xBackground: "$animator",
    maxWidth: "600px",
    width: "100%",
    xColor: "$fg1",
    borderRadius: "8px",
    overflow: "hidden",
  })(),
};

export default function CommandBar(props: any) {
  return (
    <CommandBarProvider>
      <CommandBarPortal />
      {props.children}
    </CommandBarProvider>
  );
}

const CommandBarPortal = () => {
  usePostsActions();
  useProjetsActions();
  useWordsActions();

  return (
    <KBarPortal>
      <KBarPositioner className={styles.positioner}>
        <KBarAnimator className={styles.animator}>
          <KBarSearch
            className={styles.search}
            placeholder="Type a command or search…"
          />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

const CommandBarProvider: React.FC = ({ children }) => {
  const router = useRouter();

  const applyTheme = (theme: ThemeName) => {
    const htmlClass = document.documentElement.classList;

    htmlClass.remove(...allThemeClass);
    htmlClass.add(themes[theme].className);

    saveTheme(theme);
  };

  const actions = [
    {
      id: "copy",
      name: "Copy URL",
      shortcut: ["u"],
      keywords: "copy-url",
      section: "General",
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: <CopyIcon width={16} height={16} />,
    },
    {
      id: "email",
      name: "Send Email",
      shortcut: ["e"],
      keywords: "send-email",
      section: "General",
      perform: () => window.open("mailto:lewisblackburn10@gmail.com", "_blank"),
      icon: <SendIcon width={16} height={16} />,
    },
    {
      id: "source",
      name: "View Source",
      shortcut: ["s"],
      keywords: "view-source",
      section: "General",
      perform: () =>
        window.open("https://github.com/lewisblackburn/website", "_blank"),
      icon: <TerminalIcon width={16} height={16} />,
    },
    {
      id: "home",
      name: "Home",
      shortcut: ["g", "h"],
      keywords: "go-home",
      section: "Go To",
      perform: () => router.push("/"),
      icon: "",
    },
    {
      id: "blog",
      name: "Blog",
      shortcut: ["g", "b"],
      keywords: "go-blog",
      section: "Go To",
      perform: () => router.push("/blog"),
      icon: "",
    },
    {
      id: "changelog",
      name: "Changelog",
      shortcut: ["g", "c"],
      keywords: "go-changelog",
      section: "Go To",
      perform: () => router.push("/changelog"),
      icon: "",
    },
    {
      id: "words",
      name: "Words",
      shortcut: ["g", "w"],
      keywords: "go-words",
      section: "Go To",
      perform: () => router.push("/words"),
      icon: "",
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["f", "g"],
      keywords: "go-github",
      section: "Follow",
      perform: () => window.open("https://github.com/lewisblackburn", "_blank"),
      icon: <GitHubLogo width={16} height={16} />,
    },
    {
      id: "theme",
      name: "Theme",
      shortcut: [],
      keywords: "change theme",
      section: "Preferences",
    },
    {
      id: "light",
      name: "Light",
      shortcut: [],
      keywords: "light theme",
      perform: () => applyTheme("light"),
      parent: "theme",
      section: "Preferences",
    },
    {
      id: "dark",
      name: "Dark",
      shortcut: [],
      keywords: "dark theme",
      perform: () => applyTheme("dark"),
      parent: "theme",
      section: "Preferences",
    },
    {
      id: "twitter",
      name: "Twitter",
      shortcut: ["f", "t"],
      keywords: "go-twitter",
      section: "Follow",
      perform: () => window.open("https://twitter.com/zxffo", "_blank"),
      icon: <TwitterLogo width={16} height={16} />,
    },
  ];

  return <KBarProvider actions={actions}>{children}</KBarProvider>;
};

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className={styles.groupName}>{item}</div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
}

// eslint-disable-next-line react/display-name
const ResultItem = React.forwardRef(({ action, active }: any, ref) => {
  return (
    // @ts-ignore
    <div className={active ? styles.activeBox : styles.box} ref={ref}>
      <div className={styles.action}>
        {action.icon && action.icon}
        <div className={styles.actionRow}>
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div className={styles.shortcut} aria-hidden>
          {action.shortcut.map((shortcut: any) => (
            <div className={styles.kbd} key={shortcut}>
              {shortcut}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
});
