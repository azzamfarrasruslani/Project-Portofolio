"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HighlightCards({ highlights }) {
  return (
    <motion.div
      className="max-w-4xl w-full bg-[#111111]/60 border border-[#cceb6c]/30 rounded-3xl shadow-xl backdrop-blur-lg p-10 md:p-12 space-y-8 z-10"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 bg-[#1a1a1a] border border-[#cceb6c]/20 rounded-xl p-5 transition duration-300 hover:scale-[1.02] hover:bg-[#cceb6c] hover:text-black group shadow-md"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-[#cceb6c] text-2xl group-hover:text-black"
            />
            <span className="font-medium text-lg group-hover:font-semibold">
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
