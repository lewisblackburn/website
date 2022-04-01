import React from "react";
import { css } from "~/styles";

const styles = css({
  display: "grid",
  placeItems: "center",
  xBackground: "$playground",
  borderRadius: "0.3em",
  py: "$24",
})();

const Playground = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles}>{children}</div>;
};

export default Playground;
