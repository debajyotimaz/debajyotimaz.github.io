import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../context/ThemeContext";
import 'modern-normalize/modern-normalize.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider> <Component {...pageProps} /> </ThemeProvider>;
}

export default MyApp;
