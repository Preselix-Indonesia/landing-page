"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Lock,
  Eye,
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
    id: "informasi-dikumpulkan",
    title: "2. Informasi yang Dikumpulkan",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    id: "penggunaan-informasi",
    title: "3. Penggunaan Informasi",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    id: "keamanan-data",
    title: "4. Keamanan & Penyimpanan Data",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    id: "pihak-ketiga",
    title: "5. Layanan Pihak Ketiga & WhatsApp",
    icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    id: "hak-pengguna",
    title: "6. Hak Pengguna & Penghapusan Data",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    id: "kontak",
    title: "7. Kontak & Dukungan",
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("pendahuluan");
  const sectionsRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -60% 0px", // Mengatur margin deteksi di tengah/atas layar
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
      // Menghitung offset untuk navbar sticky
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
            Kebijakan Privasi
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl font-light">
            Komitmen kami untuk melindungi data pribadi siswa, orang tua, dan
            guru di ekosistem sekolah digital Preselix.
          </p>
          <div className="mt-8 inline-block bg-white/10 backdrop-blur-md rounded-full px-5 py-2 text-sm text-blue-100">
            Terakhir diperbarui:{" "}
            <span className="font-semibold text-white">2 Juni 2026</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-5 lg:px-20 py-12 flex-grow">
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
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
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

          {/* Privacy Document Content */}
          <div className="lg:w-3/4 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <div className="prose prose-gray max-w-none leading-relaxed text-gray-600">
              {/* 1. Pendahuluan */}
              <section
                id="pendahuluan"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    1. Pendahuluan
                  </h2>
                </div>
                <p className="mb-4">
                  Selamat datang di <strong>Preselix</strong>. Kami sangat
                  menghargai kepercayaan yang Anda berikan kepada kami untuk
                  mengelola informasi penting Anda. Preselix (&quot;kami&quot;,
                  &quot;aplikasi kami&quot;, atau &quot;platform&quot;)
                  berkomitmen untuk melindungi privasi data pribadi siswa, orang
                  tua, wali kelas, guru, serta pihak sekolah yang menggunakan
                  platform kami.
                </p>
                <p className="mb-4">
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
                  menggunakan, menyimpan, membagikan, dan melindungi informasi
                  pribadi Anda selama Anda menggunakan layanan situs web resmi
                  kami, aplikasi presensi, dan fitur integrasi notifikasi kami.
                </p>
                <p>
                  Dengan menggunakan layanan Preselix, Anda menyetujui
                  pengumpulan dan penggunaan informasi sesuai dengan ketentuan
                  yang tertuang dalam kebijakan ini.
                </p>
              </section>

              {/* 2. Informasi yang Dikumpulkan */}
              <section
                id="informasi-dikumpulkan"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    2. Informasi yang Dikumpulkan
                  </h2>
                </div>
                <p className="mb-6">
                  Kami hanya mengumpulkan data pribadi yang relevan dan
                  diperlukan demi kelancaran operasional presensi digital dan
                  koordinasi antara sekolah dan orang tua. Data tersebut
                  meliputi:
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">
                      A. Data Siswa
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
                      <li>Nama Lengkap Siswa</li>
                      <li>
                        Nomor Induk Siswa (NIS) atau Nomor Induk Siswa Nasional
                        (NISN)
                      </li>
                      <li>Kelas, Jurusan, dan Angkatan</li>
                      <li>
                        Catatan Kehadiran (Kehadiran per jam pelajaran, status
                        izin, sakit, atau tanpa keterangan)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">
                      B. Data Orang Tua / Wali
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
                      <li>Nama Orang Tua atau Wali</li>
                      <li>
                        Nomor Telepon / WhatsApp Aktif (digunakan secara khusus
                        untuk menerima notifikasi ketidakhadiran anak)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">
                      C. Data Guru & Staf Sekolah
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
                      <li>Nama Lengkap dan Gelar</li>
                      <li>Nomor WhatsApp / Nomor Telepon</li>
                      <li>
                        Alamat Surel (Email) dan detail login akun (kata sandi
                        terenkripsi)
                      </li>
                      <li>Mata pelajaran yang diajarkan dan otoritas kelas</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">
                      D. Data Teknis & Cookies
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Ketika Anda mengakses dasbor portal Preselix, server kami
                      secara otomatis mencatat beberapa informasi dasar untuk
                      keperluan keamanan dan stabilitas sesi:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
                      <li>Alamat IP (Internet Protocol) perangkat Anda</li>
                      <li>Jenis peramban web (browser) yang digunakan</li>
                      <li>
                        Informasi cookie untuk menjaga sesi login agar pengguna
                        tidak perlu login berulang kali
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 3. Penggunaan Informasi */}
              <section
                id="penggunaan-informasi"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    3. Penggunaan Informasi
                  </h2>
                </div>
                <p className="mb-4">
                  Informasi yang kami kumpulkan dari sekolah digunakan secara
                  terbatas untuk menyediakan fitur-fitur utama Preselix, yaitu:
                </p>
                <ul className="list-disc pl-5 space-y-3 mb-6">
                  <li>
                    <strong className="text-gray-900">
                      Pengiriman Notifikasi WhatsApp Otomatis:
                    </strong>{" "}
                    Mengirim pesan pemberitahuan secara langsung dan instan
                    kepada orang tua jika siswa terdeteksi tidak hadir pada sesi
                    mata pelajaran tertentu tanpa keterangan resmi.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      Analitik & Laporan Kehadiran:
                    </strong>{" "}
                    Membantu guru, wali kelas, dan kepala sekolah dalam melihat
                    rekap kehadiran mingguan, bulanan, atau per semester untuk
                    bahan evaluasi disiplin belajar siswa.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      Keamanan Akses Dasbor:
                    </strong>{" "}
                    Memverifikasi identitas guru saat masuk ke sistem agar data
                    akademik sekolah tidak dapat diakses oleh pihak luar.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      Pembaruan & Dukungan Layanan:
                    </strong>{" "}
                    Menghubungi staf sekolah jika terdapat kendala sistem,
                    update fitur baru, atau proses pemeliharaan sistem.
                  </li>
                </ul>
              </section>

              {/* 4. Keamanan & Penyimpanan Data */}
              <section
                id="keamanan-data"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    4. Keamanan & Penyimpanan Data
                  </h2>
                </div>
                <p className="mb-4">
                  Keamanan informasi Anda adalah prioritas utama kami. Kami
                  menerapkan langkah-langkah keamanan teknologi standar industri
                  untuk mencegah kehilangan data, penyalahgunaan, atau akses
                  tidak sah:
                </p>
                <ul className="list-disc pl-5 space-y-3 mb-4">
                  <li>
                    <strong className="text-gray-900">
                      Enkripsi Data Sensitif:
                    </strong>{" "}
                    Kata sandi staf sekolah dienkripsi menggunakan algoritma
                    hashing satu arah yang aman. Seluruh pertukaran data antara
                    browser Anda dengan server kami dilindungi oleh sertifikat
                    SSL/HTTPS.
                  </li>
                  <li>
                    <strong className="text-gray-900">Pembatasan Akses:</strong>{" "}
                    Hanya staf berwenang dari pihak sekolah mitra dan teknisi
                    sistem Preselix yang memiliki hak akses logis ke server
                    database.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      Penyimpanan Terpusat:
                    </strong>{" "}
                    Data disimpan di cloud database lokal di Indonesia dengan
                    sistem backup berkala untuk menjamin stabilitas data
                    akademik.
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>Retensi Data:</strong> Kami menyimpan data selama
                  sekolah langganan Anda aktif menggunakan platform Preselix
                  atau hingga pihak sekolah mengajukan permintaan penghapusan data
                  setelah kerja sama selesai. Harap dicatat bahwa demi kepatuhan
                  terhadap regulasi perpajakan dan hukum pembukuan keuangan, data
                  transaksi pembayaran, bukti transfer, dan riwayat langganan akan
                  tetap diarsipkan secara aman dalam bentuk anonim selama minimal
                  5 tahun sebelum dimusnahkan secara permanen.
                </p>
              </section>

              {/* 5. Layanan Pihak Ketiga & WhatsApp */}
              <section
                id="pihak-ketiga"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    5. Layanan Pihak Ketiga & WhatsApp
                  </h2>
                </div>
                <p className="mb-4">
                  Untuk memproses pengiriman notifikasi WhatsApp secara instan
                  ke nomor WhatsApp orang tua siswa, kami menggunakan gerbang
                  API pihak ketiga yang tepercaya (WhatsApp Gateway API).
                </p>
                <p className="mb-4">
                  Kami hanya mengirimkan informasi minimal berupa: nomor
                  WhatsApp tujuan, nama anak, dan status ketidakhadiran
                  pelajaran yang bersangkutan ke server API pihak ketiga
                  tersebut. Kami memastikan bahwa mitra API kami tunduk pada
                  komitmen kerahasiaan data yang sama ketatnya.
                </p>
                <p className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl text-sm text-yellow-800">
                  <strong>Pernyataan Bebas Iklan:</strong> Preselix tidak pernah
                  dan tidak akan pernah menjual, menyewakan, atau memberikan
                  nomor telepon orang tua, data kehadiran siswa, atau informasi
                  guru kepada perusahaan periklanan atau pihak ketiga lainnya
                  untuk kepentingan pemasaran produk luar.
                </p>
              </section>

              {/* 6. Hak Pengguna & Penghapusan Data */}
              <section
                id="hak-pengguna"
                className="scroll-mt-28 mb-12 border-b border-gray-100 pb-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    6. Hak Pengguna & Penghapusan Data
                  </h2>
                </div>
                <p className="mb-4">
                  Sebagai wali siswa, guru, atau perwakilan sekolah, Anda
                  memiliki hak-hak privasi berikut:
                </p>
                <ul className="list-disc pl-5 space-y-3 mb-4">
                  <li>
                    Mengakses dan meninjau kembali kebenaran data pribadi Anda
                    yang terdaftar di dasbor Preselix.
                  </li>
                  <li>
                    Meminta koreksi/perubahan data jika terjadi kesalahan
                    pengetikan nomor WhatsApp atau e-mail melalui administrator
                    sekolah Anda.
                  </li>
                  <li>
                    Meminta penghentian layanan notifikasi WhatsApp jika
                    terdapat keadaan khusus.
                  </li>
                  <li>
                    Meminta penghapusan permanen dari sistem kami (dengan
                    pengecualian arsip bukti pembayaran dan riwayat transaksi
                    yang wajib dipertahankan demi hukum pembukuan keuangan).
                  </li>
                </ul>
                <p className="mt-4">
                  Karena pengunggahan data awal siswa dilakukan secara kolektif
                  oleh administrator sekolah Anda, permohonan penghapusan atau
                  koreksi data wajib diajukan melalui admin sekolah yang
                  berwenang, yang kemudian akan meneruskannya ke tim support
                  teknis Preselix.
                </p>
              </section>

              {/* 7. Kontak & Dukungan */}
              <section id="kontak" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    7. Kontak & Dukungan
                  </h2>
                </div>
                <p className="mb-6">
                  Jika Anda memiliki pertanyaan, saran, keluhan, atau ingin
                  mengajukan hak privasi seputar Kebijakan Privasi ini, silakan
                  hubungi tim dukungan kami melalui kontak resmi berikut:
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
                      Tamalanrea Indah, Kota Makassar, Sulawesi Selatan 90245
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
