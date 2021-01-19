import Navbar from "./navbar";
import React from "react";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
<Navbar/>

      {children}
{/* <Footer/> */}
    </>
  );
};
export default Layout;
