"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BookOpenCheck,
  CalendarDays,
  Clock3,
  GraduationCap,
  MapPinned,
  PlayCircle,
  Search,
  Timer,
  UserRoundCog,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const tutorials = [
  {
    title: "Panduan Tahun Ajaran",
    description:
      "Atur periode tahun ajaran sebagai dasar pengelolaan data akademik sekolah.",
    url: "https://www.youtube.com/watch?v=AbaMD5Cfl8s",
    icon: CalendarDays,
    accent: "bg-blue-50 text-blue-600 ring-blue-100",
  },
  {
    title: "Panduan Jam Pelajaran",
    description:
      "Susun jam pelajaran agar jadwal dan presensi mengikuti struktur waktu sekolah.",
    url: "https://www.youtube.com/watch?v=qnWiopHSkKY",
    icon: Clock3,
    accent: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  },
  {
    title: "Panduan Mengatur Waktu Presensi Guru",
    description:
      "Tentukan rentang waktu presensi guru supaya pencatatan kehadiran lebih rapi.",
    url: "https://www.youtube.com/watch?v=sxF7LjyGggQ&pp=0gcJCZkLAYcqIYzv",
    icon: Timer,
    accent: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  {
    title: "Panduan Geofence Prelink",
    description:
      "Kelola area presensi berbasis lokasi untuk memastikan akses sesuai zona sekolah.",
    url: "https://www.youtube.com/watch?v=pA73LttpKvc",
    icon: MapPinned,
    accent: "bg-violet-50 text-violet-700 ring-violet-100",
  },
  {
    title: "Penjelasan Menu Siswa",
    description:
      "Kenali fungsi menu siswa untuk melihat, mencari, dan mengelola data peserta didik.",
    url: "https://www.youtube.com/watch?v=vYrM8I5lU8k",
    icon: Users,
    accent: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  {
    title: "Panduan Import Siswa",
    description:
      "Pelajari alur import data siswa agar proses input data massal berjalan cepat.",
    url: "https://www.youtube.com/watch?v=3a_5nWsCLBA&pp=0gcJCZkLAYcqIYzv",
    icon: GraduationCap,
    accent: "bg-rose-50 text-rose-700 ring-rose-100",
  },
  {
    title: "Panduan Menu Guru",
    description:
      "Pahami pengelolaan data guru dan informasi yang perlu dilengkapi operator.",
    url: "https://www.youtube.com/watch?v=-hFiWOIUOPQ",
    icon: UserRoundCog,
    accent: "bg-slate-100 text-slate-700 ring-slate-200",
  },
  {
    title: "Panduan Jadwal Mengajar",
    description:
      "Atur jadwal mengajar supaya guru, kelas, dan mata pelajaran tersusun tepat.",
    url: "https://www.youtube.com/watch?v=BvH9By45y_A",
    icon: BookOpenCheck,
    accent: "bg-indigo-50 text-indigo-700 ring-indigo-100",
  },
  {
    title: "Penjelasan Menu Detail Kelas",
    description:
      "Lihat detail kelas untuk memantau siswa, wali kelas, dan pengaturan terkait.",
    url: "https://www.youtube.com/watch?v=JOWnMhICrnU",
    icon: Users,
    accent: "bg-teal-50 text-teal-700 ring-teal-100",
  },
  {
    title: "Panduan Kenaikan Kelas",
    description:
      "Ikuti langkah menaikkan kelas siswa ketika memasuki periode akademik baru.",
    url: "https://www.youtube.com/watch?v=_H6fxfaDjU4",
    icon: GraduationCap,
    accent: "bg-orange-50 text-orange-700 ring-orange-100",
  },
];

const normalizeText = (value: string) => value.toLowerCase().trim();

export default function TutorialClient() {
  const [query, setQuery] = useState("");

  const filteredTutorials = useMemo(() => {
    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) return tutorials;

    return tutorials.filter((tutorial) =>
      normalizeText(tutorial.title).includes(normalizedQuery),
    );
  }, [query]);

  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#eff6ff_0%,rgba(255,255,255,0)_100%)]" />
        <div className="container relative mx-auto px-5 py-14 sm:py-18 lg:px-20 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <PlayCircle className="h-4 w-4" />
              Tutorial Operator Preselix
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Panduan video untuk mengelola Preselix lebih cepat
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Temukan tutorial berdasarkan judul, lalu buka panduannya langsung
              ke YouTube untuk mengikuti langkah-langkah pengaturan operator.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-8 lg:px-20 lg:py-12">
        <div className="sticky top-[73px] z-20 -mx-5 border-y border-slate-200 bg-slate-50/95 px-5 py-4 backdrop-blur md:static md:mx-0 md:border-0 md:bg-transparent md:px-0 md:py-0">
          <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Daftar Tutorial
              </h2>
              <p className="text-sm text-slate-500">
                {filteredTutorials.length} dari {tutorials.length} tutorial
                ditampilkan
              </p>
            </div>
            <div className="relative w-full md:max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari judul tutorial..."
                aria-label="Cari judul tutorial"
                className="h-12 w-full rounded-md border border-slate-200 bg-white pl-10 pr-11 text-sm font-medium text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Hapus pencarian"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {filteredTutorials.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredTutorials.map((tutorial, index) => {
              const Icon = tutorial.icon;

              return (
                <Link
                  key={tutorial.url}
                  href={tutorial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[230px] flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "inline-flex h-12 w-12 items-center justify-center rounded-lg ring-1",
                        tutorial.accent,
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-1 flex-col">
                    <h3 className="text-xl font-bold leading-snug text-slate-950 transition group-hover:text-blue-700">
                      {tutorial.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                      {tutorial.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                      Buka di YouTube
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-950">
              Tutorial tidak ditemukan
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-500">
              Coba gunakan kata kunci lain, misalnya siswa, guru, geofence, atau
              jadwal.
            </p>
            <Button
              type="button"
              onClick={() => setQuery("")}
              className="mt-6 bg-blue-600 text-white hover:bg-blue-700"
            >
              Tampilkan Semua Tutorial
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}
