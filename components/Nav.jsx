import Link from "next/link";
import { useEffect, useRef } from "react";

const Layout = () => {
  const navRef = useRef();
  const mobileNav = useRef();
  const mobileNavBD = useRef();

  const intro = "< Bowdy />";
  let navOpen = false;

  const navHandler = () => {
    if (!navOpen) {
      mobileNav.current.style.transform = "skewX(-10deg) translateX(0)";
      mobileNavBD.current.style.opacity = "1";
      mobileNavBD.current.style.pointerEvents = "auto";
    } else {
      mobileNav.current.style.transform = "skewX(0) translateX(100%)";
      mobileNavBD.current.style.opacity = "0";
      mobileNavBD.current.style.pointerEvents = "none";
    }

    navOpen = !navOpen;
  };

  const onTitleClick = () => {
    navOpen = false;
  }

  const setNavVariable = (navH) => {
    document.documentElement.style.setProperty("--nav-height", `${navH}px`);
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      setNavVariable(navRef.current.scrollHeight);
    }
    return () => {
      mounted = false;
    }
  }, []);

  return (
    <nav className="main-nav" ref={navRef}>
      <div onClick={onTitleClick}>
        <Link href="/">{intro}</Link>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={navHandler}>
        <div>🍔</div>
      </div>

      <div className="mobile-nav" ref={mobileNav}>
        <ul>
          <li onClick={navHandler}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={navHandler}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={navHandler}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div
        className="mobile-nav__backdrop"
        ref={mobileNavBD}
        onClick={navHandler}
      ></div>
    </nav>
  );
};

export default Layout;
