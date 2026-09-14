import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mitra | Alsakha Medica',
  description:
    'Kemitraan strategis Alsakha Medica dengan institusi terpercaya: PT. Klinik Indosehat 2003, BPJS Kesehatan, RSUD Sumbawa, dan mitra kesehatan lainnya.',
};

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
