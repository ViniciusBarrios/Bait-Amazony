import { styled } from "stitches";

export const Container = styled("section", {
  width: "100%",
  height: "100px",

  marginTop: "30px",

  backgroundColor: "#F86060",
  color: "$white",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "$md",

  padding: "10px 20px",

  "@bp700": {
    maxWidth: "500px",
    height: "auto",

    flexDirection: "column",

    padding: "20px",
  },
});

export const Title = styled("h4", {
  fontSize: "30px",
  fontWeight: 600,

  maxWidth: "330px",

  marginRight: "10px",

  "@bp800": {
    fontSize: "25px",

    maxWidth: "275px",
  },

  "@bp700": {
    maxWidth: "none",

    fontSize: "35px",
  },

  "@bp500": {
    fontSize: "27px",
  },

  "@bp400": {
    fontSize: "23px",
  },
});

export const Blocks = styled("div", {
  height: "100%",

  display: "flex",
  alignItems: "center",

  "@bp700": {
    width: "100%",

    marginTop: "20px",
  },
});

export const Block = styled("div", {
  width: "100px",
  height: "100%",

  backgroundColor: "#E84747",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  borderRadius: "$md",

  padding: "15px",

  "> strong": {
    fontSize: "35px",
    fontWeight: 600,
  },

  "> span": {
    fontSize: "13px",
    fontWeight: 600,

    marginTop: "-3px",
  },

  "@bp800": {
    width: "90px",

    "> strong": {
      fontSize: "30px",
    },

    "> span": {
      fontSize: "13px",
    },
  },

  "@bp700": {
    width: "100%",
    height: "100px",

    "> strong": {
      fontSize: "40px",
    },

    "> span": {
      fontSize: "13px",
    },
  },

  "@bp400": {
    height: "80px",

    "> strong": {
      fontSize: "30px",
    },

    "> span": {
      fontSize: "10px",
    },
  },
});

export const BlockDivider = styled("span", {
  fontSize: "30px",
  fontWeight: 700,

  margin: "0 5px",

  "@bp400": {
    fontSize: "20px",
  },
});
