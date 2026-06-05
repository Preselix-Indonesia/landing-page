import type { Metadata } from "next";
import PrivacyPolicyClient from "./privacy-policy-client";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi Preselix. Pelajari bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda di ekosistem sekolah digital.",
  openGraph: {
    title: "Kebijakan Privasi | Preselix - Monitoring Presensi Siswa",
    description:
      "Kebijakan Privasi Preselix. Pelajari bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda di ekosistem sekolah digital.",
    url: "https://preselix.id/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
        "name": "Kebijakan Privasi",
        "item": "https://preselix.id/privacy-policy",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PrivacyPolicyClient />
    </>
  );
}
