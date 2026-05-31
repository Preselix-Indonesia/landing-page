import Image from "next/image";
import { Check } from "lucide-react";

const showcaseItems = [
  {
    title: "Presensi Per Mata Pelajaran",
    description: "Sistem yang dirancang untuk mencatat kehadiran di setiap sesi kelas. Guru mata pelajaran dapat memastikan siswa tetap berada di kelas dari jam pertama hingga terakhir.",
    features: [
      "Input Cepat Awal Pelajaran",
      "Kustomisasi Status (Hadir/Izin/Bolos)",
      "Sinkronisasi Data Guru Mapel"
    ],
    image: "/images/scan_presensi_mobile.png",
    reverse: false
  },
  {
    title: "Pantau Riwayat Per Jam",
    description: "Orang tua dan admin dapat melihat detail jam mana saja siswa hadir. Tidak ada lagi celah bagi siswa untuk meninggalkan sekolah di tengah jam pelajaran.",
    features: [
      "Log Kehadiran Mendetail",
      "Notifikasi Bolos Per Jam",
      "Statistik Disiplin Mingguan"
    ],
    image: "/images/presensi_manual.png",
    reverse: true
  }
];

export default function Illustration() {
  return (
    <section id="showcase" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Showcase Fitur</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Solusi Menyeluruh untuk Kebutuhan Sekolah Anda
          </h3>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {showcaseItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}
            >
              <div className="flex-1 space-y-6">
                <h4 className="text-3xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-gray-700">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1 relative">
                <div className={`absolute -inset-4 bg-gray-50 rounded-3xl -z-10 transform ${item.reverse ? '-rotate-2' : 'rotate-2'}`}></div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl w-full h-auto object-cover transform transition-transform hover:scale-[1.02] duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
