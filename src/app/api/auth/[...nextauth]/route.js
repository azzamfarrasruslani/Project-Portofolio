import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createClient } from "@supabase/supabase-js";

// Buat Supabase Client di server
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        console.error("No profile found");
        return false;
      }

      try {
        // Tambahkan request ke Google API dengan timeout lebih lama
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          method: "GET",
          headers: { Authorization: `Bearer ${account.access_token}` },
          timeout: 10000, // Perpanjang timeout ke 10 detik
        });

        if (!res.ok) {
          throw new Error("Failed to fetch user info");
        }
      } catch (error) {
        console.error("OAuth error:", error);
        return false;
      }

      // Cek apakah user sudah terdaftar di database Supabase
      const { data: user, error } = await supabaseAdmin
        .from("users")
        .select("id, name, email")
        .eq("email", profile.email)
        .single();

      if (error) {
        console.error("Error fetching user:", error);
        return false;
      }

      if (!user) {
        console.error("User not registered:", profile.email);
        return false; // Menolak login jika email belum terdaftar
      }

      // Jika user sudah terdaftar, update nama terbaru
      await supabaseAdmin
        .from("users")
        .update({ name: profile.name })
        .eq("email", profile.email);

      return true;
    },

    async jwt({ token, profile }) {
      if (profile) {
        // Ambil user dari Supabase
        const { data: user, error } = await supabaseAdmin
          .from("users")
          .select("id")
          .eq("email", profile.email)
          .single();

        if (user) {
          token.id = user.id;
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (token.id) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

// Pastikan menggunakan async function
const handler = NextAuth(authOptions);
export const GET = handler;
export const POST = handler;
