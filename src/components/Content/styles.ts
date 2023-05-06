import { styled } from "stitches";

export const Container = styled("div", {
  marginTop: "30px",

  padding: "0 10px",

  "@bp700": {
    padding: "0 20px",
  },
});

export const Title = styled("h1", {
  fontSize: "50px",
  fontWeight: 600,

  color: "#71C7D8",

  "@bp700": {
    fontSize: "40px",
  },

  "@bp500": {
    fontSize: "33px",
  },
});

export const SubTitle = styled("h2", {
  fontSize: "22px",
  fontWeight: 500,

  marginTop: "10px",

  "@bp700": {
    fontSize: "19px",
  },

  "@bp500": {
    fontSize: "17px",
  },
});

export const Text = styled("p", {
  fontSize: "17px",
  fontWeight: 500,

  marginTop: "20px",

  "@bp700": {
    fontSize: "16px",
  },
});
