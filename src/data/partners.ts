export type PartnerCategory = 'insurance' | 'network' | 'corporate' | 'health';

export interface PartnerDocumentation {
  id: string;
  image: string;
  caption: string;
}

/** Data untuk kartu di halaman daftar mitra. */
export interface PartnerSummary {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  since: string;
  category: PartnerCategory;
}

/** Data tambahan untuk halaman detail mitra. */
export interface PartnerDetailData {
  logo: string;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  cooperationFields: string[];
  benefitsForClinic: string[];
  benefitsForPatients: string[];
  documentation: PartnerDocumentation[];
}

export type Partner = PartnerSummary & { detail?: PartnerDetailData };

export const PARTNERS: Partner[] = [
  {
    id: 'partner-1',
    slug: 'pt-indosehat-2003-group',
    name: 'PT. Klinik Indosehat 2003',
    description:
      'Jaringan kesehatan terintegrasi di Indonesia yang menyediakan layanan healthcare comprehensive dengan standar internasional. Kami bangga menjadi bagian dari ekosistem kesehatan yang berkelanjutan.',
    image: '/images/Partners/indosehat-2003.jpg',
    since: '2018',
    category: 'network',
    detail: {
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
      categoryLabel: 'Strategic Partner',
      shortDescription:
        'Mitra utama dalam pengembangan layanan kesehatan korporat dan komunitas di Nusa Tenggara Barat.',
      fullDescription:
        'Klinik Alsakha Medica bermitra strategis dengan PT. Klinik Indosehat 2003 sejak awal berdirinya pada tahun 2018. Kerjasama ini mencakup pengembangan layanan kesehatan korporat, program medical check-up komprehensif, dan berbagai inisiatif kesehatan komunitas. Melalui sinergi dengan PT. Klinik Indosehat 2003, kami mampu memperluas jangkauan layanan kesehatan dan meningkatkan standar pelayanan medis di wilayah Sumbawa.',
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
  },
  {
    id: 'partner-2',
    slug: 'bpjs-kesehatan',
    name: 'BPJS Kesehatan',
    description:
      'Badan Penyelenggara Jaminan Sosial Kesehatan yang memberikan perlindungan kesehatan bagi seluruh masyarakat Indonesia. Klinik kami tersertifikasi dan aktif melayani peserta BPJS Kesehatan.',
    image: '/images/Partners/bpjs-kesehatan.jpg',
    since: '2019',
    category: 'insurance',
    detail: {
      logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop',
      categoryLabel: 'Government Partner',
      shortDescription: 'Mitra resmi dalam memberikan layanan kesehatan dasar kepada peserta JKN-KIS.',
      fullDescription:
        'Sebagai fasilitas kesehatan tingkat pertama yang terakreditasi, Klinik Alsakha Medica bermitra dengan BPJS Kesehatan untuk memberikan akses layanan kesehatan kepada seluruh peserta Jaminan Kesehatan Nasional (JKN) dan Kartu Indonesia Sehat (KIS). Komitmen kami adalah memberikan pelayanan kesehatan yang bermutu, terjangkau, dan sesuai dengan standar yang ditetapkan oleh BPJS Kesehatan.',
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
  },
  {
    id: 'partner-3',
    slug: 'bpjs-ketenagakerjaan',
    name: 'BPJS Ketenagakerjaan',
    description:
      'Asuransi sosial untuk tenaga kerja yang memberikan perlindungan komprehensif. Alsakha Medica menjadi mitra terpercaya dalam program kesehatan ketenagakerjaan di kawasan Sumbawa.',
    image: '/images/Partners/bpjs-ketenagakerjaan.jpg',
    since: '2020',
    category: 'insurance',
    detail: {
      logo: 'https://images.unsplash.com/photo-1564506592529-02f3e7c67d61?w=400&h=200&fit=crop',
      categoryLabel: 'Government Partner',
      shortDescription:
        'Kemitraan dalam penyediaan layanan kesehatan dan keselamatan kerja bagi peserta program asuransi ketenagakerjaan.',
      fullDescription:
        'Klinik Alsakha Medica berperan sebagai fasilitas kesehatan provider BPJS Ketenagakerjaan yang menyediakan layanan kesehatan dan keselamatan kerja untuk peserta program Jaminan Kecelakaan Kerja (JKK), Jaminan Hari Tua (JHT), dan Jaminan Pensiun (JP). Tim medis kami terlatih dalam penanganan kasus-kasus occupational health dan siap memberikan penanganan pertama dalam situasi darurat akibat kecelakaan kerja.',
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
  },
  {
    id: 'partner-4',
    slug: 'rsud-sumbawa',
    name: 'Rumah Sakit Umum Daerah Sumbawa',
    description:
      'Rumah sakit rujukan utama di Kabupaten Sumbawa dengan fasilitas ICU dan spesialistik lengkap. Kami bekerja sama dalam sistem rujukan untuk penanganan kasus kompleks dan emergency.',
    image: '/images/Partners/rsud-sumbawa.jpg',
    since: '2016',
    category: 'health',
  },
  {
    id: 'partner-5',
    slug: 'pemkab-sumbawa',
    name: 'Pemerintah Kabupaten Sumbawa',
    description:
      'Perangkat daerah kesehatan yang mendorong program kesehatan masyarakat. Klinik kami aktif berkontribusi dalam program imunisasi, MCU, dan surveilans kesehatan publik.',
    image: '/images/Partners/pemkab-sumbawa.jpg',
    since: '2014',
    category: 'corporate',
  },
  {
    id: 'partner-6',
    slug: 'asuransi-korporat-tambang-emas',
    name: 'Asuransi Korporat PT Tambang Emas',
    description:
      'Perusahaan pertambangan utama di Sumbawa yang mempercayai Alsakha Medica untuk program kesehatan karyawan dan keluarga. Kami menyediakan medical check-up berkala dan layanan konsultasi 24 jam.',
    image: '/images/Partners/asuransi-korporat.jpg',
    since: '2019',
    category: 'corporate',
  },
];

export function getPartner(slug: string): Partner | undefined {
  return PARTNERS.find((p) => p.slug === slug);
}

export const CATEGORY_LABELS: Record<PartnerCategory, string> = {
  insurance: 'Asuransi',
  network: 'Jaringan Kesehatan',
  corporate: 'Korporat',
  health: 'Kesehatan',
};

export const CATEGORY_COLORS: Record<PartnerCategory, string> = {
  insurance: 'bg-blue-50 text-blue-700',
  network: 'bg-teal-50 text-teal-700',
  corporate: 'bg-purple-50 text-purple-700',
  health: 'bg-green-50 text-green-700',
};
