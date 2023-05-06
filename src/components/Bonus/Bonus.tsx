import { Montserrat } from "@next/font/google";

import { Container, Column, Mockup, Title, Text } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => {
  return (
    <Container>
      <Column
        css={{
          width: "30%",

          "@bp800": {
            display: "none",
          },
        }}
      >
        <Mockup alt="Livro Digital" src="/assets/imgs/bonus.png" />
      </Column>

      <Column css={{ width: "70%" }}>
        <Title className={montserrat.className}>Bônus</Title>

        <Text className={montserrat.className}>
          Ao adquirir qualquer kit do sérum Rosa Amazônica você ganhará um livro
          exclusivo da Dra. Anjali Mahto...
        </Text>

        <Text className={montserrat.className} css={{ marginTop: "20px" }}>
          O livro &quot;Bíblia dos Cuidados da Pele&quot; é comercializado pelo
          valor de 12,99 € (Euros) em real é encontrado pelo valor de R$ 520,00…
        </Text>

        <Text className={montserrat.className} css={{ marginTop: "20px" }}>
          Mas apenas hoje como um bônus exclusivo que será oferecido apenas
          nessa página que você se encontra agora...
        </Text>

        <Text className={montserrat.className} css={{ marginTop: "20px" }}>
          De <span className="from">R$ 520,00</span> APENAS HOJE! GRÁTIS na
          compra de qualquer kit do sérum Rosa Amazônica.
        </Text>
      </Column>
    </Container>
  );
};
