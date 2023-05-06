import { styled } from "stitches";

export const Container = styled("div", {
  width: "100%",
  maxWidth: "600px",

  display: "flex",

  border: "2px solid #E5C6CE",

  padding: "25px",

  borderRadius: "20px",

  marginTop: "75px",
});

export const Column = styled("div", {
  position: "relative",

  "@bp800": {
    width: "100% !important",
  },
});

export const Mockup = styled("img", {
  width: "100%",

  position: "absolute",
  top: "50%",
  left: "-50px",

  transform: "translateY(-50%) scale(1.4)",

  "@bp800": {
    position: "initial",
  },
});

export const Title = styled("h3", {
  fontSize: "33px",
  fontWeight: 600,

  padding: "0 2px",

  position: "absolute",
  top: "-49px",
  left: "50%",

  background: "$white",

  transform: "translateX(-50%)",

  color: "#E5C6CE",
});

export const Text = styled("p", {
  fontSize: "15px",
  fontWeight: 500,

  "> .from": {
    position: "relative",

    color: "$black",

    "&::before": {
      content: "",

      width: "100%",
      height: "2px",

      backgroundColor: "#FF0000",

      position: "absolute",
      top: "50%",
      left: 0,
      right: 0,

      transform: "translateY(-50%)",
    },
  },
});
