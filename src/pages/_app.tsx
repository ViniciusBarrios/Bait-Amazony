import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import type { AppProps } from "next/app";

import { Montserrat } from "@next/font/google";

import GlobalStyles from "@styles/global";

const montserrat = Montserrat({ subsets: ["latin"] });

export default ({ Component, pageProps }: AppProps) => {
  GlobalStyles();

  return (
    <>
      <Component {...pageProps} />

      <ToastContainer className={montserrat.className} />
    </>
  );
};
