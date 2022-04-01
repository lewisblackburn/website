import { stack } from "~/styles/primitives";

const styles = {
  outer: stack({
    dir: "col",
    css: {
      py: "$1",
      px: "$3",
      borderRadius: "$md",
      border: "1px solid transparent",
      xBackground: "$brand",
      xBackgroundOpacity: 0.05,
      borderColor: "rgb($rgb$brand / 0.1)",
      "&:hover": {
        xBackgroundOpacity: 0.1,
        borderColor: "rgb($rgb$brand / 0.2)",
      },
    },
  }),
};

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface Props extends ButtonProps {}

const Button = (props: React.PropsWithChildren<Props>) => {
  return (
    <button className={styles.outer} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
