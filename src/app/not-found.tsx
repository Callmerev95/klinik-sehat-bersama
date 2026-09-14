'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { HomeTopLink } from '@/components/navigation/HomeTopLink';
import { ease } from '@/lib/motion';

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};


export default function NotFound() {
  const reduce = useReducedMotion();
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-white via-[#f8fffe] to-[#f0fffe]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large background circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-200/5 rounded-full blur-3xl" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              #00A88E 0px,
              #00A88E 1px,
              transparent 1px,
              transparent 40px
            ),
            repeating-linear-gradient(
              0deg,
              #00A88E 0px,
              #00A88E 1px,
              transparent 1px,
              transparent 40px
            )`,
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-5 py-12 sm:px-8"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Illustration Section */}
        <motion.div variants={itemVariant} className="mb-8 flex flex-col items-center sm:mb-12">
          {/* Animated medical icon illustration */}
          <motion.div
            className="relative size-32 sm:size-40 flex items-center justify-center mb-6"
            animate={reduce ? { opacity: 1 } : { y: [-12, 12, -12] }}
            transition={reduce ? { duration: 0.01 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Outer circle with gradient border */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
            <div className="absolute inset-2 rounded-full border border-primary/10" />

            {/* Main illustration - Doctor with question mark */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background accent */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-cyan-200/10 rounded-full" />

              {/* SVG Illustration */}
              <svg
                viewBox="0 0 200 200"
                className="w-24 h-24 sm:w-32 sm:h-32 relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Doctor figure */}
                <circle cx="100" cy="50" r="18" stroke="#00A88E" strokeWidth="2.5" fill="none" />
                {/* Head fill with lighter color */}
                <circle cx="100" cy="50" r="16" stroke="none" fill="#00A88E" opacity="0.15" />

                {/* Doctor body - medical coat */}
                <path
                  d="M 80 68 L 75 110 Q 75 115 80 115 L 120 115 Q 125 115 125 110 L 120 68 Z"
                  stroke="#00A88E"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Arms */}
                <line x1="80" y1="75" x2="55" y2="95" stroke="#00A88E" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="120" y1="75" x2="145" y2="95" stroke="#00A88E" strokeWidth="2.5" strokeLinecap="round" />

                {/* Hands */}
                <circle cx="55" cy="95" r="5" stroke="#00A88E" strokeWidth="2.5" fill="none" />
                <circle cx="145" cy="95" r="5" stroke="#00A88E" strokeWidth="2.5" fill="none" />

                {/* Large question mark - indicating confusion */}
                <text
                  x="100"
                  y="160"
                  fontSize="48"
                  fontWeight="bold"
                  fill="#00A88E"
                  opacity="0.4"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  ?
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            variants={itemVariant}
            className="h-1 w-16 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"
          />
        </motion.div>

        {/* Text content */}
        <motion.div className="text-center max-w-2xl" variants={itemVariant}>
          {/* Main heading - 404 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-4">
            <span className="bg-linear-to-r from-primary to-cyan-600 bg-clip-text text-transparent">404</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Halaman Tidak Ditemukan
          </h2>

          {/* Subtitle */}
          <p className="text-pretty text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto mb-2">
            Maaf, halaman yang Anda cari sepertinya tidak ada atau sudah dipindahkan.
          </p>

          {/* Additional helpful text */}
          <p className="text-pretty text-sm sm:text-base text-slate-500 mb-10 sm:mb-14">
            Tim kami akan membantu mengarahkan Anda ke informasi yang tepat.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          variants={itemVariant}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto justify-center"
        >
          {/* Primary button - Back to home */}
          <HomeTopLink
            href="/"
            className="group/btn inline-flex items-center justify-center gap-2 rounded-xl border-0 bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-[color,background-color,box-shadow,transform] duration-300 hover:bg-primary-deep hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 active:scale-0.96"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover/btn:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </HomeTopLink>

          {/* Secondary button - View services */}
          <Link
            href="/pelayanan/"
            className="group/btn inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-white px-8 py-3.5 text-base font-semibold text-primary transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:border-primary/60 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 active:scale-0.96"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            Lihat Layanan Kami
          </Link>
        </motion.div>

        {/* Additional help links */}
        <motion.div variants={itemVariant} className="mt-14 sm:mt-16 text-center">
          <p className="text-sm text-slate-500 mb-4">
            Atau jelajahi halaman populer:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Tentang Kami', href: '/tentang-kami/' },
              { label: 'Tim Dokter', href: '/tim-dokter/' },
              { label: 'Artikel', href: '/artikel/' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex px-4 py-2 rounded-lg text-sm font-medium text-slate-600 bg-white border border-slate-200 transition-[color,border-color,box-shadow] duration-200 hover:border-primary/40 hover:text-primary hover:shadow-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Footer message */}
        <motion.div variants={itemVariant} className="mt-16 sm:mt-20 text-center text-xs text-slate-400">
          <p>
            Butuh bantuan? Hubungi kami di{' '}
            <a
              href="tel:+6280000000000"
              className="text-primary hover:underline hover:decoration-from-font hover:[text-underline-position:from-font] underline-offset-4 font-medium transition-colors"
            >
              +62 800-0000-0000
            </a>
          </p>
        </motion.div>
      </motion.div>

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 border border-primary/10 rounded-3xl pointer-events-none"
        aria-hidden
        animate={reduce ? { opacity: 1 } : { rotate: 360 }}
        transition={reduce ? { duration: 0.01 } : { duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-32 left-5 w-16 h-16 border border-primary/10 rounded-2xl pointer-events-none"
        aria-hidden
        animate={reduce ? { opacity: 1 } : { rotate: -360 }}
        transition={reduce ? { duration: 0.01 } : { duration: 25, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
