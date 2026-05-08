'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const SCROLL_THRESHOLD_PX = 400;

const ease = [0.22, 1, 0.36, 1] as const;

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <AnimatePresence mode="wait">
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
            'bg-[#00A88E] text-white shadow-md shadow-[#00A88E]/25',
            'ring-1 ring-white/15 ring-offset-0',
            'transition-colors duration-200 hover:bg-[#008C76] hover:shadow-lg hover:shadow-[#00A88E]/35',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A88E]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
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
