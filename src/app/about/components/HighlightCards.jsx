"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HighlightCards({ highlights }) {
  return (
    <motion.div
      className="max-w-4xl w-full bg-gradient-to-r from-[#111111]/70 via-[#1a1a1a]/60 to-[#111111]/70 border border-[#cceb6c]/30 rounded-3xl shadow-2xl backdrop-blur-xl p-10 md:p-12 space-y-8 z-10"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a]/80 to-[#111111]/80 border border-transparent shadow-lg transition-all duration-400 group cursor-pointer"
            whileHover={{
              scale: 1.05,
              y: -5,
              rotate: 1,
              borderColor: "#cceb6c",
              boxShadow: "0 15px 25px rgba(204, 235, 108, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="p-4 bg-[#cceb6c]/20 rounded-full text-[#cceb6c] group-hover:bg-[#cceb6c] group-hover:text-black transition-colors duration-300"
              whileHover={{ rotate: 15 }}
            >
              <FontAwesomeIcon icon={item.icon} className="text-2xl" />
            </motion.div>
            <span className="font-medium text-lg group-hover:font-semibold transition-all duration-300">
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
