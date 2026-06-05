import type { Metadata } from "next";
import TermsClient from "./terms-client";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat & Ketentuan penggunaan layanan Preselix. Ketentuan lisensi, biaya langganan via Xendit, batasan tanggung jawab, dan aturan operasional sekolah mitra.",
  openGraph: {
    title: "Syarat & Ketentuan | Preselix - Monitoring Presensi Siswa",
    description:
      "Syarat & Ketentuan penggunaan layanan Preselix. Ketentuan lisensi, biaya langganan via Xendit, batasan tanggung jawab, dan aturan operasional sekolah mitra.",
    url: "https://preselix.id/terms",
  },
};

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": "https://preselix.id",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Syarat & Ketentuan",
        "item": "https://preselix.id/terms",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TermsClient />
    </>
  );
}
