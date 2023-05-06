import { styled } from "stitches";

import { Form } from "@infra/Form";

export const Container = styled(Form, {
  width: "100%",
  maxWidth: "700px",

  display: "flex",

  backgroundColor: "$form-bg",

  padding: "20px",

  borderRadius: "100px 10px 10px 150px",

  marginTop: "80px",
  marginRight: "-50px",

  "@bp800": {
    maxWidth: "500px",

    borderRadius: "10px",

    marginTop: "40px",
    marginRight: "0 !important",
  },
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

  transform: "translateY(-50%) scale(1.25)",

  "@bp800": {
    position: "initial",
  },
});

export const Title = styled("h3", {
  fontSize: "32px",
  fontWeight: 600,

  color: "#71C7D8",

  "@bp500": {
    fontSize: "28px",
  },
});

export const SubTitle = styled("p", {
  fontSize: "16px",
  fontWeight: 500,

  marginTop: "5px",

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
