"use client";

import HeroSection from "@/app/components/HeroSection"; // import HeroSection
import AboutPage from "@/app/about/page";
import SkillsPage from "@/app/skills/page";
import WorksPage from "@/app/works/page";
import ExperiencePage from "@/app/experience/page";
import ContactPage from "@/app/contact/page";


export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-black text-white px-6">
      {/* Lingkaran Gradien Atas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-8 bg-gradient-to-r from-[#D3E97A] to-lime-400 rounded-full blur-3xl opacity-80 z-0"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Section Import */}
      <AboutPage />
      <SkillsPage />
      <WorksPage />
      <ExperiencePage />
      <ContactPage />
     

      {/* Lingkaran Gradien Bawah */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-gradient-to-r from-[#D3E97A] to-lime-400 rounded-full blur-3xl opacity-70 z-0"></div>
    </div>
  );
}
