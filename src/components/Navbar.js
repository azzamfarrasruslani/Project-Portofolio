"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <div className="space-x-4">
        <Link href="/">
          <span className="hover:underline cursor-pointer">Home</span>
        </Link>
        <Link href="/portfolio">
          <span className="hover:underline cursor-pointer">Portfolio</span>
        </Link>
      </div>
    </nav>
  );
}
