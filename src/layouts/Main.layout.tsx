import React from "react";
import { Header, Footer } from "~/components";

import { stack } from "~/styles/primitives";

const main = stack({
  dir: "col",
  grow: true,
  css: {
    overflow: "hidden",
  },
});

interface MainLayoutOptions {
  footer?: boolean;
}

const MainLayout = ({
  children,
  footer = true,
}: React.PropsWithChildren<MainLayoutOptions>) => {
  return (
    <>
      {children}
      {footer ? <Footer /> : null}
    </>
  );
};

export const MainWrapper: React.FC<{ title?: string }> = ({
  title = "Home",
  children,
}) => {
  return (
    <main className={main}>
      <Header title={title} />
      {children}
    </main>
  );
};

export const attachMainLayout =
  ({ footer }: MainLayoutOptions = {}) =>
  // eslint-disable-next-line react/display-name
  (page: React.ReactNode) => {
    return <MainLayout footer={footer}>{page}</MainLayout>;
  };

export default MainLayout;
