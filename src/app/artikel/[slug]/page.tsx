import { notFound } from 'next/navigation';
import type { ComponentType } from 'react';
import type { MDXComponents } from 'mdx/types';
import { whatsapp } from '@/lib/site';
import { ARTICLES, getArticle } from '@/data/articles';
import { articleMDXComponents } from './_components/article-mdx';

import * as Hantavirus from '@/content/artikel/hantavirus-penyakit-langka-dari-tikus.mdx';
import * as Mcu from '@/content/artikel/pentingnya-medical-check-up.mdx';
import * as MakananSehat from '@/content/artikel/10-makanan-sehat.mdx';
import * as Hipertensi from '@/content/artikel/kenali-hipertensi.mdx';
import * as Olahraga from '@/content/artikel/olahraga-kesehatan.mdx';
import * as ManajemenStres from '@/content/artikel/manajemen-stres.mdx';
import * as Vaksinasi from '@/content/artikel/vaksinasi-jadwal.mdx';

const CONTENT: Record<string, ComponentType<{ components?: MDXComponents }>> = {
  'hantavirus-penyakit-langka-dari-tikus': Hantavirus.default,
  'pentingnya-medical-check-up': Mcu.default,
  'makanan-sehat-harian': MakananSehat.default,
  'hipertensi-pencegahan': Hipertensi.default,
  'olahraga-kesehatan': Olahraga.default,
  'manajemen-stres': ManajemenStres.default,
  'vaksinasi-jadwal': Vaksinasi.default,
};

interface ArtikelDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ArtikelDetailPageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: 'Artikel Tidak Ditemukan - Alsakha Medica' };
  }

  return {
    title: `${article.meta.title} - Artikel Alsakha Medica`,
    description: article.excerpt,
  };
}

export default async function ArtikelDetailPage({ params }: ArtikelDetailPageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  const Content = CONTENT[slug];

  if (!article || !Content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[50vh] w-full items-end overflow-hidden md:min-h-[55vh] bg-slate-900">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#003d36]/90 via-[#00A88E]/60 to-slate-900/80" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#00A88E]/20 text-[#00A88E]">
                {article.meta.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
              {article.meta.title}
            </h1>
            <p className="text-lg text-slate-200">{article.meta.displayDate}</p>
          </div>
        </div>
      </section>

      {/* Konten Artikel */}
      <article className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <Content components={articleMDXComponents} />
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-[#003d36] to-[#00A88E] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Konsultasi dengan Dokter Profesional
          </h3>
          <p className="text-lg text-slate-100 mb-8">
            Dapatkan saran medis langsung dari tim dokter berpengalaman kami melalui WhatsApp
          </p>
          <a
            href={whatsapp('Halo Alsakha Medika, saya ingin berkonsultasi')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#003d36] bg-white hover:bg-slate-50 transition-colors duration-200"
          >
            <span>💬</span>
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
