import { Montserrat } from "@next/font/google";
import dayjs from "dayjs";

import Clock from "./components/Clock";
import Form from "./components/Form";
import { Container, Title, Text } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type BaitProps = {
  country: string;
  city: string;
};

export default ({ city, country }: BaitProps) => (
  <Container>
    <Title className={montserrat.className}>
      Olá! Fico feliz em ver que você está interessada em cuidar da sua pele...
    </Title>

    <Text className={montserrat.className}>
      Para ajudá-la nessa jornada, eu gostaria de oferecer um livro digital
      exclusivo com{" "}
      <strong>Os 6 segredos de cuidados com a pele do antigo Egito</strong> para
      ter uma pele mais saudável e bem cuidada. E o melhor de tudo: é totalmente{" "}
      <strong>GRATUITO</strong>!
    </Text>

    <Text className={montserrat.className}>
      Mas atenção, essa oferta é exclusiva para o lançamento dessas 3 dicas que
      você leu agora...
    </Text>

    <Text className={montserrat.className}>
      Dentro de 24 horas apartir do dia do lançamento:{" "}
      <strong>{dayjs(new Date()).format("DD/MM/YYYY")}</strong>, o livro voltará
      ao preço original de 37 reais...
    </Text>

    <Text className={montserrat.className}>
      Então, não perca a oportunidade de garantir o seu agora mesmo...
    </Text>

    <Text className={montserrat.className}>
      Inscreva abaixo que enviaremos o livro digital para seu e-mail e whatsapp!
    </Text>

    <Clock />

    <Form country={country} city={city} />
  </Container>
);
