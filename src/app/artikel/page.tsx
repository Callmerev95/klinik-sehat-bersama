'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/marketing/PageHero';
import { MotionCardFrame } from '@/components/marketing/MotionCardFrame';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Calendar, ChevronRight } from 'lucide-react';
import { ARTICLES, type Article } from '@/data/articles';



function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const categoryColors: Record<string, string> = {
    Pencegahan: 'bg-blue-50 text-blue-700',
    Nutrisi: 'bg-green-50 text-green-700',
    'Penyakit Umum': 'bg-amber-50 text-amber-700',
    'Gaya Hidup Sehat': 'bg-emerald-50 text-emerald-700',
    'Kesehatan Mental': 'bg-purple-50 text-purple-700',
  };

  const categoryColor = categoryColors[article.meta.category] || 'bg-slate-50 text-slate-700';

  return (
    <MotionCardFrame
      index={index}
      as="li"
      shellAs={Card}
      variant="flat"
      initialY={20}
      viewportMargin="-30px"
      delayStep={0.06}
      wrapperClassName="scroll-mt-24"
    >
        {/* Article Thumbnail Section - 16:9 Aspect Ratio */}
        <div className="relative w-full h-56 overflow-hidden rounded-t-2xl shrink-0">
          <Image
            src={article.meta.thumbnail}
            alt={article.meta.title}
            fill
            className="object-cover object-center transition-transform duration-500 ease-out group-hover/card:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col px-5 py-6 sm:px-6 sm:py-7">
          {/* Category Badge */}
          <div className={cn('mb-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors duration-300', categoryColor)}>
            {article.meta.category}
          </div>

          {/* Article Title */}
          <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-3 leading-snug line-clamp-3">
            {article.meta.title}
          </h3>

          {/* Article Excerpt */}
          <p className="text-sm leading-relaxed text-slate-600 mb-5 line-clamp-2 flex-1">
            {article.excerpt}
          </p>

          {/* Date and Read More Button */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>{article.meta.displayDate}</span>
            </div>
            <Link
              href={`/artikel/${article.slug}/`}
              className={cn(
                'inline-flex items-center gap-1.5 px-4 py-2 rounded-lg',
                'text-sm font-semibold text-[#00A88E]',
                'bg-[#00A88E]/10 transition-all duration-200',
                'hover:bg-[#00A88E] hover:text-white hover:-translate-y-0.5'
              )}
            >
              Baca Selengkapnya
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
    </MotionCardFrame>
  );
}

export default function ArtikelPage() {
  return (
    <div className="min-h-0 bg-white">
      {/* Hero Section */}
      <PageHero
        image="/images/Hero/Hero-Artikel.webp"
        labelledBy="artikel-hero-heading"
        heading="Artikel Kesehatan"
        description="Informasi kesehatan terpercaya dari tim dokter Alsakha Medica untuk membantu Anda menjalani hidup lebih sehat."
        quote="“Edukasi kesehatan adalah investasi terbaik untuk masa depan”"
        alignment="responsive-center"
        descriptionWidth="wide"
        quoteSpacing="large"
      />

      {/* Articles Grid Section */}
      <section
        className="section-padding border-t border-slate-100 bg-slate-50/80"
        aria-labelledby="artikel-daftar-heading"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 id="artikel-daftar-heading" className="sr-only">
            Daftar artikel kesehatan
          </h2>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {ARTICLES.map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}
