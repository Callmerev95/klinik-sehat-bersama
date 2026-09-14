'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { whatsapp } from '@/lib/site';
import { fadeUpStatic } from '@/lib/motion';
import type { Partner, PartnerDetailData } from '@/data/partners';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.08,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

interface PartnerDetailContentProps {
  partner: Partner & { detail: PartnerDetailData };
}

export function PartnerDetailContent({ partner }: PartnerDetailContentProps) {
  const reduce = useReducedMotion();
  const item = reduce ? fadeUpStatic : fadeUp;
  const container = reduce ? fadeUpStatic : containerVariants;
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative section-padding flex items-center justify-center border-b border-slate-100 bg-linear-to-b from-slate-50 to-white"
      >
        <div className="max-w-4xl px-4 text-center sm:px-6">
          {/* Partner Logo */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: reduce ? 0.01 : 0.6 }}
            className="mb-8 flex justify-center sm:mb-10"
          >
            <div className="relative size-32 overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-black/10 sm:size-40">
              <Image
                src={partner.detail.logo}
                alt={partner.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Category Badge */}
          <motion.div variants={item} initial={reduce ? false : 'hidden'} animate="visible">
            <span className="inline-block rounded-full bg-[#a8f0e4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary sm:text-sm">
              {partner.detail.categoryLabel}
            </span>
          </motion.div>

          {/* Partner Name */}
          <motion.h1
            variants={item}
            initial={reduce ? false : 'hidden'}
            animate="visible"
            custom={1}
            className="mt-6 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:mt-8 sm:text-5xl md:text-6xl"
          >
            {partner.name}
          </motion.h1>

          {/* Short Description */}
          <motion.p
            variants={item}
            initial={reduce ? false : 'hidden'}
            animate="visible"
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 sm:mt-8 sm:text-xl"
          >
            {partner.detail.shortDescription}
          </motion.p>

          {/* Cooperation Badge */}
          <motion.div
            variants={item}
            initial={reduce ? false : 'hidden'}
            animate="visible"
            custom={3}
            className="mt-8 flex flex-col items-center gap-2 sm:mt-10 sm:gap-3"
          >
            <p className="text-sm font-medium text-slate-500 sm:text-base">
              Bermitra sejak <span className="font-semibold text-primary">{partner.since}</span>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* COOPERATION DESCRIPTION SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="section-padding border-b border-slate-100"
      >
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <motion.div
            variants={item}
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 sm:mb-12"
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tentang Kerjasama
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
          </motion.div>

          {/* Full Description */}
          <motion.p
            variants={item}
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            className="text-pretty text-lg leading-relaxed text-slate-600 sm:text-lg"
          >
            {partner.detail.fullDescription}
          </motion.p>

          {/* Cooperation Fields & Benefits */}
          <motion.div
            variants={container}
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6"
          >
            <div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900">Bidang Kerjasama</h3>
              <ul className="space-y-3">
                {partner.detail.cooperationFields.map((field, i) => (
                  <motion.li key={i} variants={item} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1 inline-block size-2 shrink-0 rounded-full bg-primary" />
                    <span>{field}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900">Manfaat</h3>
              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Untuk Klinik
                  </p>
                  <ul className="space-y-2">
                    {partner.detail.benefitsForClinic.map((benefit, i) => (
                      <li key={i} className="text-sm leading-relaxed text-slate-600">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Untuk Pasien
                  </p>
                  <ul className="space-y-2">
                    {partner.detail.benefitsForPatients.map((benefit, i) => (
                      <li key={i} className="text-sm leading-relaxed text-slate-600">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>



      {/* CTA SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="section-padding bg-linear-to-b from-white to-slate-50"
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            variants={item}
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tertarik untuk Berkerjasama?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Hubungi kami untuk informasi lebih lanjut tentang program dan layanan kami.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={container}
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <motion.a
              variants={item}
              href={whatsapp('Halo, saya tertarik untuk berkerjasama dengan Klinik Sehat Bersama')}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-medium text-white transition-[color,background-color,transform] duration-200 hover:bg-primary-deep hover:scale-105 active:scale-0.96 sm:px-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.div variants={item}>
              <Link
                href="/partner"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-300 px-8 py-3 font-medium text-slate-700 transition-[color,border-color] duration-200 hover:border-primary hover:text-primary"
              >
                Lihat Semua Mitra
                <ChevronRight className="size-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
