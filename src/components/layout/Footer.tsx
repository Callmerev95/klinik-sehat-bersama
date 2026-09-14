import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

import { HomeTopLink } from '@/components/navigation/HomeTopLink';
import { CLINIC, SOCIAL_LINKS as SOCIAL, whatsapp } from '@/lib/site';
import { cn } from '@/lib/utils';

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { name: 'Instagram', href: SOCIAL.instagram, Icon: IconInstagram },
  { name: 'TikTok', href: SOCIAL.tiktok, Icon: IconTikTok },
  { name: 'Facebook', href: SOCIAL.facebook, Icon: IconFacebook },
] as const;

const PARTNERS = [
  { name: 'PT Indosehat', slug: 'indosehat' },
  { name: 'Aman', slug: 'aman' },
  { name: 'BPJS Ketenagakerjaan', slug: 'bpjs-ketenagakerjaan' },
  { name: 'BPJS Kesehatan', slug: 'bpjs-kesehatan' },
  { name: 'Kementerian Kesehatan', slug: 'kementerian-kesehatan' },
  { name: 'Kementerian Ketenagakerjaan', slug: 'kemnaker' },
] as const;

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-primary/15 bg-linear-to-b from-slate-900 via-slate-950 to-slate-950 text-slate-300"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {/* Column 1: Logo, Address, Contact, Social */}
          <div className="flex flex-col gap-4 md:border-r md:border-white/10 md:pr-6 lg:pr-8">
            {/* Logo & Brand Container */}
            <HomeTopLink className="group inline-flex items-center gap-3 rounded-lg outline-none transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              {/* Logo Icon */}
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/Icons/icons-alsakha.png"
                  alt="Alsakha Medica icon"
                  width={48}
                  height={48}
                  className="h-10 w-15 sm:h-14 sm:w-14"
                  priority
                />
              </div>

              {/* Brand Text */}
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-bold leading-tight text-white sm:text-base">
                  Alsakha Medica
                </p>
                <p className="text-xs leading-tight text-slate-400 sm:text-xs">
                  Klinik & Medical Center
                </p>
              </div>
            </HomeTopLink>

            <div className="space-y-2">
              <p className="text-xs leading-relaxed text-slate-400">{CLINIC.address}</p>

              <div className="flex flex-col gap-2.5">
                <a
                  href={whatsapp()}
                  className="inline-flex items-center gap-2.5 rounded-lg text-slate-300 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <Phone className="size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                  <span className="text-xs font-medium">{CLINIC.phoneDisplay}</span>
                </a>

                <a
                  href={`mailto:${CLINIC.email}`}
                  className="inline-flex items-center gap-2.5 rounded-lg text-slate-300 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <Mail className="size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                  <span className="text-xs font-medium">{CLINIC.email}</span>
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-slate-500">
                Ikuti Kami
              </p>
              <div className="flex gap-2.5">
                {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-slate-400',
                      'transition-[color,background-color,border-color,transform] duration-200',
                      'hover:border-primary/50 hover:bg-primary/15 hover:text-[#a8f0e4] hover:scale-105',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'
                    )}
                    aria-label={`Alsakha Medica di ${name}`}
                  >
                    <Icon className="size-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Service Hours */}
          <div className="flex flex-col gap-4 md:border-r md:border-white/10 md:pr-6 lg:pr-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#a8f0e4]">
                Jam Pelayanan
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/4 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">MCU</p>
                <p className="mt-1.5 text-sm text-slate-300">Senin - Sabtu</p>
                <p className="text-sm font-semibold text-white">08:00 - 21:00 WITA</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/4 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Layanan Umum</p>
                <p className="mt-1.5 text-sm text-slate-300">Senin - Minggu</p>
                <p className="text-sm font-semibold text-white">08:00 - 22:00 WITA</p>
              </div>

              <div className="rounded-xl border border-primary/30 bg-primary/[0.07] p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
                <p className="text-xs font-bold uppercase tracking-wide text-[#a8f0e4]">IGD Darurat</p>
                <p className="mt-1.5 text-sm text-[#c5f5eb]">24 Jam Setiap Hari</p>
                <p className="text-sm font-semibold text-white">Siap Melayani</p>
              </div>
            </div>
          </div>

          {/* Column 3: Partners & CTA */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#a8f0e4]">
                Mitra Kami
              </p>
            </div>

            {/* Partners Logo Grid */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
                {PARTNERS.map(({ name, slug }) => (
                  <div
                    key={slug}
                    className={cn(
                      'flex items-center justify-center',
                      'transition-[transform,filter] duration-300 ease-out',
                      'hover:scale-110 hover:brightness-125',
                      'group'
                    )}
                  >
                    <Image
                      src={`/images/Logo/mitra/${slug}.png`}
                      alt={name}
                      width={360}
                      height={160}
                      className="h-32 w-auto object-contain transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      quality={75}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500 sm:text-sm">
          <p>© {new Date().getFullYear()} Alsakha Medica. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
