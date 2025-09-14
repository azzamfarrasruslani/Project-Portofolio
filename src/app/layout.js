"use client";

import "@/styles/cursor.css";
import "@/styles/tailwind.css";
import "@/lib/fontawesome";
import CustomCursor from "@/app/components/CustomCursor";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Komponen untuk tracking pageview SPA
function GoogleAnalyticsTracker({ measurementId }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", measurementId, { page_path: pathname });
    }
  }, [pathname, measurementId]);

  return null;
}

export default function RootLayout({ children }) {
  const GA_MEASUREMENT_ID = "G-M28909WBHQ"; // Sesuaikan ID GA kamu

  return (
    <SessionProvider>
      <html className="scroll-smooth" lang="en">
        <head>
          {/* Google Analytics Script */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
              `,
            }}
          />
        </head>
        <body className="margin-0 p-0">
          <CustomCursor />
          <Navbar />
          {/* Tracking pageview SPA */}
          <GoogleAnalyticsTracker measurementId={GA_MEASUREMENT_ID} />
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
