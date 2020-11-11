import me from "../../public/images/me.jpeg";
import Link from "next/link";

const Main = () => {
  return (
    <main className="main-content">
      <img src={me} alt={me} />

      <h2>Welcome stranger, I'm Bodhi! 👋</h2>

      <h1>
        I'm a <span>software</span> <span>engineer</span> that loves to make
        dreams a reality! I ❤️ designing, developing and automating stuff.
      </h1>

      <div className="main-content__par">
        <p>
          Hiya ✌️! My name is Bodhi Vandael, a <span>software engineer</span>{" "}
          based in Lommel, Belgium. I'm specialized in front-end development,
          mobile apps, responsive design and visual design!
        </p>
      </div>

      <div className="btn btn--contact">
        <Link href="/contact">Connect with me ✍️</Link>
      </div>
    </main>
  );
};

export default Main;
