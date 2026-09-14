import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://klinik-sehat-bersama.callmerev.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Klinik Sehat Bersama | Klinik Kesehatan Terpercaya di Kota Sumbawa",
    template: "%s | Klinik Sehat Bersama",
  },
  description:
    "Klinik Sehat Bersama menyediakan pelayanan kesehatan berkualitas dengan dokter berpengalaman dan fasilitas modern.",
  keywords: [
    "klinik sehat bersama",
    "klinik",
    "pelayanan kesehatan",
    "medical check-up",
    "klinik 24 jam",
    "laboratorium klinik",
    "vaksinasi",
    "BPJS Kesehatan",
  ],
  authors: [{ name: "Klinik Sehat Bersama" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Klinik Sehat Bersama",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Klinik Sehat Bersama — Sehat untuk Semua" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: "#007a65",
};

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Klinik Sehat Bersama",
  url: SITE_URL,
  description:
    "Klinik Sehat Bersama menyediakan pelayanan kesehatan berkualitas dengan dokter berpengalaman dan fasilitas modern.",
  telephone: "+6280000000000",
  email: "halo@kliniksehatbersama.example.id",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Contoh No. 00",
    addressLocality: "Kota Sumbawa",
    postalCode: "00000",
    addressCountry: "ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased`}>
        <a
          href="#konten-utama"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:m-4 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary"
        >
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="konten-utama">{children}</main>
        <Footer />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
      </body>
    </html>
  );
}