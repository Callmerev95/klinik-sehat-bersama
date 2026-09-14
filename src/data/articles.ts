export interface ArticleMeta {
  title: string;
  date: string;
  displayDate: string;
  category: string;
  author: string;
  thumbnail: string;
}

export interface Article {
  slug: string;
  excerpt: string;
  meta: ArticleMeta;
}

export const ARTICLES: Article[] = [
  {
    slug: 'hantavirus-penyakit-langka-dari-tikus',
    excerpt:
      'Pelajari tentang Hantavirus, gejala, cara penularan, dan langkah-langkah pencegahan yang efektif untuk melindungi diri dan keluarga.',
    meta: {
      title: 'Hantavirus: Penyakit Langka dari Tikus yang Sedang Viral, Ini yang Harus Kamu Tahu',
      date: '2026-05-09',
      displayDate: '9 Mei 2026',
      category: 'Pencegahan',
      author: 'Tim Dokter Alsakha Medika',
      thumbnail: '/images/Articles/hanta-virus.jpg',
    },
  },
  {
    slug: 'pentingnya-medical-check-up',
    excerpt:
      'Pemeriksaan kesehatan rutin membantu mendeteksi penyakit pada tahap awal sebelum berkembang menjadi kondisi serius.',
    meta: {
      title: 'Pentingnya Medical Check Up Rutin untuk Deteksi Dini Penyakit',
      date: '2026-04-10',
      displayDate: '12 April 2026',
      category: 'Pencegahan',
      author: 'Tim Dokter Alsakha Medica',
      thumbnail: '/images/Articles/pentingnya-mcu.jpg',
    },
  },
  {
    slug: 'makanan-sehat-harian',
    excerpt:
      'Nutrisi yang tepat adalah fondasi kesehatan. Pelajari makanan-makanan bergizi yang mudah ditemukan dan terjangkau.',
    meta: {
      title: '10 Makanan Sehat yang Harus Anda Konsumsi Setiap Hari',
      date: '2026-04-12',
      displayDate: '12 April 2026',
      category: 'Nutrisi',
      author: 'Dr. Alsakha',
      thumbnail: '/images/Articles/makanan-sehat.jpg',
    },
  },
  {
    slug: 'hipertensi-pencegahan',
    excerpt:
      'Tekanan darah tinggi sering disebut "silent killer". Ketahui gejala awal dan strategi pencegahan yang efektif.',
    meta: {
      title: 'Kenali Gejala Hipertensi dan Cara Mencegahnya Sejak Dini',
      date: '2026-04-10',
      displayDate: '10 April 2026',
      category: 'Penyakit Umum',
      author: 'Dr. Alsakha',
      thumbnail: '/images/Articles/hipertensi.jpg',
    },
  },
  {
    slug: 'olahraga-kesehatan',
    excerpt:
      'Aktivitas fisik teratur tidak hanya meningkatkan stamina, tetapi juga menjaga kesehatan organ-organ vital tubuh Anda.',
    meta: {
      title: 'Manfaat Olahraga Rutin untuk Kesehatan Jantung dan Paru-Paru',
      date: '2025-05-22',
      displayDate: '8 April 2026',
      category: 'Gaya Hidup Sehat',
      author: 'Dr. Alsakha',
      thumbnail: '/images/Articles/olahraga-kesehatan.jpg',
    },
  },
  {
    slug: 'manajemen-stres',
    excerpt:
      'Stres berkepanjangan dapat memicu berbagai penyakit. Temukan cara-cara mudah untuk mengelola stres dengan efektif.',
    meta: {
      title: 'Teknik Manajemen Stres Sederhana yang Bisa Anda Lakukan Setiap Hari',
      date: '2025-06-18',
      displayDate: '5 April 2026',
      category: 'Kesehatan Mental',
      author: 'Dr. Alsakha',
      thumbnail: '/images/Articles/manajemen-stres.jpg',
    },
  },
  {
    slug: 'vaksinasi-jadwal',
    excerpt:
      'Vaksinasi adalah investasi jangka panjang untuk kesehatan anak. Pelajari jadwal vaksinasi yang direkomendasikan.',
    meta: {
      title: 'Jadwal Lengkap Vaksinasi Anak dan Pentingnya Vaksin untuk Imunitas',
      date: '2025-07-10',
      displayDate: '2 April 2026',
      category: 'Pencegahan',
      author: 'Dr. Alsakha',
      thumbnail: '/images/Articles/vaksinasi-jadwal.jpg',
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
