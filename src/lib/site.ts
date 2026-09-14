export const CLINIC = {
  name: 'Klinik Sehat Bersama',
  shortName: 'Sehat Bersama',
  tagline: 'Sehat untuk Semua',
  phoneDisplay: '+62 800-0000-0000',
  whatsappNumber: '6280000000000',
  email: 'halo@kliniksehatbersama.example.id',
  address:
    'Jl. Contoh No. 00, Kota Contoh, Provinsi Contoh 00000, Indonesia',
} as const;

export function whatsapp(message?: string): string {
  const base = `https://wa.me/${CLINIC.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const SOCIAL_LINKS = {
  instagram: '#',
  tiktok: '#',
  facebook: '#',
} as const;
