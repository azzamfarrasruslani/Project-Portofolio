"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import portfolioItems from "@/data/portfolio.json";

export default function WorksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section
      id="works"
      className="min-h-screen py-24 px-6 relative overflow-hidden flex flex-col items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-teal-500 dark:from-lime-400 dark:to-teal-400 tracking-tight">
            SELECTED WORKS
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A currated collection of projects that demonstrate my passion for
            building high-quality web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioItems.slice(0, 3).map((item, index) => (
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
                    {item.date || "Featured Project"}
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

        {/* View More Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full font-bold text-gray-900 dark:text-white hover:bg-lime-50 dark:hover:bg-lime-900/20 hover:border-lime-500 dark:hover:border-lime-500 hover:text-lime-700 dark:hover:text-lime-400 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            Explore All Projects
            <FaExternalLinkAlt className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
