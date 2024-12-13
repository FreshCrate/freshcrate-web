import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/assets/images/freshcrate_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Meal Kit", href: "#" },
    { name: "About", href: "#" },
    { name: "Our Services", href: "#" },
    { name: "Contact", href: "#", isButton: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between px-6 mx-auto md:px-12 h-28">
        {/* Logo */}
        <a href="#">
          <img
            src={logo}
            alt="FreshCrate Logo"
            className="w-20 h-12 md:w-48 md:h-28"
            width={193}
            height={105}
          />
        </a>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-2xl ${isScrolled ? "text-black" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen
            ? "fixed top-0 left-0 lg:right-0 right-24 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 z-10 lg:h-screen md:h-auto"
            : "hidden md:flex md:items-center md:space-x-12"
            } lg:h-auto lg:bg-transparent`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-lg transition ${
                  isScrolled
                    ? "text-black hover:text-gray-700"
                    : "text-white hover:text-gray-300"
                } ${
                  isScrolled && link.isButton
                    ? "bg-primary-500 text-white"
                    : ""
                } ${
                  link.isButton
                    ? "md:bg-[#1F2122] rounded md:rounded-xl px-6 py-3 hover:bg-gray-600 hover:text-white transition"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;