import { AppProps } from "next/app";
import Head from "next/head";
import "styles/slick.css";
import "styles/globals.css";

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/SFUFutura_07.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SFUFutura_03.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
