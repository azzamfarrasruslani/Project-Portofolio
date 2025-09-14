"use client";

import HeroSection from "@/app/components/HeroSection";
import AboutPage from "@/app/about/page";
import SkillsPage from "@/app/skills/page";
import WorksPage from "@/app/works/page";
import ExperiencePage from "@/app/experience/page";
import ContactPage from "@/app/contact/page";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-black text-white  overflow-hidden">
      {/* Background Gradient Full */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]" />

      {/* Animated Blur Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-lime-400 rounded-full filter blur-3xl opacity-30"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#D3E97A] rounded-full filter blur-3xl opacity-30"
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Section Import */}
      <AboutPage />
      <SkillsPage />
      <WorksPage />
      <ExperiencePage />
      <ContactPage />

      {/* Gradient Light Bar Atas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-8 bg-gradient-to-r from-[#D3E97A] to-lime-400 rounded-full blur-3xl opacity-80 z-10" />

      {/* Gradient Light Bar Bawah */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-gradient-to-r from-[#D3E97A] to-lime-400 rounded-full blur-3xl opacity-70 z-10" />
    </div>
  );
}
