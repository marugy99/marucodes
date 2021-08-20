import Navbar from "./Navbar";

const Layout = ({ children }) => {

    return ( 
        <section className="main-card">
            <div className="content">
                <Navbar />
                <main>
                    {children}
                </main>
            </div>
        </section>
     );
}
 
export default Layout;