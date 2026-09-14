'use client';

import { useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { fadeUp, fadeUpStatic, stagger } from '@/lib/motion';

const HERO_IMAGE = '/images/Hero/Hero-Home.webp';

const HERO_COPY = {
  eyebrow: 'Klinik kesehatan & Medical Center terpercaya di Sumbawa',
  title: 'Alsakha Medica',
  subheadline:
    '"Setia Dikala Sehat - Peduli Dikala Sakit"',
  primaryCta: 'Lihat Layanan Unggulan',
} as const;

const LAYANAN_UNGGULAN_SECTION_ID = 'layanan-unggulan';

export function HeroSection() {
  const scrollToLayananUnggulan = useCallback(() => {
    const el = document.getElementById(LAYANAN_UNGGULAN_SECTION_ID);
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }, []);

  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 -z-20 scale-105 bg-slate-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        aria-hidden
      />

      <div
        className="absolute inset-0 -z-10 bg-linear-to-br in oklab from-[#003d36]/90 via-primary/55 to-black/72"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-black/30" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,transparent_0%,rgba(0,0,0,0.5)_100%)]"
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-16 text-center sm:px-8 md:max-w-5xl md:px-10"
        variants={stagger}
        initial={reduce ? false : 'hidden'}
        animate="visible"
      >
        <motion.div variants={reduce ? fadeUpStatic : fadeUp} className="mb-5 md:mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white/95 shadow-sm backdrop-blur-md sm:text-sm">
            <Stethoscope
              className="size-3.5 shrink-0 text-[#7fe8d9] sm:size-4"
              strokeWidth={1.5}
              aria-hidden
            />
            {HERO_COPY.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          id="hero-heading"
          variants={reduce ? fadeUpStatic : fadeUp}
          className="mb-4 max-w-[18ch] text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {HERO_COPY.title}
        </motion.h1>

        <motion.p
          variants={reduce ? fadeUpStatic : fadeUp}
          className="mb-10 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg md:text-xl"
        >
          {HERO_COPY.subheadline}
        </motion.p>

        <motion.div
          variants={reduce ? fadeUpStatic : fadeUp}
          className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
        >
          <Button
            type="button"
            onClick={scrollToLayananUnggulan}
            className="h-auto min-h-12 w-full rounded-xl border-0 bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/25 transition-[transform,box-shadow] hover:bg-primary-deep hover:shadow-xl hover:shadow-black/20 sm:w-auto sm:min-w-55"
          >
            {HERO_COPY.primaryCta}
          </Button>
        </motion.div>
      </motion.div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-1 h-24 bg-linear-to-t from-black/40 to-transparent"
        aria-hidden
      />
    </section>
  );
}
