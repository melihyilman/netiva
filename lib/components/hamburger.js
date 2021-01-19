import React, { Component } from "react";
import $ from "jquery";
import Link from "next/link";
import { useRouter } from "next/router";

function hamburger() {
  // static componentDidMount() {
  //   document.addEventListener("DOMContentLoaded", () =>
  //     $(".sidenav").sidenav()
  //   );
  // }
  // active can be  pink darken-1

  const router = useRouter();
  return (
    <ul className="sidenav darken-2  bg-slider-main" id="mobile-menu">
      <a className="waves-effect waves-light btn purple right sidenav-close">
        <i className="material-icons right">close</i>Kapat
      </a>
      <br />
      <li className="sidenav-close">
        <Link href="/" asPath="/">
          <a
            className={
              router.asPath === "/"
                ? "pink darken-1 yellow-text text-lighten-5 "
                : "yellow-text text-lighten-5"
            }
          >
            AnaSayfa
          </a>
        </Link>
      </li>
      <li className="sidenav-close">
        <Link href="/#services-tab" asPath="/services">
          <a
            className={
              router.asPath === "/#services-tab"
                ? "pink darken-1 yellow-text text-lighten-5"
                : "yellow-text text-lighten-5"
            }
          >
            Hizmetlerimiz
          </a>
        </Link>
      </li>
      <li className="sidenav-close">
        <Link href="/#contact-us" asPath="/contact" onClick="return false;">
          <a
            className={
              router.asPath === "/contact"
                ? "pink darken-1 yellow-text text-lighten-5"
                : "yellow-text text-lighten-5"
            }
          >
            Bize Ulaşın
          </a>
        </Link>
      </li>
    </ul>
  );
}
export default hamburger;
