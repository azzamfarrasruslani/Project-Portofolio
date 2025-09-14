"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Works", href: "#works" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#111111] border-t border-[#cceb6c]/30 text-[#9CA3AF] px-6 py-10 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Kiri */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-[#cceb6c]">Azzam FR</h3>
          <p className="text-sm">Informatics Engineering Student</p>
          <p className="text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Navigasi */}
        <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                scroll={true}
                className="hover:text-[#cceb6c] transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/username"
            target="_blank"
            className="hover:text-[#cceb6c] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            className="hover:text-[#cceb6c] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com/@username"
            target="_blank"
            className="hover:text-[#cceb6c] transition"
          >
            <FaYoutube />
          </a>
          <a
            href="mailto:azzam@example.com"
            className="hover:text-[#cceb6c] transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="hover:text-[#cceb6c] transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
