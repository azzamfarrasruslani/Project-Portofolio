import "@/styles/cursor.css";
import "@/styles/tailwind.css";
import "@/lib/fontawesome";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Azzam Farras Ruslani | Full Stack Developer",
  description:
    "Portfolio of Azzam Farras Ruslani, a passionate Full Stack Developer specializing in building accessible, pixel-perfect, and performant web experiences using Next.js, React, and Laravel.",
  keywords: [
    "Azzam Farras Ruslani",
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Laravel",
    "Portfolio",
    "Pekanbaru",
    "Indonesia",
  ],
  authors: [
    { name: "Azzam Farras Ruslani", url: "https://azzamfr.vercel.app" },
  ],
  creator: "Azzam Farras Ruslani",
  publisher: "Azzam Farras Ruslani",
  openGraph: {
    title: "Azzam Farras Ruslani | Full Stack Developer",
    description:
      "Explore the portfolio of Azzam Farras Ruslani. Discover projects, skills, and experience in modern web development.",
    url: "https://azzamfr.vercel.app",
    siteName: "Azzam Farras Ruslani Portfolio",
    images: [
      {
        url: "https://azzamfr.vercel.app/og-image.png", // Ensure this image exists or use a placeholder if not
        width: 1200,
        height: 630,
        alt: "Azzam Farras Ruslani Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azzam Farras Ruslani | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web technologies. Check out my latest work!",
    creator: "@azzamfr", // Replace if user has a specific handle, or leave generic
    images: ["https://azzamfr.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head />
      <body
        className={`${inter.className} margin-0 p-0 antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Azzam Farras Ruslani",
              url: "https://azzamfr.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/azzamfarrasruslani",
                "https://github.com/azzamfarrasruslani",
                "https://wa.me/6282214884329",
              ],
              jobTitle: "Full Stack Developer",
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "Laravel",
                "Tailwind CSS",
                "Software Engineering",
              ],
              description:
                "Full Stack Developer specializing in building accessible, pixel-perfect, and performant web experiences.",
            }),
          }}
        />
        <Providers>
          <div className="fixed top-0 left-0 right-0 z-50">
            <ScrollProgress />
          </div>
          <BackgroundAnimation />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
