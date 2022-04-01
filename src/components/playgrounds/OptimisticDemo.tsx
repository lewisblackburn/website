import Button from "../Button";

import { css } from "~/styles";
import { stack } from "~/styles/primitives";
import { useState } from "react";

const styles = {
  outer: css({
    display: "grid",
    placeItems: "center",
    gridGap: "$4",
  })(),
  button: stack({
    dir: "col",
    css: {
      py: "$2",
      px: "$6",
      fontSize: "$sm",
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
export const LoadingResponse = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResopnse] = useState("");

  const handleClick = () => {
    setLoading(true);
    setResopnse("Talking to server...");
    setTimeout(() => {
      setResopnse("HTTP 200 OK");
      setLoading(false);
    }, 2000);

    setTimeout(() => {
      setLoading(false);
      setResopnse("");
    }, 3000);
  };

  return (
    <div className={styles.outer}>
      <Button
        className={styles.button}
        style={
          loading
            ? {}
            : response !== ""
            ? { background: "#a3be8c", color: "white" }
            : {}
        }
        onClick={handleClick}
      >
        {loading ? "Loading" : response !== "" ? "Success" : "Click me"}
      </Button>
      {response}
    </div>
  );
};

export const InstantResponse = () => {
  const [_, setLoading] = useState(false);
  const [response, setResopnse] = useState("");

  const handleClick = () => {
    setLoading(true);
    setResopnse("Talking to server...");
    setTimeout(() => {
      setLoading(false);
      setResopnse("HTTP 200 OK");
    }, 2000);

    setTimeout(() => {
      setLoading(false);
      setResopnse("");
    }, 3000);
  };

  return (
    <div className={styles.outer}>
      <Button
        className={styles.button}
        style={response !== "" ? { background: "#a3be8c", color: "white" } : {}}
        onClick={handleClick}
      >
        {response !== "" ? "Success" : "Click me"}
      </Button>
      {response}
    </div>
  );
};
