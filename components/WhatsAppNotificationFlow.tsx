import {
  BellRing,
  CheckCircle2,
  Clock3,
  MessageSquareText,
  Send,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

const parentSteps = [
  {
    icon: <MessageSquareText className="h-5 w-5" />,
    title: "Orang tua chat nomor resmi",
    description:
      "Orang tua dapat mengirim pesan apa saja ke nomor WhatsApp resmi Preselix, lalu bot menampilkan pilihan layanan yang tersedia.",
  },
  {
    icon: <UserCheck className="h-5 w-5" />,
    title: "Pilih Pantau Kehadiran Anak",
    description:
      "Setelah memilih menu tersebut, sistem mengecek apakah nomor WhatsApp orang tua sudah terhubung dengan data siswa.",
  },
  {
    icon: <Send className="h-5 w-5" />,
    title: "Rekap dan update dikirim",
    description:
      "Jika terhubung, orang tua menerima rekap kehadiran anak hari ini dan akan mendapat update presensi terbaru selama sesi pemantauan aktif.",
  },
];

const homeroomSteps = [
  {
    icon: <BellRing className="h-5 w-5" />,
    title: "Guru mencatat presensi",
    description:
      "Saat guru mata pelajaran mencatat presensi, status siswa langsung tersimpan di sistem Preselix.",
  },
  {
    icon: <Clock3 className="h-5 w-5" />,
    title: "Status perlu perhatian",
    description:
      "Jika siswa tercatat bukan Hadir, wali kelas tidak perlu membuka bot atau memilih menu apa pun.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Wali kelas menerima pesan",
    description:
      "WhatsApp wali kelas langsung menerima pemberitahuan berisi nama siswa, mata pelajaran, status, waktu, dan guru pengajar.",
  },
];

const visibleNotes = [
  "Jika nomor orang tua belum terhubung, bot akan memberi tahu agar menghubungi operator sekolah.",
  "Jika belum ada presensi hari ini, bot tetap mengaktifkan pemantauan dan mengirim update saat data mulai masuk.",
  "Jika sesi hari itu sudah berakhir, orang tua tetap bisa melihat informasi hari ini dan mengaktifkan pemantauan kembali esok hari.",
];

export default function WhatsAppNotificationFlow() {
  return (
    <section id="whatsapp-notification-flow" className="bg-slate-950 py-24">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">
            <ShieldCheck className="h-4 w-4" />
            Alur Notifikasi WhatsApp
          </div>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Dua jalur notifikasi presensi, sesuai kebutuhan penerima
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Preselix membedakan pesan untuk orang tua dan wali kelas. Orang tua
            memulai dari chat ke bot lalu memilih layanan pemantauan, sedangkan
            wali kelas menerima pemberitahuan otomatis saat ada presensi yang
            perlu ditindaklanjuti.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <NotificationPath
            badge="Dipilih dari menu bot"
            icon={<Users className="h-6 w-6" />}
            title="Ke Orang Tua"
            description="Alurnya terasa seperti layanan bot WhatsApp: orang tua membuka chat, memilih menu, lalu menerima rekap dan update kehadiran anak."
            steps={parentSteps}
            accent="emerald"
          />
          <NotificationPath
            badge="Otomatis tanpa trigger"
            icon={<BellRing className="h-6 w-6" />}
            title="Ke Wali Kelas"
            description="Alurnya berupa pemberitahuan langsung dari sekolah, sehingga wali kelas cepat tahu ketika ada siswa yang perlu diperhatikan."
            steps={homeroomSteps}
            accent="blue"
          />
        </div>

        <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-3">
          {visibleNotes.map((item) => (
            <div key={item} className="flex gap-3">
              <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-amber-300">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type NotificationPathProps = {
  badge: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  steps: typeof parentSteps;
  accent: "emerald" | "blue";
};

function NotificationPath({
  badge,
  icon,
  title,
  description,
  steps,
  accent,
}: NotificationPathProps) {
  const accentClass =
    accent === "emerald"
      ? "bg-emerald-400 text-slate-950"
      : "bg-blue-500 text-white";
  const softAccentClass =
    accent === "emerald"
      ? "bg-emerald-400/10 text-emerald-300 ring-emerald-400/20"
      : "bg-blue-500/10 text-blue-300 ring-blue-400/20";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur md:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${accentClass}`}
          >
            {icon}
          </div>
          <div>
            <p
              className={`mb-2 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ring-1 ${softAccentClass}`}
            >
              {badge}
            </p>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>

      <p className="mb-8 text-base leading-relaxed text-slate-300">
        {description}
      </p>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ring-1 ${softAccentClass}`}
              >
                {step.icon}
              </div>
              {index < steps.length - 1 ? (
                <div className="mt-3 h-full min-h-6 w-px bg-white/10" />
              ) : null}
            </div>
            <div className="pb-5">
              <h4 className="font-bold text-white">{step.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
