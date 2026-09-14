import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pelayanan | Klinik Sehat Bersama',
  description:
    'Layanan kesehatan Klinik Sehat Bersama sesuai brosur resmi: Medical Check-Up, poli umum, IGD 24 jam, laboratorium, USG, rawat inap, audiometri, EKG, treadmill, farmasi, KIA, dan BPJS.',
};

export default function PelayananLayout({ children }: { children: React.ReactNode }) {
  return children;
}
