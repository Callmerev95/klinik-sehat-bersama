'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/marketing/PageHero';
import { ease, stagger } from '@/lib/motion';

import { cn } from '@/lib/utils';

interface Partner {
  id: string;
  name: string;
  description: string;
  image: string;
  since: string;
  category: 'insurance' | 'network' | 'corporate' | 'health';
  slug?: string;
}

const PARTNERS: Partner[] = [
  {
    id: 'partner-1',
    name: 'PT. Klinik Indosehat 2003',
    description:
      'Jaringan kesehatan terintegrasi di Indonesia yang menyediakan layanan healthcare comprehensive dengan standar internasional. Kami bangga menjadi bagian dari ekosistem kesehatan yang berkelanjutan.',
    image: '/images/Partners/indosehat-2003.jpg',
    since: '2020',
    category: 'network',
    slug: 'pt-indosehat-2003-group',
  },
  {
    id: 'partner-2',
    name: 'BPJS Kesehatan',
    description:
      'Badan Penyelenggara Jaminan Sosial Kesehatan yang memberikan perlindungan kesehatan bagi seluruh masyarakat Indonesia. Klinik kami tersertifikasi dan aktif melayani peserta BPJS Kesehatan.',
    image: '/images/Partners/bpjs-kesehatan.jpg',
    since: '2015',
    category: 'insurance',
    slug: 'bpjs-kesehatan',
  },
  {
    id: 'partner-3',
    name: 'BPJS Ketenagakerjaan',
    description:
      'Asuransi sosial untuk tenaga kerja yang memberikan perlindungan komprehensif. Alsakha Medica menjadi mitra terpercaya dalam program kesehatan ketenagakerjaan di kawasan Sumbawa.',
    image: '/images/Partners/bpjs-ketenagakerjaan.jpg',
    since: '2018',
    category: 'insurance',
    slug: 'bpjs-ketenagakerjaan',
  },
  {
    id: 'partner-4',
    name: 'Rumah Sakit Umum Daerah Sumbawa',
    description:
      'Rumah sakit rujukan utama di Kabupaten Sumbawa dengan fasilitas ICU dan spesialistik lengkap. Kami bekerja sama dalam sistem rujukan untuk penanganan kasus kompleks dan emergency.',
    image: '/images/Partners/rsud-sumbawa.jpg',
    since: '2016',
    category: 'health',
  },
  {
    id: 'partner-5',
    name: 'Pemerintah Kabupaten Sumbawa',
    description:
      'Perangkat daerah kesehatan yang mendorong program kesehatan masyarakat. Klinik kami aktif berkontribusi dalam program imunisasi, MCU, dan surveilans kesehatan publik.',
    image: '/images/Partners/pemkab-sumbawa.jpg',
    since: '2014',
    category: 'corporate',
  },
  {
    id: 'partner-6',
    name: 'Asuransi Korporat PT Tambang Emas',
    description:
      'Perusahaan pertambangan utama di Sumbawa yang mempercayai Alsakha Medica untuk program kesehatan karyawan dan keluarga. Kami menyediakan medical check-up berkala dan layanan konsultasi 24 jam.',
    image: '/images/Partners/asuransi-korporat.jpg',
    since: '2019',
    category: 'corporate',
  },
];

const CATEGORY_LABELS: Record<Partner['category'], string> = {
  insurance: 'Asuransi',
  network: 'Jaringan Kesehatan',
  corporate: 'Korporat',
  health: 'Kesehatan',
};

const CATEGORY_COLORS: Record<Partner['category'], string> = {
  insurance: 'bg-blue-50 text-blue-700',
  network: 'bg-teal-50 text-teal-700',
  corporate: 'bg-purple-50 text-purple-700',
  health: 'bg-green-50 text-green-700',
};

interface PartnerCardProps {
  partner: Partner;
  index: number;
}

function PartnerCard({ partner, index }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.45,
        ease,
        delay: index * 0.08,
      }}
      className="h-full"
    >
      <article
        className={cn(
          'card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80',
          'bg-white shadow-[0_1px_3px_rgb(15_23_42/0.06)] transition-all duration-300',
          'hover:border-[#00A88E]/40 hover:shadow-lg hover:shadow-[#00A88E]/10'
        )}
      >
        {/* Partner Image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100 sm:h-52">
          <Image
            src={partner.image}
            alt={partner.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
          />
        </div>

        {/* Partner Content */}
        <div className="flex flex-1 flex-col px-5 py-6 sm:px-6 sm:py-7">
          {/* Category Badge */}
          <div className="mb-4 flex items-center gap-2">
            <span
              className={cn(
                'inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
                CATEGORY_COLORS[partner.category]
              )}
            >
              {CATEGORY_LABELS[partner.category]}
            </span>
            {partner.since && (
              <span className="text-xs font-medium text-slate-500">
                Sejak {partner.since}
              </span>
            )}
          </div>

          {/* Partner Name */}
          <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-2 line-clamp-2 leading-snug">
            {partner.name}
          </h3>

          {/* Partner Description */}
          <p className="flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3 mb-4">
            {partner.description}
          </p>

          {/* View Details Link */}
          {partner.slug ? (
            <Link
              href={`/partner/${partner.slug}`}
              className={cn(
                'inline-flex items-center gap-1.5 text-sm font-semibold',
                'text-[#00A88E] hover:text-[#008C76] transition-colors'
              )}
            >
              Selengkapnya
              <span className="text-base leading-none">→</span>
            </Link>
          ) : (
            <a
              href="#"
              className={cn(
                'inline-flex items-center gap-1.5 text-sm font-semibold',
                'text-slate-400 cursor-not-allowed'
              )}
            >
              Selengkapnya
              <span className="text-base leading-none">→</span>
            </a>
          )}
        </div>
      </article>
    </motion.div>
  );
}

export default function PartnerPage() {
  return (
    <div className="min-h-0 bg-white">
      {/* Hero Section */}
      <PageHero
        image="/images/Hero/Hero-Partner.jpeg"
        labelledBy="partner-hero-heading"
        heading="Mitra & Partner Kami"
        description="Kerjasama strategis dengan institusi terpercaya memastikan kami memberikan layanan kesehatan terbaik untuk seluruh masyarakat Sumbawa dan sekitarnya."
        quote="“Bersama membangun ekosistem kesehatan yang berkelanjutan”"
        alignment="left"
        descriptionWidth="narrow"
        quoteSpacing="compact"
      />

      {/* Partners Grid Section */}
      <section className="section-padding scroll-mt-20 bg-white" aria-labelledby="partners-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease }}
            className="mb-12 text-center md:mb-14"
          >
            <h2
              id="partners-heading"
              className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Kemitraan Strategis
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Bersama mitra kami, Alsakha Medica terus berkembang untuk memberikan akses kesehatan yang lebih baik.
            </p>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {PARTNERS.map((partner, index) => (
              <PartnerCard key={partner.id} partner={partner} index={index} />
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
