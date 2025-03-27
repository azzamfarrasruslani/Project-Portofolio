"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaravel, faReact, faPhp, faNodeJs, faDatabase } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Sistem Surat Paket",
    image: "/image/WEB-Surpa.png",
    description: "Aplikasi untuk mengelola surat dan paket masuk dengan fitur tracking real-time.",
    link: "#",
    techStack: [faPhp],
    date: "Dibuat: Januari 2023",
  },
  {
    title: "Website UMKM",
    image: "/image/WEB-UMKM.png",
    description: "Website profil dan e-commerce untuk UMKM dengan fitur pemesanan produk.",
    link: "#",
    techStack: [faLaravel],
    date: "Dibuat: Juli 2023",
  },
  {
    title: "Manajemen Kandang Bebek",
    image: "/image/WEB-ManBebek.png",
    description: "Sistem monitoring dan manajemen kandang bebek untuk pencatatan produksi telur.",
    link: "#",
    techStack: [faLaravel],
    date: "Dibuat: Oktober 2023",
  },
];

export default function PortfolioSection() {
  return (
    <section id="works" className="min-h-screen flex flex-col items-center py-20 text-white">
      {/* Judul */}
      <motion.h1
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Works
      </motion.h1>

      {/* Grid Card Portofolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Gambar */}
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
            />

            {/* Konten */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.description}</p>

              {/* Tanggal Pembuatan */}
              <p className="text-sm text-gray-500 mt-2">{item.date}</p>

              {/* Teknologi */}
              <div className="flex items-center gap-3 mt-3 text-lg text-teal-400">
                {item.techStack.map((icon, i) => (
                  <FontAwesomeIcon key={i} icon={icon} className="text-2xl" />
                ))}
              </div>

              {/* Link ke Project */}
              <Link
                href={item.link}
                className="mt-4 inline-block text-teal-400 hover:text-teal-300 transition duration-300 font-semibold"
              >
                View Project →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
