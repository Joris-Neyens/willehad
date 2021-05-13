import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,400&family=Playfair+Display&display=swap"
          rel="stylesheet"
        /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"/> 
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
