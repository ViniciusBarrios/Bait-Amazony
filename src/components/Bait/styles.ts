import { styled } from "stitches";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginTop: "40px",

  "@bp700": {
    padding: "0 20px",
  },
});

export const Title = styled("h3", {
  fontSize: "35px",
  fontWeight: 600,

  color: "#71C7D8",

  textAlign: "center",

  "@bp500": {
    fontSize: "28px",
  },
});

export const Text = styled("p", {
  width: "100%",

  fontSize: "18px",
  fontWeight: 500,

  marginTop: "20px",

  "> strong": {
    fontWeight: 600,
    textDecoration: "underline",

    color: "#71C7D8",
  },
});
