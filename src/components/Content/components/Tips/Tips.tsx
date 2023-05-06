import { useRef, useState } from "react";

import { Montserrat } from "@next/font/google";

import {
  Container,
  Title,
  Text,
  SubTitle,
  ViewMore,
  ArrowIcon,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type TipsProps = {
  title: string;
  content: {
    [key: string]: string[];
  };
};

export default ({ title, content }: TipsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [viewContent, setViewContent] = useState(false);

  const entries = Object.entries(content);

  return (
    <Container
      ref={containerRef}
      css={{
        ...(viewContent
          ? {
              height: `${
                containerRef.current && containerRef.current.scrollHeight + 75
              }px`,
            }
          : { height: "250px" }),
      }}
    >
      <Title className={montserrat.className}>{title}</Title>

      {entries.map(([subTitle, texts], index) => (
        <div key={index}>
          {subTitle !== "" && (
            <SubTitle className={montserrat.className}>{subTitle}</SubTitle>
          )}

          {texts.map((text, index) => (
            <Text key={index} className={montserrat.className}>
              {text}
            </Text>
          ))}
        </div>
      ))}

      <ViewMore>
        <button onClick={() => setViewContent(!viewContent)}>
          <p className={montserrat.className}>
            Ler {viewContent ? "Menos" : "Mais"}
          </p>

          <ArrowIcon
            css={{ ...(viewContent ? { transform: "rotate(-180deg)" } : null) }}
          />
        </button>
      </ViewMore>
    </Container>
  );
};
