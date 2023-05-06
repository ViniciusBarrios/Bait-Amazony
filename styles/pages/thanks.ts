import { styled } from "stitches";

export const Warning = styled("div", {
  width: "100%",

  backgroundColor: "#FB5640",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  textAlign: "center",

  padding: "15px 20px",

  "> p": {
    fontSize: "18px",
    fontWeight: 500,

    color: "$white",
  },
});

export const Container = styled("div", {
  width: "100%",
  maxWidth: "900px",

  margin: "0 auto",

  padding: "20px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Title = styled("h1", {
  fontSize: "40px",
  fontWeight: 500,

  marginTop: "10px",

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

  "> strong": {
    fontWeight: 600,
    textDecoration: "underline",

    color: "#71C7D8",
  },

  "@bp500": {
    fontSize: "17px",
  },
});

export const CTA = styled("a", {
  fontSize: "25px",
  fontWeight: 500,

  borderRadius: "$full",

  padding: "13px 40px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  textAlign: "center",

  backgroundColor: "#71C7D8",
  color: "$white",
});
