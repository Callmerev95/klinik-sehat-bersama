'use client';

import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Baby,
  BedDouble,
  CheckCircle2,
  Ear,
  Footprints,
  HeartPulse,
  Microscope,
  Pill,
  ScanLine,
  ShieldCheck,
  Siren,
  Stethoscope,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '@/components/marketing/PageHero';
import { ease } from '@/lib/motion';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

type PelayananItem = {
  readonly id: string;
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly featured?: boolean;
  readonly badge?: string;
};

const LAYANAN: readonly PelayananItem[] = [
  {
    id: 'medical-check-up',
    icon: Activity,
    title: 'Medical Check-Up',
    description:
      'Paket pemeriksaan kesehatan lengkap untuk skrining berkala — penunjang disesuaikan standar klinik, dengan penawaran harga kompetitif (Best Price) sesuai brosur Alsakha Medica. Hasil dibahas agar Anda memahami langkah pencegahan dan tindak lanjut yang tepat.',
    highlights: [
      'Paket lengkap sesuai kebutuhan usia dan risiko kesehatan',
      'Integrasi dengan laboratorium & penunjang di klinik',
      'Interpretasi hasil oleh tenaga medis profesional',
    ],
    featured: true,
    badge: 'Best Price',
  },
  {
    id: 'pemeriksaan-umum',
    icon: Stethoscope,
    title: 'Pemeriksaan Umum',
    description:
      'Layanan konsultasi dan pemeriksaan dokter umum untuk keluhan harian, pengobatan dasar, surat keterangan, serta rujukan bila diperlukan penanganan lebih lanjut.',
    highlights: [
      'Anamnesis dan pemeriksaan fisik menyeluruh',
      'Manajemen penyakit akut dan kronis stabil',
      'Rujukan terstandar ke layanan spesialis atau fasilitas lain',
    ],
  },
  {
    id: 'igd',
    icon: Siren,
    title: 'IGD 24 Jam & Emergency',
    description:
      'Unit gawat darurat siaga 24 jam untuk kegawatan medis, penanganan pertama yang cepat, stabilisasi pasien, dan koordinasi tindak lanjut yang aman.',
    highlights: [
      'Akses darurat kapan pun dibutuhkan',
      'Tim tenaga medis terlatih untuk kondisi emergensi',
      'Alur rujukan jelas jika perlu penanganan lanjutan',
    ],
  },
  {
    id: 'laboratorium',
    icon: Microscope,
    title: 'Laboratorium',
    description:
      'Pemeriksaan darah, urine, dan tes laboratorium lain dengan alur pre-analitik terkontrol, akurasi terjaga, dan hasil yang dapat dipertanggungjawabkan secara klinis.',
    highlights: [
      'Identifikasi pasien & label spesimen ketat',
      'Estimasi waktu hasil diinformasikan di awal',
      'Dukung diagnosis dan monitoring terapi',
    ],
  },
  {
    id: 'usg',
    icon: ScanLine,
    title: 'USG',
    description:
      'Pelayanan ultrasonografi (USG) sebagai penunjang diagnosis non-invasif sesuai indikasi medis dan rujukan dokter, dengan privasi dan kenyamanan pasien terjaga.',
    highlights: [
      'Persiapan pemeriksaan dijelaskan sebelum tindakan',
      'Hasil terdokumentasi untuk evaluasi klinis',
      'Ruang pemeriksaan yang nyaman dan steril',
    ],
  },
  {
    id: 'rawat-inap',
    icon: BedDouble,
    title: 'Rawat Inap',
    description:
      'Fasilitas perawatan dengan observasi tenaga medis untuk kondisi yang membutuhkan pemantauan, terapi, dan pendampingan lebih intensif di lingkungan klinik.',
    highlights: [
      'Monitoring berkala sesuai protokol medis',
      'Koordinasi obat, nutrisi, dan tindakan medis',
      'Edukasi pasien dan keluarga selama perawatan',
    ],
  },
  {
    id: 'audiometri',
    icon: Ear,
    title: 'Audiometri',
    description:
      'Pemeriksaan fungsi pendengaran untuk skrining gangguan dengar, evaluasi keluhan tuli ringan, atau penunjang diagnosis sesuai indikasi dokter.',
    highlights: [
      'Prosedur terstandar dengan penjelasan ke pasien',
      'Hasil dapat digunakan untuk rujukan atau tindak lanjut',
      'Tenaga yang terbiasa dengan alat audiometri',
    ],
  },
  {
    id: 'treadmill-test',
    icon: Footprints,
    title: 'Treadmill Test',
    description:
      'Uji beban jantung (stress test) dengan treadmill untuk menilai respons kardiovaskular saat aktivitas, sesuai indikasi dan persetujuan medis.',
    highlights: [
      'Persiapan dan kontraindikasi dinilai sebelum pemeriksaan',
      'Pemantauan selama prosedur berlangsung',
      'Laporan untuk evaluasi dokter jantung atau interna',
    ],
  },
  {
    id: 'ekg',
    icon: HeartPulse,
    title: 'Rekam Jantung (EKG)',
    description:
      'Perekaman aktivitas listrik jantung untuk mendeteksi aritmia, iskemia, atau kelainan lain sebagai penunjang diagnosis dan monitoring.',
    highlights: [
      'Pelayanan cepat dengan alat terkalibrasi',
      'Hasil siap untuk dibawa ke konsultasi lanjutan',
      'Mendukung skrining kardiovaskular pada MCU',
    ],
  },
  {
    id: 'farmasi',
    icon: Pill,
    title: 'Farmasi Klinik',
    description:
      'Penyiapan obat sesuai resep, konseling penggunaan obat, serta informasi interaksi dan efek samping agar pengobatan aman dan patuh.',
    highlights: [
      'Konseling dosis, jadwal minum, dan penyimpanan',
      'Substitusi obat sesuai kebijakan dan resep',
      'Stok terkelola untuk kebutuhan resep klinik',
    ],
  },
  {
    id: 'kia-persalinan',
    icon: Baby,
    title: 'KIA & Persalinan',
    description:
      'Pelayanan kesehatan ibu dan anak, kehamilan, persalinan, serta masa nifas dengan pendampingan tenaga kesehatan berpengalaman.',
    highlights: [
      'ANC dan pemantauan kehamilan terjadwal',
      'Persalinan dengan protokol keselamatan',
      'Edukasi pasca salin dan perawatan neonatus dasar',
    ],
  },
  {
    id: 'bpjs-kesehatan',
    icon: ShieldCheck,
    title: 'Asuransi BPJS Kesehatan',
    description:
      'Kerja sama layanan sesuai ketentuan BPJS Kesehatan untuk memberikan akses pelayanan kesehatan yang terjangkau, berkualitas, dan merata bagi semua peserta. Melayani pemeriksaan umum, laboratorium, dan penunjang diagnosis dengan koordinasi rujukan yang jelas.',
    highlights: [
      'Informasi alur pendaftaran dan berkas yang diperlukan',
      'Koordinasi dengan unit terkait di klinik',
      'Transparansi mengenai jenis layanan kesehatan yang tercakup',
    ],
  },
  {
    id: 'bpjs-ketenagakerjaan',
    icon: ShieldCheck,
    title: 'Asuransi BPJS Ketenagakerjaan',
    description:
      'Layanan khusus BPJS Ketenagakerjaan untuk perlindungan kesehatan dan keselamatan kerja karyawan. Menangani pemeriksaan kesehatan kerja, penanganan penyakit akibat kerja, dan koordinasi rujukan dengan standar keselamatan kerja yang berlaku.',
    highlights: [
      'Pemeriksaan kesehatan kerja (medical check-up karyawan)',
      'Penanganan penyakit dan cedera akibat kerja',
      'Koordinasi administrasi dan klaim BPJS Ketenagakerjaan',
    ],
  },
  {
    id: 'free-disabilities-care',
    icon: CheckCircle2,
    title: 'Layanan Disabilitas Gratis',
    description:
      'Program layanan kesehatan khusus untuk pasien dengan kondisi disabilitas, memastikan akses penuh ke fasilitas kesehatan yang inklusif, nyaman, dan berkelanjutan sesuai kebutuhan.',
    highlights: [
      'Skrining dan identifikasi kebutuhan khusus pasien dengan disabilitas',
      'Fasilitas aksesibel dan koordinasi layanan yang disesuaikan',
      'Pendampingan berkelanjutan untuk keselamatan dan kenyamanan pasien',
    ],
  },
];

export default function PelayananPage() {
  const reduce = useReducedMotion();
  return (
    <div className="min-h-0 bg-white">
      <PageHero
        image="/images/Hero/Hero-Pelayanan.webp"
        labelledBy="pelayanan-hero-heading"
        heading="Pelayanan Kami"
        description="Informasi layanan resmi Klinik Alsakha Medica — terpadu, transparan, dan siap mendampingi Anda dari pemeriksaan rutin hingga penanganan darurat."
        quote="“Setia Dikala Sehat – Peduli Dikala Sakit”"
        alignment="responsive-center"
        descriptionWidth="wide"
        quoteSpacing="large"
      />

      <section
        className="section-padding border-t border-slate-100 bg-slate-50/80"
        aria-labelledby="pelayanan-daftar-heading"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 id="pelayanan-daftar-heading" className="sr-only">
            Daftar layanan klinik
          </h2>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {LAYANAN.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.id}
                  id={item.id}
                  className="h-full scroll-mt-24"
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: reduce ? 0.01 : 0.45, ease, delay: reduce ? 0 : Math.min(i, 6) * 0.06 }}
                >
                  <Card
                    className={cn(
                      'card-hover flex h-full flex-col gap-0 border border-slate-200/90 bg-white py-0 shadow-none ring-0',
                      item.featured &&
                      'border-amber-300/80 ring-2 ring-primary/15 ring-offset-0'
                    )}
                  >
                    <CardHeader className="gap-4 border-b border-slate-100 px-6 pb-5 pt-6 sm:px-7 sm:pt-7">
                      {item.badge ? (
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={cn(
                              'inline-flex rounded-lg bg-linear-to-r from-red-600 via-orange-500 to-amber-500',
                              'px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white',
                              'shadow-sm shadow-orange-900/20'
                            )}
                          >
                            {item.badge}
                          </span>
                        </div>
                      ) : null}
                      <div
                        className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                        aria-hidden
                      >
                        <Icon className="size-6 shrink-0" strokeWidth={2} />
                      </div>
                      <CardTitle className="text-lg font-semibold leading-snug tracking-tight text-slate-900 sm:text-xl">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col px-6 pb-6 pt-5 sm:px-7 sm:pb-7">
                      <p className="text-[0.9375rem] leading-relaxed text-slate-600">{item.description}</p>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Keunggulan layanan
                      </p>
                      <ul className="mt-3 flex flex-col gap-2.5" role="list">
                        {item.highlights.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2.5 text-sm leading-snug text-slate-700"
                          >
                            <CheckCircle2
                              className="mt-0.5 size-4.5 shrink-0 text-primary"
                              strokeWidth={2}
                              aria-hidden
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
