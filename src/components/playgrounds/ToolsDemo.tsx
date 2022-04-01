import { stack } from "~/styles/primitives";
import { Icon } from "./ApplicationsDemo";

const ToolsDemo = () => {
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
      <Icon href="https://nodejs.org">node</Icon>
      <Icon href="https://yarnpkg.com">yarn</Icon>
      <Icon href="https://go.dev">go</Icon>
      <Icon href="https://github.com/BurntSushi/ripgrep">rg</Icon>
      <Icon href="https://github.com/x-motemen/ghq">ghq</Icon>
      <Icon href="https://github.com/peco/peco">peco</Icon>
      <Icon href="https://commitizen-tools.github.io/commitizen">cz</Icon>
    </div>
  );
};

export default ToolsDemo;
