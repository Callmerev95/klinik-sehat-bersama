'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '@/components/marketing/PageHero';
import { fadeUp, fadeUpStatic, stagger, ease } from '@/lib/motion';
import {
  Building2,
  HeartHandshake,
  MapPin,
  Microscope,
  ShieldCheck,
  Siren,
  Sparkles,
  Target,
  UserRound,
} from 'lucide-react';

import { cn } from '@/lib/utils';

const CABANG = [
  {
    id: 'cabang-1',
    name: 'Cabang Kota Contoh',
    address: 'Jl. Contoh No. 00, Kelurahan Contoh, Kota Contoh',
  },
  {
    id: 'cabang-2',
    name: 'Cabang Contoh Utara',
    address: 'Jl. Percontohan No. 10, Kec. Contoh Utara, Kab. Contoh',
  },
  {
    id: 'cabang-3',
    name: 'Cabang Contoh Selatan',
    address: 'Jl. Teladan No. 20, Kec. Contoh Selatan, Kab. Contoh',
  },
] as const;

const MISI_POINTS = [
  'Mendorong kesadaran perusahaan, masyarakat dan keluarga untuk hidup sehat.',
  'Memelihara dan meningkatkan pelayanan kesehatan yang bermutu, merata dan terjangkau.',
  'Memelihara dan meningkatkan kesehatan individu, keluarga dan masyarakat beserta lingkungannya.',
] as const;

const KEUNGGULAN = [
  {
    icon: MapPin,
    title: 'Lokasi yang Strategis',
    text: 'Berlokasi di Jl. Contoh No. 00, terletak strategis di pusat Kota Contoh, dekat dengan fasilitas umum dan area publik.',
  },
  {
    icon: HeartHandshake,
    title: 'Pelayanan Utama',
    text: 'Prioritas utama kami adalah memberikan pelayanan terbaik kepada setiap pasien dengan perhatian penuh pada kualitas dan kepuasan pelanggan.',
  },
  {
    icon: Building2,
    title: 'Poli Umum & IGD 24 Jam',
    text: 'Menyediakan Poli Umum dan IGD 24 Jam untuk semua bentuk pasien, baik dengan asuransi maupun tanpa asuransi, dengan penanganan profesional.',
  },
  {
    icon: Siren,
    title: 'Buka 24 Jam Tanpa Henti',
    text: 'Klinik beroperasi 24 jam setiap hari, bahkan pada tanggal merah dan hari libur nasional untuk memastikan akses kesehatan kapan pun dibutuhkan.',
  },
  {
    icon: ShieldCheck,
    title: 'Jaringan Perusahaan Luas',
    text: 'Memiliki hubungan baik dengan berbagai perusahaan di wilayah layanan yang bermanfaat untuk kerjasama dalam pelayanan kesehatan tenaga kerja.',
  },
  {
    icon: Microscope,
    title: 'Satu-satunya Klinik Tersertifikasi',
    text: 'Merupakan klinik tersertifikasi untuk pemeriksaan pelayanan kesehatan tenaga kerja dan SMK3.',
  },
  {
    icon: UserRound,
    title: 'Layanan Kesehatan Kerja Terpadu',
    text: 'Menyediakan pelayanan kesehatan tenaga kerja dari jam 08.00 s.d. 21.00 WITA dengan program yang komprehensif dan profesional.',
  },
  {
    icon: Building2,
    title: 'HomeCare 24 Jam',
    text: 'Layanan kesehatan rumahan siap 24 jam untuk memberikan perawatan langsung di rumah pasien sesuai kebutuhan medis.',
  },
  {
    icon: Target,
    title: 'Kolaborasi Pendidikan',
    text: 'Bekerja sama dengan sekolah kesehatan di wilayah layanan dalam program peningkatan kualitas pendidikan kesehatan.',
  },
  {
    icon: Sparkles,
    title: 'Pengobatan Kombinasi Holistik',
    text: 'Menerapkan pendekatan pengobatan kombinasi yaitu obat kimia dan herbal untuk hasil yang optimal dan efek samping minimal.',
  },
] as const;

const JANJI_PELAYANAN = [
  'Memberikan pelayanan kepada masyarakat tanpa membedakan status dan golongan.',
  'Memberikan pelayanan yang cepat, tepat, akurat, dan profesional.',
  'Selalu bersikap 6S (Senyum, Salam, Sapa, Sopan, Santun, dan Simpati).',
] as const;

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className,
  id,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
      <h2
        id={id}
        className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function TentangKamiPage() {
  const reduce = useReducedMotion();
  const fadeItem = reduce ? fadeUpStatic : fadeUp;
  return (
    <div className="min-h-0 bg-white">
      <PageHero
        image="/images/Hero/Hero-TentangKami.webp"
        labelledBy="tentang-hero-heading"
        heading="Tentang Kami"
        description="Klinik yang mendampingi kesehatan perusahaan dan masyarakat — hangat, profesional, dan terpercaya."
        quote="Setia Dikala Sehat – Peduli Dikala Sakit"
      />

      <section
        className="section-padding bg-linear-to-b from-slate-50 to-white"
        aria-labelledby="visi-misi-heading"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle
            id="visi-misi-heading"
            eyebrow="Arah organisasi"
            title="Visi & Misi"
            subtitle="Komitmen kami untuk perusahaan, masyarakat, dan lingkungan sehat."
            className="mb-12 md:mb-16"
          />

          <motion.div
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2 md:gap-8"
          >
            <motion.article
              variants={fadeItem}
              className={cn(
                'relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm',
                'md:p-10'
              )}
            >
              <div
                className="absolute -right-8 -top-8 size-32 rounded-full bg-primary/[0.07]"
                aria-hidden
              />
              <div className="relative flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="size-6" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">Visi</h3>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate-600">
                Menjadi pelayanan kesehatan terbaik bagi perusahaan dan masyarakat.
              </p>
            </motion.article>

            <motion.article
              variants={fadeItem}
              className={cn(
                'relative overflow-hidden rounded-2xl border border-primary/20 bg-linear-to-br from-primary/6 to-white p-8 shadow-sm',
                'md:p-10'
              )}
            >
              <div
                className="absolute -bottom-10 -left-10 size-40 rounded-full bg-primary/10"
                aria-hidden
              />
              <div className="relative flex size-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-primary/15">
                <HeartHandshake className="size-6" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">Misi</h3>
              <ol className="mt-5 flex list-none flex-col gap-4">
                {MISI_POINTS.map((point, index) => (
                  <li key={point} className="flex gap-3 text-[1.0625rem] leading-relaxed text-slate-600">
                    <span
                      className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white"
                      aria-hidden
                    >
                      {String.fromCharCode(97 + index)}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            </motion.article>
          </motion.div>
        </div>
      </section>

      <section className="section-padding border-t border-slate-100 bg-white" aria-labelledby="sejarah-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeItem}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Perjalanan kami</p>
            <h2
              id="sejarah-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Sejarah singkat & lokasi
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate-600">
              <strong className="font-semibold text-slate-800">Klinik Sehat Bersama</strong> berdiri sejak{' '}
              <strong className="font-semibold text-primary">2018</strong>, berkembang bersama mitra{' '}
              <strong className="font-semibold text-slate-800">jaringan klinik rekanan</strong> untuk melayani
              kebutuhan kesehatan perusahaan dan masyarakat di wilayah layanan dengan standar yang jelas.
            </p>
          </motion.div>

          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {CABANG.map((cab, i) => {
              const isComingSoon = cab.id === 'cabang-3';
              return (
                <motion.li
                  key={cab.id}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: reduce ? 0.01 : 0.45, ease, delay: reduce ? 0 : Math.min(i, 6) * 0.08 }}
                >
                  <article className={cn(
                    'card-hover flex h-full flex-col rounded-2xl p-6 sm:p-7',
                    isComingSoon
                      ? 'relative overflow-hidden border border-primary/30 bg-linear-to-br from-primary/8 via-white to-[#a8f0e4]/5 shadow-md shadow-primary/10'
                      : 'border border-slate-200/90 bg-slate-50/80'
                  )}>
                    {isComingSoon && (
                      <div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/8 blur-2xl" aria-hidden />
                    )}
                    <div className={cn(
                      'flex size-12 items-center justify-center rounded-xl text-white',
                      isComingSoon ? 'bg-linear-to-br from-primary to-primary-deep' : 'bg-primary'
                    )}>
                      <MapPin className="size-6" strokeWidth={2} aria-hidden />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">{cab.name}</h3>
                    {isComingSoon && (
                      <span className="mt-2 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                        Segera Hadir
                      </span>
                    )}
                    <p className={cn(
                      'mt-2 flex-1 text-sm leading-relaxed sm:text-[0.9375rem]',
                      isComingSoon ? 'text-slate-900' : 'text-slate-600'
                    )}>
                      {cab.address}
                    </p>
                  </article>
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeItem}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/pelayanan/"
              className="inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/25 transition-colors duration-200 hover:bg-primary-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
            >
              Lihat Layanan Klinik
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50/90" aria-labelledby="keunggulan-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle
            id="keunggulan-heading"
            eyebrow="Mengapa memilih kami"
            title="Keunggulan klinik"
            className="mb-12 md:mb-14"
          />
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {KEUNGGULAN.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: reduce ? 0.01 : 0.45, ease, delay: reduce ? 0 : Math.min(i, 6) * 0.06 }}
                >
                  <article
                    className={cn(
                      'card-hover flex h-full flex-col rounded-xl border border-slate-200/90 bg-white p-6 sm:p-7'
                    )}
                  >
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5 shrink-0" strokeWidth={2} aria-hidden />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                      {item.text}
                    </p>
                  </article>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="janji-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle
            id="janji-heading"
            eyebrow="Komitmen kepada pasien"
            title="Janji pelayanan"
            subtitle="Standar sikap yang kami junjung tinggi setiap hari."
            className="mb-12 md:mb-14"
          />

          <motion.ul
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="mx-auto grid max-w-4xl gap-4 sm:gap-5"
            role="list"
          >
            {JANJI_PELAYANAN.map((item) => (
              <motion.li
                key={item}
                variants={fadeItem}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-linear-to-r from-slate-50/80 to-white p-5 sm:p-6"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="size-5" strokeWidth={2} aria-hidden />
                </div>
                <p className="text-[0.9375rem] leading-relaxed text-slate-700">{item}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </div>
  );
}
