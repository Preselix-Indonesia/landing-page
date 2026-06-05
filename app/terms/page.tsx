"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Lock,
  CheckCircle,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const SECTIONS = [
  {
    id: "pendahuluan",
    title: "1. Pendahuluan",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: "keamanan-akun",
    title: "2. Keamanan Akun",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    id: "whatsapp-notifikasi",
    title: "3. WhatsApp & Notifikasi",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    id: "biaya-langganan",
    title: "4. Biaya & Langganan",
    icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    id: "pembatalan-penghapusan",
    title: "5. Pembatalan & Penghapusan",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    id: "kekayaan-intelektual",
    title: "6. Kekayaan Intelektual",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    id: "batasan-tanggungjawab",
    title: "7. Batasan Tanggung Jawab",
    icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    id: "hukum-sengketa",
    title: "8. Hukum & Sengketa",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: "kontak",
    title: "9. Kontak Kami",
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("pendahuluan");
  const sectionsRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        sectionsRefs.current[section.id] = element;
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />

      {/* Header Banner */}
      <div className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-5">
        {/* Background Decorative Shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="container mx-auto px-5 lg:px-20 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 text-sm font-medium transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Syarat & Ketentuan
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl font-light">
            Ketentuan penggunaan layanan, batasan lisensi, dan kesepakatan operasional bagi seluruh sekolah mitra Preselix.
          </p>
          <div className="mt-8 inline-block bg-white/10 backdrop-blur-md rounded-full px-5 py-2 text-sm text-blue-100">
            Terakhir diperbarui:{" "}
            <span className="font-semibold text-white">5 Juni 2026</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-5 lg:px-20 py-12 grow">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop Sidebar Navigation */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="sticky top-24 space-y-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-sm tracking-wider uppercase mb-4 px-3">
                Daftar Isi
              </h3>
              <nav className="space-y-1">
                {SECTIONS.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-medium transition-all ${
                        isActive
                          ? "bg-blue-50 text-blue-600 shadow-sm shadow-blue-100/50"
                          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <span
                        className={isActive ? "text-blue-600" : "text-gray-400"}
                      >
                        {section.icon}
                      </span>
                      {section.title.split(". ")[1]}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Mobile Sticky Navigation Menu */}
          <div className="lg:hidden sticky top-[68px] z-40 bg-white/95 backdrop-blur-md py-3 -mx-5 px-5 border-b border-gray-100 flex gap-2 overflow-x-auto scrollbar-none shadow-sm">
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {section.title.split(". ")[1]}
                </button>
              );
            })}
          </div>

          {/* Terms Document Content */}
          <div className="lg:w-3/4 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <div className="prose prose-gray max-w-none leading-relaxed text-gray-600">
              {/* 1. Pendahuluan & Ketentuan Umum */}
              <section
                id="pendahuluan"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    1. Pendahuluan & Ketentuan Umum
                  </h2>
                </div>
                <p className="mb-4">
                  Selamat datang di <strong>Preselix</strong> (dioperasikan oleh{" "}
                  <strong>PT PRESELIX DIGITAL NUSANTARA</strong>). Dengan mengakses, mendaftarkan
                  diri, atau menggunakan platform, dasbor, dan layanan kami, Anda secara hukum
                  menyatakan telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat & Ketentuan ini.
                </p>
                <p className="mb-4">
                  Syarat & Ketentuan ini mengatur hubungan antara Preselix sebagai penyedia layanan
                  SaaS (Software as a Service) digitalisasi presensi sekolah dengan instansi pendidikan atau
                  sekolah mitra (selanjutnya disebut sebagai &quot;Operator Sekolah&quot;, &quot;Mitra&quot;,
                  atau &quot;Anda&quot;) serta seluruh pengguna akhir yang berada di bawah kewenangan Anda (Guru,
                  Staf Sekolah, Siswa, dan Orang Tua/Wali).
                </p>
                <p>
                  Apabila Anda tidak menyetujui salah satu atau seluruh ketentuan dalam dokumen ini, Anda
                  tidak diperkenankan untuk melanjutkan penggunaan layanan Preselix.
                </p>
              </section>

              {/* 2. Pendaftaran & Keamanan Akun */}
              <section
                id="keamanan-akun"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    2. Pendaftaran & Keamanan Akun
                  </h2>
                </div>
                <p className="mb-4">
                  Untuk mendapatkan akses penuh ke dasbor administrasi sekolah di Preselix, Anda wajib melakukan
                  pendaftaran akun Operator Sekolah secara resmi.
                </p>
                <ul className="list-disc pl-5 space-y-3 mb-4">
                  <li>
                    <strong className="text-gray-900">Kerahasiaan Akun:</strong> Operator bertanggung jawab penuh untuk
                    menjaga kerahasiaan kata sandi (password) dan detail akun log masuk. Anda dilarang memberikan akses
                    log masuk akun Operator Anda kepada pihak ketiga mana pun tanpa persetujuan tertulis dari pihak Preselix.
                  </li>
                  <li>
                    <strong className="text-gray-900">Tanggung Jawab Aktivitas:</strong> Setiap tindakan, pengaturan data,
                    penghapusan data, atau perubahan konfigurasi yang dilakukan melalui dasbor Operator dianggap sebagai
                    tindakan sah yang mewakili instansi sekolah Anda.
                  </li>
                  <li>
                    <strong className="text-gray-900">Pelaporan Pelanggaran:</strong> Anda wajib segera melaporkan kepada tim
                    dukungan Preselix jika mencurigai adanya akses tidak sah, kebocoran akun, atau masalah keamanan lainnya
                    pada sistem login sekolah Anda.
                  </li>
                </ul>
              </section>

              {/* 3. Penggunaan WhatsApp & Notifikasi */}
              <section
                id="whatsapp-notifikasi"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    3. Penggunaan WhatsApp & Notifikasi
                  </h2>
                </div>
                <p className="mb-4">
                  Preselix menyediakan fitur otomatisasi pengiriman pesan notifikasi kehadiran siswa secara langsung ke nomor
                  WhatsApp orang tua atau wali murid.
                </p>
                <ul className="list-disc pl-5 space-y-3 mb-4">
                  <li>
                    <strong className="text-gray-900">Validitas Nomor Tujuan:</strong> Pihak sekolah (Operator) bertanggung jawab
                    penuh atas kebenaran, keabsahan, dan kepemilikan nomor WhatsApp orang tua/wali murid yang diunggah ke sistem.
                  </li>
                  <li>
                    <strong className="text-gray-900">Kebijakan Anti-Spam:</strong> Saluran pengiriman pesan notifikasi WhatsApp
                    hanya boleh digunakan untuk kepentingan informasi kehadiran, akademis, dan kegiatan sekolah resmi. Penggunaan
                    sistem untuk mengirim spam, materi promosi pihak luar, atau konten ilegal lainnya dilarang keras dan akan berakibat
                    pada penutupan akun secara permanen.
                  </li>
                  <li>
                    <strong className="text-gray-900">Ketergantungan Infrastruktur:</strong> Anda memahami bahwa pengiriman pesan notifikasi
                    WhatsApp bergantung pada integrasi API gerbang WhatsApp pihak ketiga, konektivitas internet, serta kestabilan jaringan
                    seluler penerima. Preselix tidak bertanggung jawab atas keterlambatan atau kegagalan pengiriman pesan yang disebabkan oleh
                    gangguan di luar sistem inti Preselix.
                  </li>
                </ul>
              </section>

              {/* 4. Biaya & Langganan (Xendit) */}
              <section
                id="biaya-langganan"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    4. Biaya & Langganan (Xendit)
                  </h2>
                </div>
                <p className="mb-4">
                  Penggunaan layanan platform Preselix tunduk pada biaya berlangganan sesuai paket yang disepakati oleh sekolah.
                </p>
                <ul className="list-disc pl-5 space-y-3 mb-4">
                  <li>
                    <strong className="text-gray-900">Pemrosesan Tagihan Otomatis:</strong> Seluruh transaksi pembayaran langganan sekolah diproses
                    secara otomatis, instan, dan aman melalui integrasi payment gateway pihak ketiga dari **Xendit (PT Sinar Digital Terdepan)**.
                  </li>
                  <li>
                    <strong className="text-gray-900">Jatuh Tempo:</strong> Tagihan (invoice) berkala akan diterbitkan secara otomatis oleh sistem sebelum masa
                    aktif langganan berakhir. Pembayaran harus dilunasi sebelum tanggal jatuh tempo yang tertera di dalam invoice pembayaran.
                  </li>
                  <li>
                    <strong className="text-gray-900">Penangguhan Layanan (Suspension):</strong> Jika kewajiban pembayaran tertunda melampaui tanggal jatuh tempo,
                    Preselix berhak membatasi atau menangguhkan sementara seluruh akses dasbor sekolah dan menghentikan pengiriman notifikasi WhatsApp
                    sampai seluruh tunggakan dilunasi.
                  </li>
                  <li>
                    <strong className="text-gray-900">Non-Refundable:</strong> Kecuali ditentukan lain dalam kontrak perjanjian kerja sama tertulis yang ditandatangani
                    kedua belah pihak, seluruh biaya langganan yang telah didebit atau dibayarkan melalui Xendit bersifat final dan tidak dapat dikembalikan
                    (non-refundable).
                  </li>
                </ul>
              </section>

              {/* 5. Pembatalan & Penghapusan Akun */}
              <section
                id="pembatalan-penghapusan"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    5. Pembatalan & Penghapusan Akun
                  </h2>
                </div>
                <p className="mb-4">
                  Anda berhak untuk berhenti menggunakan layanan Preselix atau menghapus akun sekolah Anda kapan saja.
                </p>
                <ul className="list-disc pl-5 space-y-3 mb-4">
                  <li>
                    <strong className="text-gray-900">Penghapusan Mandiri (Self-Delete):</strong> Melalui fitur manajemen profil Operator, sekolah dapat mengajukan
                    penghapusan data secara mandiri. Proses ini akan menghapus seluruh data siswa, absensi kehadiran, data guru, data orang tua, dan konfigurasi instansi secara permanen dalam database operasional aktif.
                  </li>
                  <li>
                    <strong className="text-gray-900">Arsip Keuangan:</strong> Untuk mematuhi peraturan perpajakan dan undang-undang pembukuan keuangan di Indonesia,
                    seluruh riwayat pembayaran, transaksi billing otomatis, dan data invoice akan diarsipkan secara aman dalam bentuk data anonim selama minimal 5 tahun
                    sebelum dihancurkan secara total.
                  </li>
                </ul>
              </section>

              {/* 6. Hak Kekayaan Intelektual */}
              <section
                id="kekayaan-intelektual"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    6. Hak Kekayaan Intelektual
                  </h2>
                </div>
                <p className="mb-4">
                  Seluruh hak kekayaan intelektual yang melekat pada platform Preselix adalah milik eksklusif **PT PRESELIX DIGITAL NUSANTARA**.
                </p>
                <p className="mb-4">
                  Hak ini mencakup namun tidak terbatas pada: kode sumber (source code), desain antarmuka pengguna (UI/UX), grafik, gambar, dokumentasi sistem, database,
                  serta merek dagang &quot;Preselix&quot;. Anda tidak memiliki hak untuk merekayasa balik (reverse engineer), membongkar kode (decompile), menyalin, mendistribusikan,
                  atau membuat karya turunan dari platform Preselix tanpa izin tertulis yang sah dari pihak kami.
                </p>
              </section>

              {/* 7. Batasan Tanggung Jawab */}
              <section
                id="batasan-tanggungjawab"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    7. Batasan Tanggung Jawab
                  </h2>
                </div>
                <p className="mb-4">
                  Layanan Preselix disediakan kepada sekolah dengan prinsip &quot;sebagaimana adanya&quot; (as is) dan &quot;sebagaimana tersedia&quot; (as available). Kami tidak
                  menjamin bahwa sistem akan beroperasi tanpa kesalahan teknis (error-free) atau tanpa gangguan (uninterrupted) sepanjang waktu.
                </p>
                <p className="mb-4">
                  Dalam batasan hukum yang berlaku di Indonesia, **PT PRESELIX DIGITAL NUSANTARA** tidak dapat dituntut atas kerugian tidak langsung, kerugian insidental,
                  atau konsekuensi negatif lainnya (seperti hilangnya reputasi sekolah, kesalahan laporan absensi manual, atau kegagalan penyampaian pesan darurat ke wali murid)
                  akibat penggunaan sistem kami.
                </p>
              </section>

              {/* 8. Hukum & Penyelesaian Sengketa */}
              <section
                id="hukum-sengketa"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    8. Hukum & Penyelesaian Sengketa
                  </h2>
                </div>
                <p className="mb-4">
                  Syarat & Ketentuan ini diatur dan tunduk pada ketentuan hukum positif yang berlaku di bawah yurisdiksi Negara Kesatuan Republik Indonesia.
                </p>
                <p className="mb-4">
                  Setiap perselisihan atau sengketa yang timbul antara pihak sekolah dengan Preselix akan diupayakan secara maksimal untuk diselesaikan secara kekeluargaan
                  melalui musyawarah mufakat. Apabila kesepakatan tidak tercapai dalam waktu 30 hari kalender, maka penyelesaian sengketa akan dilanjutkan ke jalur hukum formal melalui
                  kepaniteraan Pengadilan Negeri Makassar, Sulawesi Selatan.
                </p>
              </section>

              {/* 9. Kontak & Hubungi Kami */}
              <section id="kontak" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    9. Kontak Kami
                  </h2>
                </div>
                <p className="mb-6">
                  Jika pihak administrasi sekolah memiliki kendala teknis, pertanyaan seputar tagihan Xendit, atau membutuhkan penjelasan tambahan seputar
                  Syarat & Ketentuan layanan ini, silakan hubungi saluran dukungan pelanggan kami:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                    <Mail className="w-6 h-6 text-blue-600 mb-3" />
                    <span className="text-sm font-bold text-gray-900 mb-1">
                      Email Dukungan
                    </span>
                    <a
                      href="mailto:support@preselix.id"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      support@preselix.id
                    </a>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                    <Phone className="w-6 h-6 text-blue-600 mb-3" />
                    <span className="text-sm font-bold text-gray-900 mb-1">
                      Telepon / WhatsApp
                    </span>
                    <span className="text-sm text-gray-600">
                      +62 858-2452-8625
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                    <MapPin className="w-6 h-6 text-blue-600 mb-3" />
                    <span className="text-sm font-bold text-gray-900 mb-1">
                      Alamat Kantor
                    </span>
                    <span className="text-xs text-gray-500 leading-tight">
                      PT PRESELIX DIGITAL NUSANTARA <br />
                      GREEN HARMONY PERINTIS BLOK D/11, Tamalanrea Indah,
                      Tamalanrea, Kota Makassar, Sulawesi Selatan, 90245
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
