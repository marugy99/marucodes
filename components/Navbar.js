import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IoColorWandOutline,
  IoFilterOutline,
  IoCloseOutline,
} from "react-icons/io5";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navItems = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Journal",
      href: "/journal",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <section className="sm:border-b-2 sm:border-white/30 sm:pb-4 mb-4 sm:mb-6 md:mb-8">
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="text-gray-500 px-3 py-2 block sm:hidden"
        aria-label="Toggle menu"
        aria-expanded={toggleMenu}
      >
        {!toggleMenu ? (
          <IoFilterOutline className="w-6 h-6" />
        ) : (
          <IoCloseOutline className="w-6 h-6" />
        )}
      </button>

      {/* Mobile menu */}
      <nav
        className={`${
          toggleMenu
            ? "bg-white/50 px-2 py-3 rounded-lg shadow-lg shadow-indigo-500/30 scale-100"
            : "scale-75"
        } mt-3 sm:hidden transition-all duration-300 origin-top-left`}
      >
        <ul
          className={`${
            toggleMenu
              ? "visible max-h-[500px] opacity-100 scale-100"
              : "invisible max-h-0 opacity-0 scale-75"
          } flex-col flex gap-3 transform transition-all items-start duration-300 space-y-2 origin-top-left`}
        >
          {navItems.map((item, index) => (
            <li
              className={`${
                toggleMenu ? "opacity-100" : "opacity-0"
              } transition-all duration-300 sm:opacity-100`}
            >
              <Link href={item.href}>
                <a className="hover-shadow transition duration-300 hover:bg-white/20 px-3 py-2 rounded-md">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop menu */}
      <nav className="hidden sm:block">
        <ul className="flex items-center justify-center gap-3">
          {navItems.map((item, index) => (
            <li>
              <Link href={item.href}>
                <a className="hover-shadow transition duration-300 hover:bg-white/20 px-3 py-2 rounded-md">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
