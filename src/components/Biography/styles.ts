import { FaPlay } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import { styled } from "stitches";

import Image from "@infra/Image";

export const Container = styled("div", {
  width: "100%",
  maxWidth: "320px",

  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  marginTop: "80px",

  padding: "15px",

  backgroundColor: "#fffffff",

  boxShadow: "0px 0px 11px rgba(112, 112, 112, 0.3)",

  borderRadius: "10px",

  border: "2px solid #71C7D8",
});

export const VideoContent = styled("div", {
  position: "relative",

  marginTop: "-70px",

  cursor: "pointer",

  transition: "200ms",
});

export const Video = styled("video", {
  width: "auto",
  height: "160px",

  display: "flex",

  borderRadius: "10px",

  boxShadow: "0px 0px 11px rgba(112, 112, 112, 0.3)",

  border: "2px solid #71C7D8",
});

export const PlayButton = styled("button", {
  width: "60px",
  height: "60px",

  position: "absolute",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",

  backgroundColor: "rgba(0, 0, 0, 0.5)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "$full",

  transition: "200ms",
});

export const PlayIcon = styled(FaPlay, {
  fontSize: "24px",

  color: "white",
});

export const Img = styled(Image, {
  width: "auto",

  display: "flex",

  borderRadius: "10px",

  boxShadow: "0px 0px 11px rgba(112, 112, 112, 0.3)",

  border: "2px solid #71C7D8",

  marginTop: "-70px",
});

export const Wrapper = styled("div", {
  overflow: "hidden",

  position: "relative",

  transition: "height 0.5s ease-in-out",
});

export const Text = styled("p", {
  fontSize: "16px",
  fontWeight: 500,
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
