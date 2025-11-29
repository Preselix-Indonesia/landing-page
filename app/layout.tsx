import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#155dfc",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Preselix - Monitoring Presensi Siswa",
    default: "Preselix - Aplikasi Monitoring Presensi Siswa & Sekolah Digital",
  },
  description:
    "Solusi monitoring presensi siswa real-time untuk sekolah di Indonesia. Hubungkan Kepala Sekolah, Guru, Wali Kelas, dan Orang Tua. Nikmati kemudahan fitur Presensi Klik, Scan QR, dan Prelink tanpa ribet.",
  keywords: [
    "Preselix",
    "Aplikasi Absensi Siswa",
    "Sistem Informasi Sekolah",
    "Monitoring Kehadiran Siswa",
    "Absensi Online Sekolah",
    "Scan QR Code Presensi",
    "Prelink Absensi",
    "Aplikasi Guru dan Wali Kelas",
    "Laporan Kehadiran Siswa Realtime",
    "Sekolah Digital Indonesia",
    "Manajemen Kelas",
  ],
  authors: [{ name: "Tim Preselix", url: "https://preselix.id" }],
  creator: "Preselix",
  publisher: "Preselix Indonesia",
  applicationName: "Preselix",
  category: "Education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://preselix.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://preselix.id",
    siteName: "Preselix",
    title: "Preselix - Cara Termudah Monitoring Absensi Siswa",
    description:
      "Pantau kehadiran siswa dengan fitur Scan QR, Klik, & Prelink. Terintegrasi untuk Guru, Wali Kelas, dan Orang Tua.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Presensi Klik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preselix - Solusi Presensi Sekolah Modern",
    description:
      "Aplikasi monitoring siswa dengan fitur Prelink & Scan QR. Mudah digunakan oleh Guru dan Orang Tua.",
    images: ["/logo.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
