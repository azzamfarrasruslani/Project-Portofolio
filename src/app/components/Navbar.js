"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Works", href: "#works" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-50 shadow-md">
      <div className="container mx-auto flex justify-center items-center px-6 py-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="hover:text-[#D3E97A] transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-6 text-2xl hover:text-[#D3E97A] transition duration-300"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col items-center space-y-4 px-6 py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-[#D3E97A] transition duration-300"
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
