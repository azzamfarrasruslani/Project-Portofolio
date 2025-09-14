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
      className="min-h-screen flex flex-col justify-center items-center z-10"
    >
      <motion.h1
        className="text-5xl font-bold mb-4 flex items-center justify-center md:text-6xl text-[#D3E97A]"
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
        className="text-lg md:text-2xl font-light text-gray-300 text-center max-w-2xl"
        delay={0.2}
      />

      <motion.div
        className="mt-8 flex space-x-8 text-gray-400 justify-center"
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
  );
}
