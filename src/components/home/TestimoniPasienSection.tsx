import type { ReactNode } from 'react';
import Image from 'next/image';
import { Quote, Star, StarHalf } from 'lucide-react';

import { cn } from '@/lib/utils';

export type TestimoniItem = {
  id: string;
  nameAge: string;
  quote: string;
  rating: 4.5 | 5;
  imageSrc: string;
};

const DEFAULT_TESTIMONI: TestimoniItem[] = [
  {
    id: 'rina',
    nameAge: 'Ibu Rina, 42 tahun',
    quote:
      'Dokter dan perawat menjelaskan dengan sabar. Suasana klinik tenang sehingga saya tidak merasa gugup saat kontrol berkala.',
    rating: 5,
    imageSrc:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'agus',
    nameAge: 'Bapak Agus, 55 tahun',
    quote:
      'Ruang tunggu rapi dan antrian terasa adil. Saya merasa diperlakukan hormat dari pendaftaran hingga selesai pemeriksaan.',
    rating: 5,
    imageSrc:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'sari',
    nameAge: 'Ibu Sari, 38 tahun',
    quote:
      'Medical check-up berjalan terarah; hasilnya dijelaskan tanpa istilah yang membingungkan. Sangat cocok untuk keluarga.',
    rating: 4.5,
    imageSrc:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
];

function StarRating({ value, className }: { value: 4.5 | 5; className?: string }) {
  const stars: ReactNode[] = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(
        <Star
          key={i}
          className="size-4 shrink-0 fill-amber-400 text-amber-400 sm:size-4.5"
          strokeWidth={0}
          aria-hidden
        />
      );
    } else if (value >= i - 0.5) {
      stars.push(
        <StarHalf
          key={i}
          className="size-4 shrink-0 fill-amber-400 text-amber-400 sm:size-4.5"
          strokeWidth={0}
          aria-hidden
        />
      );
    } else {
      stars.push(
        <Star
          key={i}
          className="size-4 shrink-0 fill-slate-200 text-slate-200 sm:size-4.5"
          strokeWidth={0}
          aria-hidden
        />
      );
    }
  }
  return (
    <div
      className={cn('flex flex-wrap items-center justify-center gap-0.5', className)}
      role="img"
      aria-label={`Rating ${value === 5 ? '5,0' : '4,5'} dari 5`}
    >
      {stars}
      <span className="ml-2 text-sm font-semibold tabular-nums text-slate-600">
        {value === 5 ? '5.0' : '4.5'}
      </span>
    </div>
  );
}

function TestimoniCard({ item }: { item: TestimoniItem }) {
  return (
    <article
      className={cn(
        'card-hover flex h-full min-h-72 flex-col items-center rounded-3xl border border-slate-200/80 bg-white px-7 py-10 text-center',
        'shadow-[0_1px_3px_rgb(15_23_42/0.06)]',
        'transition-[border-color] duration-300 hover:border-[#00A88E]/20'
      )}
    >
      <div className="relative size-18 shrink-0 overflow-hidden rounded-full ring-[3px] ring-[#00A88E]/15 ring-offset-[3px] ring-offset-white sm:size-19">
        <Image
          src={item.imageSrc}
          alt={`Foto ilustrasi: ${item.nameAge}`}
          fill
          sizes="(max-width: 768px) 72px, 76px"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <p className="mt-6 font-semibold tracking-tight text-slate-900 sm:text-lg">{item.nameAge}</p>
      <StarRating value={item.rating} className="mt-3 justify-center" />
      <Quote className="mt-6 size-7 text-[#00A88E]/20 sm:size-8" strokeWidth={1.5} aria-hidden />
      <blockquote className="mt-2 flex-1 text-pretty text-[0.9375rem] leading-relaxed text-slate-600 sm:text-base">
        <p>&ldquo;{item.quote}&rdquo;</p>
      </blockquote>
    </article>
  );
}

type TestimoniPasienSectionProps = {
  className?: string;
  items?: TestimoniItem[];
};

/**
 * Desktop: grid 2 kolom (md) → 3 kolom (lg).
 * Mobile: horizontal scroll + snap, tanpa carousel library.
 */
export function TestimoniPasienSection({ className, items = DEFAULT_TESTIMONI }: TestimoniPasienSectionProps) {
  return (
    <section
      id="testimoni-pasien"
      className={cn(
        'section-padding scroll-mt-20 border-t border-slate-100/90 bg-linear-to-b from-white via-slate-50/40 to-white sm:scroll-mt-24',
        className
      )}
      aria-labelledby="testimoni-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00A88E]/90 sm:text-[0.8125rem]">
            Suara pasien
          </p>
          <h2
            id="testimoni-heading"
            className="mt-4 text-balance text-2xl font-bold tracking-tight text-slate-900 sm:mt-5 sm:text-3xl md:text-[2rem]"
          >
            Apa Kata Mereka
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Cerita singkat dari mereka yang telah mempercayakan kesehatan keluarga kepada tim Alsakha Medica
          </p>
        </header>

        {/* Mobile: scroll + snap | md+: grid */}
        <div
          className={cn(
            'mt-14 scroll-smooth motion-reduce:scroll-auto sm:mt-16 lg:mt-20',
            /* area scroll: bleed ke tepi viewport supaya kartu pertama/terakhir punya ruang */
            '-mx-5 max-md:px-5 sm:-mx-6 sm:max-md:px-6',
            'flex max-md:snap-x max-md:snap-mandatory max-md:flex-nowrap max-md:gap-5 max-md:overflow-x-auto max-md:overflow-y-visible max-md:pb-2 max-md:overscroll-x-contain max-md:[scrollbar-width:thin]',
            'md:mx-0 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-12 md:overflow-visible md:px-0 md:snap-none',
            'lg:grid-cols-3 lg:gap-x-12'
          )}
          role="list"
          aria-label="Daftar testimoni pasien"
        >
          {items.map((item) => (
            <div
              key={item.id}
              role="listitem"
              className="max-md:w-[min(19rem,calc(100vw-3.5rem))] max-md:max-w-none max-md:snap-center max-md:shrink-0 md:min-w-0"
            >
              <TestimoniCard item={item} />
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400 md:hidden">
          Geser untuk melihat testimoni lainnya
        </p>
      </div>
    </section>
  );
}
