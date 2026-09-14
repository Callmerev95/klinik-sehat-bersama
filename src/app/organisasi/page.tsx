'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '@/components/marketing/PageHero';
import { ease, stagger } from '@/lib/motion';
import { MotionCardFrame } from '@/components/marketing/MotionCardFrame';
import { useState } from 'react';

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
    name: 'Nama Contoh Satu',
    position: 'Direktur',
    image: '/images/placeholder/person.svg',
    tier: 'leadership',
  },
  {
    id: 'member-2',
    name: 'Nama Contoh Dua',
    position: 'Sekretaris Direktur',
    image: '/images/placeholder/person.svg',
    tier: 'leadership',
  },

  // Management
  {
    id: 'member-3',
    name: 'Nama Contoh Tiga',
    position: 'Manajer Operasional',
    image: '/images/placeholder/person.svg',
    tier: 'management',
  },
  {
    id: 'member-3b',
    name: 'Nama Contoh Empat',
    position: 'Sekretaris Operasional',

    image: '/images/placeholder/person.svg',
    tier: 'management',
  },
  {
    id: 'member-4',
    name: 'Nama Contoh Lima',
    position: 'Keuangan',
    image: '/images/placeholder/person.svg',
    tier: 'management',
  },
  {
    id: 'member-5',
    name: 'Nama Contoh Enam',
    position: 'IT & Sistem Informasi',
    image: '/images/placeholder/person.svg',
    tier: 'management',
  },

  // Operational & Staff
  {
    id: 'member-6',
    name: 'Nama Contoh Tujuh',
    position: 'Perawat & Penanggung Jawab',
    specialization: 'Perawatan Klinis',
    image: '/images/placeholder/person.svg',
    tier: 'operational',
  },
  {
    id: 'member-7',
    name: 'Nama Contoh Delapan',
    position: 'Analis Lab & Penanggung Jawab',
    specialization: 'Analisis Kesehatan',
    image: '/images/placeholder/person.svg',
    tier: 'operational',
  },
  {
    id: 'member-8',
    name: 'Nama Contoh Sembilan',
    position: 'Administrator Klinik',
    specialization: 'Administrasi & Registrasi',
    image: '/images/placeholder/person.svg',
    tier: 'operational',
  },
  {
    id: 'member-9',
    name: 'Nama Contoh Sepuluh',
    position: 'Bidan & Keuangan',
    specialization: 'Perawatan Maternal & Keuangan',
    image: '/images/placeholder/person.svg',
    tier: 'operational',
  },
  {
    id: 'member-11',
    name: 'Nama Contoh Sebelas',
    position: 'Cleaning Service',
    specialization: 'Layanan Kebersihan & Sanitasi',
    image: '/images/placeholder/person.svg',
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
    <MotionCardFrame index={index}>
      {/* Team Member Image - Portrait */}
        <div className="relative w-full overflow-hidden flex items-center justify-center ring-1 ring-inset ring-black/10" style={{ aspectRatio: '3/4' }}>
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
            <div className="relative w-full h-full bg-linear-to-b from-primary/40 via-primary/20 to-primary/30 flex flex-col items-center justify-center overflow-hidden">
              {/* Decorative background circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute top-12 right-8 w-20 h-20 bg-primary/15 rounded-full blur-xl" />
              <div className="absolute bottom-16 left-6 w-24 h-24 bg-white/5 rounded-full blur-xl" />

              {/* Avatar circle container */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="relative w-28 h-28 rounded-full bg-linear-to-br from-white/30 to-white/10 flex items-center justify-center ring-4 ring-white/20 shadow-lg">
                  {/* Inner avatar with gradient */}
                  <div className="w-24 h-24 rounded-full bg-linear-to-br from-primary/60 to-primary/60 flex items-center justify-center shadow-inner">
                    <span className="text-3xl font-bold text-white drop-shadow-md">
                      {initials}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative accent bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-primary/40 to-transparent" />
            </div>
          )}
        </div>

        {/* Team Member Content */}
        <div className="flex flex-1 flex-col px-5 py-6 sm:px-6 sm:py-7">
          {/* Position Badge */}
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {member.position}
            </span>
          </div>

          {/* Team Member Name */}
          <h3 title={member.name} className="text-lg font-bold tracking-tight text-slate-900 mb-2 line-clamp-2 leading-snug">
            {member.name}
          </h3>

          {/* Team Member Specialization */}
          {member.specialization && (
            <p className="flex-1 text-sm leading-relaxed text-slate-600 line-clamp-2">
              {member.specialization}
            </p>
          )}
        </div>
      </MotionCardFrame>
  );
}

export default function OrganisasiPage() {
  const reduce = useReducedMotion();
  return (
    <div className="min-h-0 bg-white">
      {/* Hero Section - Konsisten dengan halaman lain */}
      <PageHero
        image="/images/Hero/Hero-Organisasi.jpeg"
        labelledBy="organisasi-hero-heading"
        heading="Struktur Organisasi"
        description="Tim profesional yang berkomitmen memberikan pelayanan kesehatan terbaik dengan standar internasional."
        quote="“Setia Dikala Sehat – Peduli Dikala Sakit”"
        alignment="left"
        descriptionWidth="narrow"
        quoteSpacing="compact"
      />

      {/* Leadership Section */}
      <section
        className="section-padding scroll-mt-20 border-b border-slate-100 bg-white"
        aria-labelledby="tim-pimpinan-heading"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: reduce ? 0.01 : 0.45, ease }}
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
            initial={reduce ? false : 'hidden'}
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
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: reduce ? 0.01 : 0.45, ease }}
            className="mb-12 text-center md:mb-14"
          >
            <h2
              id="tim-manajemen-heading"
              className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Tim Manajemen
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Manajer dan kepala departemen yang mengelola operasional dan strategi organisasi.
            </p>
          </motion.div>

          {/* Management Grid - 3 Cards Responsive */}
          <motion.div
            initial={reduce ? false : 'hidden'}
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
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: reduce ? 0.01 : 0.45, ease }}
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
            initial={reduce ? false : 'hidden'}
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
