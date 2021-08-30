import Link from "next/link"
import { useState } from "react"
import { IoIosMenu, IoIosClose, IoMdSunny, IoMdMoon } from "react-icons/io";

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    const changeTheme = () => {

        if (!darkMode) {
            document.body.classList.add("dark-mode");
            setDarkMode(true);
        } else {
            document.body.classList.remove("dark-mode");
            setDarkMode(false);
        }
    }

    const changeToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return ( 
        <nav>
             <button onClick={changeToggle} className="ham-menu">
                {!toggleMenu 
                    ? <IoIosMenu />
                    : <IoIosClose />
                }
            </button>

            <div className={`${toggleMenu ? "show-menu" : ""} ham-details`}>

                <button onClick={changeTheme} className="theme-toggle">
                
                {!darkMode
                    ? <IoMdSunny />
                    : <IoMdMoon  />
                }
                </button>
                <ul>
                    <Link href="/">
                        <a onClick={changeToggle}><li>About</li></a>
                    </Link>
                    <Link href="/projects">
                        <a onClick={changeToggle}><li>Projects</li></a>
                    </Link>
                    <Link href="/journal">
                        <a onClick={changeToggle}><li>Journal</li></a>
                    </Link>
                    <Link href="/contact">
                        <a onClick={changeToggle}><li>Contact</li></a>
                    </Link>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;