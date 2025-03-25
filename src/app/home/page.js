"use client";
import Link from "next/link";
import "@/styles/globals.css";
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 text-center">
      <h1 className="text-3xl font-bold">Selamat Datang di Portofolio Saya</h1>
      <p className="mt-2 text-gray-600">Jelajahi proyek-proyek keren yang telah saya buat!</p>
      <Link href="/portfolio">
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Lihat Portofolio
        </button>
      </Link>
    </div>
  );
}
