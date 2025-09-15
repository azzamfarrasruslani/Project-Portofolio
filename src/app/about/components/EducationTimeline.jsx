"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function EducationTimeline({ entries }) {
  return (
    <motion.div
      className="mt-20 w-full max-w-5xl px-4 space-y-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl md:text-4xl font-bold text-center text-[#cceb6c]">
        📌 Education & Experience
      </h3>

      <div className="relative border-l-[3px] border-[#cceb6c]/30 ml-4 space-y-16">
        {/* Vertical glow line (animated) */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#cceb6c] to-transparent animate-pulse" />

        {entries.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`relative ml-6`}
          >
            {/* Icon Marker */}
            <div className="absolute -left-[1.15rem] top-2 bg-[#cceb6c] w-6 h-6 rounded-full flex items-center justify-center shadow-md">
              <FaMapMarkerAlt className="text-black text-sm" />
            </div>

            {/* Timeline Card */}
            <div
              className={`bg-[#111111] border border-[#cceb6c]/20 rounded-2xl p-6 shadow-lg w-full`}
            >
              {/* Year as badge */}
              <div className="mb-2">
                <span className="inline-block bg-[#cceb6c] text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {item.time}
                </span>
              </div>

              <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
