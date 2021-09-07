import { AppProps } from "next/app";
import GlobalStyle from "styles/globals";
import NextProgress from "next-progress";

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <NextProgress delay={300} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
