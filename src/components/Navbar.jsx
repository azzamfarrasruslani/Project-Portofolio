"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import navItems from "@/data/navigation.json";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Tambah scroll effect untuk shadow navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll ketika menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Helper to determine correct HREF
  const getHref = (itemHref) => {
    if (itemHref.startsWith("#")) {
      return pathname === "/" ? itemHref : `/${itemHref}`;
    }
    return itemHref;
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto px-2 py-2 md:px-3 md:py-2 rounded-full z-50 transition-all duration-300 border border-white/20 dark:border-gray-800 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl shadow-lime-900/5 dark:shadow-lime-900/10"
          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-lg shadow-lime-900/5 dark:shadow-lime-900/10"
      }`}
    >
      <div className="flex justify-between items-center md:gap-2">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={getHref(item.href)}
                className="block px-5 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-lime-700 dark:hover:text-lime-400 hover:bg-lime-50 dark:hover:bg-lime-900/20 rounded-full transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="pl-2 border-l border-gray-200 dark:border-gray-700 ml-2">
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden w-full justify-between items-center px-4 gap-4">
          <span className="font-bold text-lg text-lime-700 dark:text-lime-400">
            Azzam.
          </span>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-800 dark:text-gray-200 hover:text-lime-700 dark:hover:text-lime-400 transition duration-300"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center md:hidden transition-all duration-300">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-3xl text-gray-600 dark:text-gray-300 hover:text-lime-700 dark:hover:text-lime-400"
          >
            <FaTimes />
          </button>

          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={getHref(item.href)}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-lime-700 dark:hover:text-lime-400 hover:scale-105 transition duration-300"
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
