"use client";

import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";
import AnimatedText from "@/app/components/AnimatedText";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

// Komponen Sosial Media
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

  // React Spring: Parallax XY untuk semua elemen
  const [{ xy }, api] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      api.start({ xy: [x * 100, y * 100] });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [api]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center z-10 px-6 text-white relative overflow-hidden w-full"
    >
      {/* 🔵 Animated Blobs */}
      <animated.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#D3E97A] rounded-full blur-3xl opacity-30 -z-10"
        style={{
          transform: xy.to((x, y) => `translate3d(${x}px, ${y}px, 0)`),
        }}
      />
      <animated.div
        className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-lime-400 rounded-full blur-3xl opacity-20 -z-10"
        style={{
          transform: xy.to((x, y) => `translate3d(${-x}px, ${-y}px, 0)`),
        }}
      />

      {/* 🟡 Heading with Parallax */}
      <animated.h1
        className="text-4xl md:text-6xl font-extrabold mb-4 text-[#D3E97A] flex items-center justify-center"
        style={{
          transform: xy.to((x, y) => `translate3d(${x / 5}px, ${y / 5}px, 0)`),
        }}
      >
        Hello <span className="ml-2 animate-wave inline-block">👋</span>
      </animated.h1>

      {/* 🟣 Animated Text with Parallax */}
      <animated.div
        style={{
          transform: xy.to((x, y) => `translate3d(${x / 6}px, ${y / 6}px, 0)`),
        }}
      >
        <AnimatedText
          text="I'm Azzam FR, a passionate Informatics Engineering student who loves web development and creating amazing digital experiences."
          className="text-lg md:text-2xl font-light text-gray-300 text-center max-w-3xl"
          delay={0.2}
        />
      </animated.div>

      {/* 🟢 CTA Buttons with Parallax */}
      <animated.div
        className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        style={{
          transform: xy.to(
            (x, y) => `translate3d(${x / 10}px, ${y / 10}px, 0)`
          ),
        }}
      >
        <Link
          href="#works"
          className="px-6 py-3 bg-[#D3E97A] text-black font-semibold rounded-full shadow-md hover:bg-lime-400 transition duration-300"
        >
          Lihat Proyek Saya 🚀
        </Link>
        <Link
          href="/cv-azzam-farras.pdf" // Pastikan file CV kamu berada di folder /public
          download
          className="px-6 py-3 border border-[#D3E97A] text-[#D3E97A] font-semibold rounded-full hover:bg-[#D3E97A] hover:text-black transition duration-300"
        >
          Download CV 📄
        </Link>
      </animated.div>

      {/* 🔘 Social Media - tidak ikut parallax (biar tetap stabil) */}
      <div className="mt-10 flex space-x-6 text-gray-400 justify-center">
        {socialMedia.map((item, index) => (
          <SocialMediaLink
            key={index}
            href={item.href}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </div>
    </section>
  );
}
