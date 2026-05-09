'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
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

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2000&q=80';

const DOCTORS = [
  {
    id: 'dr-nuzul',
    name: 'dr. Nuzul Dio Ika Prasatio',
    specialization: 'Dokter Umum',
    experience: '10+ Tahun Pengalaman',
    description: 'Dokter umum berpengalaman dalam menangani berbagai keluhan kesehatan dengan pendekatan yang tenang dan profesional.',
    image: '/images/Doctors/dr.Nuzul.jpeg',
    phone: '6282123456789',
  },
  {
    id: 'dr-afif',
    name: 'dr. Tri Waliyuddin Afif',
    specialization: 'Dokter Umum',
    experience: '5+ Tahun Pengalaman',
    description: 'Dokter umum berpengalaman dengan fokus utama pada pencegahan penyakit dan promosi kesehatan untuk semua pasien.',
    image: '/images/Doctors/dr.bambang.jpeg',
    phone: '6282123456789',
  },
  {
    id: 'dr-bayu',
    name: 'dr. Bayu Prayoga',
    specialization: 'Dokter Umum',
    experience: '7+ Tahun Pengalaman',
    description: 'Dokter umum yang peduli dengan kesehatan pasien secara menyeluruh, dengan pendekatan hangat dan teliti dalam setiap pemeriksaan.',
    image: '/images/Doctors/dr.siti.jpeg',
    phone: '6282123456789',
  },
  {
    id: 'dr-febry',
    name: 'dr. Febry Ardiansyah',
    specialization: 'Dokter Umum',
    experience: '5+ Tahun Pengalaman',
    description: 'Dokter umum yang berdedikasi dalam memberikan pelayanan kesehatan berkualitas dengan perhatian terhadap detail dan kepuasan pasien.',
    image: '/images/Doctors/dr.febry.jpeg',
    phone: '6282123456789',
  },
] as const;

function DoctorCard({ doctor, index }: { doctor: (typeof DOCTORS)[number]; index: number }) {
  const whatsappLink = `https://wa.me/${doctor.phone}?text=${encodeURIComponent(
    `Halo, saya ingin melihat jadwal dan berkonsultasi dengan ${doctor.name.split(',')[0]}. Terima kasih.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.45,
        ease,
        delay: index * 0.08,
      }}
      className="h-full"
    >
      <article
        className={cn(
          'card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80',
          'bg-white shadow-[0_1px_3px_rgb(15_23_42/0.06)] transition-all duration-300',
          'hover:border-[#00A88E]/40 hover:shadow-lg hover:shadow-[#00A88E]/10'
        )}
      >
        {/* Doctor Photo Section - Portrait */}
        <div className="relative w-full overflow-hidden bg-slate-100" style={{ aspectRatio: '3/4' }}>
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col px-5 py-6 sm:px-6 sm:py-7">
          {/* Experience Badge */}
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex rounded-full bg-[#00A88E]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#00A88E]">
              {doctor.experience}
            </span>
          </div>

          {/* Doctor Name */}
          <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-2 line-clamp-2 leading-snug">
            {doctor.name}
          </h3>

          {/* Specialization */}
          <p className="text-base font-semibold text-[#00A88E] mb-3">
            {doctor.specialization}
          </p>

          {/* Description - Max 2 lines */}
          <p className="flex-1 text-sm leading-relaxed text-slate-600 line-clamp-2 mb-5">
            {doctor.description}
          </p>

          {/* Button - Full Width at Bottom */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'inline-flex w-full items-center justify-center rounded-lg',
              'bg-[#00A88E] px-5 py-2.5 text-sm font-semibold text-white',
              'shadow-md shadow-[#00A88E]/30',
              'transition-all duration-200',
              'hover:bg-[#008C76] hover:shadow-lg hover:shadow-[#00A88E]/40 hover:-translate-y-0.5',
              'active:translate-y-0 active:shadow-sm',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A88E] focus-visible:ring-offset-2'
            )}
          >
            Lihat Jadwal & Hubungi
          </a>
        </div>
      </article>
    </motion.div>
  );
}

export default function TimDokterPage() {
  return (
    <div className="min-h-0 bg-white">
      <section
        className="relative isolate flex min-h-[52vh] w-full items-end overflow-hidden md:min-h-[58vh] md:items-center"
        aria-labelledby="tim-dokter-hero-heading"
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mx-auto max-w-3xl text-center md:mx-0 md:text-left"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium uppercase tracking-[0.16em] text-[#a8f0e4]"
            >
              Alsakha Medica
            </motion.p>
            <motion.h1
              id="tim-dokter-hero-heading"
              variants={fadeUp}
              className="mt-3 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Tim Dokter Kami
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl md:mx-0"
            >
              Dokter-dokter bersertifikat dengan pendekatan hangat dan profesional, siap memberikan pelayanan klinik yang terpercaya untuk Anda dan keluarga.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur-sm"
            >
              &ldquo;Setia Dikala Sehat – Peduli Dikala Sakit&rdquo;
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section
        className="section-padding border-t border-slate-100 bg-slate-50/80"
        aria-labelledby="tim-dokter-daftar-heading"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 id="tim-dokter-daftar-heading" className="sr-only">
            Daftar dokter klinik
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {DOCTORS.map((doctor, i) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
