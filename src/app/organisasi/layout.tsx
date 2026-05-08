import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Struktur Organisasi | Alsakha Medica',
  description:
    'Struktur organisasi Alsakha Medica: tim pimpinan, manajemen, dan staff operasional yang berkomitmen memberikan layanan kesehatan terbaik.',
};

export default function OrganisasiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
