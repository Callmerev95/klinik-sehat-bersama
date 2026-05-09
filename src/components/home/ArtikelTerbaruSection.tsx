'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Calendar, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

type ArtikelItem = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
};

// 3 Artikel terbaru untuk ditampilkan di Home
const ARTIKEL_TERBARU: ArtikelItem[] = [
  {
    id: 'artikel-hantavirus',
    title: 'Hantavirus: Penyakit Langka dari Tikus yang Sedang Viral, Ini yang Harus Kamu Tahu',
    category: 'Pencegahan',
    excerpt: 'Pelajari tentang Hantavirus, gejala, cara penularan, dan langkah-langkah pencegahan yang efektif untuk melindungi diri dan keluarga.',
    image: '/images/Articles/hanta-virus.jpg',
    date: '9 Mei 2026',
    slug: 'hantavirus-penyakit-langka-dari-tikus',
  },
  {
    id: 'artikel-mcu-rutin',
    title: 'Pentingnya Medical Check Up Rutin untuk Deteksi Dini Penyakit',
    category: 'Pencegahan',
    excerpt: 'Pemeriksaan kesehatan rutin membantu mendeteksi penyakit pada tahap awal sebelum berkembang menjadi kondisi serius.',
    image: '/images/Articles/pentingnya-mcu.jpg',
    date: '12 April 2026',
    slug: 'pentingnya-medical-check-up',
  },
  {
    id: 'artikel-nutrisi-sehat',
    title: '10 Makanan Sehat yang Harus Anda Konsumsi Setiap Hari',
    category: 'Nutrisi',
    excerpt: 'Nutrisi yang tepat adalah fondasi kesehatan. Pelajari makanan-makanan bergizi yang mudah ditemukan dan terjangkau.',
    image: '/images/Articles/makanan-sehat.jpg',
    date: '12 April 2026',
    slug: 'makanan-sehat-harian',
  },
];

function ArtikelCard({
  artikel,
  index,
}: {
  artikel: ArtikelItem;
  index: number;
}) {
  const categoryColors: Record<string, string> = {
    Pencegahan: 'bg-blue-50 text-blue-700',
    Nutrisi: 'bg-green-50 text-green-700',
    'Penyakit Umum': 'bg-amber-50 text-amber-700',
    'Gaya Hidup Sehat': 'bg-emerald-50 text-emerald-700',
    'Kesehatan Mental': 'bg-purple-50 text-purple-700',
  };

  const categoryColor = categoryColors[artikel.category] || 'bg-slate-50 text-slate-700';

  return (
    <motion.li
      className="h-full scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, ease, delay: index * 0.06 }}
    >
      <Card
        className={cn(
          'card-hover group/card flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-sm',
          'transition-all duration-300',
          'hover:shadow-lg hover:border-[#00A88E]/60 p-0'
        )}
      >
        {/* Artikel Thumbnail - 16:9 Aspect Ratio */}
        <div className="relative w-full h-48 overflow-hidden rounded-t-2xl shrink-0">
          <Image
            src={artikel.image}
            alt={artikel.title}
            fill
            className="object-cover object-center transition-transform duration-500 ease-out group-hover/card:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col px-5 py-6 sm:px-6 sm:py-5">
          {/* Category Badge */}
          <div
            className={cn(
              'mb-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors duration-300',
              categoryColor
            )}
          >
            {artikel.category}
          </div>

          {/* Artikel Title */}
          <h3 className="text-base font-bold tracking-tight text-slate-900 mb-2 leading-snug line-clamp-2">
            {artikel.title}
          </h3>

          {/* Artikel Excerpt */}
          <p className="text-sm leading-relaxed text-slate-600 mb-4 line-clamp-2 flex-1">
            {artikel.excerpt}
          </p>

          {/* Date and Read More Button */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>{artikel.date}</span>
            </div>
            <Link
              href={`/artikel/${artikel.slug}/`}
              className={cn(
                'inline-flex items-center gap-1 px-3 py-1.5 rounded-lg',
                'text-xs font-semibold text-[#00A88E]',
                'bg-[#00A88E]/10 transition-all duration-200',
                'hover:bg-[#00A88E] hover:text-white hover:-translate-y-0.5'
              )}
            >
              Baca
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Card>
    </motion.li>
  );
}

export function ArtikelTerbaruSection() {
  return (
    <section
      className="section-padding border-t border-slate-100 bg-white"
      aria-labelledby="artikel-terbaru-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
          className="mx-auto max-w-2xl text-center mb-12 md:mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00A88E]/90 sm:text-[0.8125rem]"
          >
            Informasi Terkini
          </motion.p>

          <motion.h2
            id="artikel-terbaru-heading"
            variants={fadeUp}
            className="mt-4 text-balance text-2xl font-bold tracking-tight text-slate-900 sm:mt-5 sm:text-3xl md:text-[2rem]"
          >
            Artikel Terbaru
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg"
          >
            Informasi kesehatan terkini dari tim dokter Alsakha Medica
          </motion.p>
        </motion.header>

        {/* Artikel Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
            {ARTIKEL_TERBARU.map((artikel, index) => (
              <ArtikelCard key={artikel.id} artikel={artikel} index={index} />
            ))}
          </ul>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease }}
          className="mt-10 flex justify-center md:mt-14"
        >
          <Link
            href="/artikel/"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
              'text-base font-semibold text-[#00A88E]',
              'border border-[#00A88E]/30 bg-[#00A88E]/5',
              'transition-all duration-200',
              'hover:border-[#00A88E]/60 hover:bg-[#00A88E]/10 hover:-translate-y-0.5'
            )}
          >
            Lihat Semua Artikel
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
