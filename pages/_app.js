import "../styles/global.scss";
import "../styles/waves.scss";
import "../styles/materialize.scss";
import "../styles/animate.css";
import "../styles/test.css";
import Layout from "../lib/components/Layout";
import "animate.css";

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  );
}

export default MyApp;
