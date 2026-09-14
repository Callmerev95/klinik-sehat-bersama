'use client';

import { motion, useReducedMotion } from 'framer-motion';

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
  'bg-white shadow-[0_1px_3px_rgb(15_23_42/0.06)] transition-[border-color,box-shadow] duration-300 ' +
  'hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10';

const SHELL_FLAT =
  'group/card flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-sm p-0 ' +
  'transition-[border-color,box-shadow] duration-300 hover:shadow-lg hover:border-primary/60';

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
  const reduce = useReducedMotion();

  return (
    <Wrapper
      initial={reduce ? false : { opacity: 0, y: initialY }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ duration: reduce ? 0.01 : 0.45, ease, delay: reduce ? 0 : Math.min(index, 6) * delayStep }}
      className={cn('h-full', wrapperClassName)}
    >
      <Shell className={cn(variant === 'flat' ? SHELL_FLAT : SHELL_DEFAULT, shellClassName)}>
        {children}
      </Shell>
    </Wrapper>
  );
}
