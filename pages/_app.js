import Nav from "../components/Nav";
import Head from "next/head";
import Image from "next/image";
import "../styles/styles.scss";
import { useEffect, useRef } from "react";

function MyApp({ Component, pageProps }) {
  const arrowRef = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 150) {
        arrowRef.current.style.opacity = "1";
      } else {
        arrowRef.current.style.opacity = "0";
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

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
        <div className="arrow-up" ref={arrowRef} onClick={scrollTop}>
          <Image src="/svg/next.svg" width={25} height={25} />
        </div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
