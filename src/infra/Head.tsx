import React from "react";

import Head from "next/head";

type HeadProps = {
  title: string;
  children?: React.ReactNode;
};

export default ({ title, children }: HeadProps) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {children}
    </Head>
  );
};
