import { GetServerSidePropsContext } from "next";

import { styled } from "stitches";

import Head from "@infra/Head";

import { getGeo } from "@utils/getGeo";

import Bait from "@components/Bait";
import Banner from "@components/Banner";
import Content from "@components/Content";
import LeavePage from "@components/LeavePage/LeavePage";

const Container = styled("div", {
  width: "100%",
  maxWidth: "1200px",

  margin: "0 auto",

  padding: "20px",

  "@bp700": {
    padding: "0 0 20px 0",
  },
});

type TipsPageProps = {
  country: string;
  city: string;
};

export default ({ city, country }: TipsPageProps) => {
  return (
    <>
      <Head title="3 dicas caseiras para ajudar na hidratação e no tratamento de rugas e linhas finas da pele do seu rosto!" />

      <Container>
        <Banner />

        <Content />

        <Bait country={country} city={city} />
      </Container>

      <LeavePage country={country} city={city} />
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const data = await getGeo(ctx);

  return {
    props: {
      country: data.country,
      city: data.city,
    },
  };
};
