import { styled } from "stitches";

import { Form } from "@infra/Form";

export const Container = styled(Form, {
  width: "100%",
});

export const Title = styled("h3", {
  fontSize: "32px",
  fontWeight: 600,

  color: "#71C7D8",

  "@bp500": {
    fontSize: "28px",
  },
});

export const SubTitle = styled("h4", {
  fontSize: "20px",
  fontWeight: 500,

  marginTop: "5px",

  color: "#71C7D8",
});

export const Text = styled("p", {
  fontSize: "15px",
  fontWeight: 500,

  marginTop: "10px",

  color: "#71C7D8",
});

export const Flex = styled("div", {
  display: "flex",

  marginTop: "25px",

  "@bp500": {
    flexDirection: "column",
  },
});

export const Button = styled("button", {
  width: "100%",
  height: "55px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  textAlign: "center",

  fontSize: "20px",
  fontWeight: 600,

  backgroundColor: "#71C7D8",
  color: "#ffffff",

  marginTop: "30px",

  borderRadius: "$sm",

  "@bp500": {
    fontSize: "18px",
  },
});
