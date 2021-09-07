import { AppProps } from "next/app";
import GlobalStyle from "styles/globals";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  NProgress.configure({
    minimum: 0.3,
    easing: "ease",
    speed: 800,
    showSpinner: true,
  });

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
