import Link from "next/link"

const Layout = ({ children }) => {
    return ( 
        <>
        <nav>
            <ul>
                <li>
                    <Link href="/"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/projects"><a>Projects</a></Link>
                </li>
                <li>
                    <Link href="/posts"><a>Journal</a></Link>
                </li>
            </ul>
        </nav>
        {children}
        </>
     );
}
 
export default Layout;