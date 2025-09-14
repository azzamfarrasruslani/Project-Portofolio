"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-[#000000] text-white px-6 py-20"
    >
      {/* Judul */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#cceb6c]">
        📬 Get in Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
        {/* Info Kontak */}
        <div className="space-y-6">
          <p className="text-[#9CA3AF]">
            Punya project atau ingin ngobrol? Jangan ragu untuk menghubungi saya melalui email atau WhatsApp. 
          </p>

          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#cceb6c] text-xl" />
            <span>azzam@example.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faPhone} className="text-[#cceb6c] text-xl" />
            <span>+62 812-3456-7890</span>
          </div>
        </div>

        {/* Form Kontak */}
        <form className="bg-[#111111] border border-[#cceb6c]/30 rounded-xl p-6 space-y-4 shadow-lg">
          <div>
            <label className="block text-sm text-[#cceb6c] mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-[#000000] border border-[#cceb6c]/30 focus:border-[#cceb6c] focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm text-[#cceb6c] mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-[#000000] border border-[#cceb6c]/30 focus:border-[#cceb6c] focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-[#cceb6c] mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full p-3 rounded-lg bg-[#000000] border border-[#cceb6c]/30 focus:border-[#cceb6c] focus:outline-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#cceb6c] text-black font-semibold hover:bg-lime-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
