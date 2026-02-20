"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
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
      `Name: ${name.value}\nEmail: ${email.value}\n\nMessage:\n${message.value}`,
    );

    window.location.href = `mailto:azzamfarrasrusl@gmail.com?subject=${subject}&body=${body}`;
    setStatus("✅ Message opened in your email client!");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center py-24 px-6 relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-teal-500 dark:from-lime-400 dark:to-teal-400 tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 w-full">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-10 space-y-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
              Have a project, collaboration idea, or just want to say hi? Feel
              free to reach out via email, phone, or social media!
            </p>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-5 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-600 group-hover:border-lime-500 dark:group-hover:border-lime-400 transition-colors">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-lime-600 dark:text-lime-400 text-xl"
                  />
                </div>
                <span className="text-lg text-gray-700 dark:text-gray-200 font-medium group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                  azzamfarrasrusl@gmail.com
                </span>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-5 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-600 group-hover:border-lime-500 dark:group-hover:border-lime-400 transition-colors">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-lime-600 dark:text-lime-400 text-xl"
                  />
                </div>
                <span className="text-lg text-gray-700 dark:text-gray-200 font-medium group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                  +62 822-1488-4329
                </span>
              </motion.div>

              {/* Location */}
              <div className="flex items-center gap-5 cursor-default">
                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-600">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-lime-600 dark:text-lime-400 text-xl"
                  />
                </div>
                <span className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                  Pekanbaru, Indonesia
                </span>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Social Media Links */}
            <div className="flex items-center gap-6 mt-2">
              <a
                href="https://linkedin.com/in/azzamfarrasruslani"
                target="_blank"
                className="text-gray-400 hover:text-lime-700 dark:hover:text-lime-400 hover:scale-110 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://github.com/azzamfarrasruslani"
                target="_blank"
                className="text-gray-400 hover:text-lime-700 dark:hover:text-lime-400 hover:scale-110 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://wa.me/6282214884329"
                target="_blank"
                className="text-gray-400 hover:text-lime-700 dark:hover:text-lime-400 hover:scale-110 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-10 space-y-6 shadow-xl shadow-lime-900/5 dark:shadow-lime-900/20 transition-all"
          >
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:bg-white dark:focus:bg-gray-800 focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10 focus:outline-none transition-all duration-300"
                placeholder="e.g. John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:bg-white dark:focus:bg-gray-800 focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10 focus:outline-none transition-all duration-300"
                placeholder="e.g. john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:bg-white dark:focus:bg-gray-800 focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10 focus:outline-none transition-all duration-300 resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-lime-600 to-lime-700 text-white font-bold text-lg shadow-lg shadow-lime-600/30 hover:shadow-lime-600/40 transition-all duration-300"
            >
              Send Message 🚀
            </motion.button>

            {status && (
              <p className="mt-4 text-center text-sm font-medium text-lime-600 bg-lime-50 py-2 rounded-lg border border-lime-100">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
