"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white px-6 py-20"
    >
      {/* Judul */}
      <h2 className="text-3xl sm:text-5xl font-extrabold mb-12 text-[#cceb6c] text-center tracking-wide">
        📬 Get in Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Info Kontak */}
        <div className="space-y-8">
          <p className="text-[#9CA3AF] text-lg leading-relaxed">
            Punya project, ide kolaborasi, atau hanya ingin menyapa? Jangan ragu
            untuk menghubungi saya melalui email atau WhatsApp!
          </p>

          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#cceb6c] text-2xl"
            />
            <span className="text-lg">azzamfarrasrusl@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#cceb6c] text-2xl"
            />
            <span className="text-lg">+62 822-1488-4329</span>
          </div>
        </div>

        {/* Form Kontak */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const message = e.target.message.value;

            const subject = encodeURIComponent("Pesan dari Portfolio Website");
            const body = encodeURIComponent(
              `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
            );

            window.location.href = `mailto:azzamfarrasrusl@gmail.com?subject=${subject}&body=${body}`;
          }}
          className="backdrop-blur-md bg-[#ffffff0d] border border-[#cceb6c]/30 rounded-2xl p-8 space-y-6 shadow-xl transition-all"
        >
          <div>
            <label className="block text-sm font-medium text-[#cceb6c] mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-md bg-[#000000] border border-[#cceb6c]/30 text-white placeholder-gray-400 focus:border-[#cceb6c] focus:outline-none transition"
              placeholder="Nama kamu"
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
              className="w-full p-3 rounded-md bg-[#000000] border border-[#cceb6c]/30 text-white placeholder-gray-400 focus:border-[#cceb6c] focus:outline-none transition"
              placeholder="kamu@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#cceb6c] mb-1">
              Pesan
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full p-3 rounded-md bg-[#000000] border border-[#cceb6c]/30 text-white placeholder-gray-400 focus:border-[#cceb6c] focus:outline-none transition"
              placeholder="Tulis pesan kamu di sini..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-[#cceb6c] text-black font-bold hover:bg-lime-400 transition duration-300"
          >
            Kirim Pesan ✉️
          </button>
        </form>
      </div>
    </section>
  );
}
