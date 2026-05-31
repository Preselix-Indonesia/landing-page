import { UserPlus, Scan, LineChart } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-10 h-10 text-white" />,
    title: "1. Registrasi Sekolah",
    description: "Daftarkan sekolah Anda di portal kami dan masukkan data siswa serta guru dengan mudah melalui import Excel.",
    color: "bg-blue-600"
  },
  {
    icon: <Scan className="w-10 h-10 text-white" />,
    title: "2. Presensi Tiap Jam",
    description: "Guru melakukan scan QR Code siswa atau input manual di awal tiap mata pelajaran dengan cepat dan praktis.",
    color: "bg-emerald-500"
  },
  {
    icon: <LineChart className="w-10 h-10 text-white" />,
    title: "3. Pantau Disiplin",
    description: "Sistem otomatis merekap kehadiran per pelajaran dan mengirim notifikasi jika ada siswa yang bolos di jam tertentu.",
    color: "bg-orange-500"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Cara Kerja</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Digitalisasi Sekolah dalam 3 Langkah Mudah
          </h3>
          <p className="text-gray-600 text-lg">
            Kami merancang Preselix sesederhana mungkin agar sekolah Anda bisa mulai beralih ke sistem digital tanpa hambatan teknis.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`${step.color} w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg mb-8 transform transition-transform hover:scale-110`}>
                  {step.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
