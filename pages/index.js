import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/utils";
import gsap from "gsap";

import Main from "../components/Home/Main";
import Resume from "../components/Home/Resume";
import Services from "../components/Home/Services";

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".intro h1 .intro-text", { y: 0 })
      .to(".intro > div p", { y: 0 })
      .to(".intro h1 .intro-bar", { width: "100%", delay: 2 })
      .to(".intro > div .right-to-left", {
        width: "100%",
        duration: 1,
        delay: 0.1,
      })
      .to(".intro", {
        height: 0,
        delay: 0.2,
      })
      .from("html", { overflowY: "hidden" });
  }, []);

  return (
    <>
      <div className="intro">
        <h1>
          <div className="intro-text">Welcome to my site</div>
          <div className="intro-bar"></div>
        </h1>

        <div>
          <p>Hope you enjoy</p>
          <div className="right-to-left"></div>
        </div>
      </div>

      <Main />
      <Services />
      <Resume />
    </>
  );
}
