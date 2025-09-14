"use client";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Works", href: "#works" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/azzamfarrasruslani",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/azzam-farras-ruslani",
      label: "LinkedIn",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@azzam_tif",
      label: "YouTube",
    },
    {
      icon: FaEnvelope,
      href: "mailto:azzamfarrasrusl@gmail.com",
      label: "Email",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/6281234567890",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-[#0d0d0d] border-t border-[#cceb6c]/30 px-6 py-12 text-gray-400 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        {/* Kiri */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-[#cceb6c]">Azzam FR</h3>
          <p className="text-sm">Informatics Engineering Student</p>
          <p className="text-xs mt-1 text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigasi */}
        <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                scroll={true}
                className="hover:text-[#cceb6c] transition relative group"
              >
                <span>{item.name}</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#cceb6c] group-hover:w-full transition-all duration-300"></span>
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
              className="text-gray-400 hover:text-[#cceb6c] transition duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_6px_#cceb6c]"
              aria-label={item.label}
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>

      {/* Glow Background */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[150px] bg-[#cceb6c]/10 blur-3xl rounded-full -z-10 animate-pulse" />
    </footer>
  );
}
