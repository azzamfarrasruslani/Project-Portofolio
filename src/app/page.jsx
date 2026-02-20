"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import WorksSection from "@/components/WorksSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <HeroSection />

      {/* Sections */}
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
}
