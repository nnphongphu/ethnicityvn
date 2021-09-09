import { AppProps } from "next/app";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        />
        <link
          rel="preload"
          href="/fonts/SFUFutura_03.woff2"
          as="font"
          type="font/woff2"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
