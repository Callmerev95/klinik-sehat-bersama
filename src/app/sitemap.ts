import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { ARTICLES } from '@/data/articles';
import { PARTNERS } from '@/data/partners';

const staticRoutes = [
  '',
  '/pelayanan/',
  '/tim-dokter/',
  '/tentang-kami/',
  '/organisasi/',
  '/partner/',
  '/artikel/',
];

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...ARTICLES.map((a) => ({
      url: `${SITE_URL}/artikel/${a.slug}/`,
      lastModified: new Date(a.meta.date),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
    ...PARTNERS.filter((p) => p.detail).map((p) => ({
      url: `${SITE_URL}/partner/${p.slug}/`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    })),
  ];
}
