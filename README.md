# Klinik Alsakha Medika - Website Resmi

Website resmi **Klinik Alsakha Medika** yang modern, cepat, dan informatif. Dibangun untuk memberikan pengalaman terbaik bagi pasien dan masyarakat Sumbawa.

![Alsakha Medika]

## ✨ Fitur Utama

- **Desain Modern & Responsif** – Tampilan yang bersih, profesional, dan ramah mobile
- **Halaman Lengkap** – Beranda, Tentang Kami, Pelayanan, Tim Dokter, Organisasi, Partner, Artikel
- **Sistem Artikel Dinamis** – Menggunakan MDX (mudah ditambah/update)
- **Integrasi WhatsApp** – Tombol chat langsung ke klinik
- **SEO Friendly** – Optimized untuk pencarian Google
- **Static Export** – Performa sangat cepat & mudah di-maintenance

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Konten**: MDX
- **Animasi**: Framer Motion
- **Deployment**: Vercel
- **Domain**: alsakhagroup.com

## 🚀 Cara Menjalankan di Lokal

```bash
# Clone repository
git clone https://github.com/username/alsakhagroup-website.git

# Masuk ke folder project
cd alsakhagroup-website

# Install dependencies
npm install

# Jalankan development server
npm run dev

Buka http://localhost:3000 Struktur Folder public/ → Semua asset statis (gambar, favicon, dll)
content/artikel/ → Semua artikel website (MDX)
src/app/ → Halaman utama website
src/components/ → Komponen reusable

 Cara Update ArtikelEdit file di folder content/artikel/
Commit & push ke GitHub
Vercel akan otomatis rebuild (biasanya 30 detik - 1 menit)

 Link WebsiteProduction: https://alsakhagroup.com

 DeveloperDibuat dengan  oleh Rev

```
