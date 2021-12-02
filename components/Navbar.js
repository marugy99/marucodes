import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosMenu, IoIosClose, IoMdSunny, IoMdMoon } from "react-icons/io";

const Navbar = () => {
  // Dark mode functionality
  const [darkMode, setDarkMode] = useState(false);

  const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    setDarkMode(true);
  };

  const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    setDarkMode(false);
  };

  // Function used onClick to toggle dark mode
  const changeTheme = () => {
    if (!darkMode) {
      enableDarkMode();
      localStorage.setItem("darkMode", "enabled");
    } else {
      disableDarkMode();
      localStorage.setItem("darkMode", "disabled");
    }
  };

  // Checks local storage to see if dark mode was activated
  useEffect(() => {
    const checkTheme = localStorage.getItem("darkMode");
    if (checkTheme === "enabled") {
      enableDarkMode();
    }
  }, []);

  // Toggle menu functionality (hambuger menu)
  const [toggleMenu, setToggleMenu] = useState(false);

  const changeToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <section className="main-nav">
      <button
        onClick={changeToggle}
        className="ham-menu"
        aria-label="Toggle menu"
        aria-expanded={toggleMenu}
        >
        {!toggleMenu ? <IoIosMenu /> : <IoIosClose />}
      </button>

      <nav className="main-menu">
        <ul>
          <Link href="/">
            <a onClick={changeToggle}>
              <li>About</li>
            </a>
          </Link>
          <Link href="/projects">
            <a onClick={changeToggle}>
              <li>Projects</li>
            </a>
          </Link>
          <Link href="/journal">
            <a onClick={changeToggle}>
              <li>Journal</li>
            </a>
          </Link>
          <Link href="/contact">
            <a onClick={changeToggle}>
              <li>Contact</li>
            </a>
          </Link>
        </ul>

        <button onClick={changeTheme} className="theme-toggle">
          {!darkMode ? <IoMdSunny /> : <IoMdMoon />}
        </button>
      </nav>

      {/* Mobile menu */}
      <nav className={`mobile-menu ${toggleMenu ? "extended" : ""}`}>
        <ul>
          <Link href="/">
            <a onClick={changeToggle}>
              <li>About</li>
            </a>
          </Link>
          <Link href="/projects">
            <a onClick={changeToggle}>
              <li>Projects</li>
            </a>
          </Link>
          <Link href="/journal">
            <a onClick={changeToggle}>
              <li>Journal</li>
            </a>
          </Link>
          <Link href="/contact">
            <a onClick={changeToggle}>
              <li>Contact</li>
            </a>
          </Link>
        </ul>

        <button onClick={changeTheme} aria-label="Toggle theme" className="theme-toggle">
          {!darkMode ? <IoMdSunny /> : <IoMdMoon />}
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
