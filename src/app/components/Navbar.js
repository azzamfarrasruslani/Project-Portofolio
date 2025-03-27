"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/works" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 px-6 py-3 bg-gray-700/50 backdrop-blur-md rounded-full flex items-center space-x-4 text-white shadow-lg z-50">
      {navItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Link
            href={item.href}
            className={`${
              pathname === item.href ? "text-red-400 font-semibold" : "text-gray-300"
            } hover:text-white   hover:text-xl transition-all duration-300`}
          >
            {item.name}
          </Link>
          {index < navItems.length - 1 && <span className="text-gray-500">/</span>}
        </div>
      ))}
    </nav>
  );
}
