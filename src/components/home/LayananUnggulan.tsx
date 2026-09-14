import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  BedDouble,
  Microscope,
  ScanLine,
  Siren,
  Stethoscope,
} from 'lucide-react';

import { cn } from '@/lib/utils';

const MEDICAL_CHECK_UP_DESCRIPTION =
  'Paket pemeriksaan kesehatan lengkap untuk skrining berkala — penunjang disesuaikan standar klinik, dengan penawaran harga kompetitif.';

export type LayananUnggulanItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  featured?: boolean;
  badge?: string;
};

const DEFAULT_LAYANAN: LayananUnggulanItem[] = [
  {
    id: 'medical-check-up',
    icon: Activity,
    title: 'Medical Check-Up',
    description: MEDICAL_CHECK_UP_DESCRIPTION,
    href: '/pelayanan/',
    featured: true,
    badge: 'Best Price',
  },
  {
    id: 'pemeriksaan-umum',
    icon: Stethoscope,
    title: 'Pemeriksaan Umum',
    description:
      'Konsultasi dan pemeriksaan dokter umum untuk keluhan harian, pengobatan dasar, serta rujukan bila memerlukan penanganan lebih lanjut.',
    href: '/pelayanan/',
  },
  {
    id: 'igd',
    icon: Siren,
    title: 'IGD 24 Jam & Emergency',
    description:
      'Unit gawat darurat siaga 24 jam untuk kegawatan medis, penanganan pertama yang cepat, dan koordinasi tindak lanjut yang aman.',
    href: '/pelayanan/',
  },
  {
    id: 'laboratorium',
    icon: Microscope,
    title: 'Laboratorium',
    description:
      'Pemeriksaan darah, urine, dan tes laboratorium lain dengan alur pre-analitik terkontrol serta hasil yang dapat dipertanggungjawabkan secara klinis.',
    href: '/pelayanan/',
  },
  {
    id: 'usg',
    icon: ScanLine,
    title: 'USG',
    description:
      'Layanan ultrasonografi (USG) untuk penunjang diagnosis non-invasif sesuai indikasi medis dan rujukan dokter.',
    href: '/pelayanan/',
  },
  {
    id: 'rawat-inap',
    icon: BedDouble,
    title: 'Rawat Inap',
    description:
      'Perawatan dengan observasi tenaga medis di fasilitas rawat inap untuk kondisi yang membutuhkan pemantauan dan terapi lebih intensif.',
    href: '/pelayanan/',
  },
];

const selengkapnyaButtonClass = cn(
  'mt-6 inline-flex min-h-6 items-center gap-1.5 rounded-lg px-2 py-2 -mx-2 text-sm font-semibold',
  'text-primary hover:text-primary-deep transition-colors',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50'
);

/** Kartu Medical Check-Up: highlight premium (badge + ribbon), tombol tetap primary teal. */
function MedicalCheckUpCard({ item }: { item: LayananUnggulanItem }) {
  const Icon = item.icon;
  const href = item.href ?? '/pelayanan/';

  return (
    <li className="h-full">
      <article
        className={cn(
          'card-hover relative flex h-full flex-col overflow-visible rounded-xl p-6 sm:p-7',
          'border-2 border-amber-300/70 bg-linear-to-br from-white via-amber-50/50 to-orange-50/40',
          'shadow-lg shadow-amber-900/10 ring-1 ring-amber-400/25',
          'hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/20'
        )}
      >
        {/*
          Ribbon pojok kanan atas: area clip lebih besar + pita lebar; teks di tengah sumbu pita (flex)
          supaya "PENAWARAN ISTIMEWA" utuh dan terbaca.
        */}
        <div
          className="pointer-events-none absolute right-0 top-0 z-1 h-27 w-27 overflow-hidden rounded-tr-xl sm:h-29 sm:w-29"
          aria-hidden
        >
          <div
            className={cn(
              'absolute flex h-8 w-62 items-center justify-center sm:h-9 sm:w-68',
              'bg-linear-to-r from-orange-500 via-orange-600 to-red-600 shadow-md',
              'origin-center',
              'right-[-5.15rem] top-[2.35rem] rotate-45',
              'sm:right-20 sm:top-[2.55rem]'
            )}
          >
            <span className="whitespace-nowrap px-5 text-center text-[10px] font-extrabold uppercase leading-none tracking-wide text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] sm:px-6 sm:text-xs sm:tracking-wider">
              Penawaran Istimewa
            </span>
          </div>
        </div>

        <div className="relative z-2 pr-11 sm:pr-14">
          <div className="mb-4">
            <span
              className={cn(
                'inline-flex rounded-lg bg-linear-to-r from-red-600 via-orange-500 to-amber-500',
                'px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white',
                'shadow-md shadow-orange-900/25 ring-2 ring-amber-100/90'
              )}
            >
              Best Price
            </span>
          </div>

          <div
            className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
            aria-hidden
          >
            <Icon className="size-6 shrink-0" strokeWidth={2} />
          </div>

          <h3 className="text-lg font-semibold leading-snug tracking-tight text-slate-900">
            {item.title}
          </h3>
          <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-slate-600">
            {MEDICAL_CHECK_UP_DESCRIPTION}
          </p>

          <Link
            href={href}
            aria-label={`Selengkapnya tentang ${item.title}`}
            className={selengkapnyaButtonClass}
          >
            Selengkapnya
            <span aria-hidden className="text-base leading-none">→</span>
          </Link>
        </div>
      </article>
    </li>
  );
}

export type LayananUnggulanProps = {
  className?: string;
  items?: LayananUnggulanItem[];
};

export function LayananUnggulan({ className, items = DEFAULT_LAYANAN }: LayananUnggulanProps) {
  return (
    <section
      id="layanan-unggulan"
      className={cn(
        'section-padding scroll-mt-20 bg-slate-50/80 sm:scroll-mt-24',
        className
      )}
      aria-labelledby="layanan-unggulan-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <h2
            id="layanan-unggulan-heading"
            className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          >
            Layanan Unggulan Kami
          </h2>
          <p className="mt-3 text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Layanan inti Klinik Alsakha Medica — profesional, transparan, dan siap mendampingi Anda
            dari pemeriksaan rutin hingga penanganan darurat.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {items.map((item) => {
            if (item.id === 'medical-check-up') {
              return <MedicalCheckUpCard key={item.id} item={item} />;
            }

            const Icon = item.icon;
            const href = item.href ?? '/pelayanan/';
            return (
              <li key={item.id} className="h-full">
                <article
                  className={cn(
                    'card-hover flex h-full flex-col rounded-xl border border-slate-200/90 bg-white p-6 sm:p-7'
                  )}
                >
                  <div
                    className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden
                  >
                    <Icon className="size-6 shrink-0" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                  <Link
                    href={href}
                    aria-label={`Selengkapnya tentang ${item.title}`}
                    className={selengkapnyaButtonClass}
                  >
                    Selengkapnya
                    <span aria-hidden className="text-base leading-none">→</span>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default LayananUnggulan;
