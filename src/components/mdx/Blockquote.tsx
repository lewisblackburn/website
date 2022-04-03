import { text } from "~/styles/primitives";

const styles = text({
  weight: "light",
  leading: "relaxed",
  tracking: "tight",
  css: {
    cite: {
      letterSpacing: "$normal",
      fontSize: "$xs",
      "@lg": { fontSize: "$base" },
    },
    fontStyle: "italic",
    margin: 0,
    pl: "$4",
    borderLeft: "3px solid transparent",
    borderColor: "rgb($rgb$brand / 0.2)",
  },
});

const Blockquote = ({ children }: { children: React.ReactNode }) => {
  return <blockquote className={styles}>{children}</blockquote>;
};

export default Blockquote;
