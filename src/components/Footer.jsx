"use client";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import navItems from "@/data/navigation.json";
import socialMediaData from "@/data/socialMedia.json";

// Icon Map
const iconMap = {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
};

export default function Footer() {
  const socialLinks = socialMediaData.map((item) => ({
    ...item,
    icon: iconMap[item.icon],
    label: item.name,
  }));

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-6 py-12 text-gray-600 dark:text-gray-400 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        {/* Kiri */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Azzam FR</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Informatics Engineering Student
          </p>
          <p className="text-xs mt-1 text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigasi */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                scroll={true}
                className="hover:text-lime-700 dark:hover:text-lime-400 transition relative group"
              >
                <span>{item.name}</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-lime-700 dark:bg-lime-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media */}
        <div className="flex gap-4 text-xl">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-lime-700 dark:hover:text-lime-400 transition duration-300 transform hover:scale-110"
              aria-label={item.label}
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>

      {/* Glow Background - Very Subtle */}
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[300px] h-[150px] bg-lime-100/50 dark:bg-lime-900/10 blur-[80px] rounded-full -z-10 transition-colors duration-300" />
    </footer>
  );
}
