import { styled } from "stitches";

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "800px",

  padding: "30px 20px",
});

export const Header = styled("header", {});

export const Title = styled("h1", {
  fontSize: "35px",
  fontWeight: 500,

  color: "#71C7D8",

  "@bp500": {
    fontSize: "30px",
  },
});

export const SubTitle = styled("h2", {
  fontSize: "18px",
  fontWeight: 500,

  marginTop: "6px",

  "@bp500": {
    fontSize: "16px",
  },
});

export const Content = styled("section", {
  marginTop: "40px",
});

export const Counter = styled("h3", {
  fontSize: "20px",
  fontWeight: 500,

  "@bp500": {
    fontSize: "20px",
  },
});

export const Question = styled("p", {
  fontSize: "25px",

  marginTop: "10px",

  lineHeight: "28px",

  color: "$black",

  "@bp500": {
    fontSize: "22px",
  },
});

export const Options = styled("div", {
  display: "flex",
  flexWrap: "wrap",

  marginTop: "20px",
});

export const Option = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyItems: "flex-start",

  border: "2px solid",

  padding: "15px 35px 15px 15px",

  borderRadius: "$md",

  marginTop: "15px",
  marginRight: "15px",

  "> span": {
    fontSize: "17px",
    fontWeight: 600,
  },

  transition: "150ms",

  "@bp500": {
    width: "100%",

    marginRight: 0,
  },
});

export const Radio = styled("div", {
  width: "20px",
  height: "20px",

  flexShrink: 0,

  border: "2px solid",

  borderRadius: "$full",

  marginRight: "10px",

  transition: "150ms",
});

export const Button = styled("button", {
  fontSize: "17px",
  fontWeight: 600,

  marginTop: "30px",

  padding: "15px 40px",

  background: "#71C7D8",
  color: "$white",

  borderRadius: "$sm",

  "&:hover": {
    opacity: 0.9,
  },

  transition: "200ms",
});

export const Footer = styled("footer", {
  marginTop: "30px",
});

export const Copyright = styled("p", {
  textAlign: "center",

  fontSize: "14px",
  fontWeight: 500,
});
