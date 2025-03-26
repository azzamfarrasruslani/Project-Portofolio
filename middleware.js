"use client";
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Redirect ke halaman login jika belum login
  },
});

export const config = {
  matcher: ["/portfolio/:path*"], // Proteksi halaman CRUD
};
