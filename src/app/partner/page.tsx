'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '@/components/marketing/PageHero';
import { ease, stagger } from '@/lib/motion';
import {
  CATEGORY_COLORS,
  CATEGORY_LABELS,
  PARTNERS,
  type Partner,
} from '@/data/partners';

import { MotionCardFrame } from '@/components/marketing/MotionCardFrame';
import { cn } from '@/lib/utils';

interface PartnerCardProps {
  partner: Partner;
  index: number;
}

function PartnerCard({ partner, index }: PartnerCardProps) {
  return (
    <MotionCardFrame index={index}>
        {/* Partner Image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100 ring-1 ring-inset ring-black/10 sm:h-52">
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
          <h3 title={partner.name} className="text-lg font-bold tracking-tight text-slate-900 mb-2 line-clamp-2 leading-snug">
            {partner.name}
          </h3>

          {/* Partner Description */}
          <p className="flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3 mb-4">
            {partner.description}
          </p>

          {/* View Details Link */}
          {partner.detail && (
            <Link
              href={`/partner/${partner.slug}`}
              aria-label={`Selengkapnya tentang ${partner.name}`}
              className={cn(
                'inline-flex min-h-6 items-center gap-1.5 rounded-lg px-2 py-2 -mx-2 text-sm font-semibold',
                'text-primary hover:text-primary-deep transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50'
              )}
            >
              Selengkapnya
              <span aria-hidden className="text-base leading-none">→</span>
            </Link>
          )}
        </div>
      </MotionCardFrame>
  );
}

export default function PartnerPage() {
  const reduce = useReducedMotion();
  return (
    <div className="min-h-0 bg-white">
      {/* Hero Section */}
      <PageHero
        image="/images/Hero/Hero-Partner.jpeg"
        labelledBy="partner-hero-heading"
        heading="Mitra Kami"
        description="Kerjasama strategis dengan institusi terpercaya memastikan kami memberikan layanan kesehatan terbaik untuk seluruh masyarakat di wilayah layanan dan sekitarnya."
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
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: reduce ? 0.01 : 0.45, ease }}
            className="mb-12 text-center md:mb-14"
          >
            <h2
              id="partners-heading"
              className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Kemitraan Strategis
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Bersama mitra kami, Klinik Sehat Bersama terus berkembang untuk memberikan akses kesehatan yang lebih baik.
            </p>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            initial={reduce ? false : 'hidden'}
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
