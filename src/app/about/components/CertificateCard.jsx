"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CertificateCard({ certificate }) {
  return (
    <motion.div
      className="mt-20 w-full max-w-4xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl font-bold text-[#cceb6c] mb-6">🎓 Certifications</h3>

      <motion.div
        className="bg-[#111111]/60 backdrop-blur-lg border border-[#cceb6c]/30 rounded-2xl shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300 group"
       
      >
        <div className="flex-1 space-y-2">
          <h4 className="text-lg font-semibold text-white group-hover:text-[#cceb6c] transition-colors duration-300">
            {certificate.title}
          </h4>
          <p className="text-sm text-gray-400">
            Issued by <span className="text-[#cceb6c] font-medium">{certificate.issuer}</span> • {certificate.date}
          </p>
          <p className="text-gray-300 text-sm">Credential ID: {certificate.credentialId}</p>
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-5 py-2 bg-[#cceb6c] text-black rounded-full font-semibold hover:bg-lime-400 hover:scale-105 transition-all duration-300 shadow-md"
          >
            View Certificate
          </a>
        </div>

        {/* Certificate Image */}
        <motion.div
          className="w-full md:w-56 h-auto overflow-hidden rounded-xl border border-[#cceb6c]/20 shadow-lg "
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <Image
            src={certificate.image}
            alt="Certificate"
            width={500}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
