"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import PortfolioPage from "../works/page";
import AnimatedText from "../components/AnimatedText";

// Reusable SocialMediaLink Component
const SocialMediaLink = ({ href, icon, name }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition duration-300 flex items-center space-x-2"
  >
    <FontAwesomeIcon icon={icon} className="text-xl" />
    <span>{name}</span>
  </Link>
);

// Reusable AnimatedText Component

export default function HomePage() {
  const socialMedia = [
    {
      name: "GitHub",
      href: "https://github.com/azzamfarrasruslani",
      icon: faGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/azzam-farras-ruslani/",
      icon: faLinkedin,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@azzam_tif?si=A_lWJ-dPIhNTlRA-",
      icon: faYoutube,
    },
    {
      name: "Contact",
      href: "mailto:azzamfarrasrusl@gmail.com",
      icon: faEnvelope,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white px-6">
      {/* Lingkaran Gradien Atas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-7 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-3xl opacity-100 z-0"></div>

      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center z-10"
      >
        {/* Animasi Teks */}
        <motion.h1
          className="text-5xl font-bold mb-2 flex items-center justify-center md:text-6xl"
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

        <AnimatedText
          text="I'm Azzam FR, a passionate Informatics Engineering student who loves web development and creating amazing digital experiences."
          className="text-xl font-light text-center max-w-2xl md:text-3xl"
          delay={0.2}
        />

        {/* Link Sosial Media */}
        <motion.div
          className="mt-6 flex space-x-6 text-gray-400 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          {socialMedia.map((item, index) => (
            <SocialMediaLink
              key={index}
              href={item.href}
              icon={item.icon}
              name={item.name}
            />
          ))}
        </motion.div>
      </section>

      <PortfolioPage />

      {/* Lingkaran Gradien Bawah */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-3xl opacity-60 z-0"></div>
    </div>
  );
}
