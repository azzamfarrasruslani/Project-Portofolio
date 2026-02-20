"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faTrophy } from "@fortawesome/free-solid-svg-icons";
import experienceData from "@/data/experience.json";

const iconMap = {
  briefcase: faBriefcase,
  trophy: faTrophy,
};

export default function Experience() {
  return (
    <motion.div
      className="mt-16 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:shadow-lime-900/5 dark:hover:shadow-lime-900/20 transition-all duration-300 relative w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
        <FontAwesomeIcon icon={faBriefcase} className="text-lime-500" />
        Experience
      </h3>

      <div className="relative border-l-2 border-gray-100 dark:border-gray-700 pl-8 ml-3 space-y-12">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Icon Dot */}
            <div className="absolute -left-[41px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400 border border-lime-200 dark:border-lime-800 z-10 group-hover:bg-lime-500 group-hover:text-white transition-colors duration-300">
              <FontAwesomeIcon icon={iconMap[exp.icon]} className="text-xs" />
            </div>

            <div className="relative">
              <span className="inline-block bg-lime-50 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 text-xs font-bold px-3 py-1 rounded-full mb-2 border border-lime-100 dark:border-lime-800">
                {exp.year}
              </span>
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{exp.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-base leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
