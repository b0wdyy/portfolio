import Layout from "../components/Nav";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
