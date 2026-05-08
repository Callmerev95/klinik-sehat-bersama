'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Calendar, ChevronRight } from 'lucide-react';

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

const HERO_IMAGE = '/images/Hero/Hero-Artikel.webp';

const ARTICLES = [
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
  {
    id: 'artikel-hipertensi',
    title: 'Kenali Gejala Hipertensi dan Cara Mencegahnya Sejak Dini',
    category: 'Penyakit Umum',
    excerpt: 'Tekanan darah tinggi sering disebut "silent killer". Ketahui gejala awal dan strategi pencegahan yang efektif.',
    image: '/images/Articles/hipertensi.jpg',
    date: '10 April 2026',
    slug: 'hipertensi-pencegahan',
  },
  {
    id: 'artikel-olahraga-rutin',
    title: 'Manfaat Olahraga Rutin untuk Kesehatan Jantung dan Paru-Paru',
    category: 'Gaya Hidup Sehat',
    excerpt: 'Aktivitas fisik teratur tidak hanya meningkatkan stamina, tetapi juga menjaga kesehatan organ-organ vital tubuh Anda.',
    image: '/images/Articles/olahraga-kesehatan.jpg',
    date: '8 April 2026',
    slug: 'olahraga-kesehatan',
  },
  {
    id: 'artikel-stress-management',
    title: 'Teknik Manajemen Stres Sederhana yang Bisa Anda Lakukan Setiap Hari',
    category: 'Kesehatan Mental',
    excerpt: 'Stres berkepanjangan dapat memicu berbagai penyakit. Temukan cara-cara mudah untuk mengelola stres dengan efektif.',
    image: '/images/Articles/manajemen-stres.jpg',
    date: '5 April 2026',
    slug: 'manajemen-stres',
  },
  {
    id: 'artikel-vaksinasi',
    title: 'Jadwal Lengkap Vaksinasi Anak dan Pentingnya Vaksin untuk Imunitas',
    category: 'Pencegahan',
    excerpt: 'Vaksinasi adalah investasi jangka panjang untuk kesehatan anak. Pelajari jadwal vaksinasi yang direkomendasikan.',
    image: '/images/Articles/vaksinasi-jadwal.jpg',
    date: '2 April 2026',
    slug: 'vaksinasi-jadwal',
  },
] as const;

function ArticleCard({
  article,
  index,
}: {
  article: (typeof ARTICLES)[number];
  index: number;
}) {
  const categoryColors: Record<string, string> = {
    Pencegahan: 'bg-blue-50 text-blue-700',
    Nutrisi: 'bg-green-50 text-green-700',
    'Penyakit Umum': 'bg-amber-50 text-amber-700',
    'Gaya Hidup Sehat': 'bg-emerald-50 text-emerald-700',
    'Kesehatan Mental': 'bg-purple-50 text-purple-700',
  };

  const categoryColor = categoryColors[article.category] || 'bg-slate-50 text-slate-700';

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
          'group/card flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-sm',
          'transition-all duration-300',
          'hover:shadow-lg hover:border-[#00A88E]/60 p-0'
        )}
      >
        {/* Article Thumbnail Section - 16:9 Aspect Ratio */}
        <div className="relative w-full h-56 overflow-hidden rounded-t-2xl shrink-0">
          <Image
            src={article.image}
            alt={article.title}
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
            {article.category}
          </div>

          {/* Article Title */}
          <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-3 leading-snug line-clamp-3">
            {article.title}
          </h3>

          {/* Article Excerpt */}
          <p className="text-sm leading-relaxed text-slate-600 mb-5 line-clamp-2 flex-1">
            {article.excerpt}
          </p>

          {/* Date and Read More Button */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
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
      </Card>
    </motion.li>
  );
}

export default function ArtikelPage() {
  return (
    <div className="min-h-0 bg-white">
      {/* Hero Section */}
      <section
        className="relative isolate flex min-h-[52vh] w-full items-end overflow-hidden md:min-h-[58vh] md:items-center"
        aria-labelledby="artikel-hero-heading"
      >
        <div
          className="absolute inset-0 -z-20 scale-105 bg-slate-900 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-br from-[#003d36]/88 via-[#00A88E]/50 to-slate-900/75"
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-black/25" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-6 md:py-24 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mx-auto max-w-3xl text-center md:mx-0 md:text-left"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium uppercase tracking-[0.16em] text-[#a8f0e4]"
            >
              Alsakha Medica
            </motion.p>
            <motion.h1
              id="artikel-hero-heading"
              variants={fadeUp}
              className="mt-3 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Artikel Kesehatan
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl md:mx-0"
            >
              Informasi kesehatan terpercaya dari tim dokter Alsakha Medica untuk membantu Anda menjalani hidup lebih sehat.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur-sm"
            >
              &ldquo;Edukasi kesehatan adalah investasi terbaik untuk masa depan&rdquo;
            </motion.p>
          </motion.div>
        </div>
      </section>

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
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </ul>
        </div>
      </section>


    </div>
  );
}
