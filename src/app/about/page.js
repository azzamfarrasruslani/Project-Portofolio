"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCode,
  faUsers,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function AboutPage() {
  const highlights = [
    { icon: faBolt, text: "Fast Learner" },
    { icon: faCode, text: "Clean & Efficient Code" },
    { icon: faUsers, text: "Great Team Player" },
    { icon: faRocket, text: "Innovative Problem Solver" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#0f0f0f] to-black text-white px-6 py-24 relative overflow-hidden"
    >
      {/* Background Accent Circle */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#cceb6c] blur-[120px] opacity-20 rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#cceb6c] blur-[120px] opacity-20 rounded-full z-0" />

      {/* Judul Section */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 text-[#cceb6c] z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📖 About Me
      </motion.h2>

      <motion.p
        className="text-gray-300 text-center max-w-2xl text-lg md:text-xl font-light mb-10 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’m <span className="text-[#cceb6c] font-semibold">Azzam FR</span>, a passionate Informatics Engineering student
        who thrives on building impactful and modern web solutions with clean and efficient code.
      </motion.p>

      {/* Card utama */}
      <motion.div
        className="max-w-4xl w-full bg-[#111111]/60 border border-[#cceb6c]/30 rounded-3xl shadow-xl backdrop-blur-lg p-10 md:p-12 space-y-8 z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Highlight Skills */}
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
    </section>
  );
}
