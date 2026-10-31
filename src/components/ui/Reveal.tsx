'use client';

import { LazyMotion, domAnimation, m, MotionConfig } from 'framer-motion';

/** Wrap the app once: lazy-loads the small animation feature set and honours prefers-reduced-motion. */
export function MotionRoot({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Fade + rise when scrolled into view. */
export function Reveal({
  children, delay = 0, y = 24, className, as = 'div',
}: { children: React.ReactNode; delay?: number; y?: number; className?: string; as?: 'div' | 'li' | 'p' | 'article' | 'figure' }) {
  const Tag = m[as] as typeof m.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </Tag>
  );
}

/** Word-by-word masked text reveal for headings. A visually-hidden copy keeps the heading readable as one string. */
export function RevealText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.22em', marginBottom: '-0.22em' }}>
            <m.span
              style={{ display: 'inline-block' }}
              initial={{ y: '105%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.85, delay: delay + i * 0.06, ease }}
            >
              {w}{i < words.length - 1 ? '\u00A0' : ''}
            </m.span>
          </span>
        ))}
      </span>
    </span>
  );
}

export function SectionMarker({ n, label }: { n: string; label: string }) {
  return (
    <div className="marker mono" aria-hidden="true">
      <b>{n}</b><span>/ {label}</span>
    </div>
  );
}
