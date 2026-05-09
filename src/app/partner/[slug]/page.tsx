import Link from 'next/link';
import { PartnerDetailContent } from './_components/partner-detail-content';

// Partner data
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

const PARTNERS: Record<string, PartnerData> = {
  'pt-indosehat-2003-group': {
    id: '1',
    name: 'PT. Klinik Indosehat 2003',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
    shortDescription:
      'Mitra utama dalam pengembangan layanan kesehatan korporat dan komunitas di Nusa Tenggara Barat.',
    category: 'Strategic Partner',
    fullDescription:
      'Klinik Alsakha Medica bermitra strategis dengan PT. Klinik Indosehat 2003 sejak awal berdirinya pada tahun 2018. Kerjasama ini mencakup pengembangan layanan kesehatan korporat, program medical check-up komprehensif, dan berbagai inisiatif kesehatan komunitas. Melalui sinergi dengan PT. Klinik Indosehat 2003, kami mampu memperluas jangkauan layanan kesehatan dan meningkatkan standar pelayanan medis di wilayah Sumbawa.',
    cooperationSince: '2018',
    cooperationFields: [
      'Layanan Medical Check-Up Korporat',
      'Program Kesehatan Karyawan',
      'Pengembangan Infrastruktur Kesehatan',
      'Edukasi Kesehatan Komunitas',
      'Penelitian Kesehatan Lokal',
    ],
    benefitsForClinic: [
      'Ekspansi pasar dan jangkauan layanan yang lebih luas',
      'Akses ke fasilitas dan sumber daya tambahan',
      'Peningkatan kredibilitas dan kepercayaan publik',
      'Kolaborasi dalam riset dan pengembangan protokol medis',
    ],
    benefitsForPatients: [
      'Akses mudah ke layanan kesehatan berkualitas',
      'Program kesehatan preventif yang komprehensif',
      'Biaya layanan yang kompetitif melalui benefit program korporat',
      'Jangkauan layanan kesehatan yang lebih luas dan terintegrasi',
    ],
    documentation: [
      {
        id: '1',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        caption: 'Pertemuan Strategis Tim Klinik Alsakha Medica dan PT. Klinik Indosehat 2003',
      },
      {
        id: '2',
        image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop',
        caption: 'Penandatanganan Memorandum of Understanding (MoU)',
      },
      {
        id: '3',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
        caption: 'Program Medical Check-Up Korporat',
      },
      {
        id: '4',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        caption: 'Workshop Edukasi Kesehatan Bersama Komunitas',
      },
      {
        id: '5',
        image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop',
        caption: 'Kunjungan Delegasi Mitra ke Fasilitas Medis',
      },
      {
        id: '6',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
        caption: 'Acara Networking dan Kolaborasi Strategis',
      },
    ],
  },
  'bpjs-kesehatan': {
    id: '2',
    name: 'BPJS Kesehatan',
    logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop',
    shortDescription: 'Mitra resmi dalam memberikan layanan kesehatan dasar kepada peserta JKN-KIS.',
    category: 'Government Partner',
    fullDescription:
      'Sebagai fasilitas kesehatan tingkat pertama yang terakreditasi, Klinik Alsakha Medica bermitra dengan BPJS Kesehatan untuk memberikan akses layanan kesehatan kepada seluruh peserta Jaminan Kesehatan Nasional (JKN) dan Kartu Indonesia Sehat (KIS). Komitmen kami adalah memberikan pelayanan kesehatan yang bermutu, terjangkau, dan sesuai dengan standar yang ditetapkan oleh BPJS Kesehatan.',
    cooperationSince: '2019',
    cooperationFields: [
      'Layanan Kesehatan Dasar JKN-KIS',
      'Pemeriksaan Kesehatan Berkelanjutan',
      'Program Promotif dan Preventif',
      'Rujukan ke Fasilitas Kesehatan Sekunder',
      'Data Reporting dan Quality Assurance',
    ],
    benefitsForClinic: [
      'Akreditasi dan sertifikasi dari BPJS Kesehatan',
      'Alur pasien yang stabil dan berkelanjutan',
      'Dukungan dalam standarisasi protokol medis',
      'Akses ke sistem informasi kesehatan terintegrasi',
    ],
    benefitsForPatients: [
      'Akses layanan kesehatan dengan biaya terjangkau',
      'Perlindungan kesehatan melalui sistem JKN yang komprehensif',
      'Layanan kesehatan preventif dan promotif',
      'Kontinuitas layanan kesehatan yang terkoordinasi',
    ],
    documentation: [
      {
        id: '1',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        caption: 'Sosialisasi Program JKN-KIS kepada Masyarakat',
      },
      {
        id: '2',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
        caption: 'Pemeriksaan Kesehatan Rutin Peserta BPJS',
      },
      {
        id: '3',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
        caption: 'Pelatihan Standar Protokol Medis BPJS',
      },
      {
        id: '4',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        caption: 'Monitoring dan Evaluasi Kualitas Layanan',
      },
      {
        id: '5',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
        caption: 'Dokumentasi Layanan Kesehatan Pasien',
      },
      {
        id: '6',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        caption: 'Audit dan Verifikasi Fasilitas Kesehatan',
      },
    ],
  },
  'bpjs-ketenagakerjaan': {
    id: '3',
    name: 'BPJS Ketenagakerjaan',
    logo: 'https://images.unsplash.com/photo-1564506592529-02f3e7c67d61?w=400&h=200&fit=crop',
    shortDescription:
      'Kemitraan dalam penyediaan layanan kesehatan dan keselamatan kerja bagi peserta program asuransi ketenagakerjaan.',
    category: 'Government Partner',
    fullDescription:
      'Klinik Alsakha Medica berperan sebagai fasilitas kesehatan provider BPJS Ketenagakerjaan yang menyediakan layanan kesehatan dan keselamatan kerja untuk peserta program Jaminan Kecelakaan Kerja (JKK), Jaminan Hari Tua (JHT), dan Jaminan Pensiun (JP). Tim medis kami terlatih dalam penanganan kasus-kasus occupational health dan siap memberikan penanganan pertama dalam situasi darurat akibat kecelakaan kerja.',
    cooperationSince: '2020',
    cooperationFields: [
      'Layanan Medical Check-Up Pre-Employment',
      'Penanganan Kasus Kecelakaan Kerja',
      'Layanan Occupational Health & Safety',
      'Program Kesehatan dan Keselamatan Kerja (K3)',
      'Dokumentasi dan Pelaporan Kasus Kecelakaan',
    ],
    benefitsForClinic: [
      'Peningkatan kapabilitas dalam occupational health',
      'Alur pasien dari sektor industri dan korporat',
      'Pelatihan berkelanjutan dalam penanganan K3',
      'Akses ke jaringan fasilitas kesehatan BPJS TK',
    ],
    benefitsForPatients: [
      'Layanan kesehatan kerja yang profesional dan terpercaya',
      'Perlindungan komprehensif dalam situasi kecelakaan kerja',
      'Proses klaim yang terstruktur dan transparan',
      'Akses ke rehabilitasi dan program recovery yang tersedia',
    ],
    documentation: [
      {
        id: '1',
        image: 'https://images.unsplash.com/photo-1564506592529-02f3e7c67d61?w=800&h=600&fit=crop',
        caption: 'Pelatihan Occupational Health & Safety untuk Tim Medis',
      },
      {
        id: '2',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
        caption: 'Medical Check-Up Pre-Employment Peserta BPJS TK',
      },
      {
        id: '3',
        image: 'https://images.unsplash.com/photo-1564506592529-02f3e7c67d61?w=800&h=600&fit=crop',
        caption: 'Program K3 dan Edukasi Keselamatan Kerja',
      },
      {
        id: '4',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
        caption: 'Simulasi Penanganan Kecelakaan Kerja',
      },
      {
        id: '5',
        image: 'https://images.unsplash.com/photo-1564506592529-02f3e7c67d61?w=800&h=600&fit=crop',
        caption: 'Monitoring Kesehatan dan Keselamatan Kerja',
      },
      {
        id: '6',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
        caption: 'Dokumentasi Kasus dan Follow-up Pasien',
      },
    ],
  },
};

interface PartnerDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PartnerDetailPage({ params }: PartnerDetailPageProps) {
  const { slug } = await params;
  const partner = PARTNERS[slug];

  if (!partner) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-slate-50 to-white px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Partner Tidak Ditemukan</h1>
          <p className="mt-2 text-slate-600">
            Maaf, halaman mitra yang Anda cari tidak tersedia.
          </p>
          <Link
            href="/partner"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#00A88E] px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-[#009076] hover:scale-105"
          >
            Kembali ke Halaman Mitra
          </Link>
        </div>
      </div>
    );
  }

  return <PartnerDetailContent partner={partner} />;
}

export async function generateStaticParams() {
  return [
    { slug: 'pt-indosehat-2003-group' },
    { slug: 'bpjs-kesehatan' },
    { slug: 'bpjs-ketenagakerjaan' },
  ];
}

export async function generateMetadata({ params }: PartnerDetailPageProps) {
  const { slug } = await params;
  const partner = PARTNERS[slug];

  if (!partner) {
    return {
      title: 'Partner Tidak Ditemukan - Alsakha Medica',
      description: 'Halaman mitra tidak ditemukan di website Alsakha Medica.',
    };
  }

  return {
    title: `${partner.name} - Mitra Alsakha Medica`,
    description: partner.shortDescription,
    openGraph: {
      title: `${partner.name} - Mitra Alsakha Medica`,
      description: partner.shortDescription,
      url: `/partner/${slug}`,
      type: 'website',
      images: [
        {
          url: partner.logo,
          width: 1200,
          height: 630,
          alt: partner.name,
        },
      ],
    },
  };
}
