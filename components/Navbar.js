import Link from "next/link"

const Navbar = () => {
    const changeTheme = () => {
        document.body.classList.toggle("dark-mode")
    }

    return ( 
        <nav>
            <button onClick={changeTheme}><img src="/sun 1.svg" alt="sun icon" /></button>
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
                <li>
                    <Link href="/posts"><a>Contact</a></Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;