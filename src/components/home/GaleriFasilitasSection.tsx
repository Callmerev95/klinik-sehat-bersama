'use client';

import Image from 'next/image';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ease } from '@/lib/motion';

export type GaleriFasilitasItem = {
  id: string;
  title: string;
  caption: string;
  /** Placeholder sementara — ganti URL saat foto aset klinik siap. */
  src: string;
};

const PLACEHOLDER_SRC = '/images/placeholder/facility.svg';

const DEFAULT_ITEMS: GaleriFasilitasItem[] = [
  {
    id: 'tunggu',
    title: 'Ruang tunggu',
    caption: 'Area tunggu terang dengan alur jelas dan suasana tenang.',
    src: PLACEHOLDER_SRC,
  },
  {
    id: 'periksa',
    title: 'Ruang periksa',
    caption: 'Konsultasi privat dengan pencahayaan alami dan privasi pasien.',
    src: PLACEHOLDER_SRC,
  },
  {
    id: 'laboratorium',
    title: 'Laboratorium',
    caption: 'Penunjang diagnostik dengan tata ruang higienis dan terkontrol.',
    src: PLACEHOLDER_SRC,
  },
  {
    id: 'resepsionis',
    title: 'Front desk',
    caption: 'Pendaftaran dan informasi layanan dalam satu titik koordinasi.',
    src: PLACEHOLDER_SRC,
  },
  {
    id: 'koridor',
    title: 'Koridor & navigasi',
    caption: 'Sirkulasi pasien yang mudah diikuti dan ramah difabilitas.',
    src: PLACEHOLDER_SRC,
  },
  {
    id: 'penunjang',
    title: 'Ruang penunjang',
    caption: 'Zona penunjang medis modern untuk kenyamanan selama pemeriksaan.',
    src: PLACEHOLDER_SRC,
  },
];

type GaleriFasilitasSectionProps = {
  className?: string;
  items?: GaleriFasilitasItem[];
};

export function GaleriFasilitasSection({ className, items = DEFAULT_ITEMS }: GaleriFasilitasSectionProps) {
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const dialogId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerIndexRef = useRef<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const goPrev = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return null;
      return i === 0 ? items.length - 1 : i - 1;
    });
  }, [items.length]);

  const goNext = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return null;
      return i === items.length - 1 ? 0 : i + 1;
    });
  }, [items.length]);

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = '';
      window.clearTimeout(t);
      // Kembalikan fokus ke thumbnail pemicu.
      const i = triggerIndexRef.current;
      if (i !== null) {
        document
          .querySelector<HTMLElement>(`[data-galeri-trigger="${i}"]`)
          ?.focus();
      }
    };
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key === 'ArrowLeft') {
        goPrev();
        return;
      }
      if (e.key === 'ArrowRight') {
        goNext();
        return;
      }
      // ArrowLeft/Right tetap; Tab terjebak di dalam dialog.
      if (e.key !== 'Tab') return;
      const dialog = dialogRef.current;
      if (!dialog) return;
      const items = dialog.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href]'
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex, close, goPrev, goNext]);

  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <section
      id="galeri-fasilitas"
      className={cn(
        'section-padding scroll-mt-20 border-t border-slate-100/90 bg-white sm:scroll-mt-24',
        className
      )}
      aria-labelledby="galeri-fasilitas-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/90 sm:text-[0.8125rem]">
            Lingkungan perawatan
          </p>
          <h2
            id="galeri-fasilitas-heading"
            className="mt-3 text-balance text-2xl font-bold tracking-tight text-slate-900 sm:mt-4 sm:text-3xl md:text-[2rem]"
          >
            Galeri Fasilitas Kami
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            Cuplikan ruang yang kami siapkan — tenang, terang, dan mengutamakan pengalaman pasien tanpa
            mengorbankan kesan profesional.
          </p>
        </header>

        <ul
          className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6"
          role="list"
        >
          {items.map((item, index) => (
            <li key={item.id} className="min-w-0">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease, delay: reduceMotion ? 0 : index * 0.05 }}
              >
                <button
                  type="button"
                  data-galeri-trigger={index}
                  onClick={() => {
                    triggerIndexRef.current = index;
                    setOpenIndex(index);
                  }}
                  className={cn(
                    'card-hover group relative w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50 text-left',
                    'transition-[transform,box-shadow,ring-color] duration-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2'
                  )}
                  aria-haspopup="dialog"
                  aria-label={`Buka gambar besar: ${item.title}`}
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={`Foto fasilitas: ${item.title}. ${item.caption}`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/55 via-slate-900/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4">
                      <p className="text-sm font-semibold tracking-tight text-white drop-shadow-sm sm:text-base">
                        {item.title}
                      </p>
                      <p title={item.caption} className="mt-0.5 line-clamp-2 text-xs leading-snug text-white/85 sm:text-[0.8125rem]">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                  <span
                    className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-lg bg-white/90 text-primary opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 sm:right-3 sm:top-3"
                    aria-hidden
                  >
                    <span className="text-[0.65rem] font-bold uppercase tracking-wide">+</span>
                  </span>
                </button>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence initial={false} mode="wait">
        {active && openIndex !== null && (
          <motion.div
            key="lightbox"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            id={dialogId}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]"
              aria-label="Tutup galeri"
              onClick={close}
            />
            <motion.div
              className="relative z-1 flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40"
              initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-16/10 w-full bg-slate-800 sm:aspect-video">
                <Image
                  src={active.src}
                  alt={`${active.title}: ${active.caption}`}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="border-t border-white/10 bg-slate-900/95 px-4 py-4 sm:px-6 sm:py-5">
                <h3 id={titleId} className="text-lg font-semibold text-white sm:text-xl">
                  {active.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-300 sm:text-[0.9375rem]">
                  {active.caption}
                </p>
              </div>

              <button
                ref={closeBtnRef}
                type="button"
                className={cn(
                  'absolute right-3 top-3 z-3 inline-flex size-10 items-center justify-center rounded-xl',
                  'bg-white/95 text-slate-800 shadow-md transition-colors hover:bg-white',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
                  'sm:right-4 sm:top-4'
                )}
                aria-label="Tutup"
                onClick={close}
              >
                <X className="size-5" strokeWidth={2} aria-hidden />
              </button>

              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    className={cn(
                      'absolute left-2 top-1/2 z-2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-xl',
                      'border border-white/20 bg-slate-900/80 text-white backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-slate-900',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:left-3'
                    )}
                    aria-label="Gambar sebelumnya"
                    onClick={(e) => {
                      e.stopPropagation();
                      goPrev();
                    }}
                  >
                    <ChevronLeft className="size-6" strokeWidth={2} aria-hidden />
                  </button>
                  <button
                    type="button"
                    className={cn(
                      'absolute right-14 top-1/2 z-2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-xl sm:right-16',
                      'border border-white/20 bg-slate-900/80 text-white backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-slate-900',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                    )}
                    aria-label="Gambar berikutnya"
                    onClick={(e) => {
                      e.stopPropagation();
                      goNext();
                    }}
                  >
                    <ChevronRight className="size-6" strokeWidth={2} aria-hidden />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
