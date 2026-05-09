'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const HERO_IMAGE = '/images/Hero/Hero-TentangKami.webp';

const CABANG = [
  {
    id: 'cabang-1',
    name: 'Cabang Sumbawa Besar',
    address: 'Jl. Garuda No.138, Labuhan Badas, Sumbawa Besar',
  },
  {
    id: 'cabang-2',
    name: 'Cabang Maluk',
    address: 'Jl. Batu Hijau Pasir Putih No.46, Kec. Maluk, Kab. Sumbawa Barat',
  },
  {
    id: 'cabang-3',
    name: 'Cabang Lunyuk',
    address: 'Desa Padasuka RT.002/RW.001, Kec. Lunyuk, Kab. Sumbawa',
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
    text: 'Berlokasi di Jl. Garuda No. 138 Desa Labuhan Sumbawa, terletak strategis di pusat pasar Labuhan Sumbawa, dekat Masjid Jami Nurul Maqbullah, dan area pariwisata Jempol.',
  },
  {
    icon: HeartHandshake,
    title: 'Service Pelayanan Utama',
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
    text: 'Memiliki hubungan baik dengan berbagai perusahaan di Kabupaten Sumbawa yang bermanfaat untuk kerjasama dalam pelayanan kesehatan tenaga kerja.',
  },
  {
    icon: Microscope,
    title: 'Satu-satunya Klinik Tersertifikasi',
    text: 'Merupakan satu-satunya klinik di Kabupaten Sumbawa yang memiliki SKP KEMNAKER untuk pemeriksaan pelayanan kesehatan tenaga kerja dan SMK3.',
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
    text: 'Bekerja sama dengan Sekolah Kesehatan di Kabupaten Sumbawa dalam program peningkatan kualitas pendidikan kesehatan.',
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
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#00A88E]">{eyebrow}</p>
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
  return (
    <div className="min-h-0 bg-white">
      <section
        className="relative isolate flex min-h-[52vh] w-full items-end overflow-hidden md:min-h-[58vh] md:items-center"
        aria-labelledby="tentang-hero-heading"
      >
        <div
          className="absolute inset-0 -z-20 scale-105 bg-slate-900 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-br from-[#003d36]/88 via-[#00A88E]/50 to-slate-900/75"
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-black/25" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-6 md:py-24 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium uppercase tracking-[0.16em] text-[#a8f0e4]"
            >
              Alsakha Medica
            </motion.p>
            <motion.h1
              id="tentang-hero-heading"
              variants={fadeUp}
              className="mt-3 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Tentang Kami
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl"
            >
              Klinik yang mendampingi kesehatan perusahaan dan masyarakat — hangat, profesional, dan
              terpercaya.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur-sm"
            >
              &ldquo;Setia Dikala Sehat – Peduli Dikala Sakit&rdquo;
            </motion.p>
          </motion.div>
        </div>
      </section>

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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2 md:gap-8"
          >
            <motion.article
              variants={fadeUp}
              className={cn(
                'relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm',
                'md:p-10'
              )}
            >
              <div
                className="absolute -right-8 -top-8 size-32 rounded-full bg-[#00A88E]/[0.07]"
                aria-hidden
              />
              <div className="relative flex size-12 items-center justify-center rounded-xl bg-[#00A88E]/10 text-[#00A88E]">
                <Target className="size-6" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">Visi</h3>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate-600">
                Menjadi pelayanan kesehatan terbaik bagi perusahaan dan masyarakat.
              </p>
            </motion.article>

            <motion.article
              variants={fadeUp}
              className={cn(
                'relative overflow-hidden rounded-2xl border border-[#00A88E]/20 bg-linear-to-br from-[#00A88E]/6 to-white p-8 shadow-sm',
                'md:p-10'
              )}
            >
              <div
                className="absolute -bottom-10 -left-10 size-40 rounded-full bg-[#00A88E]/10"
                aria-hidden
              />
              <div className="relative flex size-12 items-center justify-center rounded-xl bg-white text-[#00A88E] shadow-sm ring-1 ring-[#00A88E]/15">
                <HeartHandshake className="size-6" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">Misi</h3>
              <ol className="mt-5 flex list-none flex-col gap-4">
                {MISI_POINTS.map((point, index) => (
                  <li key={point} className="flex gap-3 text-[1.0625rem] leading-relaxed text-slate-600">
                    <span
                      className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#00A88E] text-xs font-bold text-white"
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#00A88E]">Perjalanan kami</p>
            <h2
              id="sejarah-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Sejarah singkat & lokasi
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate-600">
              <strong className="font-semibold text-slate-800">Klinik Alsakha Medica</strong> berdiri sejak{' '}
              <strong className="font-semibold text-[#00A88E]">2018</strong>, berkembang bersama mitra{' '}
              <strong className="font-semibold text-slate-800">PT. Klinik Indosehat 2003</strong> untuk melayani
              kebutuhan kesehatan perusahaan dan masyarakat di wilayah Sumbawa dengan standar yang jelas.
            </p>
          </motion.div>

          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {CABANG.map((cab, i) => {
              const isComingSoon = cab.id === 'cabang-3';
              return (
                <motion.li
                  key={cab.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, ease, delay: i * 0.08 }}
                >
                  <article className={cn(
                    'card-hover flex h-full flex-col rounded-2xl p-6 sm:p-7',
                    isComingSoon
                      ? 'relative overflow-hidden border border-[#00A88E]/30 bg-linear-to-br from-[#00A88E]/8 via-white to-[#a8f0e4]/5 shadow-md shadow-[#00A88E]/10'
                      : 'border border-slate-200/90 bg-slate-50/80'
                  )}>
                    {isComingSoon && (
                      <div className="absolute -right-12 -top-12 size-40 rounded-full bg-[#00A88E]/8 blur-2xl" aria-hidden />
                    )}
                    <div className={cn(
                      'flex size-12 items-center justify-center rounded-xl text-white',
                      isComingSoon ? 'bg-linear-to-br from-[#00A88E] to-[#008C76]' : 'bg-[#00A88E]'
                    )}>
                      <MapPin className="size-6" strokeWidth={2} aria-hidden />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">{cab.name}</h3>
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/pelayanan/"
              className="inline-flex rounded-xl bg-[#00A88E] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#00A88E]/25 transition-colors duration-200 hover:bg-[#008C76]"
            >
              Lihat layanan
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, ease, delay: i * 0.06 }}
                >
                  <article
                    className={cn(
                      'card-hover flex h-full flex-col rounded-xl border border-slate-200/90 bg-white p-6 sm:p-7'
                    )}
                  >
                    <div className="flex size-11 items-center justify-center rounded-xl bg-[#00A88E]/10 text-[#00A88E]">
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="mx-auto grid max-w-4xl gap-4 sm:gap-5"
            role="list"
          >
            {JANJI_PELAYANAN.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-linear-to-r from-slate-50/80 to-white p-5 sm:p-6"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#00A88E]/10 text-[#00A88E]">
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
