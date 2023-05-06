import { Montserrat } from "@next/font/google";

import { Container, Img, Description } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => (
  <Container>
    <Img
      width={160}
      height={160}
      alt="Doutora Clara Souza"
      src="/assets/imgs/author.png"
    />

    <Description className={montserrat.className}>
      Doutora Clara Souza, médica especializada em dermatologia e cosmetologia,
      certificada pelo conselho de medicina, foi a autora dessas 3 dicas para o
      rejuvenescimento da pele que você acompanhará logo abaixo.
    </Description>
  </Container>
);
