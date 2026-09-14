import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami | Klinik Sehat Bersama',
  description:
    'Profil Klinik Sehat Bersama: visi, misi, kolaborasi mitra kesehatan, lokasi cabang, keunggulan layanan, dan janji pelayanan.',
};

export default function TentangKamiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
