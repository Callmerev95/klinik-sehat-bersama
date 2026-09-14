'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { fadeUp, fadeUpStatic, stagger } from '@/lib/motion';

interface PageHeroProps {
  image: string;
  labelledBy: string;
  heading: string;
  description: string;
  quote: string;
  alignment?: 'left' | 'responsive-center';
  descriptionWidth?: 'narrow' | 'wide';
  quoteSpacing?: 'compact' | 'large';
}

export function PageHero({
  image,
  labelledBy,
  heading,
  description,
  quote,
  alignment = 'left',
  descriptionWidth = 'narrow',
  quoteSpacing = 'compact',
}: PageHeroProps) {
  const centered = alignment === 'responsive-center';
  const descriptionClass = descriptionWidth === 'wide' ? 'max-w-2xl md:mx-0' : 'max-w-xl';
  const quoteClass = quoteSpacing === 'large' ? 'mt-6' : 'mt-4';
  const reduce = useReducedMotion();
  const item = reduce ? fadeUpStatic : fadeUp;

  return (
    <section
      className="relative isolate flex min-h-[52vh] w-full items-end overflow-hidden md:min-h-[58vh] md:items-center"
      aria-labelledby={labelledBy}
    >
      <div
        className="absolute inset-0 -z-20 scale-105 bg-slate-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-br in oklab from-[#003d36]/88 via-primary/50 to-slate-900/75"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-black/25" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-6 md:py-24 lg:px-8">
        <motion.div
          initial={reduce ? false : 'hidden'}
          animate="visible"
          variants={stagger}
          className={centered ? 'mx-auto max-w-3xl text-center md:mx-0 md:text-left' : 'max-w-3xl'}
        >
          <motion.p
            variants={item}
            className="text-sm font-medium uppercase tracking-[0.16em] text-[#a8f0e4]"
          >
            Alsakha Medica
          </motion.p>
          <motion.h1
            id={labelledBy}
            variants={item}
            className="mt-3 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {heading}
          </motion.h1>
          <motion.p
            variants={item}
            className={`${centered ? 'mx-auto mt-5' : 'mt-5'} ${descriptionClass} text-lg leading-relaxed text-white/90 sm:text-xl`}
          >
            {description}
          </motion.p>
          <motion.p
            variants={item}
            className={`${quoteClass} inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur-sm`}
          >
            {quote}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
