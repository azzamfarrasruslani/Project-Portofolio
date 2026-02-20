import { useState, useEffect } from "react";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaArrowDown,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import socialMediaData from "@/data/socialMedia.json";

// Map string icon names to React components
const iconMap = {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
};

// Social Media Component
const SocialMediaLink = ({ href, icon: Icon, name, index }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 + index * 0.1 }}
    whileHover={{ y: -3 }}
    className="text-gray-400 hover:text-lime-600 transition-colors duration-300"
  >
    <Icon className="text-2xl" />
  </motion.a>
);

export default function HeroSection() {
  // Filter and Map Social Media Data
  const socialMedia = socialMediaData.map((item) => ({
    ...item,
    icon: iconMap[item.icon],
  }));

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-32 relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime-50 dark:bg-lime-900/30 border border-lime-100 dark:border-lime-800 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
          </span>
          <span className="text-sm font-medium text-lime-700 dark:text-lime-300 tracking-wide">
            Available for New Projects
          </span>
        </motion.div>

        {/* Big Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            transform: `prepend(translate3d(${mousePos.x}px, ${mousePos.y}px, 0))`,
          }}
          className="mb-8"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-gray-900 dark:text-white leading-[0.9]">
            FULL STACK
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-teal-500 dark:from-lime-400 dark:to-teal-400">
              DEVELOPER
            </span>
          </h1>
        </motion.div>

        {/* Subheading / Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto mb-10"
        >
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
            Hi, I'm{" "}
            <span className="text-gray-900 dark:text-white font-bold">
              Azzam
            </span>
            . I build accessible, pixel-perfect, and performant web experiences.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#works"
            className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:bg-lime-600 dark:hover:bg-lime-400 transition-all duration-300 shadow-lg hover:shadow-lime-500/30 flex items-center gap-2"
          >
            View Work
            <FaArrowDown className="-rotate-90 text-sm" />
          </Link>
          <Link
            href="/cv-azzam-farras.pdf"
            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 flex items-center gap-2"
          >
            Download CV
          </Link>
        </motion.div>

        {/* Social Links - Minimalist */}
        <div className="flex justify-center gap-6">
          {socialMedia.map((item, index) => (
            <SocialMediaLink key={index} {...item} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative Gradient Blurs (Very Subtle) */}
      <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-lime-100 dark:bg-lime-900/20 rounded-full blur-[120px] opacity-40 mix-blend-multiply dark:mix-blend-normal pointer-events-none transition-colors duration-300" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-teal-50 dark:bg-teal-900/20 rounded-full blur-[120px] opacity-40 mix-blend-multiply dark:mix-blend-normal pointer-events-none transition-colors duration-300" />
    </section>
  );
}
