import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/fc6c24f242.js"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            integryity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossOrigin="anonymous"
          ></script>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-02GN1CB4RC"
          ></script>
          <script src="/js/bin/google.js"></script>
          <script src="/js/bin/materialize.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* <script
            src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAgyuJR222n79TiBxduvXyjVIQry10FwH0'
            type='text/javascript'
          ></script> */}

          <script src="/js/bin/main.js"></script>
          <script src="/js/bin/typewriter.js"></script>
        </body>
      </Html>
    );
  }
}
