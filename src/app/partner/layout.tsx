import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Mitra | Klinik Sehat Bersama', template: '%s | Klinik Sehat Bersama' },
  alternates: { canonical: "/partner/" },
  description:
    'Kemitraan strategis Klinik Sehat Bersama dengan institusi terpercaya: jaringan klinik, BPJS Kesehatan, rumah sakit rujukan, dan mitra kesehatan lainnya.',
};

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
