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
          <h1 className="text-3xl font-bold text-slate-900">Partner Tidak Ditemukan</h1>
          <p className="mt-2 text-slate-600">
            Maaf, halaman mitra yang Anda cari tidak tersedia.
          </p>
          <Link
            href="/partner"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#00A88E] px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-[#009076] hover:scale-105"
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
      title: 'Partner Tidak Ditemukan - Alsakha Medica',
      description: 'Halaman mitra tidak ditemukan di website Alsakha Medica.',
    };
  }

  return {
    title: `${partner.name} - Mitra Alsakha Medica`,
    description: partner.detail.shortDescription,
    openGraph: {
      title: `${partner.name} - Mitra Alsakha Medica`,
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
