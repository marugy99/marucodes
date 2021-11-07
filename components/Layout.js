import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {

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
