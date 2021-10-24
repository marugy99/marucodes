import Navbar from "./Navbar";
import Footer from "./Footer";
import React,  { useEffect } from "react"
const Prism = require("prismjs")

const Layout = ({ children }) => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
        Prism.highlightAll();
    }
}, []);

  return (
    <>
      <article className="main-card">
        <Navbar />
        {children}
      </article>
      <Footer />
    </>
  );
};

export default Layout;
