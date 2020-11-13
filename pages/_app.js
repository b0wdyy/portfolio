import Nav from "../components/Nav";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import "../styles/styles.scss";
function MyApp({ Component, pageProps }) {
  const [arrowShown, setArrowShown] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 150) {
        setArrowShown(true);
      } else {
        setArrowShown(false);
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
        <CSSTransition in={arrowShown} timeout={400} classNames="fade">
          <div className="arrow-up" onClick={scrollTop}>
            <Image src="/svg/next.svg" width={25} height={25} />
          </div>
        </CSSTransition>
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
