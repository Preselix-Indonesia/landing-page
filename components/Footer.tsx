import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.webp"
                width={40}
                height={40}
                alt="Logo Preselix"
                className="w-10 h-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold text-white tracking-tight">
                Preselix
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Preselix dikembangkan oleh <strong>PT PRESELIX DIGITAL NUSANTARA</strong>.
              Solusi digitalisasi presensi sekolah terbaik di Indonesia untuk ekosistem pendidikan yang lebih modern,
              efisien, dan transparan.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61590447542084&locale"
                className="hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/preselix.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              {/* <Link href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navigasi</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Fitur Utama
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  Cara Kerja
                </Link>
              </li>
              <li>
                <Link
                  href="#showcase"
                  className="hover:text-white transition-colors"
                >
                  Demo Produk
                </Link>
              </li>
              <li>
                <Link
                  href="https://portal.preselix.id"
                  className="hover:text-white transition-colors"
                >
                  Masuk Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal/Support */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Dukungan</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://portal.preselix.id/help"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pusat Bantuan
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Syarat & Ketentuan
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                <span>
                  PT PRESELIX DIGITAL NUSANTARA <br />
                  GREEN HARMONY PERINTIS BLOK D/11, Tamalanrea
                  Indah, Tamalanrea, Kota Makassar, Sulawesi Selatan, 90245
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+62 858 2452 8625</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>support@preselix.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} PT PRESELIX DIGITAL NUSANTARA. All rights reserved. Dibuat
            dengan ❤️ untuk Pendidikan Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
