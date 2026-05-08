'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

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

interface PartnerData {
  id: string;
  name: string;
  logo: string;
  shortDescription: string;
  category: string;
  fullDescription: string;
  cooperationSince: string;
  cooperationFields: string[];
  benefitsForClinic: string[];
  benefitsForPatients: string[];
  documentation: Array<{
    id: string;
    image: string;
    caption: string;
  }>;
}

interface PartnerDetailContentProps {
  partner: PartnerData;
}

export function PartnerDetailContent({ partner }: PartnerDetailContentProps) {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center sm:mb-10"
          >
            <div className="relative size-32 overflow-hidden rounded-2xl bg-slate-100 shadow-lg sm:size-40">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Category Badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-block rounded-full bg-[#a8f0e4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#00A88E] sm:text-sm">
              {partner.category}
            </span>
          </motion.div>

          {/* Partner Name */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-6 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:mt-8 sm:text-5xl md:text-6xl"
          >
            {partner.name}
          </motion.h1>

          {/* Short Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 sm:mt-8 sm:text-xl"
          >
            {partner.shortDescription}
          </motion.p>

          {/* Cooperation Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-8 flex flex-col items-center gap-2 sm:mt-10 sm:gap-3"
          >
            <p className="text-sm font-medium text-slate-500 sm:text-base">
              Bermitra sejak <span className="font-semibold text-[#00A88E]">{partner.cooperationSince}</span>
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
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 sm:mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tentang Kerjasama
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-[#00A88E]" />
          </motion.div>

          {/* Full Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-pretty text-lg leading-relaxed text-slate-600 sm:text-lg"
          >
            {partner.fullDescription}
          </motion.p>

          {/* Cooperation Fields & Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6"
          >
            <div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900">Bidang Kerjasama</h3>
              <ul className="space-y-3">
                {partner.cooperationFields.map((field, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1 inline-block size-2 shrink-0 rounded-full bg-[#00A88E]" />
                    <span>{field}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900">Manfaat</h3>
              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#00A88E]">
                    Untuk Klinik
                  </p>
                  <ul className="space-y-2">
                    {partner.benefitsForClinic.map((benefit, i) => (
                      <li key={i} className="text-sm leading-relaxed text-slate-600">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#00A88E]">
                    Untuk Pasien
                  </p>
                  <ul className="space-y-2">
                    {partner.benefitsForPatients.map((benefit, i) => (
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
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tertarik untuk Berkerjasama?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Hubungi kami untuk informasi lebih lanjut tentang program dan layanan kami.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <motion.a
              variants={fadeUp}
              href="https://wa.me/628xxxxxxxxxx?text=Halo%2C%20saya%20tertarik%20untuk%20berkerjasama%20dengan%20Klinik%20Alsakha%20Medica"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#00A88E] px-8 py-3.5 font-medium text-white transition-all duration-200 hover:bg-[#009076] hover:scale-105 sm:px-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.div variants={fadeUp}>
              <Link
                href="/partner"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-300 px-8 py-3 font-medium text-slate-700 transition-all duration-200 hover:border-[#00A88E] hover:text-[#00A88E]"
              >
                Lihat Semua Mitra
                <ChevronRight className="size-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
