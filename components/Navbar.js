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
            ? "visible h-[180px] opacity-100 scale-100 px-2 py-3"
            : "scale-75 invisible h-0 opacity-0"
        } mt-3 sm:hidden transition-all origin-top-left bg-white/50 rounded-lg shadow-lg shadow-indigo-500/30`}
      >
        <ul className="flex-col flex gap-3 transform transition-all items-start space-y-2 origin-top-left">
          {navItems.map((item, index) => (
            <li
              className={`${
                toggleMenu ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-all sm:opacity-100 sm:visible`}
              key={index}
            >
              <Link href={item.href}>
                <a className="hover-shadow transition hover:bg-white/20 px-3 py-2 rounded-md">
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
            <li key={index}>
              <Link href={item.href}>
                <a className="hover-shadow transition hover:bg-white/20 px-3 py-2 rounded-md">
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
