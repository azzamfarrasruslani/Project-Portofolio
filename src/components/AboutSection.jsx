"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCode,
  faUsers,
  faRocket,
  faMapMarkerAlt,
  faGraduationCap,
  faAward,
  faBriefcase,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import aboutData from "@/data/about.json";
import Image from "next/image";
import Experience from "./Experience";
import GithubActivity from "./GithubActivity";

// Icon mapping
const iconMap = {
  faBolt,
  faCode,
  faUsers,
  faRocket,
  briefcase: faBriefcase,
  trophy: faTrophy,
};

export default function AboutSection() {
  const highlights = aboutData.highlights;
  const education = aboutData.education;
  const certificate = aboutData.certificate;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 relative overflow-hidden flex flex-col items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-teal-500 dark:from-lime-400 dark:to-teal-400 tracking-tight">
            ABOUT ME
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* 1. Bio Card (Large) */}
          <motion.div
            className="md:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:shadow-lime-900/5 dark:hover:shadow-lime-900/20 transition-all duration-300 relative overflow-hidden group"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <FontAwesomeIcon
                icon={faCode}
                className="text-9xl text-lime-500"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I’m{" "}
                <span className="text-lime-700 dark:text-lime-400 font-bold">
                  Azzam FR
                </span>
                , a passionate Informatics Engineering student who thrives on
                building impactful and modern web solutions with clean and
                efficient code.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-lime-50 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 rounded-full text-sm font-semibold border border-lime-100 dark:border-lime-800">
                  frontend-dev
                </span>
                <span className="px-3 py-1 bg-lime-50 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 rounded-full text-sm font-semibold border border-lime-100 dark:border-lime-800">
                  ui-design
                </span>
                <span className="px-3 py-1 bg-lime-50 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 rounded-full text-sm font-semibold border border-lime-100 dark:border-lime-800">
                  problem-solver
                </span>
              </div>
            </div>
          </motion.div>

          {/* 2. Highlight/Stats Card (Tall) */}
          <motion.div
            className="md:row-span-2 bg-gradient-to-b from-lime-500 to-teal-600 dark:from-lime-600 dark:to-teal-700 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden flex flex-col justify-between group"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FontAwesomeIcon icon={faBolt} className="text-lime-200" />
                Highlights
              </h3>
              <div className="space-y-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover/item:bg-white group-hover/item:text-lime-600 transition-all">
                      <FontAwesomeIcon
                        icon={iconMap[item.icon]}
                        className="text-sm"
                      />
                    </div>
                    <span className="font-medium text-lime-50 group-hover/item:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-lime-200"
                />
                <span className="text-sm font-medium">
                  Based in Pekanbaru, ID
                </span>
              </div>
            </div>
          </motion.div>

          {/* 3. Education Card */}
          <motion.div
            className="md:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:shadow-lime-900/5 dark:hover:shadow-lime-900/20 transition-all duration-300 relative"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-lime-500"
              />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-lime-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      {edu.title}
                    </h4>
                    <p className="text-sm text-lime-600 dark:text-lime-400 font-semibold mb-1">
                      {edu.time}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. Certificate Card (Full Width) */}
          <motion.div
            className="md:col-span-3 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:shadow-lime-900/5 dark:hover:shadow-lime-900/20 transition-all duration-300 flex flex-col md:flex-row gap-8 items-center"
            variants={itemVariants}
          >
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 rounded-lg">
                  <FontAwesomeIcon icon={faAward} size="lg" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Featured Certification
                </h3>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {certificate.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Issued by{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {certificate.issuer}
                  </span>{" "}
                  • {certificate.date}
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-sm mt-1 font-mono">
                  {certificate.credentialId}
                </p>
              </div>

              <a
                href={certificate.link}
                target="_blank"
                className="inline-block px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-lime-600 dark:hover:bg-lime-400 transition-colors duration-300"
              >
                View Credential
              </a>
            </div>

            <div className="w-full md:w-1/3 relative h-48 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-inner group">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* 5. GitHub Activity Graph (Full Width) */}
          <motion.div className="md:col-span-3" variants={itemVariants}>
            <GithubActivity />
          </motion.div>
        </motion.div>

        {/* Experience Section - Separate Container */}
        <Experience />
      </div>
    </section>
  );
}
