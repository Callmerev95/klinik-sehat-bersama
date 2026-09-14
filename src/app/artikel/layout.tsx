import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Artikel | Klinik Sehat Bersama', template: '%s | Klinik Sehat Bersama' },
  alternates: { canonical: '/artikel/' },
  description:
    'Kumpulan artikel edukasi kesehatan Klinik Sehat Bersama: pencegahan penyakit, nutrisi, olahraga, kesehatan mental, dan tips gaya hidup sehat.',
};

export default function ArtikelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
