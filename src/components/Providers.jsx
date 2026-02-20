"use client";

import ThemeProvider from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <CustomCursor />
      {children}
    </ThemeProvider>
  );
}
