import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Struktur Organisasi | Klinik Sehat Bersama',
  description:
    'Struktur organisasi Klinik Sehat Bersama: tim pimpinan, manajemen, dan staff operasional yang berkomitmen memberikan layanan kesehatan terbaik.',
};

export default function OrganisasiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
