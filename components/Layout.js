import Navbar from "./Navbar";

const Layout = ({ children }) => {

    return ( 
        <section className="main-card">
            <Navbar />
            <div className="content">
                <main>
                    {children}
                </main>
            </div>
        </section>
     );
}
 
export default Layout;