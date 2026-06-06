"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { ChevronDown, Users, GraduationCap } from "lucide-react";

const Navbar: FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={cn(
        "py-3 px-5 lg:px-10 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100",
        className,
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Menggunakan Link untuk Logo lebih baik untuk SEO & Performa dibanding onClick */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            width={80}
            height={80}
            alt="Logo Preselix"
            className="w-10 h-auto"
            priority
          />
          <h1 className="font-bold text-xl text-blue-600">Preselix</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            Fitur
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            Cara Kerja
          </Link>
          <Link
            href="#showcase"
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            Demo
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div ref={dropdownRef} className="relative">
            <Button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              variant="outline"
              className="flex items-center gap-1.5 border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer w-auto"
            >
              Masuk
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isDropdownOpen && "rotate-180",
                )}
              />
            </Button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="rounded-2xl bg-white border border-gray-100 shadow-xl shadow-slate-200/40 py-3">
                  <div className="px-4 pb-2 border-b border-gray-50 mb-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      Pilih Portal Masuk
                    </p>
                  </div>
                  <Link
                    href="https://portal.preselix.id"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-blue-50/50 transition-colors group"
                  >
                    <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        Guru & Orang Tua
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                        Akses Guru, Wali Kelas, Orang Tua, dan Operator Sekolah.
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="https://student.preselix.id"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-blue-50/50 transition-colors group"
                  >
                    <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        Portal Siswa
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                        Akses siswa untuk memantau presensi dan jadwal kelas.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Button
            onClick={() => router.push("https://portal.preselix.id/register")}
            className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer w-auto"
          >
            <span className="hidden sm:inline">Daftar Sekolah</span>
            <span className="inline sm:hidden">Daftar</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
