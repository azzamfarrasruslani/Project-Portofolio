"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Works", href: "#works" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-auto px-6 py-3 rounded-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl shadow-lg"
          : "bg-black/50 backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center md:gap-12">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Link
                href={item.href}
                className="text-sm font-medium text-white hover:text-[#D3E97A] transition duration-300"
              >
                {item.name}
              </Link>
              {/* Tambahkan separator kecuali item terakhir */}
              {index < navItems.length - 1 && (
                <span className="text-gray-500 text-sm">/</span>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-white hover:text-[#D3E97A] transition duration-300"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black/90 rounded-xl shadow-md backdrop-blur-sm">
          <ul className="flex flex-col items-center space-y-4 px-6 py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium hover:text-[#D3E97A] transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
