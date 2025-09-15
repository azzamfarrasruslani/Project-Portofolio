"use client";
import { motion } from "framer-motion";
import HighlightCards from "./components/HighlightCards";
import EducationTimeline from "./components/EducationTimeline";
import CertificateCard from "./components/CertificateCard";

const highlights = [
  { icon: require("@fortawesome/free-solid-svg-icons").faBolt, text: "Fast Learner" },
  { icon: require("@fortawesome/free-solid-svg-icons").faCode, text: "Clean & Efficient Code" },
  { icon: require("@fortawesome/free-solid-svg-icons").faUsers, text: "Great Team Player" },
  { icon: require("@fortawesome/free-solid-svg-icons").faRocket, text: "Innovative Problem Solver" },
];

const education = [
  {
    title: "MTs Sumatra Thawalib Parabek",
    time: "2017 - 2019",
    desc: "Secondary education based on pesantren (Islamic boarding school) and science."
  },
  {
    title: "SMA Negeri 2 Lubuk Basung",
    time: "2019 - 2023",
    desc: "Science major, active in organizations and technology."
  },
  {
    title: "Caltex Riau Polytechnic — Informatics Engineering",
    time: "2023 - Present",
    desc: "Focused on web development, networking, and software engineering."
  },
];


const certificate = {
  title: "MikroTik Certified Network Associate (MTCNA)",
  issuer: "MikroTik",
  date: "Maret 2024",
  credentialId: "MTCNA-2507NA1349",
  link: "https://mikrotik.com/training/certificates/c481349c629e9fc62c9e",
  image: "/images/sertifikat-mtcna.jpg", // Ganti sesuai path file image kamu
};

export default function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 py-24 relative overflow-hidden"
    >
      {/* Judul & Deskripsi */}
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

      {/* Komponen Terpisah */}
      <HighlightCards highlights={highlights} />
      <EducationTimeline entries={education} />
      <CertificateCard certificate={certificate} />
    </section>
  );
}
