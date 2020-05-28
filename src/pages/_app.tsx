import "../styles.css";
import { AppProps } from "next/app";
import "../api/database";

function DefaultApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default DefaultApp;
