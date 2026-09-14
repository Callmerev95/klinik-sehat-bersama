'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, X } from 'lucide-react';

import { HomeTopLink } from '@/components/navigation/HomeTopLink';
import { whatsapp } from '@/lib/site';
import { ease } from '@/lib/motion';
import { cn } from '@/lib/utils';
/** Samakan dengan CTA di `src/app/page.tsx` saat nomor WhatsApp final. */

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang-kami/', label: 'Tentang Kami' },
  { href: '/pelayanan/', label: 'Pelayanan' },
  { href: '/tim-dokter/', label: 'Tim Dokter' },
  { href: '/organisasi/', label: 'Organisasi' },
  { href: '/artikel/', label: 'Artikel' },
  { href: '/partner/', label: 'Mitra' },
  { href: '/#lokasi-kami', label: 'Kontak' },
] as const;

function linkIsActive(pathname: string, href: string): boolean {
  if (href === '/#lokasi-kami') {
    return false;
  }
  if (href === '/') {
    return pathname === '/' || pathname === '';
  }
  const base = href.replace(/\/$/, '');
  return pathname === href || pathname === base || pathname.startsWith(`${base}/`);
}

export default function Navbar() {
  const pathname = usePathname() ?? '/';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // APG disclosure: Escape menutup, Tab terjebak di dalam menu,
  // fokus kembali ke tombol pemicu saat menu ditutup.
  useEffect(() => {
    if (!isOpen) return;
    const menu = menuRef.current;
    const toggle = toggleRef.current;
    menu?.querySelector<HTMLElement>('a[href], button:not([disabled])')?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
        toggle?.focus();
        return;
      }
      if (e.key !== 'Tab' || !menu) return;
      const items = menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      toggle?.focus();
    };
  }, [isOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className={cn(
          'border-b transition-[box-shadow,background-color,border-color] duration-300 ease-out',
          'backdrop-blur-xl backdrop-saturate-150',
          'border-white/45',
          scrolled
            ? 'bg-white/62 shadow-[0_14px_48px_-14px_rgba(15,23,42,0.14),inset_0_1px_0_0_rgba(255,255,255,0.88)]'
            : 'bg-white/48 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.72)]'
        )}
        aria-label="Navigasi utama"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
          {/* Logo - Combined Image */}
          <HomeTopLink
            onClick={closeMenu}
            className={cn(
              'group flex shrink-0 rounded-lg outline-none',
              'transition-[background-color,transform] duration-200 ease-out',
              'focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2'
            )}
          >
            <Image
              src="/images/Logo/logo-alsakha.png"
              alt="Alsakha Medica"
              width={200}
              height={60}
              className="h-auto w-28 transition-transform duration-300 ease-out group-hover:scale-105 sm:w-40 lg:w-48"
              priority
            />
          </HomeTopLink>

          {/* Desktop — semua interaksi memakai rounded-xl */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = linkIsActive(pathname, link.href);
              const itemClass = cn(
                'rounded-xl px-3.5 py-2 text-[0.9375rem] font-medium',
                'transition-[color,background-color] duration-200 ease-out',
                active
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 hover:bg-primary/[0.07] hover:text-primary'
              );
              if (link.href === '/') {
                return (
                  <HomeTopLink
                    key={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={itemClass}
                  >
                    {link.label}
                  </HomeTopLink>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={itemClass}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex">
            <a
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group inline-flex items-center gap-2.5 rounded-xl px-6 py-2.5 text-sm font-semibold text-white',
                'bg-linear-to-br in oklab from-primary to-primary-deep shadow-lg shadow-primary/30',
                'transition-[color,background-color,box-shadow,transform] duration-300 ease-out',
                'hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 hover:from-primary-deep hover:to-primary-deep',
                'active:translate-y-0 active:shadow-md active:shadow-primary/25',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2'
              )}
            >
              <MessageCircle className="size-4.5 shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden />
              Hubungi Kami
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className={cn(
              'inline-flex size-10 items-center justify-center rounded-xl text-slate-600',
              'transition-[color,background-color] duration-200 ease-out',
              'hover:bg-primary/8 hover:text-primary',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 md:hidden'
            )}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {isOpen ? <X className="size-5.5" strokeWidth={2} /> : <Menu className="size-5.5" strokeWidth={2} />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              ref={menuRef}
              id="mobile-nav-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease }}
              className="overflow-hidden border-t border-white/40 bg-white/44 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)] backdrop-blur-xl backdrop-saturate-150 md:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease }}
                className="flex flex-col gap-1 px-4 py-4 sm:px-5"
              >
                {navLinks.map((link) => {
                  const active = linkIsActive(pathname, link.href);
                  const mobileItemClass = cn(
                    'rounded-xl px-3.5 py-3 text-[0.9375rem] font-medium',
                    'transition-[color,background-color] duration-200 ease-out',
                    active
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-700 hover:bg-primary/[0.07] hover:text-primary'
                  );
                  if (link.href === '/') {
                    return (
                      <HomeTopLink
                        key={link.href}
                        onClick={closeMenu}
                        aria-current={active ? 'page' : undefined}
                        className={mobileItemClass}
                      >
                        {link.label}
                      </HomeTopLink>
                    );
                  }
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={active ? 'page' : undefined}
                      className={mobileItemClass}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <a
                  href={whatsapp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'group mt-3 flex items-center justify-center gap-2.5 rounded-xl py-3.5 text-center text-[0.9375rem] font-semibold text-white',
                    'bg-linear-to-br in oklab from-primary to-primary-deep shadow-lg shadow-primary/30',
                    'transition-[color,background-color,box-shadow,transform] duration-300 ease-out',
                    'hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 hover:from-primary-deep hover:to-primary-deep',
                    'active:translate-y-0 active:shadow-md active:shadow-primary/25',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2'
                  )}
                >
                  <MessageCircle className="size-5 shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                  Hubungi via WhatsApp
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
