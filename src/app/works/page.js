"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import portfolioItems from "@/data/portfolio.json"; // ← Import dari file JSON

export default function PortfolioSection() {
  return (
    <section
      id="works"
      className="min-h-screen flex flex-col items-center py-20 text-white bg-black"
    >
      <motion.h1
        className="text-4xl font-bold mb-14"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects Showcase
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 w-full max-w-7xl">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_15px_#D3E97A] transition duration-300 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />

            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm flex-1">{item.description}</p>
              <p className="text-xs text-gray-500 mt-3">{item.date}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {item.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#D3E97A]/10 text-[#D3E97A] text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  href={item.liveDemo}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 text-center bg-[#D3E97A] text-black font-semibold py-2 rounded-lg hover:bg-lime-400 transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </Link>
                <Link
                  href={item.github}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 text-center border border-gray-700 text-white font-semibold py-2 rounded-lg hover:border-[#D3E97A] hover:text-[#D3E97A] transition"
                >
                  <RiGithubLine /> GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
