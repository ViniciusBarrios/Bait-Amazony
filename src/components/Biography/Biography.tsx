import { useRef, useState } from "react";

import { Montserrat } from "@next/font/google";

import {
  Container,
  VideoContent,
  Video,
  PlayButton,
  PlayIcon,
  Img,
  Wrapper,
  Text,
  ViewMore,
  ArrowIcon,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type BiographyProps = {
  name: string;
  src: string;
  biography: string[];
};

export default ({ name, src, biography }: BiographyProps) => {
  const [viewContent, setViewContent] = useState(false);
  const [videoPlay, setVideoPlay] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      setVideoPlay(true);
      video.play();
    } else {
      setVideoPlay(false);
      video.pause();
    }
  };

  return (
    <Container>
      {src.includes(".mp4") ? (
        <VideoContent onClick={handleVideo}>
          <Video ref={videoRef} src={src} loop />

          <PlayButton css={{ ...(videoPlay && { opacity: 0 }) }}>
            <PlayIcon />
          </PlayButton>
        </VideoContent>
      ) : (
        <Img width={160} height={160} alt={name} src={src} />
      )}

      <Wrapper
        ref={wrapperRef}
        css={{
          ...(viewContent && wrapperRef.current
            ? {
                height: `${wrapperRef.current.scrollHeight + 60}px`,
              }
            : { height: "250px" }),
        }}
      >
        {biography.map((text, index) => (
          <Text
            key={index}
            css={{ marginTop: index === 0 ? "20px" : "15px" }}
            className={montserrat.className}
          >
            {text}
          </Text>
        ))}

        <ViewMore>
          <button onClick={() => setViewContent(!viewContent)}>
            <p className={montserrat.className}>
              Ler {viewContent ? "Menos" : "Mais"}
            </p>
            <ArrowIcon
              css={{
                ...(viewContent ? { transform: "rotate(-180deg)" } : null),
              }}
            />
          </button>
        </ViewMore>
      </Wrapper>
    </Container>
  );
};
