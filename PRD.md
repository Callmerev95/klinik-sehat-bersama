# PRD — Website Klinik Sehat Bersama

| | |
|---|---|
| **Produk** | Website Company Profile Klinik Sehat Bersama |
| **Versi dokumen** | 1.0 |
| **Status** | Fase 1 — rilis (konten statis) |
| **Pemilik** | Klinik Sehat Bersama |
| **Domain** | `kliniksehatbersama.example.id` (placeholder, menunggu domain resmi) |

## 1. Ringkasan

Website company profile statis untuk Klinik Sehat Bersama. Tujuan utamanya menjadi sumber informasi resmi klinik: pelayanan, tim dokter, organisasi, mitra, dan artikel edukasi kesehatan — sekaligus jalur kontak utama ke pasien via WhatsApp.

Website dibangun sebagai static site (export HTML murni) demi kecepatan, keamanan, dan biaya maintenance minimal. Tidak ada backend, database, maupun fitur dinamis di fase ini.

## 2. Masalah & Peluang

- Calon pasien tidak punya satu sumber informasi terpercaya tentang layanan, harga paket, dan jam operasional klinik.
- Informasi kontak tersebar; tidak ada jalur konsultasi cepat (WhatsApp one-click).
- Klinik butuh kanal edukasi kesehatan untuk membangun kepercayaan masyarakat.
- Mitra (BPJS, jaringan klinik, korporat) perlu dipublikasikan sebagai bukti kredibilitas.

## 3. Tujuan & Metrik Keberhasilan

| Tujuan | Metrik |
|---|---|
| Informasi mudah ditemukan | Lighthouse SEO > 95; semua halaman terindeks |
| Cepat diakses | Lighthouse Performance > 95; LCP < 2 detik |
| Kontak mudah | Klik tombol WhatsApp dari setiap halaman |
| Konten hidup | Artikel edukasi baru dapat ditambahkan hanya dengan menambah 1 file MDX |

## 4. Target Pengguna

1. **Calon pasien** — mencari layanan, harga Medical Check-Up, lokasi, jam buka.
2. **Pasien aktif** — butuh kontak cepat (WhatsApp, telepon) dan edukasi kesehatan.
3. **Korporat & komunitas** — menilai kredibilitas lewat mitra, sertifikasi, organisasi.
4. **Admin klinik** — mengelola konten (artikel, partner) tanpa menyentuh logika aplikasi.

## 5. Ruang Lingkup (Scope)

### 5.1 Halaman (fase 1 — sudah rilis)

| Route | Halaman | Sifat |
|---|---|---|
| `/` | Beranda: hero, layanan unggulan, galeri fasilitas, testimoni, artikel terbaru, lokasi | Statis |
| `/tentang-kami/` | Profil & sejarah klinik | Statis |
| `/pelayanan/` | 14 layanan medis: MCU, Poli Umum, IGD 24 jam, Laboratorium, USG, Rawat Inap, Audiometri, Treadmill Test, EKG, Farmasi, Poli Gigi, KIA & Persalinan, BPJS Kesehatan, BPJS Ketenagakerjaan, Layanan Disabilitas Gratis | Statis |
| `/tim-dokter/` | Daftar dokter & tenaga medis | Statis |
| `/organisasi/` | Struktur organisasi | Statis |
| `/partner/` | Daftar 8 mitra | Statis |
| `/partner/[slug]/` | Detail mitra (3 mitra punya halaman: PT. Klinik Indosehat 2003, BPJS Kesehatan, BPJS Ketenagakerjaan) | SSG |
| `/artikel/` | Daftar artikel edukasi (7 artikel) | Statis |
| `/artikel/[slug]/` | Detail artikel | SSG |
| 404 | Halaman tidak ditemukan | Statis |

Mitra tanpa data `detail` otomatis tidak punya halaman detail dan tombol "Selengkapnya".

### 5.2 Fitur lintas halaman

- Navigasi responsif (mobile-first) + footer informatif.
- Tombol WhatsApp sekali klik dengan pesan terisi otomatis (`whatsapp(msg?)`).
- Animasi scroll-reveal konsisten (Framer Motion, preset dari `src/lib/motion.ts`).
- Skip-link aksesibilitas ("Lewati ke konten utama").
- Back-to-top, scroll-hash halaman beranda.

### 5.3 Di luar scope (fase 1)

- Booking/janji temu online
- Login pasien, rekam medis online
- CMS/headless (konten via file MDX & TypeScript data files)
- Halaman detail dokter
- Multibahasa

## 6. Arsitektur Konten

Prinsip: **satu sumber kebenaran per tipe konten**.

| Konten | Sumber tunggal | Konsumsi |
|---|---|---|
| Artikel | `content/artikel/*.mdx` — object `meta` di dalam file MDX | `src/data/articles.ts` menyimpan slug + excerpt + meta untuk kartu list; `generateStaticParams` dari data yang sama |
| Partner | `src/data/partners.ts` | List, detail, `staticParams` halaman detail |
| Dokter | Data lokal di `src/app/tim-dokter/page.tsx` | Belum ada halaman detail |
| Kontak klinik | `src/lib/site.ts` (`CLINIC`, `whatsapp()`, `SOCIAL_LINKS`) | Navbar, Footer, section lokasi, semua CTA |

Menambah artikel = tambah 1 file MDX + 1 entri di `src/data/articles.ts`.

## 7. Tech Stack

| Lapisan | Teknologi | Versi |
|---|---|---|
| Framework | Next.js (App Router, `output: "export"`) | 16.2.3 |
| UI runtime | React | 19.2.4 |
| Bahasa | TypeScript (strict) | ^5 |
| Styling | Tailwind CSS | ^4 |
| Komponen UI | shadcn/ui + Radix UI | ^4.2.0 / ^1.4.3 |
| Animasi | Framer Motion | ^12 |
| Konten artikel | MDX via `@next/mdx` + `@mdx-js` | ^3.1 |
| Ikon | Lucide React | ^1.8 |
| Carousel | Embla Carousel | ^8.6 |
| Font | Inter (via `next/font/google`) | — |
| Deployment | Static export — hostable di Vercel / hosting statis apa pun | — |

Konfigurasi kunci (`next.config.ts`): `output: "export"`, `trailingSlash: true`, `images.unoptimized: true` (karena static export), alias `@/content` → `content/`.

## 8. Struktur Kode

```
src/
  app/                 # Route App Router (layout + page per halaman)
    artikel/[slug]/    # Detail artikel (SSG, MDX)
    partner/[slug]/    # Detail mitra (SSG)
  components/
    common/            # BackToTop
    home/              # Section beranda (Hero, Layanan, Galeri, Testimoni, dll.)
    layout/            # Navbar, Footer
    marketing/         # PageHero, MotionCardFrame (dipakai lintas halaman)
    navigation/        # HomeTopLink
    ui/                # shadcn/ui primitives
  data/                # articles.ts, partners.ts (sumber data konten)
  lib/                 # site.ts (kontak), motion.ts (preset animasi), utils.ts
content/
  artikel/             # MDX artikel edukasi
public/                # Aset statis (gambar, favicon)
```

## 9. Persyaratan Non-Fungsional

- **Performa**: static export, zero JS server; target Lighthouse > 95.
- **Keamanan**: attack surface minimal — tidak ada server, database, maupun endpoint dinamis.
- **SEO**: metadata per halaman, `lang="id"`, trailing slash konsisten.
- **Aksesibilitas**: skip-link, semantic HTML, kontras warna sesuai design system.
- **Responsif**: mobile-first, semua layout diuji di breakpoint Tailwind.
- **Maintainability**: konten terpisah dari komponen; menambah konten tidak menyentuh UI.

## 10. Design System

Warna: Primary Teal `#00A88E` (CTA, aksen), Secondary Red `#B71C2C` (IGD/emergency), netral slate. Font Inter. Modern minimal dengan white space lebar, radius 8–12px, kartu putih soft shadow. Detail lengkap: `_dev-docs/DESIGN-SYSTEM.md`.

## 11. Maintenance & Workflow

1. Ubah konten: edit file MDX di `content/artikel/` atau data di `src/data/`.
2. Uji lokal: `npm run dev`.
3. Build & verifikasi: `npm run build` (19 halaman statis dihasilkan).
4. Commit & push — deployment otomatis via git integration host.
5. Ubah info kontak hanya di `src/lib/site.ts` — otomatis menjalar ke semua CTA.

## 12. Risiko & Mitigasi

| Risiko | Mitigasi |
|---|---|
| Data kontak masih placeholder (phone, email, alamat, sosmed) | Wajib diganti di `src/lib/site.ts` sebelum go-live produksi |
| Konten placeholder (nama dokter, testimoni, alamat) | Audit konten menjelang go-live |
| Gambar eksternal Unsplash di data partner | Ganti dengan dokumentasi asli klinik |
| Tidak ada CMS — penambahan artikel butuh developer ringan | Proses 1 file MDX terdokumentasi; cukup sederhana untuk non-developer via PR |

## 13. Roadmap Fase Berikutnya

1. Data kontak & konten asli menggantikan semua placeholder.
2. Halaman detail per dokter.
3. Halaman paket & harga Medical Check-Up dinamis.
4. Sitemap otomatis + structured data (Schema.org `MedicalClinic`).
5. Evaluasi kebutuhan janji temu online (fase 2).
