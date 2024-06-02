import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Navigate, useNavigate } from "react-router-dom";

const Layout = (props) => {
  const children = props.children;

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";


  return (
    <div className="bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
