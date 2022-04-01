import React from "react";
import { prism } from "~/styles/primitives";

const styles = prism({ theme: "nord" });

const Pre = ({ children }: { children: React.ReactNode }) => {
  return <pre className={styles}>{children}</pre>;
};

export default Pre;
