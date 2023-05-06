import { styled } from "stitches";

import Image from "@infra/Image";

export const Container = styled("section", {
  width: "100%",
  maxWidth: "500px",

  display: "flex",
  alignItems: "center",

  marginTop: "30px",

  padding: "10px",

  backgroundColor: "#fffffff",

  boxShadow: "0px 0px 11px rgba(112, 112, 112, 0.3)",

  borderRadius: "10px",

  "@bp700": {
    maxWidth: "450px",
  },

  "@bp500": {
    maxWidth: "220px",

    flexDirection: "column",

    padding: "15px",
  },
});

export const Img = styled(Image, {
  borderRadius: "10px",

  display: "flex",

  boxShadow: "0px 0px 11px rgba(112, 112, 112, 0.3)",

  "@bp700": {
    width: "130px",
    height: "130px",
  },

  "@bp500": {
    width: "100%",
    height: "auto",
  },
});

export const Description = styled("p", {
  fontSize: "17px",
  fontWeight: 500,

  marginLeft: "15px",

  "@bp700": {
    fontSize: "15px",
  },

  "@bp500": {
    marginTop: "15px",

    marginLeft: 0,
  },
});
