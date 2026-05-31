"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  const router = useRouter();

  return (
    <section className="py-20">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="relative overflow-hidden bg-blue-600 rounded-3xl p-10 md:p-20 text-center text-white shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Siap Mendigitalisasi Sekolah Anda Sekarang?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl">
              Bergabunglah dengan puluhan sekolah lain yang telah memodernisasi
              administrasi mereka dengan Preselix. Mulai langkah pertama Anda
              hari ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-bold shadow-lg"
                onClick={() =>
                  router.push("https://portal.preselix.id/register")
                }
              >
                Daftar Sekolah Gratis <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                className="px-8 py-6 text-lg font-semibold transition-colors"
                onClick={() => router.push("https://wa.me/6285824528625")}
              >
                Konsultasi Tim Ahli
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
