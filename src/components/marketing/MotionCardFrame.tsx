'use client';

import { motion } from 'framer-motion';

import { ease } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface MotionCardFrameProps {
  index: number;
  as?: 'div' | 'li';
  shellAs?: React.ElementType;
  variant?: 'default' | 'flat';
  initialY?: number;
  viewportMargin?: string;
  delayStep?: number;
  wrapperClassName?: string;
  shellClassName?: string;
  children: React.ReactNode;
}

const SHELL_DEFAULT =
  'card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 ' +
  'bg-white shadow-[0_1px_3px_rgb(15_23_42/0.06)] transition-all duration-300 ' +
  'hover:border-[#00A88E]/40 hover:shadow-lg hover:shadow-[#00A88E]/10';

const SHELL_FLAT =
  'group/card flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-sm p-0 ' +
  'transition-all duration-300 hover:shadow-lg hover:border-[#00A88E]/60';

export function MotionCardFrame({
  index,
  as = 'div',
  shellAs = 'article',
  variant = 'default',
  initialY = 24,
  viewportMargin = '-50px',
  delayStep = 0.08,
  wrapperClassName,
  shellClassName,
  children,
}: MotionCardFrameProps) {
  const Wrapper = as === 'li' ? motion.li : motion.div;
  const Shell = shellAs;

  return (
    <Wrapper
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ duration: 0.45, ease, delay: index * delayStep }}
      className={cn('h-full', wrapperClassName)}
    >
      <Shell className={cn(variant === 'flat' ? SHELL_FLAT : SHELL_DEFAULT, shellClassName)}>
        {children}
      </Shell>
    </Wrapper>
  );
}
