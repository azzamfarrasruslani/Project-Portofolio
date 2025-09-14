"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faTrophy } from "@fortawesome/free-solid-svg-icons";
import experienceData from "@/data/experience.json";

const iconMap = {
  briefcase: faBriefcase,
  trophy: faTrophy,
};

export default function ExperiencePage() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center bg-[#000000] text-white px-6 py-20"
    >
      {/* Judul Section */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#cceb6c] text-center">
        🏆 Experience & Achievements
      </h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-[#cceb6c]/40 max-w-3xl w-full pl-6">
        {experienceData.map((exp, index) => (
          <div key={index} className="mb-10 relative">
            {/* Icon di garis timeline */}
            <div className="absolute -left-[30px] flex items-center justify-center w-10 h-10 bg-[#111111] border-2 border-[#cceb6c] rounded-full">
              <FontAwesomeIcon
                icon={iconMap[exp.icon]}
                className="text-[#cceb6c]"
              />
            </div>

            {/* Card */}
            <div className="bg-[#111111] border border-[#cceb6c]/30 rounded-lg p-6 hover:border-[#d9ff6f] transition duration-300">
              <span className="text-sm text-[#9CA3AF]">{exp.year}</span>
              <h3 className="text-xl font-semibold text-white mt-1">
                {exp.title}
              </h3>
              <p className="text-[#9CA3AF] mt-2 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
