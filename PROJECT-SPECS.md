# Alsakha Medica - Project Specifications

## Project Goal

Membuat website Company Profile Klinik Alsakha Medica yang modern, cepat, ringan, aman, dan profesional. Phase 1 fokus pada informasi statis + blog edukasi.

## Core Requirements

- Loading time < 2 detik
- Fully responsive (mobile-first)
- SEO friendly
- Security best practices (Static Export)
- Mudah di-maintenance
- Tampilan modern dan medical feel

## Tech Stack

- Next.js 15 (App Router) dengan Static Export
- TypeScript
- Tailwind CSS + Shadcn/ui
- Framer Motion
- MDX untuk blog edukasi
- Lucide React (icons)

## Output Mode

- Static Export (`output: 'export'`)
- Tidak menggunakan server-side features di Phase 1

## Halaman & Routing

- `/` → Home
- `/tentang-kami`
- `/pelayanan` ← Halaman penting (daftar semua layanan + deskripsi lengkap)
- `/tim-dokter`
- `/edukasi`
- `/galeri`
- `/kontak`

## Daftar Pelayanan (Berdasarkan Brosur Resmi)

**Layanan Utama:**

- Medical Check-Up (Paket lengkap)
- Pemeriksaan Umum / Poli Umum
- IGD 24 Jam & Emergency
- Laboratorium (Pemeriksaan darah, urine, dll)
- Rawat Inap
- Pelayanan USG
- Audiometri
- Treadmill Test
- Rekam Jantung (EKG)
- Farmasi Klinik
- Poli Gigi
- KIA & Persalinan
- Asuransi BPJS & Free Disabilities Care

**Keunggulan Klinik (Harus ditonjolkan):**

- Dokter & Tenaga Medis Profesional
- Fasilitas Lengkap & Modern
- Laboratorium Akurat & Cepat
- Layanan 24 Jam
- SKP Kementerian Resmi & Bersertifikat
- Tagline: "Setia Dikala Sakit – Peduli Dikala Sehat"

## Fitur Wajib di Halaman Pelayanan

- Hero section dengan judul "Pelayanan Kami"
- Grid card layanan dengan icon
- Deskripsi lengkap + keunggulan setiap layanan
- Tombol "Pelajari Lebih Lanjut" di setiap card
- Informasi Paket Medical Check-Up dengan harga Best Price

## Performance & Security Target

- Lighthouse Score > 95
- Static Site Generation (SSG)
- Minimal attack surface

## Timeline Target

- Phase 1 selesai: 10 – 14 hari kerja

## Catatan Penting

- Semua konten harus sesuai dengan brosur resmi
- Desain tetap clean, modern, dan medical feel
- Prioritas: Kecepatan, keamanan, dan tampilan mobile
