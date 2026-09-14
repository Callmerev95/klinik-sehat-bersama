import Link from 'next/link';
import { PARTNERS, getPartner } from '@/data/partners';
import { PartnerDetailContent } from './_components/partner-detail-content';

const PARTNER_SLUGS = PARTNERS.filter((p) => p.detail).map((p) => p.slug);

interface PartnerDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PartnerDetailPage({ params }: PartnerDetailPageProps) {
  const { slug } = await params;
  const partner = getPartner(slug);

  if (!partner || !partner.detail) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-slate-50 to-white px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Mitra Tidak Ditemukan</h1>
          <p className="mt-2 text-slate-600">
            Mitra yang Anda cari tidak tersedia atau sudah dipindahkan. Kembali ke daftar mitra untuk memilih mitra lain.
          </p>
          <Link
            href="/partner"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-[color,background-color,transform] duration-200 hover:bg-primary-deep hover:scale-105 active:scale-0.96"
          >
            Kembali ke Halaman Mitra
          </Link>
        </div>
      </div>
    );
  }

  return <PartnerDetailContent partner={{ ...partner, detail: partner.detail }} />;
}

export async function generateStaticParams() {
  return PARTNER_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PartnerDetailPageProps) {
  const { slug } = await params;
  const partner = getPartner(slug);

  if (!partner || !partner.detail) {
    return {
      title: 'Mitra Tidak Ditemukan - Klinik Sehat Bersama',
      description: 'Halaman mitra tidak ditemukan di website Klinik Sehat Bersama.',
    };
  }

  return {
    title: `${partner.name} - Mitra Klinik Sehat Bersama`,
    description: partner.detail.shortDescription,
    openGraph: {
      title: `${partner.name} - Mitra Klinik Sehat Bersama`,
      description: partner.detail.shortDescription,
      url: `/partner/${slug}`,
      type: 'website',
      images: [
        {
          url: partner.detail.logo,
          width: 1200,
          height: 630,
          alt: partner.name,
        },
      ],
    },
  };
}
