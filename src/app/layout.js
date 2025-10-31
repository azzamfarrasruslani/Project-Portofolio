"use client";

import "@/styles/cursor.css";
import "@/styles/tailwind.css";
import "@/lib/fontawesome";
import CustomCursor from "@/app/components/CustomCursor";
import Navbar from "@/app/components/Navbar";

import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
      <html className="scroll-smooth" lang="en">
        <head />
        <body className="margin-0 p-0">
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
  );
}
