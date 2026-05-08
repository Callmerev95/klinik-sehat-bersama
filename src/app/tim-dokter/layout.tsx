import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tim Dokter | Alsakha Medica',
  description:
    'Profil dokter Alsakha Medica: daftar dokter spesialis dengan pengalaman dan layanan klinik yang profesional.',
};

export default function TimDokterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
