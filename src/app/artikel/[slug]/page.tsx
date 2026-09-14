import { notFound } from 'next/navigation';
import { readFileSync } from 'fs';
import { join } from 'path';
import { whatsapp } from '@/lib/site';

// Fallback component untuk artikel tanpa MDX
function DefaultContent() {
  return (
    <div className="border-l-4 border-[#00A88E] pl-6 py-4 bg-slate-50 rounded">
      <p className="text-slate-600">
        <strong>Status:</strong> Konten artikel sedang dalam proses pembuatan. Mohon cek kembali segera.
      </p>
    </div>
  );
}

// Parse MDX frontmatter
function parseMDXFrontmatter(content: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) return { frontmatter: {}, body: content };

  const frontmatterStr = match[1];
  const body = match[2];

  const frontmatter: Record<string, string> = {};
  frontmatterStr.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      frontmatter[key.trim()] = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
    }
  });

  return { frontmatter, body };
}

// Convert markdown to simple HTML
function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*?)$/gm, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>');
  html = html.replace(/^# (.*?)$/gm, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>');

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Lists
  html = html.replace(/^- (.*?)$/gm, '<li class="ml-4">$1</li>');
  html = html.replace(/(<li[^<]*<\/li>[\n\r]*)+/g, '<ul class="list-disc space-y-1 mb-4">$&</ul>');

  // Paragraphs
  const paragraphs = html.split('\n\n');
  html = paragraphs.map(para => {
    if (para.match(/^<[hul]/)) return para;
    if (para.trim() === '') return '';
    return `<p class="mb-4 text-slate-700 leading-relaxed">${para.trim()}</p>`;
  }).join('\n');

  return html;
}

// Metadata artikel dengan mapping slug ke MDX file path
const ARTICLE_METADATA: Record<string, {
  title: string;
  description: string;
  date: string;
  category: string;
  mdxSlug: string;
  mdxFile: string;
}> = {
  'pentingnya-medical-check-up': {
    title: 'Pentingnya Medical Check Up Rutin untuk Deteksi Dini Penyakit',
    description: 'Pemeriksaan kesehatan rutin membantu mendeteksi penyakit pada tahap awal sebelum berkembang menjadi kondisi serius.',
    date: '12 April 2026',
    category: 'Pencegahan',
    mdxSlug: 'pentingnya-medical-check-up',
    mdxFile: 'pentingnya-medical-check-up.mdx',
  },
  'makanan-sehat-harian': {
    title: '10 Makanan Sehat yang Harus Anda Konsumsi Setiap Hari',
    description: 'Nutrisi yang tepat adalah fondasi kesehatan. Pelajari makanan-makanan bergizi yang mudah ditemukan dan terjangkau.',
    date: '12 April 2026',
    category: 'Nutrisi',
    mdxSlug: '10-makanan-sehat',
    mdxFile: '10-makanan-sehat.mdx',
  },
  'hipertensi-pencegahan': {
    title: 'Kenali Gejala Hipertensi dan Cara Mencegahnya Sejak Dini',
    description: 'Tekanan darah tinggi sering disebut "silent killer". Ketahui gejala awal dan strategi pencegahan yang efektif.',
    date: '10 April 2026',
    category: 'Penyakit Umum',
    mdxSlug: 'hipertensi-pencegahan',
    mdxFile: 'kenali-hipertensi.mdx',
  },
  'olahraga-kesehatan': {
    title: 'Manfaat Olahraga Rutin untuk Kesehatan Jantung dan Paru-Paru',
    description: 'Aktivitas fisik teratur tidak hanya meningkatkan stamina, tetapi juga menjaga kesehatan organ-organ vital tubuh Anda.',
    date: '8 April 2026',
    category: 'Gaya Hidup Sehat',
    mdxSlug: 'olahraga-kesehatan',
    mdxFile: 'olahraga-kesehatan.mdx',
  },
  'manajemen-stres': {
    title: 'Teknik Manajemen Stres Sederhana yang Bisa Anda Lakukan Setiap Hari',
    description: 'Stres berkepanjangan dapat memicu berbagai penyakit. Temukan cara-cara mudah untuk mengelola stres dengan efektif.',
    date: '5 April 2026',
    category: 'Kesehatan Mental',
    mdxSlug: 'manajemen-stres',
    mdxFile: 'manajemen-stres.mdx',
  },
  'vaksinasi-jadwal': {
    title: 'Jadwal Lengkap Vaksinasi Anak dan Pentingnya Vaksin untuk Imunitas',
    description: 'Vaksinasi adalah investasi jangka panjang untuk kesehatan anak. Pelajari jadwal vaksinasi yang direkomendasikan.',
    date: '2 April 2026',
    category: 'Pencegahan',
    mdxSlug: 'vaksinasi-jadwal',
    mdxFile: 'vaksinasi-jadwal.mdx',
  },
  'hantavirus-penyakit-langka-dari-tikus': {
    title: 'Hantavirus: Penyakit Langka dari Tikus yang Sedang Viral, Ini yang Harus Kamu Tahu',
    description: 'Pelajari tentang Hantavirus, gejala, cara penularan, dan langkah-langkah pencegahan yang efektif untuk melindungi diri dan keluarga.',
    date: '9 Mei 2026',
    category: 'Pencegahan',
    mdxSlug: 'hantavirus-penyakit-langka-dari-tikus',
    mdxFile: 'hantavirus-penyakit-langka-dari-tikus.mdx',
  },
};

export async function generateStaticParams() {
  return Object.keys(ARTICLE_METADATA).map((slug) => ({
    slug,
  }));
}

function getMDXContent(mdxFile: string): { title: string; body: string } | null {
  try {
    const contentPath = join(process.cwd(), 'content', 'artikel', mdxFile);
    const fileContent = readFileSync(contentPath, 'utf-8');
    const { frontmatter, body } = parseMDXFrontmatter(fileContent);

    return {
      title: frontmatter.title || 'Untitled',
      body: markdownToHtml(body),
    };
  } catch (error) {
    console.error(`Failed to load MDX file: ${mdxFile}`, error);
    return null;
  }
}

export default async function ArtikelDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const article = ARTICLE_METADATA[slug];

  if (!article) {
    notFound();
  }

  const mdxContent = getMDXContent(article.mdxFile);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[50vh] w-full items-end overflow-hidden md:min-h-[55vh] bg-slate-900">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#003d36]/90 via-[#00A88E]/60 to-slate-900/80" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#00A88E]/20 text-[#00A88E]">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-slate-200">{article.date}</p>
          </div>
        </div>
      </section>

      {/* Konten Artikel */}
      <article className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          {mdxContent ? (
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: mdxContent.body }}
            />
          ) : (
            <DefaultContent />
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-[#003d36] to-[#00A88E] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Konsultasi dengan Dokter Profesional
          </h3>
          <p className="text-lg text-slate-100 mb-8">
            Dapatkan saran medis langsung dari tim dokter berpengalaman kami melalui WhatsApp
          </p>
          <a
            href={whatsapp('Halo Alsakha Medika, saya ingin berkonsultasi')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#003d36] bg-white hover:bg-slate-50 transition-colors duration-200"
          >
            <span>💬</span>
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}