import React from "react";
import Header from "./Include/Header";
import Footer from "./Include/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <div className="container">
          {children}
        </div>
      <Footer />
    </>
  );
};

export default Layout;
