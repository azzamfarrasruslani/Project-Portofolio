"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Jika belum login, redirect ke login
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>



      <Link href="/portfolio">
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Lihat Portofolio
        </button>
      </Link>


      {session ? (
        <>
          <p className="mb-4">Selamat datang, {session.user.name}!</p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <p>Memuat...</p>
      )}
    </div>
  );
}
