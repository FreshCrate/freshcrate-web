import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/freshcrate_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Meal Kit", href: "#" },
    { name: "About", href: "#" },
    { name: "Our Services", href: "#" },
    { name: "Contact", href: "#", isButton: true },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between bg-transparent z-10 max-w-screen-xl mx-auto">
      {/* Logo */}
      <div>
        <a href="#">
          <img
            src={logo}
            alt="FreshCrate Logo"
            className="w-20 h-12 md:w-48 md:h-28"
            width={193}
            height={105}
          />
        </a>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`
          ${
            isMenuOpen
              ? "fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 z-10 animate-slide-in"
              : "hidden"
          }
          md:flex md:items-center md:space-x-14 md:justify-end
        `}
      >
        {/* Cancel Option */}
        <li className="md:hidden absolute top-4 right-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-2xl mt-8 underline"
          >
            <FiX />
          </button>
        </li>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`
                text-white text-2xl md:text-xl
                ${
                  link.isButton
                    ? "bg-green-500 md:bg-black rounded md:rounded-xl px-6 py-4 hover:bg-gray-500 transition duration-300"
                    : "hover:text-black"
                }
              `}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.name} 
              {/* TODO: Rework this */}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
