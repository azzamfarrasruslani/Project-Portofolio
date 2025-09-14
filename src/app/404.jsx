// app/404.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NotFoundPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const translate = (factorX = 1, factorY = 1) =>
    `translate3d(${mousePos.x * factorX}px, ${mousePos.y * factorY}px, 0)`;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 relative overflow-hidden w-full">
      {/* 🔵 Animated Blobs */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#D3E97A] rounded-full blur-3xl opacity-30 -z-10"
        style={{ transform: translate(100, 100) }}
      />
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-lime-400 rounded-full blur-3xl opacity-20 -z-10"
        style={{ transform: translate(-100, -100) }}
      />

      {/* 404 Heading */}
      <h1
        className="text-6xl md:text-8xl font-extrabold mb-4 text-[#D3E97A]"
        style={{ transform: translate(20, 20) }}
      >
        404
      </h1>

      {/* Subtext */}
      <p className="text-xl md:text-2xl mb-6 text-gray-300 text-center" style={{ transform: translate(15, 15) }}>
        Halaman yang kamu cari tidak ditemukan
      </p>

      {/* CTA Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-[#D3E97A] text-black font-semibold rounded-full shadow-md hover:bg-lime-400 transition duration-300"
        style={{ transform: translate(10, 10) }}
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
