import { GetServerSidePropsContext } from "next";

import axios from "axios";

type ResponseType = {
  country: string;
  city: string;
};

export const getGeo = async (ctx: GetServerSidePropsContext) => {
  const { req } = ctx;

  if (process.env.NODE_ENV === "development") {
    const { data } = await axios.get<ResponseType>("https://ipwho.is");

    return {
      country: data.country,
      city: data.city,
    };
  }

  let ip;

  if (req.headers["x-forwarded-for"]) {
    ip = String(req.headers["x-forwarded-for"]).split(",")[0];
  } else if (req.headers["x-real-ip"]) {
    ip = req.connection.remoteAddress;
  } else {
    ip = req.connection.remoteAddress;
  }

  const { data } = await axios.get<ResponseType>(`https://ipwho.is/${ip}`);

  return {
    country: data.country,
    city: data.city,
  };
};
