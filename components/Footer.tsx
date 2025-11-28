"use client";

import { onOpenWhatsApp } from "@/lib/whatsapp";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white mt-8">
      <div className="p-5 lg:px-20 lg:py-10 container mx-auto space-y-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src="/logo.webp"
            width={96}
            height={96}
            alt="Logo Preselix"
            className="w-24 h-auto object-contain"
          />

          <h2 className="text-3xl font-brand">Preselix</h2>
        </div>

        <p className="md:text-lg text-center max-w-3xl mx-auto text-gray-600">
          Preselix hadir sebagai platform presensi berbasis digital yang
          membantu sekolah meningkatkan transparansi, efisiensi, dan kemudahan
          dalam mengelola aktivitas akademik.
        </p>

        <div className="flex flex-col gap-6 items-center">
          <h4 className="font-bold text-xl text-blue-600">Kontak Kami</h4>

          {/* Social Media Icons */}
          <div className="flex items-center gap-8">
            {/* 1. Email */}
            <a
              href="mailto:info@preselix.id"
              aria-label="Kirim Email ke Preselix"
              className="hover:opacity-70 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m4 7 6 5h4l6-5"
                />
                <rect
                  width="18"
                  height="14"
                  x="3"
                  y="5"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="2"
                  rx="2"
                />
              </svg>
            </a>

            {/* 2. WhatsApp (Interactive Button) */}
            <button
              onClick={() => onOpenWhatsApp("Halo Preselix...")}
              aria-label="Chat WhatsApp Preselix"
              className="hover:opacity-70 transition-opacity focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 30.667 30.667"
                className="fill-current text-black"
              >
                <path d="M30.667 14.939c0 8.25-6.74 14.938-15.056 14.938-2.639 0-5.118-.675-7.276-1.857L0 30.667l2.717-8.017C1.347 20.4.558 17.758.558 14.938.559 6.688 7.297 0 15.613 0c8.315.002 15.054 6.689 15.054 14.939zM15.61 2.382c-6.979 0-12.656 5.634-12.656 12.56 0 2.748.896 5.292 2.411 7.362l-1.58 4.663 4.862-1.545c2 1.312 4.393 2.076 6.963 2.076 6.979 0 12.658-5.633 12.658-12.559C28.27 8.016 22.59 2.382 15.61 2.382zm7.604 15.998c-.094-.151-.34-.243-.708-.427-.367-.184-2.184-1.069-2.521-1.189-.34-.123-.586-.185-.832.182-.243.367-.951 1.191-1.168 1.437-.215.245-.43.276-.799.095-.369-.186-1.559-.57-2.969-1.817-1.097-.972-1.838-2.169-2.052-2.536-.217-.366-.022-.564.161-.746.165-.165.369-.428.554-.643.185-.213.246-.364.369-.609.121-.245.06-.458-.031-.643-.092-.184-.829-1.984-1.138-2.717-.307-.732-.614-.611-.83-.611-.215 0-.461-.03-.707-.03s-.646.089-.983.456-1.291 1.252-1.291 3.054c0 1.804 1.321 3.543 1.506 3.787.186.243 2.554 4.062 6.305 5.528 3.753 1.465 3.753.976 4.429.914.678-.062 2.184-.885 2.49-1.739.308-.858.308-1.593.215-1.746z" />
              </svg>
            </button>

            {/* 3. Instagram (External Link) */}
            {/* Menggunakan tag <a> jauh lebih baik daripada onClick window.open untuk SEO & UX */}
            <a
              href="https://www.instagram.com/preselix.id/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Preselix"
              className="hover:opacity-70 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#0F0F0F"
                  fillRule="evenodd"
                  d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  clipRule="evenodd"
                />
                <path fill="#0F0F0F" d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
                <path
                  fill="#0F0F0F"
                  fillRule="evenodd"
                  d="M1.65 4.28C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.65 6.32a6 6 0 0 0 2.63 2.63c1.28.65 2.96.65 6.32.65h2.8c3.36 0 5.04 0 6.32-.65a6 6 0 0 0 2.63-2.63c.65-1.28.65-2.96.65-6.32v-2.8c0-3.36 0-5.04-.65-6.32a6 6 0 0 0-2.63-2.63C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.32.65a6 6 0 0 0-2.63 2.63ZM13.4 3h-2.8c-1.71 0-2.88 0-3.78.08-.87.07-1.32.2-1.64.36a4 4 0 0 0-1.74 1.74c-.16.32-.3.77-.36 1.64C3 7.72 3 8.9 3 10.6v2.8c0 1.71 0 2.88.08 3.78.07.87.2 1.32.36 1.64a4 4 0 0 0 1.74 1.74c.32.16.77.3 1.64.36.9.08 2.07.08 3.78.08h2.8c1.71 0 2.88 0 3.78-.08.87-.07 1.32-.2 1.64-.36a4 4 0 0 0 1.74-1.74c.16-.32.3-.77.36-1.64.08-.9.08-2.07.08-3.78v-2.8c0-1.71 0-2.88-.08-3.78a4.32 4.32 0 0 0-.36-1.64 4 4 0 0 0-1.74-1.74 4.32 4.32 0 0 0-1.64-.36C16.28 3 15.1 3 13.4 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm sm:text-base mt-10 text-gray-500">
          © {currentYear} Preselix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
