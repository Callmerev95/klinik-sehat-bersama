# Klinik Sehat Bersama — Website Resmi

Website company profile **Klinik Sehat Bersama** — modern, cepat, dan informatif. Dibangun sebagai static site untuk performa maksimal, keamanan, dan maintenance minimal.

## Fitur

- **7 halaman informatif** — Beranda, Tentang Kami, Pelayanan (14 layanan medis), Tim Dokter, Organisasi, Partner, Artikel
- **Halaman detail dinamis (SSG)** — `/artikel/[slug]` (7 artikel edukasi) dan `/partner/[slug]` (detail mitra)
- **Sistem artikel berbasis MDX** — tambah artikel = tambah 1 file `content/artikel/*.mdx`
- **Integrasi WhatsApp** — CTA sekali klik dengan pesan terisi otomatis (`src/lib/site.ts`)
- **Animasi konsisten** — Framer Motion dengan preset terpusat (`src/lib/motion.ts`)
- **SEO & aksesibilitas** — metadata per halaman, skip-link, mobile-first
- **Static export** — HTML murni, zero server, deployable di hosting statis mana pun

## Tech Stack

| Teknologi | Peran |
|---|---|
| [Next.js 16](https://nextjs.org) (App Router) | Framework, `output: "export"` |
| [React 19](https://react.dev) | UI runtime |
| [TypeScript](https://www.typescriptlang.org) (strict) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com) | Styling |
| [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com) | Komponen UI |
| [Framer Motion](https://www.framer.com/motion/) | Animasi |
| [MDX](https://mdxjs.com) via `@next/mdx` | Konten artikel |
| [Lucide React](https://lucide.dev) | Ikon |
| [Embla Carousel](https://www.embla-carousel.com) | Carousel testimoni & galeri |

## Menjalankan di Lokal

```bash
# Install dependencies
npm install

# Development server
npm run dev
# → http://localhost:3000

# Production build (static export ke folder out/)
npm run build

# Lint
npm run lint
```

## Struktur Proyek

```
src/
  app/                 # Route App Router
    artikel/[slug]/    # Detail artikel (SSG dari MDX)
    partner/[slug]/    # Detail mitra (SSG)
    ...
  components/
    layout/            # Navbar, Footer
    home/              # Section beranda (hero, layanan, galeri, dst.)
    marketing/         # PageHero, MotionCardFrame (komponen lintas halaman)
    ui/                # Primitives shadcn/ui
  data/
    articles.ts        # Sumber tunggal data artikel (list, staticParams)
    partners.ts        # Sumber tunggal data mitra (list, detail, staticParams)
  lib/
    site.ts            # Kontak klinik + helper whatsapp(msg?) — SATU tempat edit kontak
    motion.ts          # Preset animasi terpusat
content/
  artikel/             # File MDX artikel edukasi
public/                # Aset statis (gambar, favicon)
_dev-docs/             # Spesifikasi & design system internal
PRD.md                 # Product Requirements Document
```

## Alur Kerja Konten

### Menambah artikel

1. Buat file baru di `content/artikel/` (mis. `artikel-baru.mdx`) — sertakan object `meta` (title, date, category, author, thumbnail).
2. Tambahkan entri (slug, excerpt, meta) di `src/data/articles.ts`.
3. Commit & push — build ulang otomatis, halaman `/artikel/artikel-baru/` langsung tersedia.

### Menambah partner

Edit `src/data/partners.ts`. Partner dengan object `detail` otomatis mendapat halaman `/partner/[slug]/`; tanpa `detail` hanya tampil sebagai kartu.

### Mengubah kontak klinik

Semua nomor, email, alamat, dan sosmed diatur di **satu file**: `src/lib/site.ts`. Perubahan otomatis menjalar ke Navbar, Footer, dan semua CTA.

## Deployment

Static export (`out/`). Push ke branch utama → deployment otomatis via git integration (Vercel/hosting statis lain).

## Dokumentasi

- [`PRD.md`](./PRD.md) — Product Requirements Document (scope, arsitektur, metrik)
- [`CONTEXT.md`](./CONTEXT.md) — Istilah domain & modul arsitektur
- [`_dev-docs/`](./_dev-docs/) — Design system, spesifikasi, panduan internal

---

Dikembangkan oleh **Rev**
