import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = (props) => {
  const children = props.children;

  return (
    <div className="bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
