import { css } from "~/styles";
import { stack } from "~/styles/primitives";
import {
  AlacrittyIcon,
  DiscordIcon,
  FirefoxIcon,
  PostmanIcon,
  RaycastIcon,
  SpotifyIcon,
  TablePlusIcon,
} from "../icons";

const styles = css({
  display: "grid",
  placeItems: "center",
  width: "64px",
  height: "64px",
  borderRadius: "0.3rem",
  xBackground: "$brand",
  xBackgroundOpacity: 0.05,
  borderColor: "rgb($rgb$brand / 0.1)",
  cursor: "pointer",
  "&:hover": {
    scale: "1.1",
    transitionDuration: "0.1s",
  },
})();

export const Icon = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className={styles}
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

const ApplicationsDemo = () => {
  return (
    <div
      className={stack({
        dir: "row",
        css: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gridGap: "1rem",
          padding: "$4",
        },
      })}
    >
      <Icon href="https://node.com">
        <DiscordIcon />
      </Icon>
      <Icon href="https://firefox.com">
        <FirefoxIcon />
      </Icon>
      <Icon href="https://raycast.com">
        <RaycastIcon />
      </Icon>
      <Icon href="https://spotify.com">
        <SpotifyIcon />
      </Icon>
      <Icon href="https://alacritty.org">
        <AlacrittyIcon />
      </Icon>
      <Icon href="https://tableplus.com">
        <TablePlusIcon />
      </Icon>
      <Icon href="https://postman.com">
        <PostmanIcon />
      </Icon>
    </div>
  );
};

export default ApplicationsDemo;
