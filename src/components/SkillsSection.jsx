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
import { DiVisualstudio } from "react-icons/di";
import skillsData from "@/data/skills.json";

// Icon Mapping
const iconMap = {
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
  DiVisualstudio,
};

export default function SkillsSection() {
  const skills = skillsData.map((category) => ({
    ...category,
    items: category.items.map((item) => ({
      ...item,
      icon: iconMap[item.icon],
    })),
  }));

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-gray-900 dark:text-gray-100 px-6 py-24 relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.h2
        className="text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-teal-500 dark:from-lime-400 dark:to-teal-400 z-10 tracking-tight text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        SKILLS & TECH
      </motion.h2>

      <motion.p
        className="text-gray-600 dark:text-gray-400 text-center text-lg max-w-2xl mb-12 z-10 font-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Tools and technologies I use to craft seamless digital experiences and
        scalable backend systems.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full z-10">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-lime-900/5 dark:hover:shadow-lime-900/20 transition-all duration-300 cursor-default"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">
              {group.category}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
              {group.description}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {group.items.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center bg-gray-50/50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl p-4 hover:bg-lime-600 dark:hover:bg-lime-600 hover:border-lime-600 dark:hover:border-lime-600 hover:text-white dark:hover:text-white transition-all duration-300 group shadow-sm cursor-pointer"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <Icon className="text-3xl mb-3 text-gray-400 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                    <span className="text-xs font-semibold text-center text-gray-600 dark:text-gray-200 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
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
