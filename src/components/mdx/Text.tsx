import React from "react";
import { text } from "~/styles/primitives";

import type { VariantProps } from "@stitches/core";

type TextProps = VariantProps<typeof text>;

interface Props extends TextProps {
  children: React.ReactNode;
  as: React.ElementType;
  center?: boolean;
}

const Text = ({ children, as, center, ...styles }: Props) => {
  const Component = as || "span";
  return (
    <Component
      className={text({
        css: { textAlign: `${center && "center"}` },
        ...styles,
      })}
    >
      {children}
    </Component>
  );
};

export default Text;
