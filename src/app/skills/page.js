"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faLaravel,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faPaintBrush, faCode } from "@fortawesome/free-solid-svg-icons";

export default function SkillsPage() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
        { name: "JavaScript", icon: faJs },
        { name: "React", icon: faReact },
        { name: "Next.js", icon: faCode }, // bisa pakai icon custom
        { name: "Tailwind", icon: faPaintBrush }, // bisa ganti ke icon khusus Tailwind
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Laravel", icon: faLaravel },
        { name: "Node.js", icon: faNodeJs },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: faGitAlt },
        { name: "Figma", icon: faPaintBrush },
        { name: "VSCode", icon: faCode },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-[#000000] text-white px-6 py-20"
    >
      {/* Judul Section */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#cceb6c]">
        🛠 Skills & Tech Stack
      </h2>

      {/* Grid Kategori */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {skills.map((group, idx) => (
          <div key={idx} className="space-y-4">
            {/* Nama Kategori */}
            <h3 className="text-xl font-semibold text-center text-[#d9ff6f]">
              {group.category}
            </h3>

            {/* Card Skill */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {group.items.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-[#111111] border border-[#cceb6c]/30 rounded-lg p-4 hover:bg-[#cceb6c] hover:text-black transition duration-300"
                >
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-2xl mb-2 text-[#cceb6c]"
                  />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
