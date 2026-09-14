'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Calendar, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ARTICLES } from '@/data/articles';
import { ease, fadeUp, fadeUpStatic, stagger } from '@/lib/motion';

type ArtikelItem = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
};

// 3 Artikel terbaru untuk ditampilkan di Home — satu sumber dari `@/data/articles`.
const ARTIKEL_TERBARU: ArtikelItem[] = ARTICLES.slice(0, 3).map((a) => ({
  id: a.slug,
  title: a.meta.title,
  category: a.meta.category,
  excerpt: a.excerpt,
  image: a.meta.thumbnail,
  date: a.meta.displayDate,
  slug: a.slug,
}));

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
  const reduce = useReducedMotion();

  return (
    <motion.li
      className="h-full scroll-mt-24"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: reduce ? 0.01 : 0.45, ease, delay: reduce ? 0 : Math.min(index, 6) * 0.06 }}
    >
      <Card
        className={cn(
          'card-hover group/card flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-sm',
          'transition-[border-color,box-shadow] duration-300',
          'hover:shadow-lg hover:border-primary/60 p-0'
        )}
      >
        {/* Artikel Thumbnail - 16:9 Aspect Ratio */}
        <div className="relative w-full h-48 overflow-hidden rounded-t-2xl shrink-0 ring-1 ring-inset ring-black/10">
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
          <h3 title={artikel.title} className="text-base font-bold tracking-tight text-slate-900 mb-2 leading-snug line-clamp-2">
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
              aria-label={`Baca artikel: ${artikel.title}`}
              className={cn(
                'inline-flex items-center gap-1 px-3 py-1.5 rounded-lg',
                'text-xs font-semibold text-primary',
                'bg-primary/10 transition-[color,background-color,transform] duration-200',
                'hover:bg-primary hover:text-white hover:-translate-y-0.5'
              )}
            >
              Baca artikel
              <ChevronRight className="w-3.5 h-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </Card>
    </motion.li>
  );
}

export function ArtikelTerbaruSection() {
  const reduce = useReducedMotion();
  const item = reduce ? fadeUpStatic : fadeUp;
  return (
    <section
      className="section-padding border-t border-slate-100 bg-white"
      aria-labelledby="artikel-terbaru-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.header
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
          className="mx-auto max-w-2xl text-center mb-12 md:mb-14"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-[0.8125rem]"
          >
            Informasi Terkini
          </motion.p>

          <motion.h2
            id="artikel-terbaru-heading"
            variants={item}
            className="mt-4 text-balance text-2xl font-bold tracking-tight text-slate-900 sm:mt-5 sm:text-3xl md:text-[2rem]"
          >
            Artikel Terbaru
          </motion.h2>

          <motion.p
            variants={item}
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
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: reduce ? 0.01 : 0.45, ease }}
          className="mt-10 flex justify-center md:mt-14"
        >
          <Link
            href="/artikel/"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
              'text-base font-semibold text-primary',
              'border border-primary/30 bg-primary/5',
              'transition-[color,background-color,border-color,transform] duration-200',
              'hover:border-primary/60 hover:bg-primary/10 hover:-translate-y-0.5'
            )}
          >
            Lihat Semua Artikel
            <ChevronRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
