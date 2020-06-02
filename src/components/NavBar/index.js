import React from "react";
import "../../../public/style.css";
import { Link } from "gatsby";

const NavBar = () => (
  <nav className="flex item-center justify-between flex-wrap bg-gray-800 p-6">
    <div className="flex-shrink-0 text-white mr-6">
      <Link to="/" className="font-bold text-xl">
        <span>Gatsby Test</span>
      </Link>
    </div>
    <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
      <a
        href="#"
        className="block mr-4 mt-4 hover:text-white sm:mt-0 text-teal-200"
      >
        Me & Pets
      </a>
      <Link
        to="/blog"
        className="block mr-4 mt-4 hover:text-white sm:mt-0 text-teal-200"
      >
        Blog
      </Link>
    </div>
  </nav>
);

export default NavBar;
