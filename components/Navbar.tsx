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
    <header className={cn("py-2 px-5 lg:px-10 bg-white", className)}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Menggunakan Link untuk Logo lebih baik untuk SEO & Performa dibanding onClick */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            width={80}
            height={80}
            alt="Logo Preselix"
            className="w-16 h-auto"
            priority
          />
          <h1 className="font-brand cursor-pointer">Preselix</h1>
        </Link>

        <nav className="flex gap-3">
          <Button
            onClick={() => router.push("https://portal.preselix.id")}
            className="w-max hover:bg-primary hover:text-white"
          >
            Masuk
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
