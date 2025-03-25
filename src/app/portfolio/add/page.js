"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPortfolio() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/portfolio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, image }),
    });
    router.push("/portfolio");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Tambah Portofolio</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Gambar URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Simpan
        </button>
      </form>
    </div>
  );
}
