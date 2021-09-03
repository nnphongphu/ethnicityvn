import "../styles/globals.css";
import { AppProps } from "next/app";

/**
 * The structure of the app
 * @return {JSX.Element}
 */
export const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
