import Image from "next/image";

const About = () => {
  return (
    <section className="container mx-auto bg-white my-8 p-5 lg:p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Deskripsi Teks */}
        <div className="flex flex-col gap-4 text-gray-800 text-lg leading-relaxed">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Mencatat kehadiran siswa secara efisien dan terstruktur tanpa
            kerepotan manual.
          </h2>
          <p className="text-gray-700">
            Dengan sistem berbasis web, operator, guru, dan orang tua
            mendapatkan akses real-time, laporan otomatis, dan antarmuka modern
            yang intuitif.
          </p>
          <p className="text-gray-700">
            Visi kami adalah mempercepat digitalisasi pendidikan dengan sistem
            presensi yang rapi, transparan, dan terhubung untuk menciptakan
            pengalaman belajar yang lebih baik.
          </p>
        </div>

        {/* Ilustrasi 3D */}
        <div className="flex justify-center">
          <Image
            src="/images/about.webp"
            alt="Ilustrasi sistem presensi digital Preselix"
            width={600} // WAJIB ADA (Pixel)
            height={600} // WAJIB ADA (Pixel)
            // placeholder="blur" <--- HAPUS (Error jika src berupa string path tanpa blurDataURL)
            className="w-140 rounded-2xl h-auto object-cover" // Gunakan class untuk atur responsifnya
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
