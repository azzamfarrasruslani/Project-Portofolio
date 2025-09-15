"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiLaravel,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di"; // VSCode / Visual Studio

export default function SkillsPage() {
  const skills = [
    {
      category: "Frontend",
      description: "Building beautiful and responsive user interfaces.",
      items: [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs }, // gunakan SiNextdotjs bukan SiNextjs
        { name: "Tailwind", icon: SiTailwindcss },
      ],
    },
    {
      category: "Backend",
      description: "Server-side logic and database interaction.",
      items: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Laravel", icon: SiLaravel },
      ],
    },
    {
      category: "Tools",
      description: "Tools to support development productivity.",
      items: [
        { name: "Git", icon: SiGit },
        { name: "Figma", icon: SiFigma },
        { name: "VSCode", icon: DiVisualstudio },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#0f0f0f] to-black text-white px-6 py-24 relative"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#cceb6c] blur-[120px] opacity-10 rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#cceb6c] blur-[120px] opacity-10 rounded-full z-0" />

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 text-[#cceb6c] z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🛠 Skills & Tech Stack
      </motion.h2>

      <motion.p
        className="text-gray-400 text-center text-lg max-w-2xl mb-12 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Tools and technologies I use to craft seamless digital experiences and scalable backend systems.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full z-10">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            className="bg-[#111111]/60 border border-[#cceb6c]/30 rounded-2xl p-6 shadow-lg backdrop-blur-md transition hover:shadow-[#cceb6c]/50 hover:scale-[1.02] cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-center text-[#cceb6c] mb-2">{group.category}</h3>
            <p className="text-sm text-gray-400 text-center mb-4">{group.description}</p>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {group.items.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center bg-[#1a1a1a] border border-[#cceb6c]/20 rounded-lg p-4 hover:bg-[#cceb6c] hover:text-black transition duration-300 group shadow-md"
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    <Icon className="text-3xl mb-2 text-[#cceb6c] group-hover:text-black transition-colors duration-300" />
                    <span className="text-xs font-medium text-center">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
