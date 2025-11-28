import Image from "next/image";

const Illustration = () => {
  return (
    <section className="container mx-auto bg-white my-8 p-5 lg:p-20 text-gray-800 space-y-4 md:space-y-6">
      <h2 className="font-semibold text-center text-2xl md:text-3xl lg:text-4xl">
        Tingkatkan sistem sekolah Anda di sini
      </h2>
      <p className="text-center mb-8 lg:mb-10 text-gray-600">
        Presensi lebih cepat, mudah, dan akurat dengan teknologi QR Code & klik
        digital.
      </p>

      <div className="mx-auto space-y-16">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 lg:gap-8">
          {/* 
            NOTE: Karena src berupa string, width & height WAJIB diisi (angka pixel integer).
            Class 'w-full' dsb akan mengatur tampilan responsifnya, 
            tapi width/height di sini menentukan aspek rasio dasar.
          */}
          <Image
            src="/images/scan_presensi_mobile.png"
            alt="Presensi siswa via QR Code"
            width={600}
            height={600} // Disesuaikan agar kotak (aspect-square)
            className="w-full aspect-square max-h-120 object-contain order-1 rounded-lg"
          />
          <div className="space-y-4 order-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Scan QR Code, Selesai Dalam Detik
            </h3>
            <p className="text-gray-700 text-lg">
              Guru mata pelajaran cukup memindai QR Code, dan kehadiran siswa
              langsung tercatat otomatis di sistem. Menghemat waktu, mengurangi
              antrean, dan memudahkan orang tua memantau kehadiran secara
              real-time.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 lg:gap-8">
          <div className="space-y-4 order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Presensi Manual Lebih Cepat & Akurat
            </h3>
            <p className="text-gray-700 text-lg">
              Tinggal klik status kehadiran siswa — Hadir, Izin, atau Sakit
              (atau status lain yang dikustom oleh operator sekolah sesuai
              kebutuhan). Data langsung tersimpan dan otomatis masuk ke laporan
              harian tanpa perlu rekap manual.
            </p>
          </div>
          <Image
            src="/images/presensi_manual.png"
            alt="Presensi siswa manual"
            width={800}
            height={450} // Disesuaikan agar wide (aspect-video approx 16:9)
            className="w-full aspect-video object-contain order-1 md:order-2 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Illustration;
