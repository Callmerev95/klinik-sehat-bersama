'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps, MouseEvent } from 'react';

import { markPendingHomeTopScroll } from '@/lib/home-scroll-intent';

type HomeTopLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href?: '/';
};

/**
 * Tautan ke beranda bagian atas: membersihkan hash #lokasi-kami saat sudah di home,
 * atau menandai intent scroll ke atas setelah navigasi dari halaman lain.
 */
export function HomeTopLink({ onClick, href = '/', ...rest }: HomeTopLinkProps) {
  const pathname = usePathname() ?? '/';

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    const onHome = pathname === '/' || pathname === '';
    if (onHome) {
      e.preventDefault();
      window.history.replaceState(null, '', '/');
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      return;
    }
    markPendingHomeTopScroll();
  };

  return <Link href={href} {...rest} onClick={handleClick} />;
}
