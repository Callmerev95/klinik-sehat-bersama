# Alsakha Medica - Component Plan

## Tujuan

Daftar lengkap semua komponen yang akan dibuat agar struktur kode bersih, reusable, dan mudah di-maintenance.

## 1. Global / Reusable Components

| Component Name         | Deskripsi                                        | Status   |
| ---------------------- | ------------------------------------------------ | -------- |
| Navbar                 | Navigation bar dengan logo + menu + mobile menu  | Wajib    |
| Footer                 | Footer lengkap (link, kontak, sosmed, copyright) | Wajib    |
| WhatsAppFloatingButton | Floating button WA dengan pulse animation        | Wajib    |
| BackToTopButton        | Tombol kembali ke atas saat scroll               | Wajib    |
| LoadingSpinner         | Loading indicator                                | Wajib    |
| SectionHeading         | Komponen heading section (dengan garis aksen)    | Reusable |

## 2. Page-Specific Components

### Home Page

- HeroSection
- LayananUnggulan (Card Grid)
- TentangKamiSingkat
- TestimoniCarousel
- CTASection

### Informasi Klinik

- VisiMisiSection
- SejarahSection
- SertifikatGrid
- PartnerLogoCarousel

### Pelayanan

- PelayananList (Grid/Card)
- PelayananDetailCard

### Tim Dokter

- DoctorCard
- DoctorGrid
- DoctorModal (detail saat diklik)

### Edukasi Kesehatan (Blog)

- BlogList
- BlogCard
- BlogContent (MDX renderer)
- BlogSidebar (kategori/popular)

### Galeri Fasilitas

- GalleryGrid
- GalleryLightbox (modal saat foto diklik)

### Kontak

- ContactForm
- ContactInfo
- GoogleMapsEmbed

## 3. UI Components (Shadcn/ui + Custom)

- Button (dengan varian: primary, secondary, danger, outline)
- Card
- Badge
- TestimonialCard
- FormInput + Textarea + Select
- Modal
- Accordion (untuk FAQ nanti)

## 4. Animation & Interaction Plan

- Fade in on scroll (Framer Motion)
- Hover scale pada card
- Smooth scroll
- Mobile menu slide animation
- WhatsApp button pulse

## 5. Folder Structure (Recommended)

/app
/components
/ui → shadcn components
/layout → Navbar, Footer, etc
/sections → Hero, LayananUnggulan, dll
/common → Button, Card, dll
/content → .mdx files untuk blog
/public
/images
/icons

## Catatan Penting!

- Semua komponen harus **mobile-first**
- Gunakan Tailwind class consistently
- Gunakan TypeScript interface untuk setiap component props
- Komponen harus reusable dan clean
- Animasi harus subtle, tidak berlebihan
- Setiap card harus punya hover effect yang halus
