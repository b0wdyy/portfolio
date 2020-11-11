import Link from "next/link";

const Layout = () => {
  const intro = "< Bowdy />";

  return (
    <nav className="main-nav">
      <div>
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
    </nav>
  );
};

export default Layout;
