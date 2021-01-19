import { route } from "next/dist/next-server/server/router";
import Link from "next/link";
import { useRouter } from "next/router";

import Hamburger from "./hamburger";
function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="brand-logo waves-effect waves-blue padding-left">
          <Link href="/">
            <a>Netiva</a>
          </Link>
        </div>
        <ul id="nav-mobile" className="right hide-on-med-and-down pd5-right ">
          <li className="waves-effect waves-red">
            <Link href="/" asPath="/">
              <a className={router.asPath === "/" ? "pink darken-1" : ""}>
                AnaSayfa
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href='#info'>
              <a>Çözümlerimiz</a>
            </Link>
          </li> */}
          <li className="waves-effect waves-red ">
            <Link href="/#services-tab" asPath="/services">
              <a
                className={
                  router.asPath === "/#services-tab" ? "pink darken-1" : ""
                }
              >
                Hizmetlerimiz
              </a>
            </Link>
          </li>
          <li className="waves-effect waves-red">
            <Link href="/#contact-us" asPath="/contact">
              <a
                className={router.asPath === "/contact" ? "pink darken-1" : ""}
              >
                Bize Ulaşın
              </a>
            </Link>
          </li>
        </ul>
        <a
          href="#"
          data-target="mobile-menu"
          className="sidenav-trigger button-collapse"
        >
          <i className="material-icons">menu</i>
        </a>
        <Hamburger />
      </div>
    </nav>
  );
}

export default Navbar;
