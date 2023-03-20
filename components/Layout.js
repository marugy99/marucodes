import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] min-h-screen mt-3 p-6">
      <article className="max-w-2xl mx-auto">
        <Navbar />
        {children}
      </article>
      <Footer />
    </div>
  );
};

export default Layout;
