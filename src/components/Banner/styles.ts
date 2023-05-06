import { styled } from "stitches";

export const Container = styled("img", {
  width: "100%",

  display: "flex",

  borderRadius: "$md",

  "@bp700": {
    borderRadius: 0,
  },
});
