"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";
import portfolioItems from "@/data/portfolio.json";

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-lime-600 dark:hover:text-lime-400 mb-8 transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-teal-500 dark:from-lime-400 dark:to-teal-400 tracking-tight"
          >
            ALL PROJECTS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl"
          >
            A complete collection of my works, experiments, and contributions.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-lime-900/10 dark:hover:shadow-lime-900/20 transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Actions */}
                <div className="absolute bottom-4 right-4 flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <Link
                    href={item.github}
                    target="_blank"
                    className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-lime-500 hover:text-white transition-colors shadow-lg"
                    title="View Code"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    href={item.liveDemo}
                    target="_blank"
                    className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-lime-500 hover:text-white transition-colors shadow-lg"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1 relative">
                {/* Decorative line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent group-hover:via-lime-500/50 transition-colors duration-500" />

                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider text-lime-600 dark:text-lime-400 uppercase mb-2 block">
                    {item.date || "Project"}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1 text-sm">
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-lg border border-gray-100 dark:border-gray-600 group-hover:border-lime-200 dark:group-hover:border-lime-700 group-hover:bg-lime-50 dark:group-hover:bg-lime-900/20 group-hover:text-lime-700 dark:group-hover:text-lime-300 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
