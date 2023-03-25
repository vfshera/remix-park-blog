import { Link } from "@remix-run/react";
import React from "react";
import { Links } from "~/constants/config";

const Header = () => {
  return (
    <header className="sticky z-50 bg-gray-800 top-0 park-width w-full flex items-center justify-between py-3">
      <Link to="/">
        <p className="font-bold">The Park Blog</p>
      </Link>
      <nav id="MainNav">
        <ul className="flex items-center gap-2">
          {Links.map((link, i) => (
            <li key={i} className="font-semibold  px-2 pb-1">
              <Link
                to={link.href}
                className="text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
