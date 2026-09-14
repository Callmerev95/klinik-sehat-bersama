export const CLINIC = {
  name: 'Alsakha Medica',
  tagline: 'Klinik & Medical Center',
  phoneDisplay: '+62 823-4256-1752',
  whatsappNumber: '6282342561752',
  email: 'klinik.alsakha.medica90@gmail.com',
  address:
    'Jl. Garuda No.138, Labuan Sumbawa, Labuhan Badas, Kabupaten Sumbawa, Nusa Tenggara Bar. 84316, Indonesia',
} as const;

export function whatsapp(message?: string): string {
  const base = `https://wa.me/${CLINIC.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/alsakha.medica?igsh=a2hudmZqdGZ6YWJw',
  tiktok: 'https://www.tiktok.com/@klinik.alsakha.medica?_r=1&_t=ZS-96D9OfaY3Qg',
  facebook: 'https://www.facebook.com/share/1Ggk8e88KL/',
} as const;
