"use client";

import { useState, useEffect } from "react";
import AnimatedText from "@/app/components/AnimatedText";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

// Social Media Component
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
    { name: "GitHub", href: "https://github.com/azzamfarrasruslani", icon: FaGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/azzam-farras-ruslani/", icon: FaLinkedin },
    { name: "YouTube", href: "https://youtube.com/@azzam_tif?si=A_lWJ-dPIhNTlRA-", icon: FaYoutube },
    { name: "Email", href: "mailto:azzamfarrasrusl@gmail.com", icon: FaEnvelope },
  ];

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

  // Translate function for parallax
  const translate = (factorX = 1, factorY = 1) =>
    `translate3d(${mousePos.x * factorX}px, ${mousePos.y * factorY}px, 0)`;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center z-10 px-6 text-white relative overflow-hidden w-full">
      {/* 🔵 Animated Blobs */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#D3E97A] rounded-full blur-3xl opacity-30 -z-10"
        style={{ transform: translate(100, 100) }}
      />
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-lime-400 rounded-full blur-3xl opacity-20 -z-10"
        style={{ transform: translate(-100, -100) }}
      />

      {/* 🟡 Heading with Parallax */}
      <h1
        className="text-4xl md:text-6xl font-extrabold mb-4 text-[#D3E97A] flex items-center justify-center"
        style={{ transform: translate(20, 20) }}
      >
        Hi there <span className="ml-2 animate-wave inline-block">👋</span>
      </h1>

      {/* 🟣 Animated Text with Parallax */}
      <div style={{ transform: translate(15, 15) }}>
        <AnimatedText
          text="I'm Azzam FR, a passionate Informatics Engineering student who loves building web applications and crafting engaging digital experiences."
          className="text-lg md:text-2xl font-light text-gray-300 text-center max-w-3xl"
          delay={0.2}
        />
      </div>

      {/* 🟢 CTA Buttons with Parallax */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4" style={{ transform: translate(10, 10) }}>
        <Link
          href="#works"
          className="px-6 py-3 bg-[#D3E97A] text-black font-semibold rounded-full shadow-md hover:bg-lime-400 transition duration-300"
        >
          View My Projects 🚀
        </Link>
        <Link
          href="/cv-azzam-farras.pdf"
          download
          className="px-6 py-3 border border-[#D3E97A] text-[#D3E97A] font-semibold rounded-full hover:bg-[#D3E97A] hover:text-black transition duration-300"
        >
          Download My CV 📄
        </Link>
      </div>

      {/* 🔘 Social Media */}
      <div className="mt-10 flex space-x-6 text-gray-400 justify-center">
        {socialMedia.map((item, index) => (
          <SocialMediaLink key={index} href={item.href} icon={item.icon} name={item.name} />
        ))}
      </div>
    </section>
  );
}
