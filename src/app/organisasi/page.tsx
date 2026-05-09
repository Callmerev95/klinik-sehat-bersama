'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState } from 'react';

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

const HERO_IMAGE = '/images/Hero/Hero-Organisasi.jpeg';

// Team Member Interface
interface TeamMember {
  id: string;
  name: string;
  position: string;
  specialization?: string;
  image: string;
  tier: 'leadership' | 'management' | 'operational';
}

// Team Data
const TEAM_MEMBERS: TeamMember[] = [
  // Leadership
  {
    id: 'member-1',
    name: 'Dr. Nuzul Dio Ika Prasatio',
    position: 'Direktur',
    image: '/images/Doctors/dr.Nuzul.jpeg',
    tier: 'leadership',
  },
  {
    id: 'member-2',
    name: 'Kholikayana',
    position: 'Sekretaris Direktur',
    image: '/images/tim-operasional/Yana.jpeg',
    tier: 'leadership',
  },

  // Management
  {
    id: 'member-3',
    name: 'Yuda Febriansyah',
    position: 'Manager Operasional',
    image: '/images/tim-operasional/Yuda.jpeg',
    tier: 'management',
  },
  {
    id: 'member-3b',
    name: 'Feny Dwi Maharani',
    position: 'sekretaris Operasional',

    image: '/images/tim-operasional/Feny.jpeg',
    tier: 'management',
  },
  {
    id: 'member-4',
    name: 'Lulu Lutfia Awali',
    position: 'Keuangan',
    image: '/images/tim-operasional/Lulu.jpeg',
    tier: 'management',
  },
  {
    id: 'member-5',
    name: 'Revangga Brama Eka Putra',
    position: 'IT & Sistem Informasi',
    image: '/images/tim-operasional/Revangga.jpeg',
    tier: 'management',
  },

  // Operational & Staff
  {
    id: 'member-6',
    name: 'Nurhasanah, S.Kep.,Ners',
    position: 'Perawat & Penanggung Jawab',
    specialization: 'Perawatan Klinis',
    image: '/images/tim-operasional/Nurhasanah.jpeg',
    tier: 'operational',
  },
  {
    id: 'member-7',
    name: 'Sri Utami Yunita, S.Tr.Kes',
    position: 'Analis Lab & Penanggung Jawab',
    specialization: 'Analisis Kesehatan',
    image: '/images/tim-operasional/SriUtami.jpg',
    tier: 'operational',
  },
  {
    id: 'member-8',
    name: 'Tutur Mutmainnah Novitasari, S.Tr.Kes',
    position: 'Administrator Klinik',
    specialization: 'Administrasi & Registrasi',
    image: '/images/tim-operasional/Tutur.jpeg',
    tier: 'operational',
  },
  {
    id: 'member-9',
    name: 'Nilam Savhira, A.md.Keb',
    position: 'Bidan & Keuangan',
    specialization: 'Perawatan Maternal & Keuangan',
    image: '/images/tim-operasional/Nilam.jpeg',
    tier: 'operational',
  },
  {
    id: 'member-11',
    name: 'Fiqri',
    position: 'Cleaning Service',
    specialization: 'Layanan Kebersihan & Sanitasi',
    image: '',
    tier: 'operational',
  },
];

const leaders = TEAM_MEMBERS.filter((m) => m.tier === 'leadership');
const managers = TEAM_MEMBERS.filter((m) => m.tier === 'management');
const operational = TEAM_MEMBERS.filter((m) => m.tier === 'operational');

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

// Team Card Component - Match Partner Card Design
function TeamCard({ member, index }: TeamCardProps) {
  const [imageError, setImageError] = useState(false);
  const hasImage = member.image && !imageError;
  const initials = member.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

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
        {/* Team Member Image - Portrait */}
        <div className="relative w-full overflow-hidden flex items-center justify-center" style={{ aspectRatio: '3/4' }}>
          {hasImage ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 3}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="relative w-full h-full bg-linear-to-b from-[#00A88E]/40 via-[#00A88E]/20 to-[#0D8B7C]/30 flex flex-col items-center justify-center overflow-hidden">
              {/* Decorative background circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute top-12 right-8 w-20 h-20 bg-[#00A88E]/15 rounded-full blur-xl" />
              <div className="absolute bottom-16 left-6 w-24 h-24 bg-white/5 rounded-full blur-xl" />

              {/* Avatar circle container */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="relative w-28 h-28 rounded-full bg-linear-to-br from-white/30 to-white/10 flex items-center justify-center ring-4 ring-white/20 shadow-lg">
                  {/* Inner avatar with gradient */}
                  <div className="w-24 h-24 rounded-full bg-linear-to-br from-[#00A88E]/60 to-[#0D8B7C]/60 flex items-center justify-center shadow-inner">
                    <span className="text-3xl font-bold text-white drop-shadow-md">
                      {initials}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative accent bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-[#0D8B7C]/40 to-transparent" />
            </div>
          )}
        </div>

        {/* Team Member Content */}
        <div className="flex flex-1 flex-col px-5 py-6 sm:px-6 sm:py-7">
          {/* Position Badge */}
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex rounded-full bg-[#00A88E]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#00A88E]">
              {member.position}
            </span>
          </div>

          {/* Team Member Name */}
          <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-2 line-clamp-2 leading-snug">
            {member.name}
          </h3>

          {/* Team Member Specialization */}
          {member.specialization && (
            <p className="flex-1 text-sm leading-relaxed text-slate-600 line-clamp-2">
              {member.specialization}
            </p>
          )}
        </div>
      </article>
    </motion.div>
  );
}

export default function OrganisasiPage() {
  return (
    <div className="min-h-0 bg-white">
      {/* Hero Section - Konsisten dengan halaman lain */}
      <section
        className="relative isolate flex min-h-[52vh] w-full items-end overflow-hidden md:min-h-[58vh] md:items-center"
        aria-labelledby="organisasi-hero-heading"
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
              Alsakha Medika
            </motion.p>
            <motion.h1
              id="organisasi-hero-heading"
              variants={fadeUp}
              className="mt-3 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Struktur Organisasi
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl"
            >
              Tim profesional yang berkomitmen memberikan pelayanan kesehatan terbaik dengan standar internasional.
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

      {/* Leadership Section */}
      <section
        className="section-padding scroll-mt-20 border-b border-slate-100 bg-white"
        aria-labelledby="tim-pimpinan-heading"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease }}
            className="mb-12 text-center md:mb-14"
          >
            <h2
              id="tim-pimpinan-heading"
              className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Tim Pimpinan
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Direktur dan sekretaris memimpin organisasi dengan visi dan dedikasi untuk memberikan layanan terbaik.
            </p>
          </motion.div>

          {/* Leadership Grid - 2 Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-2xl lg:mx-auto"
          >
            {leaders.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Management Section */}
      <section
        className="section-padding border-b border-slate-100 bg-slate-50/80"
        aria-labelledby="tim-manajemen-heading"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease }}
            className="mb-12 text-center md:mb-14"
          >
            <h2
              id="tim-manajemen-heading"
              className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Tim Manajemen
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Manager dan kepala departemen yang mengelola operasional dan strategi organisasi.
            </p>
          </motion.div>

          {/* Management Grid - 3 Cards Responsive */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {managers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Operational Section */}
      <section
        className="section-padding bg-white"
        aria-labelledby="tim-operasional-heading"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease }}
            className="mb-12 text-center md:mb-14"
          >
            <h2
              id="tim-operasional-heading"
              className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Tim Profesional
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Staff profesional yang memberikan layanan langsung kepada pasien dengan komitmen penuh.
            </p>
          </motion.div>

          {/* Operational Grid - 3 Cards Responsive */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {operational.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
