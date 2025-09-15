"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;

    if (!email.value.includes("@")) {
      setStatus("⚠️ Please enter a valid email!");
      return;
    }

    const subject = encodeURIComponent("Message from Portfolio Website");
    const body = encodeURIComponent(
      `Name: ${name.value}\nEmail: ${email.value}\n\nMessage:\n${message.value}`
    );

    window.location.href = `mailto:azzamfarrasrusl@gmail.com?subject=${subject}&body=${body}`;
    setStatus("✅ Message opened in your email client!");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 py-20"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-[#cceb6c] text-center tracking-wide">
        📬 Get in Touch
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#cceb6c] to-lime-400 rounded-full mb-12" />

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Contact Info Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#111111] border border-[#cceb6c]/30 rounded-2xl p-8 space-y-6 shadow-xl transition-all"
        >
          <p className="text-[#9CA3AF] text-lg leading-relaxed">
            Have a project, collaboration idea, or just want to say hi? Feel free
            to reach out via email, phone, or social media!
          </p>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 cursor-pointer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-[#cceb6c] text-2xl" />
            <span className="text-lg break-all">azzamfarrasrusl@gmail.com</span>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 cursor-pointer"
          >
            <FontAwesomeIcon icon={faPhone} className="text-[#cceb6c] text-2xl" />
            <span className="text-lg">+62 822-1488-4329</span>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 cursor-default"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#cceb6c] text-2xl" />
            <span className="text-lg">Pekanbaru, Indonesia</span>
          </motion.div>

          {/* Availability */}
          <div className="text-[#9CA3AF] text-sm">
            <p>Available: Mon – Fri, 09:00 – 18:00</p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://linkedin.com/in/azzamfarrasruslani"
              target="_blank"
              className="text-[#cceb6c] hover:text-lime-400 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/azzamfarrasruslani"
              target="_blank"
              className="text-[#cceb6c] hover:text-lime-400 transition"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://wa.me/6282214884329"
              target="_blank"
              className="text-[#cceb6c] hover:text-lime-400 transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>

          {/* Small CTA */}
          <p className="text-[#cceb6c] text-sm mt-4 italic">
            📬 Send me a message anytime!
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          whileHover={{ scale: 1.02 }}
          className="bg-[#111111] border border-[#cceb6c]/30 rounded-2xl p-8 space-y-6 shadow-xl transition-all"
        >
          <div>
            <label className="block text-sm font-medium text-[#cceb6c] mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-md bg-black border border-[#cceb6c]/30 text-white placeholder-gray-400 focus:border-[#cceb6c] focus:outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#cceb6c] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-md bg-black border border-[#cceb6c]/30 text-white placeholder-gray-400 focus:border-[#cceb6c] focus:outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#cceb6c] mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full p-3 rounded-md bg-black border border-[#cceb6c]/30 text-white placeholder-gray-400 focus:border-[#cceb6c] focus:outline-none transition"
              placeholder="Write your message here..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-md bg-gradient-to-r from-[#cceb6c] to-lime-400 text-black font-bold shadow-md hover:shadow-xl transition duration-300"
          >
            Send Message ✉️
          </motion.button>

          {status && <p className="mt-2 text-sm text-green-400">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
