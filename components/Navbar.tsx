"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

const Navbar: FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();

  return (
    <header className={cn("py-3 px-5 lg:px-10 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100", className)}>
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
          <Link href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Fitur</Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Cara Kerja</Link>
          <Link href="#showcase" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Demo</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => router.push("https://portal.preselix.id")}
            variant="outline"
            className="hidden sm:flex border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Masuk
          </Button>
          <Button
            onClick={() => router.push("https://portal.preselix.id/register")}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Daftar Sekolah
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
