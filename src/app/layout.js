
"use client";
import "@/styles/tailwind.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}
