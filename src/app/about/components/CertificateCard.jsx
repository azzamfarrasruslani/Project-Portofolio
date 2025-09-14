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
      <h3 className="text-2xl font-bold text-[#cceb6c] mb-4">🎓 Sertifikasi</h3>
      <div className="bg-[#1a1a1a]/70 border border-[#cceb6c]/20 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h4 className="text-lg font-semibold text-white">{certificate.title}</h4>
          <p className="text-sm text-gray-400">
            Diterbitkan oleh <span className="text-[#cceb6c] font-medium">{certificate.issuer}</span> • {certificate.date}
          </p>
          <p className="text-gray-300 text-sm mt-1">Credential ID: {certificate.credentialId}</p>
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-[#cceb6c] text-black rounded-full font-semibold hover:bg-lime-400 transition"
          >
            Lihat Sertifikat
          </a>
        </div>

        {/* Gambar Sertifikat */}
        <div className="w-full md:w-56 h-auto overflow-hidden rounded-lg shadow-md border border-[#cceb6c]/30">
          <Image
            src={certificate.image}
            alt="Sertifikat"
            width={500}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
