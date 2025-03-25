import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

// Data Statis untuk Testing
const staticPortfolio = [
  {
    id: 1,
    title: "Project A",
    description: "Deskripsi Project A",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Project B",
    description: "Deskripsi Project B",
    image: "https://via.placeholder.com/150",
  },
];

export async function GET() {
  const { data, error } = await supabase.from("portfolio").select("*");

  // Jika ada error (misalnya tabel tidak ada), gunakan data statis
  if (error) return NextResponse.json(staticPortfolio);

  return NextResponse.json(data);
}

export async function POST(req) {
  try {
    const { title, description, image } = await req.json();

    // Cek jika ada input kosong
    if (!title || !description || !image) {
      return NextResponse.json({ error: "Semua field harus diisi!" }, { status: 400 });
    }

    const { data, error } = await supabase.from("portfolio").insert([{ title, description, image }]);

    if (error) throw error;
    return NextResponse.json({ message: "Portfolio added!", data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
