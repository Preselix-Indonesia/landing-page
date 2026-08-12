import Link from "next/link";
import { BellRing, Bot, MessageCircle, Webhook } from "lucide-react";

const WHATSAPP_BOT_NUMBER = "6281545327043";
const WHATSAPP_BOT_DISPLAY = "+62 815-4532-7043";
const WHATSAPP_BOT_MESSAGE =
  "Halo Preselix, saya ingin mengakses layanan bot WhatsApp Preselix.";

const botFeatures = [
  {
    icon: <Webhook className="w-5 h-5" />,
    title: "Webhook layanan",
    description:
      "Nomor ini dipakai sistem Preselix sebagai kanal bot WhatsApp untuk integrasi webhook layanan.",
  },
  {
    icon: <BellRing className="w-5 h-5" />,
    title: "Notifikasi otomatis",
    description:
      "Bot mengirim informasi otomatis seperti notifikasi presensi dan pembaruan penting dari sistem sekolah.",
  },
];

export default function WhatsAppBotAccess() {
  const botUrl = `https://wa.me/${WHATSAPP_BOT_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_BOT_MESSAGE,
  )}`;

  return (
    <section id="whatsapp-bot-access" className="py-20 bg-gray-50">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center rounded-3xl border border-blue-100 bg-white p-8 md:p-12 shadow-sm">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
              <Bot className="w-4 h-4" />
              Bot WhatsApp Resmi Preselix
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                Akses layanan bot WhatsApp Preselix
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Nomor {WHATSAPP_BOT_DISPLAY} adalah nomor bisnis WhatsApp yang
                digunakan sebagai bot Preselix untuk pengiriman notifikasi
                otomatis. Klik tombol di bawah untuk membuka layanan bot
                langsung melalui WhatsApp.
              </p>
            </div>
            <Link
              href={botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-100 hover:scale-[.98] hover:bg-blue-700 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              Buka Bot WhatsApp
            </Link>
          </div>

          <div className="grid gap-4">
            {botFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
