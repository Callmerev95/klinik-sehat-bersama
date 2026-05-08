'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { consumePendingHomeTopScroll } from '@/lib/home-scroll-intent';

const SECTION_ID = 'lokasi-kami';

function scrollToLokasiSection() {
  if (typeof window === 'undefined') return;
  const path = window.location.pathname;
  if (path !== '/' && path !== '') return;
  if (window.location.hash !== `#${SECTION_ID}`) return;
  const el = document.getElementById(SECTION_ID);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
}

function scrollHomeTopFromIntent() {
  if (typeof window === 'undefined') return;
  if (!consumePendingHomeTopScroll()) return;
  if (window.location.hash) {
    window.history.replaceState(null, '', '/');
  }
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
}

/**
 * Setelah navigasi ke /: utamakan scroll ke atas jika user memilih Beranda/logo;
 * jika tidak, scroll ke #lokasi-kami bila hash sesuai.
 */
export function HomeHashScroll() {
  const pathname = usePathname() ?? '/';

  useEffect(() => {
    const run = () =>
      requestAnimationFrame(() => {
        scrollHomeTopFromIntent();
        scrollToLokasiSection();
      });
    run();
    const onHash = () => requestAnimationFrame(scrollToLokasiSection);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [pathname]);

  return null;
}
