import { useState, useEffect } from "react";

import { Montserrat } from "@next/font/google";

import { Container, Title, Blocks, Block, BlockDivider } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type Time = {
  hours: string;
  minutes: string;
  seconds: string;
};

export default () => {
  const getRemainingTime = (): number => {
    const now: Date = new Date();
    const midnight: number = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0,
    ).getTime();

    const diff: number = midnight - now.getTime();

    return diff;
  };

  const [remainingTime, setRemainingTime] = useState<number>(
    getRemainingTime(),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (milliseconds: number): Time => {
    const hours: string = Math.floor(milliseconds / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");

    const minutes: string = Math.floor(
      (milliseconds % (1000 * 60 * 60)) / (1000 * 60),
    )
      .toString()
      .padStart(2, "0");

    const seconds: string = Math.floor((milliseconds % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(remainingTime);

  return (
    <Container>
      <Title className={montserrat.className}>
        Livro gratuito até a meia-noite de hoje:
      </Title>

      <Blocks>
        <Block>
          <strong className={montserrat.className}>{hours}</strong>
          <span className={montserrat.className}>Horas</span>
        </Block>

        <BlockDivider className={montserrat.className}>:</BlockDivider>

        <Block>
          <strong className={montserrat.className}>{minutes}</strong>
          <span className={montserrat.className}>Minutos</span>
        </Block>

        <BlockDivider className={montserrat.className}>:</BlockDivider>

        <Block>
          <strong className={montserrat.className}>{seconds}</strong>
          <span className={montserrat.className}>Segundos</span>
        </Block>
      </Blocks>
    </Container>
  );
};
