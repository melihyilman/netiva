import Head from "next/head";
import React from "react";
import CardItems from "../lib/components/CardItems";
import Revolution from "../lib/components/Revolution";
import WorkType from "../lib/components/WorkType";
import FloatingActions from "../lib/components/FAB";
import Subscribe from "../lib/components/subscribe";
import Wave from "../lib/components/wave";

import dynamic from "next/dynamic";
import Footer from "../lib/components/Footer";
import Link from "next/link";
import Contact from "../lib/components/Contact";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../lib/components/typewriter"),
  { ssr: false }
);

export default class Home extends React.Component {
  // componentDidMount() {
  // document.addEventListener("DOMContentLoaded", function () {
  //   window.setTimeout(
  //     document.querySelector("svg").classList.add("animated"),
  //     3000
  //   );
  // });
  // }

  render() {
    return (
      <React.Fragment>
        <Head>
          <meta property="og:site_name" content="Netiva Software" />
          <meta property="og:url" content="https://netivasoft.com" />
          <meta
            property="og:title"
            content="Netiva Software | Son Teknoloji Yazılım Ürünleri"
          />
          <meta
            property="og:description"
            content="En güncel teknoloji ile yazılım çözümleri için iletişime geçin"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://netivasoft.com/images/logo.png"
          />
          <meta property="og:locale" content="tr" />
          <meta property="og:locale:alternate" content="en" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Netiva Software | Son Teknoloji Yazılım Ürünleri"
          />
          <meta
            name="twitter:description"
            content="En güncel teknoloji ile yazılım çözümleri için iletişime geçin"
          />
          <meta
            name="twitter:image"
            content="https://netivasoft.com/images/logo.png"
          />
          <meta
            name="description"
            content="En güncel teknoloji ile yazılım çözümleri için iletişime geçin"
          />
          <meta
            name="keywords"
            content="yazılım, mobil, büyük veri, makine öğrenmesi,telefon uygulaması, danışmanlık, web, web sitesi,masaüstü "
          />
          <title>Netiva Software</title>
        </Head>
        <div className="">
          <div className="row full-heigth">
            <div className="col s12 m6 center-align mt-20">
              <div className=" animate__animated animate__zoomInDown">
                <h3>Efektif, Pratik, Yazılım Çözümleri</h3>
                <span className="flow-text">
                  En hızlı çözümler için iletişime geçin
                </span>
                <p>Krizi fırsata çevirmek için proje sunalım</p>
              </div>

              <div className="row"></div>
              <a
                id="startProject"
                href="/#contact-us"
                className="btn purple waves-effect waves-blue animate__animated animate__bounce animate__repeat-3 "
              >
                Proje Oluştur
              </a>
              <a
                href="/#contact-us"
                className="btn-flat outlined waves-effect waves-blue  animate__animated animate__backInDown"
              >
                Teklİf Al
              </a>
            </div>
            <div className="col s12 m6">
              <div className="animate__animated animate__bounceInUp">
                <img className="max-h-40 animated" src="/test.svg"></img>
              </div>
            </div>
            <DynamicComponentWithNoSSR />

            <a
              id="arrow_bottom"
              href="/#services-tab"
              className="downArrow bounce hide-on-small-and-down"
            >
              <img
                width="40"
                height="40"
                alt=""
                src="/svg/arrow_bottom.svg"
              ></img>
            </a>
          </div>
          {/* <div className='wave purple'></div> */}
          <div className="bg-sections" tabIndex={0}>
            <Wave />
            <CardItems />
            <Revolution />
            <WorkType />
            <Contact />
          </div>

          <FloatingActions />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
