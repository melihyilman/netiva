import Link from "next/link";
import Subscribe from "./subscribe";
const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Netiva Software</h5>
            <p className="grey-text text-lighten-4">
              Dijital dönüşümde en kolay çözüm ortağınız
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Menü</h5>
            <ul>
              <li>
                <Subscribe />
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3 waves-effect waves-red"
                  href="#!"
                >
                  Anasayfa
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3 waves-effect waves-red"
                  href="#!"
                >
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3 waves-effect waves-red"
                  href="#!"
                >
                  Bize Ulaşın
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2021 Copyright Netiva Software
          <a className="grey-text text-lighten-4 right" href="#!">
            Daha Fazla Bilgi
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
