import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "styles/globals";

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
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
