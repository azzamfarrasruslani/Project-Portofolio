"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faTrophy } from "@fortawesome/free-solid-svg-icons";

export default function ExperiencePage() {
  const experiences = [
    {
      year: "2023",
      title: "Web Developer Intern",
      description: "Mengembangkan dan memelihara aplikasi berbasis web menggunakan Laravel & React.",
      icon: faBriefcase,
    },
    {
      year: "2024",
      title: "Hackathon Finalist",
      description: "Mencapai final dalam kompetisi hackathon nasional dengan project IoT & Web App.",
      icon: faTrophy,
    },
    {
      year: "2025",
      title: "Freelance Web Developer",
      description: "Mengerjakan beberapa project freelance untuk website company profile dan e-commerce.",
      icon: faBriefcase,
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center bg-[#000000] text-white px-6 py-20"
    >
      {/* Judul Section */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#cceb6c]">
        🏆 Experience & Achievements
      </h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-[#cceb6c]/40 max-w-3xl w-full pl-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 relative">
            {/* Icon di garis timeline */}
            <div className="absolute -left-[30px] flex items-center justify-center w-10 h-10 bg-[#111111] border-2 border-[#cceb6c] rounded-full">
              <FontAwesomeIcon icon={exp.icon} className="text-[#cceb6c]" />
            </div>

            {/* Card */}
            <div className="bg-[#111111] border border-[#cceb6c]/30 rounded-lg p-6 hover:border-[#d9ff6f] transition duration-300">
              <span className="text-sm text-[#9CA3AF]">{exp.year}</span>
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-[#9CA3AF] mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
