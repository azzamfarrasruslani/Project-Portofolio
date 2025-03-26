"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Ganti useRouter dari next/navigation
import { useEffect } from "react";

export default function Login() {
  const { data: session, status } = useSession(); // Ambil status auth
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard"); // Redirect hanya jika sudah login
    }
  }, [status, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <button
          onClick={() => signIn("google")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login dengan Google
        </button>
      </div>
    </div>
  );
}
