"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="text-gray-800 container mx-auto lg:p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-8">
        <div className="px-5 flex flex-col gap-4 sm:gap-6 justify-center items-center sm:items-start max-w-2xl mx-auto text-center sm:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-blue-600">Presensi Siswa</span> Jadi Lebih
            Cepat, Akurat, dan Tanpa Ribet
          </h2>
          <p className="text-lg text-gray-600">
            Dari ruang kelas hingga laporan ke orang tua, semua terhubung
            otomatis. Tinggalkan presensi manual dan nikmati kemudahan
            digitalisasi sekolah.
          </p>

          <div className="flex gap-3 my-2 sm:my-4">
            <Button
              variant="secondary"
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold tracking-wide flex items-center gap-2"
              onClick={() => router.push("https://portal.preselix.id/register")}
            >
              Mulai Gratis <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center p-4">
          <Image
            src="/images/hero.webp"
            alt="Ilustrasi sistem presensi digital"
            // Width & Height bersifat opsional jika import gambar lokal (import ... from ...),
            // tapi tetap boleh didefinisikan untuk aspek rasio eksplisit.
            width={500}
            height={500}
            priority // PENTING: Untuk Hero image, agar tidak lazy load (meningkatkan skor SEO/LCP)
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
