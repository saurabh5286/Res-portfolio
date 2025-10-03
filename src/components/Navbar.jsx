import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const navItems = [
  { key: 1, name: "Home", path: "/" },
  { key: 2, name: "Certificates", path: "/certificates" },
  { key: 3, name: "Projects", path: "/projects" },
  { key: 4, name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img className="w-10 h-10 rounded-full" src="/user.jpg" alt="logo" />
          <div className="leading-5">
            <h1 className="font-bold text-lg text-gray-800">Saurabh <span className="text-red-600">Hardel</span></h1>
            <p className="text-sm text-gray-500">Full Stack Developer</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-700 text-lg font-medium">
          {navItems.map(({ key, name, path }) => (
            <li key={key}>
              <Link
                to={path}
                className="hover:text-indigo-600 transition duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800 focus:outline-none">
            {menuOpen ? <ImCross /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-40 p-6`}
      >
        <ul className="space-y-6 text-xl font-medium text-gray-800 mt-16">
          {navItems.map(({ key, name, path }) => (
            <li key={key}>
              <Link
                to={path}
                className="block hover:text-indigo-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Optional: backdrop blur when mobile nav is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;
