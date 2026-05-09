import type { Metadata } from "next";
import "./globals.css";
import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Alsakha Medica | Klinik Kesehatan Terpercaya di Sumbawa",
  description: "Klinik Alsakha Medica menyediakan pelayanan kesehatan berkualitas dengan dokter berpengalaman dan fasilitas modern.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}