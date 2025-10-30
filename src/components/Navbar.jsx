import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "home", icon: <FaHome /> },
    { name: "projects", icon: <FaProjectDiagram /> },
    { name: "about", icon: <FaUser /> },
    { name: "contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-purple-900 via-pink-800 to-red-700 shadow-lg py-3"
          : "bg-gradient-to-r from-purple-800 via-pink-700 to-red-600 py-5"
      } text-white backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
       <h1
  className={`font-extrabold tracking-wide cursor-pointer transition-all duration-300 ${
    scrolled ? "text-xl" : "text-2xl md:text-3xl"
  } hover:scale-105`}
>
  Nir{" "}
  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-extrabold">
    P
  </span>{" "}
  Esh <span className="text-yellow-300">Portfolio</span>
</h1>


        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={`#${item.name}`}
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
              >
                {item.icon}
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </a>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl hover:text-yellow-300 transition-colors duration-300"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center bg-gradient-to-b from-purple-900 via-pink-800 to-red-700 py-6 space-y-6 font-semibold shadow-lg"
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.name}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
                >
                  {item.icon}
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </a>
              </li>
            ))}
          </Motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
