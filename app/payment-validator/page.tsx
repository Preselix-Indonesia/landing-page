"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  AlertTriangle,
  Loader2,
  ArrowLeft,
  Building,
  CreditCard,
  Package,
  Calendar,
  ShieldCheck,
  FileCheck2,
  Mail,
  HelpCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ValidationData {
  invoiceNumber: string;
  receiptNumber: string | null;
  schoolName: string;
  schoolEmail: string;
  packageName: string;
  duration: string;
  paymentMethod: string;
  status: string;
  totalAmount: number;
  paidAt: string | null;
  createdAt: string;
  verificationMessage: string;
}

const getBackendUrl = () => {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  if (typeof window !== "undefined") {
    if (
      window.location.hostname.includes("localhost") ||
      window.location.hostname.includes("127.0.0.1")
    ) {
      return "http://localhost:3000";
    }
  }
  return "https://api.preselix.id";
};

const formatToRupiah = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const formatDate = (dateStr: string | null) => {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

function ValidatorContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ValidationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setError(
        "Token validasi tidak ditemukan di URL. Pastikan Anda memindai QR code resmi.",
      );
      setLoading(false);
      return;
    }

    const fetchValidation = async () => {
      try {
        const backendUrl = getBackendUrl();
        const response = await fetch(
          `${backendUrl}/api/v1/public/payment-validator?token=${token}`,
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(
              "Dokumen tidak valid atau tidak terdaftar di sistem Preselix.",
            );
          }
          throw new Error(
            "Gagal menghubungi server untuk memvalidasi dokumen.",
          );
        }

        const resJson = await response.json();
        setData(resJson.data);
      } catch (err: any) {
        setError(
          err.message ||
            "Terjadi kesalahan sistem saat memvalidasi pembayaran.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchValidation();
  }, [token]);

  if (loading) {
    return (
      <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6 animate-pulse">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-slate-800 rounded-full" />
          <div className="h-6 bg-slate-800 w-3/4 rounded-full" />
          <div className="h-4 bg-slate-800 w-1/2 rounded-full" />
        </div>
        <div className="space-y-4 pt-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex justify-between">
              <div className="h-4 bg-slate-800 w-1/3 rounded" />
              <div className="h-4 bg-slate-800 w-1/2 rounded" />
            </div>
          ))}
        </div>
        <div className="h-12 bg-slate-800 rounded-2xl w-full pt-4" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-slate-900/40 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 shadow-2xl hover:border-red-500/30 transition-all duration-300 relative group">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-red-500/20 border border-red-500/40 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <AlertTriangle className="w-6 h-6 text-red-400" />
        </div>

        <div className="text-center mt-4 space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-red-200">
            Dokumen Tidak Valid
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">{error}</p>
        </div>

        <div className="mt-8 p-4 bg-red-500/5 border border-red-500/10 rounded-2xl flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-red-400/80 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed">
            Jika Anda merasa dokumen ini sah tetapi sistem menyatakan
            sebaliknya, mohon hubungi tim dukungan kami dengan menyertakan foto
            invoice/kwitansi Anda.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="https://wa.me/6285824528625"
            target="_blank"
            className="w-full py-3.5 bg-red-600 hover:bg-red-500 active:scale-[0.99] text-white text-sm font-semibold rounded-2xl shadow-lg shadow-red-600/20 text-center transition-all duration-200 flex items-center justify-center gap-2"
          >
            Hubungi Bantuan Support
          </Link>
          <Link
            href="/"
            className="w-full py-3.5 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 active:scale-[0.99] text-slate-300 text-sm font-semibold rounded-2xl text-center transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  if (data) {
    const isPaid = data.status === "PAID";
    const isCancelled = data.status === "CANCELLED";
    const isExpired = data.status === "EXPIRED";

    // Determine status design elements dynamically
    const statusStyles = isPaid
      ? {
          borderClass: "border-emerald-500/20 hover:border-emerald-500/30",
          sealClass: "bg-emerald-500/20 border-emerald-500/40",
          sealIcon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
          badgeClass:
            "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
          badgeText: "Terverifikasi Resmi",
          title: "Dokumen Sah & Terdaftar",
          titleClass: "text-emerald-200",
          themeColorClass: "text-emerald-400/80",
          totalColorClass: "text-emerald-400",
          buttonClass:
            "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20",
        }
      : isCancelled || isExpired
        ? {
            borderClass: "border-rose-500/20 hover:border-rose-500/30",
            sealClass: "bg-rose-500/20 border-rose-500/40",
            sealIcon: <AlertTriangle className="w-6 h-6 text-rose-400" />,
            badgeClass: "bg-rose-500/10 border-rose-500/30 text-rose-400",
            badgeText: isCancelled
              ? "Dokumen Dibatalkan"
              : "Dokumen Kadaluarsa",
            title: isCancelled ? "Transaksi Dibatalkan" : "Tagihan Kadaluarsa",
            titleClass: "text-rose-200",
            themeColorClass: "text-rose-400/80",
            totalColorClass: "text-rose-400",
            buttonClass: "bg-rose-600 hover:bg-rose-500 shadow-rose-600/20",
          }
        : {
            borderClass: "border-amber-500/20 hover:border-amber-500/30",
            sealClass: "bg-amber-500/20 border-amber-500/40",
            sealIcon: <FileCheck2 className="w-6 h-6 text-amber-400" />,
            badgeClass: "bg-amber-500/10 border-amber-500/30 text-amber-400",
            badgeText: "Tagihan Aktif Terdaftar",
            title: "Dokumen Tagihan Resmi",
            titleClass: "text-amber-200",
            themeColorClass: "text-amber-400/80",
            totalColorClass: "text-amber-400",
            buttonClass: "bg-amber-600 hover:bg-amber-500 shadow-amber-600/20",
          };

    const displayPaymentMethod =
      data.paymentMethod === "MANUAL" ? "Transfer Bank" : data.paymentMethod;

    return (
      <div
        className={`bg-slate-900/40 backdrop-blur-xl border ${statusStyles.borderClass} rounded-3xl p-8 shadow-2xl transition-all duration-300 relative group`}
      >
        {/* Outer verification seal overlay */}
        <div
          className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 ${statusStyles.sealClass} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          {statusStyles.sealIcon}
        </div>

        <div className="text-center mt-4 space-y-1">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${statusStyles.badgeClass} text-xs font-bold uppercase tracking-wider mb-2`}
          >
            <ShieldCheck className="w-3.5 h-3.5" /> {statusStyles.badgeText}
          </div>
          <h2
            className={`text-2xl font-bold tracking-tight ${statusStyles.titleClass}`}
          >
            {statusStyles.title}
          </h2>
          <p className="text-xs text-slate-400">
            Telah diverifikasi oleh PT PRESELIX DIGITAL NUSANTARA
          </p>
        </div>

        {/* Verified Details Block */}
        <div className="mt-8 space-y-4 relative border-t border-b border-slate-800/80 py-6">
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-400 text-xs flex items-center gap-2 shrink-0">
              <FileCheck2
                className={`w-4 h-4 ${statusStyles.themeColorClass}`}
              />{" "}
              No. Invoice / Kwitansi
            </span>
            <span className="text-slate-200 text-xs font-mono font-semibold text-right break-all">
              {data.invoiceNumber}{" "}
              {data.receiptNumber ? `/ ${data.receiptNumber}` : ""}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-400 text-xs flex items-center gap-2 shrink-0">
              <Building className={`w-4 h-4 ${statusStyles.themeColorClass}`} />{" "}
              Nama Sekolah
            </span>
            <span className="text-slate-200 text-xs font-semibold text-right">
              {data.schoolName}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-400 text-xs flex items-center gap-2 shrink-0">
              <Mail className={`w-4 h-4 ${statusStyles.themeColorClass}`} />{" "}
              Email Admin
            </span>
            <span className="text-slate-200 text-xs font-semibold text-right break-all">
              {data.schoolEmail}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-400 text-xs flex items-center gap-2 shrink-0">
              <Package className={`w-4 h-4 ${statusStyles.themeColorClass}`} />{" "}
              Layanan & Durasi
            </span>
            <span className="text-slate-200 text-xs font-semibold text-right">
              Paket {data.packageName.toUpperCase()} ({data.duration})
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-400 text-xs flex items-center gap-2 shrink-0">
              <CreditCard
                className={`w-4 h-4 ${statusStyles.themeColorClass}`}
              />{" "}
              Pembayaran
            </span>
            <span className="text-slate-200 text-xs font-semibold text-right">
              {displayPaymentMethod} •{" "}
              {data.status === "PAID" ? (
                <span className="text-emerald-400 font-bold">LUNAS</span>
              ) : data.status === "CANCELLED" ? (
                <span className="text-rose-400 font-bold">DIBATALKAN</span>
              ) : data.status === "EXPIRED" ? (
                <span className="text-slate-400 font-bold">KADALUARSA</span>
              ) : (
                <span className="text-amber-400 font-bold">BELUM DIBAYAR</span>
              )}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-400 text-xs flex items-center gap-2 shrink-0">
              <Calendar className={`w-4 h-4 ${statusStyles.themeColorClass}`} />{" "}
              Tanggal Transaksi
            </span>
            <span className="text-slate-200 text-xs font-semibold text-right">
              {formatDate(data.paidAt || data.createdAt)}
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center bg-slate-800/20 rounded-2xl p-4 border border-slate-800/80">
          <span className="text-slate-400 text-xs font-medium">
            {data.status === "PAID" ? "Total Terbayar" : "Total Tagihan"}
          </span>
          <span className={`text-lg font-bold ${statusStyles.totalColorClass}`}>
            {formatToRupiah(data.totalAmount)}
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/"
            className={`w-full py-3.5 active:scale-[0.99] text-white text-sm font-semibold rounded-2xl shadow-lg text-center transition-all duration-200 flex items-center justify-center gap-2 ${statusStyles.buttonClass}`}
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return null;
}

export default function PaymentValidatorPage() {
  return (
    <div className="min-h-screen bg-linear-to-tr from-slate-900 via-indigo-950 to-slate-900 text-slate-100 flex flex-col antialiased">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Subtle Decorative Blurred Background Lights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse duration-10000" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse duration-7000" />

        <div className="max-w-xl w-full">
          <Suspense
            fallback={
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6 animate-pulse">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
                  </div>
                  <div className="h-6 bg-slate-800 w-3/4 rounded-full" />
                  <div className="h-4 bg-slate-800 w-1/2 rounded-full" />
                </div>
              </div>
            }
          >
            <ValidatorContent />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
