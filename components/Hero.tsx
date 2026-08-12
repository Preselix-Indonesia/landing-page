"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { Sparkles } from "lucide-react";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 pointer-events-none">
        <div className="aspect-square w-96 bg-blue-400 rounded-full"></div>
      </div>
      
      <div className="text-gray-800 container mx-auto px-5 lg:px-20 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="inline-flex items-center self-center md:self-start px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-2">
              🚀 Solusi Presensi Sekolah Modern
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Ubah Cara Sekolah Anda <br />
              <span className="text-blue-600">Pantau Tiap Pelajaran</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Sistem presensi digital real-time untuk tiap jam pelajaran. Pantau kehadiran siswa di setiap kelas, kirim laporan otomatis, dan notifikasi WhatsApp langsung ke orang tua.
            </p>

            <div className="flex items-start gap-3 self-center md:self-start rounded-2xl border border-blue-100 bg-blue-50/80 px-4 py-3 text-left text-sm text-gray-700 shadow-sm max-w-xl">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <p>
                Operator yang mendaftar akan otomatis mendapatkan{" "}
                <span className="font-bold text-blue-700">free trial 30 hari</span>.
                Butuh waktu lebih panjang untuk uji coba bersama guru dan staf?
                Hubungi admin Preselix untuk menambah masa trial.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
              <Button
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-bold shadow-lg shadow-blue-200"
                onClick={() => router.push("https://portal.preselix.id/register")}
              >
                Coba Preselix Sekarang
              </Button>
              <Button
                variant="outline"
                className="border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg font-semibold"
                onClick={() => router.push("https://wa.me/6285824528625")}
              >
                Hubungi Tim Kami
              </Button>
            </div>
            
            {/* Trust Label - Commented out for now
            <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] overflow-hidden relative">
                    <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="user" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span>Dipercaya oleh 50+ sekolah di Indonesia</span>
            </div>
            */}
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-2xl -z-10"></div>
            <Image
              src="/images/hero.webp"
              alt="Ilustrasi sistem presensi digital Preselix"
              width={600}
              height={600}
              priority
              className="w-full max-w-md lg:max-w-xl h-auto object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
