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
      title: 'Hantavirus: Penyakit Langka dari Tikus yang Sedang Viral, Ini yang Perlu Anda Tahu',
      date: '2026-05-09',
      displayDate: '9 Mei 2026',
      category: 'Pencegahan',
      author: 'Tim Dokter Sehat Bersama',
      thumbnail: '/images/Articles/hanta-virus.jpg',
    },
  },
  {
    slug: 'pentingnya-medical-check-up',
    excerpt:
      'Pemeriksaan kesehatan rutin membantu mendeteksi penyakit pada tahap awal sebelum berkembang menjadi kondisi serius.',
    meta: {
      title: 'Pentingnya Medical Check-Up Rutin untuk Deteksi Dini Penyakit',
      date: '2026-04-10',
      displayDate: '10 April 2026',
      category: 'Pencegahan',
      author: 'Tim Dokter Sehat Bersama',
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
      author: 'Tim Redaksi',
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
      author: 'Tim Redaksi',
      thumbnail: '/images/Articles/hipertensi.jpg',
    },
  },
  {
    slug: 'olahraga-kesehatan',
    excerpt:
      'Aktivitas fisik teratur tidak hanya meningkatkan stamina, tetapi juga menjaga kesehatan organ-organ vital tubuh Anda.',
    meta: {
      title: 'Olahraga Rutin untuk Kesehatan Optimal - Tips & Manfaat',
      date: '2025-05-22',
      displayDate: '22 Mei 2025',
      category: 'Gaya Hidup Sehat',
      author: 'Tim Redaksi',
      thumbnail: '/images/Articles/olahraga-kesehatan.jpg',
    },
  },
  {
    slug: 'manajemen-stres',
    excerpt:
      'Stres berkepanjangan dapat memicu berbagai penyakit. Temukan cara-cara mudah untuk mengelola stres dengan efektif.',
    meta: {
      title: 'Manajemen Stres Efektif untuk Kesehatan Mental & Fisik',
      date: '2025-06-18',
      displayDate: '18 Juni 2025',
      category: 'Kesehatan Mental',
      author: 'Tim Redaksi',
      thumbnail: '/images/Articles/manajemen-stres.jpg',
    },
  },
  {
    slug: 'vaksinasi-jadwal',
    excerpt:
      'Vaksinasi adalah investasi jangka panjang untuk kesehatan anak. Pelajari jadwal vaksinasi yang direkomendasikan.',
    meta: {
      title: 'Jadwal Vaksinasi Lengkap - Perlindungan Kesehatan Sepanjang Hidup',
      date: '2025-07-10',
      displayDate: '10 Juli 2025',
      category: 'Pencegahan',
      author: 'Tim Redaksi',
      thumbnail: '/images/Articles/vaksinasi-jadwal.jpg',
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
