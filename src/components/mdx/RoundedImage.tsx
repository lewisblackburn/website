import React from "react";
import Image, { ImageProps } from "next/image";
import { css } from "~/styles";

const styles = css({
  borderRadius: "$2xl",
})();

const RoundedImage = (props: ImageProps) => {
  return <Image className={styles} alt={props.alt} {...props} />;
};

export default RoundedImage;
