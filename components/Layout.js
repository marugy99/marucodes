import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {

    return ( 
        <>
            <section className="main-card">
                <Navbar />
                <div className="content">
                    <main>
                        {children}
                    </main>
                </div>
            </section>
            <Footer />
        </>
     );
}
 
export default Layout;