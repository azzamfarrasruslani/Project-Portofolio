"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCode,
  faUsers,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const highlights = [
    { icon: faBolt, text: "Fast Learner" },
    { icon: faCode, text: "Clean Code" },
    { icon: faUsers, text: "Team Player" },
    { icon: faRocket, text: "Problem Solver" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-[#000000] text-white px-6 py-20"
    >
      {/* Judul Section */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#cceb6c]">
        📖 About Me
      </h2>

      {/* Card utama */}
      <div className="max-w-3xl bg-[#111111] border border-[#cceb6c]/40 rounded-2xl shadow-lg p-8 space-y-6">
        {/* Paragraf singkat */}
        <p className="text-[#9CA3AF] text-lg leading-relaxed text-center">
          Hello! I’m <span className="text-[#cceb6c] font-semibold">Azzam FR</span>, 
          an Informatics Engineering student who loves exploring web development and 
          creating amazing digital experiences with modern technologies.
        </p>

        {/* Highlight Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#111111] border border-[#cceb6c]/30 rounded-lg p-4 hover:bg-[#cceb6c] hover:text-black transition duration-300"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-[#cceb6c] text-xl"
              />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
