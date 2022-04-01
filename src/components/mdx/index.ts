import * as playgrounds from "../playgrounds";
import Blockquote from "./Blockquote";
import Callout from "./Callout";
import Playground from "./Playground";
import Pre from "./Pre";
import RoundedImage from "./RoundedImage";
import Tab from "./Tab";
import Text from "./Text";

const customComponents = {
  Image: RoundedImage,
  Text,
  Callout,
  Tab,
  Playground,
};

const MDXComponents = {
  pre: Pre,
  blockquote: Blockquote,
  ...customComponents,
  ...playgrounds,
};

export default MDXComponents;
