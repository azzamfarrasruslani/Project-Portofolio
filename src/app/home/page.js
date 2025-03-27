"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  // Daftar Sosial Media + Ikon
  const socialMedia = [
    { name: "GitHub", href: "https://github.com", icon: faGithub },
    { name: "LinkedIn", href: "https://linkedin.com", icon: faLinkedin },
    { name: "YouTube", href: "https://youtube.com", icon: faYoutube },
    { name: "Contact", href: "mailto:email@example.com", icon: faEnvelope },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white px-6">
      {/* Lingkaran Gradien Atas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-7 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-3xl opacity-55 z-0"></div>

      {/* Animasi Teks */}
      <motion.h1
        className="text-6xl font-bold mb-2 flex items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello{" "}
        <motion.span
          className="ml-2"
          animate={{ rotate: [0, -20, 0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          👋
        </motion.span>
      </motion.h1>

      <motion.p
        className="text-3xl font-light text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        I&apos;m <span className="font-semibold">Azzam FR</span>, a passionate
        Informatics Engineering student who loves web development and creating
        amazing digital experiences.
      </motion.p>

      {/* Link Sosial Media */}
      <motion.div
        className="mt-6 flex space-x-6 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      >
        {socialMedia.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300 flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={item.icon} className="text-xl" />
              <span>{item.name}</span>
            </Link>
          </div>
        ))}
      </motion.div>

      {/* Lingkaran Gradien Bawah */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-3xl opacity-60 z-0"></div>
    </div>
  );
}
