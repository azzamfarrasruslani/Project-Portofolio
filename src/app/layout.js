"use client";

import "@/styles/cursor.css";
import "@/styles/tailwind.css";
import "@/lib/fontawesome";
import CustomCursor from "@/app/components/CustomCursor";
import Navbar from "@/app/components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html className="scroll-smooth" lang="en">
        <head />
        <body className="margin-0 p-0">
          <CustomCursor />
          <Navbar />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
