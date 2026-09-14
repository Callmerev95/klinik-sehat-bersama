<div align="center">

# Klinik Sehat Bersama — Website Resmi

Website company profile **Klinik Sehat Bersama**, klinik kesehatan terpercaya.
Modern, cepat, dan informatif — dibangun sebagai static site untuk performa
maksimal, keamanan, dan maintenance minimal.

[![Next.js](https://img.shields.io/badge/Next.js%2016-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React%2019-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript%20strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind%20CSS%204-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![MDX](https://img.shields.io/badge/MDX-1B1F24?style=flat-square&logo=mdx&logoColor=white)](https://mdxjs.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion%2012-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Static Export](https://img.shields.io/badge/Static%20Export-00A88E?style=flat-square)](#)

</div>

---

## Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Halaman](#halaman)
- [Tech Stack](#tech-stack)
- [Persyaratan](#persyaratan)
- [Menjalankan di Lokal](#menjalankan-di-lokal)
- [Struktur Proyek](#struktur-proyek)
- [Alur Kerja Konten](#alur-kerja-konten)
- [Deployment](#deployment)
- [Dokumentasi](#dokumentasi)

## Fitur Utama

- **Tujuh halaman informatif** — Beranda, Tentang Kami, Pelayanan, Tim Dokter, Organisasi, Partner, Artikel
- **14 layanan medis terdokumentasi** — Medical Check-Up, Poli Umum, IGD 24 jam, Laboratorium, USG, Rawat Inap, Audiometri, Treadmill Test, EKG, Farmasi, Poli Gigi, KIA & Persalinan, BPJS Kesehatan, BPJS Ketenagakerjaan, hingga Layanan Disabilitas Gratis
- **Halaman detail SSG** — `/artikel/[slug]` (7 artikel edukasi kesehatan) dan `/partner/[slug]` (detail mitra terpilih)
- **Sistem artikel berbasis MDX** — menambah artikel cukup menambah satu file `.mdx`, tanpa menyentuh komponen
- **Integrasi WhatsApp** — CTA sekali klik dengan pesan terisi otomatis, nomor terpusat di satu file
- **Animasi konsisten** — Framer Motion dengan preset terpusat, scroll-reveal di semua halaman
- **Aksesibilitas** — skip-link "Lewati ke konten utama", semantic HTML, mobile-first
- **SEO** — metadata per halaman, bahasa terkunci `lang="id"`, trailing slash konsisten
- **Static export** — 19 halaman HTML murni, zero server, zero database, attack surface minimal

## Halaman

| Route | Halaman | Sifat |
|---|---|---|
| `/` | Beranda — hero, layanan unggulan, galeri fasilitas, testimoni, artikel terbaru, lokasi | Statis |
| `/tentang-kami/` | Profil dan sejarah klinik | Statis |
| `/pelayanan/` | Daftar lengkap layanan medis dengan deskripsi | Statis |
| `/tim-dokter/` | Daftar dokter dan tenaga medis | Statis |
| `/organisasi/` | Struktur organisasi klinik | Statis |
| `/partner/` | Daftar 8 mitra | Statis |
| `/partner/[slug]/` | Detail mitra | SSG |
| `/artikel/` | Daftar artikel edukasi kesehatan | Statis |
| `/artikel/[slug]/` | Detail artikel | SSG |
| 404 | Halaman tidak ditemukan, kustom | Statis |

## Tech Stack

| Teknologi | Peran |
|---|---|
| [Next.js 16](https://nextjs.org) (App Router, `output: "export"`) | Framework |
| [React 19](https://react.dev) | UI runtime |
| [TypeScript](https://www.typescriptlang.org) strict | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com) | Styling |
| [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com) | Komponen UI |
| [Framer Motion 12](https://www.framer.com/motion/) | Animasi |
| [MDX 3](https://mdxjs.com) via `@next/mdx` | Konten artikel |
| [Lucide React](https://lucide.dev) | Ikon |
| [Embla Carousel 8](https://www.embla-carousel.com) | Carousel testimoni dan galeri |
| [Inter](https://fonts.google.com/specimen/Inter) via `next/font/google` | Tipografi |

## Persyaratan

- Node.js `>= 18.18` (disarankan versi LTS terbaru)
- npm (terpasang bersama Node.js)

## Menjalankan di Lokal

```bash
# 1. Clone repository
git clone https://github.com/Callmerev95/klinik-sehat-bersama.git
cd klinik-sehat-bersama

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Perubahan kode langsung ter-hot-reload.

Perintah lainnya:

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build — static export ke `out/` |
| `npm run lint` | Lint via ESLint (flat config) |

## Struktur Proyek

```
klinik-sehat-bersama/
├── content/
│   └── artikel/            # Artikel edukasi kesehatan (MDX)
├── public/
│   └── images/             # Aset gambar (artikel, hero, partner, logo)
├── src/
│   ├── app/                # Route App Router
│   │   ├── artikel/
│   │   │   └── [slug]/     # Detail artikel (SSG dari MDX)
│   │   ├── partner/
│   │   │   └── [slug]/     # Detail mitra (SSG)
│   │   ├── page.tsx        # Beranda
│   │   └── ...              # Halaman statis lainnya
│   ├── components/
│   │   ├── common/         # BackToTop
│   │   ├── home/           # Section beranda (Hero, Layanan, Galeri, dst.)
│   │   ├── layout/         # Navbar, Footer
│   │   ├── marketing/      # PageHero, MotionCardFrame — lintas halaman
│   │   ├── navigation/     # HomeTopLink
│   │   └── ui/             # Primitives shadcn/ui
│   ├── data/
│   │   ├── articles.ts     # Sumber tunggal data artikel (list, staticParams)
│   │   └── partners.ts     # Sumber tunggal data mitra (list, detail, staticParams)
│   └── lib/
│       ├── site.ts         # Kontak klinik + helper whatsapp() — SATU tempat edit kontak
│       ├── motion.ts       # Preset animasi terpusat
│       └── utils.ts        # Utility (cn)
├── PRD.md                  # Product Requirements Document
└── next.config.ts          # Konfigurasi (export, trailingSlash, alias @/content)
```

## Alur Kerja Konten

### Menambah artikel

1. Buat file baru di `content/artikel/`, misal `artikel-baru.mdx`. Sertakan object `meta` di awal file:
   ```mdx
   export const meta = {
     "title": "Judul Artikel",
     "date": "2026-09-14",
     "displayDate": "14 September 2026",
     "category": "Pencegahan",
     "author": "Tim Redaksi",
     "thumbnail": "/images/Articles/artikel-baru.jpg"
   };
   ```
2. Tambahkan entri — slug, excerpt, meta — di `src/data/articles.ts`.
3. Commit dan push. Halaman `/artikel/artikel-baru/` otomatis tersedia saat build.

### Menambah partner

Edit `src/data/partners.ts`. Partner dengan object `detail` otomatis mendapat halaman `/partner/[slug]/`; tanpa `detail` hanya tampil sebagai kartu di daftar, tanpa tombol "Selengkapnya".

### Mengubah kontak klinik

Semua nomor telepon, WhatsApp, email, alamat, dan tautan sosmed diatur di satu file: `src/lib/site.ts`. Perubahan otomatis menjalar ke Navbar, Footer, dan seluruh CTA.

## Deployment

Project berupa static export (`out/`). Push ke branch `main` akan memicu deployment otomatis via git integration (Vercel, Netlify, atau hosting statis lain). Tidak ada environment variable dan tidak ada konfigurasi server.

## Dokumentasi

- [PRD.md](./PRD.md) — Product Requirements Document: scope, arsitektur konten, metrik keberhasilan, roadmap

---

Dikembangkan oleh **Rev**
