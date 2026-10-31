'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PullChainLamp from '@/components/lamp/PullChainLamp';
import styles from './Nav.module.css';

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;

export default function Nav() {
  const [active, setActive] = useState<string>('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bar, setBar] = useState({ x: 0, w: 0 });
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Active section via IntersectionObserver
  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  // Slide the indicator under the active link
  useLayoutEffect(() => {
    const measure = () => {
      const el = linkRefs.current[active];
      if (el) setBar({ x: el.offsetLeft, w: el.offsetWidth });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active]);

  // Mobile menu: Escape to close + scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`wrap ${styles.bar}`}>
        <a href="#home" className={styles.brand}>
          <span className={styles.mono}>JC</span>
          <span className={styles.brandName}>Jegatheesh C</span>
        </a>

        <nav aria-label="Primary" className={`${styles.nav} ${open ? styles.open : ''}`} id="site-nav">
          <ul className={styles.list}>
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  ref={(el) => { linkRefs.current[n.id] = el; }}
                  href={`#${n.id}`}
                  className={`${styles.link} ${active === n.id ? styles.active : ''}`}
                  aria-current={active === n.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className={styles.idx} aria-hidden="true">{String(NAV.findIndex((x) => x.id === n.id)).padStart(2, '0')}</span>
                  {n.label}
                </a>
              </li>
            ))}
            <span className={styles.indicator} aria-hidden="true" style={{ transform: `translateX(${bar.x}px)`, width: bar.w }} />
          </ul>
        </nav>

        <div className={styles.right}>
          <PullChainLamp width="clamp(34px, 9vw, 40px)" variant="nav" />
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
