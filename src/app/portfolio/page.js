"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then(setPortfolio);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <Link href="/portfolio/add">
        <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
          Tambah Portofolio
        </button>
      </Link>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(portfolio) ? (
          portfolio.map((item) => {
            // Cek apakah item.image ada dan valid
            const imageUrl = item.image?.startsWith("http")
              ? item.image
              : "/default-image.jpg"; // Ganti dengan gambar default lokal

            return (
              <li key={item.id} className="p-4 border rounded-lg shadow">
                <div className="relative w-full h-40">
                  <Image
                    src={imageUrl}
                    alt={item.title || "Portfolio Image"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </li>
            );
          })
        ) : (
          <p>Data tidak tersedia</p>
        )}
      </ul>
    </div>
  );
}
