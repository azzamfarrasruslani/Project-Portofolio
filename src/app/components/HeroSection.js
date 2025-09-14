"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/app/components/AnimatedText";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

// Reusable SocialMediaLink Component
const SocialMediaLink = ({ href, icon: Icon, name }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#D3E97A] transition duration-300 flex items-center space-x-2 group"
  >
    <Icon className="text-xl group-hover:text-[#D3E97A] group-hover:drop-shadow-[0_0_6px_#D3E97A]" />
    <span className="text-sm md:text-base">{name}</span>
  </Link>
);

export default function HeroSection() {
  const socialMedia = [
    {
      name: "GitHub",
      href: "https://github.com/azzamfarrasruslani",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/azzam-farras-ruslani/",
      icon: FaLinkedin,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@azzam_tif?si=A_lWJ-dPIhNTlRA-",
      icon: FaYoutube,
    },
    {
      name: "Email",
      href: "mailto:azzamfarrasrusl@gmail.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center z-10 px-6 text-white relative"
    >
      {/* Avatar */}
      <motion.img
        src="/azzam-profile.png" // Ganti dengan path foto kamu
        alt="Profile"
        className="w-36 h-36 rounded-full border-4 border-[#D3E97A] mb-6 shadow-lg object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4 text-[#D3E97A] flex items-center justify-center"
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

      {/* Animated Text */}
      <AnimatedText
        text="I'm Azzam FR, a passionate Informatics Engineering student who loves web development and creating amazing digital experiences."
        className="text-lg md:text-2xl font-light text-gray-300 text-center max-w-3xl"
        delay={0.2}
      />

      {/* CTA Button */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <Link
          href="#works"
          className="px-6 py-3 bg-[#D3E97A] text-black font-semibold rounded-full shadow-md hover:bg-lime-400 transition duration-300"
        >
          Lihat Proyek Saya 🚀
        </Link>
        <Link
          href="#contact"
          className="px-6 py-3 border border-[#D3E97A] text-[#D3E97A] font-semibold rounded-full hover:bg-[#D3E97A] hover:text-black transition duration-300"
        >
          Hubungi Saya ✉️
        </Link>
      </motion.div>

      {/* Social Media */}
      <motion.div
        className="mt-10 flex space-x-6 text-gray-400 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
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

      {/* Decorative Background Glow */}
      <div className="absolute top-[-100px] left-[50%] w-[300px] h-[300px] bg-[#D3E97A]/20 blur-3xl rounded-full -z-10 animate-pulse" />
    </section>
  );
}
