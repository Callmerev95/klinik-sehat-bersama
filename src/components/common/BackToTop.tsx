'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { ease } from '@/lib/motion';

const SCROLL_THRESHOLD_PX = 400;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }, []);

  return (
    <AnimatePresence initial={false} mode="wait">
      {visible ? (
        <motion.button
          key="back-to-top"
          type="button"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.88 }}
          transition={{ duration: 0.28, ease }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={scrollToTop}
          className={[
            'fixed z-40 flex size-12 items-center justify-center rounded-full',
            'bg-primary text-white shadow-md shadow-primary/25',
            'ring-1 ring-white/15 ring-offset-0',
            'transition-colors duration-200 hover:bg-primary-deep hover:shadow-lg hover:shadow-primary/35',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
            'bottom-[max(1.5rem,env(safe-area-inset-bottom,0px)+0.75rem)] right-5 sm:bottom-8 sm:right-6 lg:bottom-10 lg:right-8',
          ].join(' ')}
          aria-label="Kembali ke atas halaman"
        >
          <ChevronUp className="size-5" strokeWidth={2} aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
