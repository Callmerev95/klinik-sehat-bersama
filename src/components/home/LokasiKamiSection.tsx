import Link from 'next/link';
import { ChevronRight, Clock, Mail, MapPin, Phone } from 'lucide-react';

import { cn } from '@/lib/utils';

/**
 * Embed peta cabang utama (Kota Sumbawa).
 * Ganti dengan kode embed resmi Google Maps (Share → Embed) bila sudah tersedia.
 */
const MAP_EMBED_SRC =
  'https://maps.google.com/maps?q=Kota+Contoh&hl=id&z=13&output=embed';

/** Samakan dengan Navbar / Footer saat nomor & email final. */
const PHONE_DISPLAY = '+62 800-0000-0000';
const PHONE_HREF = 'tel:+6280000000000';
const EMAIL = 'halo@kliniksehatbersama.example.id';

const CABANG_UTAMA_LINE =
  'Jl. Contoh No. 00, Kota Sumbawa — Klinik Sehat Bersama';

export function LokasiKamiSection() {
  return (
    <section
      id="lokasi-kami"
      className="section-padding scroll-mt-20 border-t border-slate-100 bg-linear-to-b from-slate-50/80 to-white sm:scroll-mt-24"
      aria-labelledby="lokasi-kami-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="lokasi-kami-heading"
            className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2rem]"
          >
            Lokasi &amp; Kontak
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">
            Temukan lokasi kami dan hubungi tim Sehat Bersama dengan mudah. Kami siap melayani Anda
            kapan saja.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-2 lg:items-stretch lg:gap-10 xl:gap-12">
          {/* Peta */}
          <div className="flex min-h-0 flex-col">
            <div className="mb-3 flex shrink-0 items-start gap-3 text-left sm:mb-3.5">
              <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="size-4.5" strokeWidth={1.5} aria-hidden />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary">
                  Cabang utama
                </p>
                <p className="mt-1 text-sm font-medium leading-snug text-slate-800 sm:text-[0.9375rem]">
                  {CABANG_UTAMA_LINE}
                </p>
              </div>
            </div>
            <div
              className={cn(
                'flex min-h-55 flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_3px_rgb(15_23_42/0.06)]',
                'sm:min-h-60 lg:min-h-0'
              )}
            >
              <div
                className={cn(
                  'relative w-full flex-1 overflow-hidden',
                  'min-h-55 max-h-[min(19rem,62vw)] sm:min-h-60 sm:max-h-[min(21rem,56vw)]',
                  'lg:max-h-none lg:min-h-0 lg:h-full'
                )}
              >
                <iframe
                  title="Peta Google Maps — Klinik Sehat Bersama, Kota Sumbawa"
                  src={MAP_EMBED_SRC}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Kontak & jam */}
          <aside
            className="flex h-full min-h-0 flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_3px_rgb(15_23_42/0.06)] sm:p-7"
            aria-labelledby="lokasi-kontak-heading"
          >
            <div className="border-b border-slate-100 pb-5">
              <h3
                id="lokasi-kontak-heading"
                className="text-lg font-semibold tracking-tight text-slate-900"
              >
                Kontak
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                Cabang utama — telepon, dan email.
              </p>
            </div>

            <ul className="mt-5 flex flex-col gap-4 text-sm sm:text-[0.9375rem]" role="list">
              <li>
                <a
                  href={PHONE_HREF}
                  className="group flex gap-3 rounded-xl py-0.5 text-slate-700 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-4" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.6875rem] font-semibold uppercase tracking-wide text-slate-500">
                      Telepon
                    </span>
                    <span className="mt-0.5 font-medium text-slate-900">{PHONE_DISPLAY}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex gap-3 rounded-xl py-0.5 text-slate-700 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-4" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.6875rem] font-semibold uppercase tracking-wide text-slate-500">
                      Email
                    </span>
                    <span className="mt-0.5 break-all font-medium text-slate-900">{EMAIL}</span>
                  </span>
                </a>
              </li>
              <li className="border-t border-slate-100 pt-4">
                <div className="flex gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="size-4" strokeWidth={1.5} aria-hidden />
                  </span>
                  <div className="min-w-0 space-y-2.5 text-slate-600">
                    <div className="rounded-xl border border-primary/20 bg-primary/10 px-3 py-2">
                      <p className="text-[0.6875rem] font-bold uppercase tracking-wide text-primary">
                        IGD &amp; Emergency
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-slate-800">24 jam</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-auto border-t border-slate-100 pt-5">
              <Link
                href="/tentang-kami/#sejarah-heading"
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl',
                  'text-base font-semibold text-primary',
                  'border border-primary/30 bg-primary/5',
                  'transition-[color,background-color,border-color,transform] duration-200',
                  'hover:border-primary/60 hover:bg-primary/10 hover:-translate-y-0.5'
                )}
              >
                Lihat Semua Cabang
                <ChevronRight className="w-5 h-5" aria-hidden />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
