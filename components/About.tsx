import { CheckCircle, Zap, Bell, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "Presensi Tiap Pelajaran",
    description: "Guru mata pelajaran dapat melakukan presensi dengan cepat di setiap awal jam kelas. Data sinkron seketika untuk tiap sesi."
  },
  {
    icon: <Bell className="w-8 h-8 text-blue-500" />,
    title: "Update Real-time ke Orang Tua",
    description: "Orang tua mendapatkan notifikasi WhatsApp otomatis jika anak tidak mengikuti mata pelajaran tertentu tanpa keterangan."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-green-500" />,
    title: "Rekapitulasi Per Mapel",
    description: "Laporan kehadiran yang mendetail per mata pelajaran, membantu evaluasi disiplin siswa di setiap kelas secara spesifik."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
    title: "Mudah Digunakan",
    description: "Antarmuka yang intuitif dan ramah pengguna, dirancang khusus agar mudah dioperasikan oleh staf sekolah dan guru."
  }
];

const About = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Keunggulan Preselix</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mencatat kehadiran siswa secara efisien tanpa kerepotan manual
          </h3>
          <p className="text-gray-600 text-lg">
            Kami membawa teknologi digital ke ruang kelas Anda untuk menciptakan ekosistem sekolah yang lebih rapi, transparan, dan terhubung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="mb-6 p-3 bg-gray-50 rounded-xl w-fit group-hover:bg-blue-50 transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
