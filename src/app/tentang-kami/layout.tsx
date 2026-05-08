import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami | Alsakha Medica',
  description:
    'Profil Klinik Alsakha Medica: visi, misi, kolaborasi PT. Indosehat 2003, lokasi cabang di Sumbawa, keunggulan layanan, dan janji pelayanan.',
};

export default function TentangKamiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
