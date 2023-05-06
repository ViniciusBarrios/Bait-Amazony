import { IoIosArrowDown } from "react-icons/io";

import { styled } from "stitches";

export const Container = styled("div", {
  overflow: "hidden",

  marginTop: "30px",

  position: "relative",

  transition: "height 0.5s ease-in-out",
});

export const Title = styled("h3", {
  fontSize: "35px",
  fontWeight: 600,

  color: "#71C7D8",

  "@bp700": {
    fontSize: "25px",
  },
});

export const Text = styled("p", {
  fontSize: "19px",
  fontWeight: 500,

  marginTop: "20px",

  "@bp700": {
    fontSize: "16px",
  },
});

export const SubTitle = styled("h4", {
  fontSize: "25px",
  fontWeight: 600,

  color: "#71C7D8",

  marginTop: "30px",
});

export const ViewMore = styled("div", {
  width: "100%",
  height: "75px",

  position: "absolute",
  bottom: 0,

  linearGradient: "to bottom, transparent 10%, white 60%",

  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",

  "*": {
    color: "#71C7D8",
  },

  "> button": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "18px",
    fontWeight: 600,

    "@bp700": {
      fontSize: "16px",
    },
  },
});

export const ArrowIcon = styled(IoIosArrowDown, {
  fontSize: "25px",

  marginLeft: "5px",

  transition: "0.4s",
});
