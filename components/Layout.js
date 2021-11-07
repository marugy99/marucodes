import Navbar from "./Navbar";
import Footer from "./Footer";
import React,  { useEffect } from "react"
import Prism from "prismjs";

const Layout = ({ children }) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
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
