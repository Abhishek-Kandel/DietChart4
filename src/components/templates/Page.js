import React from "react";
import Header from "../organisms/header-footer/Header";
import Footer from "../organisms/header-footer/Footer";
import "../organisms/header-footer/styles.css"

const Page = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Page;
