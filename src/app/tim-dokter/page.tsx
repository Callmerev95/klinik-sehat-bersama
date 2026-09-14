'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '@/components/marketing/PageHero';
import { stagger } from '@/lib/motion';
import { MotionCardFrame } from '@/components/marketing/MotionCardFrame';
import { cn } from '@/lib/utils';

const DOCTORS = [
  {
    id: 'dr-contoh-1',
    name: 'dr. Andi Pratama',
    specialization: 'Dokter Umum',
    experience: '10+ Tahun Pengalaman',
    description: 'Dokter umum berpengalaman dalam menangani berbagai keluhan kesehatan dengan pendekatan yang tenang dan profesional.',
    image: '/images/placeholder/person.svg',
    phone: '6280000000000',
  },
  {
    id: 'dr-contoh-2',
    name: 'dr. Budi Santoso',
    specialization: 'Dokter Umum',
    experience: '5+ Tahun Pengalaman',
    description: 'Dokter umum berpengalaman dengan fokus utama pada pencegahan penyakit dan promosi kesehatan untuk semua pasien.',
    image: '/images/placeholder/person.svg',
    phone: '6280000000000',
  },
  {
    id: 'dr-contoh-3',
    name: 'dr. Citra Lestari',
    specialization: 'Dokter Umum',
    experience: '7+ Tahun Pengalaman',
    description: 'Dokter umum yang peduli dengan kesehatan pasien secara menyeluruh, dengan pendekatan hangat dan teliti dalam setiap pemeriksaan.',
    image: '/images/placeholder/person.svg',
    phone: '6280000000000',
  },
  {
    id: 'dr-contoh-4',
    name: 'dr. Dewi Anggraini',
    specialization: 'Dokter Umum',
    experience: '5+ Tahun Pengalaman',
    description: 'Dokter umum yang berdedikasi dalam memberikan pelayanan kesehatan berkualitas dengan perhatian terhadap detail dan kepuasan pasien.',
    image: '/images/placeholder/person.svg',
    phone: '6280000000000',
  },
] as const;

function DoctorCard({ doctor, index }: { doctor: (typeof DOCTORS)[number]; index: number }) {
  const whatsappLink = `https://wa.me/${doctor.phone}?text=${encodeURIComponent(
    `Halo, saya ingin melihat jadwal dan berkonsultasi dengan ${doctor.name.split(',')[0]}. Terima kasih.`
  )}`;

  return (
    <MotionCardFrame index={index}>
        {/* Doctor Photo Section - Portrait */}
        <div className="relative w-full overflow-hidden bg-slate-100 ring-1 ring-inset ring-black/10" style={{ aspectRatio: '3/4' }}>
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
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {doctor.experience}
            </span>
          </div>

          {/* Doctor Name */}
          <h3 title={doctor.name} className="text-lg font-bold tracking-tight text-slate-900 mb-2 line-clamp-2 leading-snug">
            {doctor.name}
          </h3>

          {/* Specialization */}
          <p className="text-base font-semibold text-primary mb-3">
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
              'bg-primary px-5 py-2.5 text-sm font-semibold text-white',
              'shadow-md shadow-primary/30',
              'transition-[color,background-color,box-shadow,transform] duration-200',
              'hover:bg-primary-deep hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5',
              'active:translate-y-0 active:scale-0.96 active:shadow-sm',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
            )}
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </MotionCardFrame>
  );
}

export default function TimDokterPage() {
  const reduce = useReducedMotion();
  return (
    <div className="min-h-0 bg-white">
      <PageHero
        image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2000&q=80"
        labelledBy="tim-dokter-hero-heading"
        heading="Tim Dokter Kami"
        description="Dokter-dokter bersertifikat dengan pendekatan hangat dan profesional, siap memberikan pelayanan klinik yang terpercaya untuk Anda dan keluarga."
        quote="“Setia Dikala Sehat – Peduli Dikala Sakit”"
        alignment="responsive-center"
        descriptionWidth="wide"
        quoteSpacing="large"
      />

      <section
        className="section-padding border-t border-slate-100 bg-slate-50/80"
        aria-labelledby="tim-dokter-daftar-heading"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 id="tim-dokter-daftar-heading" className="sr-only">
            Daftar dokter klinik
          </h2>
          <motion.div
            initial={reduce ? false : 'hidden'}
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
