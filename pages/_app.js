import Nav from "../components/Nav";
import Head from "next/head";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Portfolio website of Bodhi Vandael" />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="keywords"
          content="portfolio, site, webdeveloper, developer, Bodhi, Vandael, Bodhi Vandael, software engineer, software, front-end"
        />
        <title>Portfolio | Bowdy</title>
        <link rel="icon" href="/images/laptop.png" />
      </Head>
      <div>
        <div className="cursor"></div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
