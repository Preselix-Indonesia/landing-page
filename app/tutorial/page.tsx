import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TutorialClient from "./tutorial-client";

export const metadata: Metadata = {
  title: "Tutorial",
  description:
    "Kumpulan video tutorial Preselix untuk operator sekolah, mulai dari tahun ajaran, jam pelajaran, geofence, siswa, guru, jadwal mengajar, hingga kenaikan kelas.",
  alternates: {
    canonical: "/tutorial",
  },
  openGraph: {
    title: "Tutorial Preselix",
    description:
      "Cari dan buka panduan video Preselix langsung ke YouTube.",
    url: "https://preselix.id/tutorial",
  },
};

export default function TutorialPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <TutorialClient />
      <Footer />
    </div>
  );
}
