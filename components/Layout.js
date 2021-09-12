import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {

    return ( 
        <>
            <article className="main-card">
                <Navbar />
                <main className="content">
                    {children}
                </main>
            </article>
            <Footer />
        </>
     );
}
 
export default Layout;