'use client';

import { useId, useRef } from 'react';
import { animate, m, useMotionValue } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import { playChainClick } from '@/lib/click';
import styles from './PullChainLamp.module.css';

const VB_W = 240;
const VB_H = 400;
const CHAIN_X = 176;
const CHAIN_TOP = 205;
const CHAIN_REST = 62; // resting chain length (svg units)
const PULL_MAX = 34;
const PULL_TRIGGER = 12;

type Props = {
  /** CSS width (any length / clamp()); height follows the lamp's aspect ratio */
  width: string;
  variant?: 'hero' | 'nav';
};

/**
 * A vintage bedside lamp with a pull chain. Pulling (or clicking, tapping, or pressing
 * Enter/Space on) the chain toggles the theme. The chain is the only interactive part.
 */
export default function PullChainLamp({ width, variant = 'hero' }: Props) {
  const { theme, toggle, soundOn } = useTheme();
  const uid = useId().replace(/:/g, '');
  const box = useRef<HTMLDivElement>(null);
  /** px per svg unit, measured on demand so the lamp can be sized purely with CSS */
  const getScale = () => (box.current ? box.current.getBoundingClientRect().width / VB_W : 1);

  const pull = useMotionValue(0); // svg units
  const drag = useRef<{ startY: number; id: number; moved: boolean } | null>(null);

  const fire = () => {
    if (soundOn) playChainClick();
    toggle();
  };

  const springBack = () =>
    animate(pull, 0, { type: 'spring', stiffness: 520, damping: 9, mass: 0.6 });

  const tap = () => {
    // a quick, physical "tug" then spring back, toggling at the bottom of the pull
    animate(pull, PULL_MAX * 0.7, { duration: 0.09, ease: 'easeOut' }).then(springBack);
    fire();
  };

  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    pull.stop();
    drag.current = { startY: e.clientY, id: e.pointerId, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const dy = e.clientY - d.startY;
    if (Math.abs(dy) > 4) d.moved = true;
    const units = Math.max(0, Math.min(PULL_MAX + 6, dy / getScale()));
    pull.set(units);
  };
  const onPointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    drag.current = null;
    if (!d.moved) return tap();
    const triggered = pull.get() >= PULL_TRIGGER;
    springBack();
    if (triggered) fire();
  };
  const onPointerCancel = () => {
    drag.current = null;
    springBack();
  };
  // Keyboard (and assistive tech) activation: click events with detail 0
  const onClick = (e: React.MouseEvent) => {
    if (e.detail === 0) tap();
  };

  const knobY = CHAIN_TOP + CHAIN_REST;
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <div ref={box} className={`${styles.lamp} ${styles[variant]}`} style={{ width, aspectRatio: `${VB_W} / ${VB_H}` }}>
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} width="100%" height="100%" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`${uid}-cone`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" className={styles.coneStop} stopOpacity="0.85" />
            <stop offset="1" className={styles.coneStop} stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`${uid}-bulb`}>
            <stop offset="0" className={styles.bulbStop} stopOpacity="1" />
            <stop offset="1" className={styles.bulbStop} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* light cast onto the table */}
        <polygon className={styles.cone} points="54,208 186,208 238,388 2,388" fill={`url(#${uid}-cone)`} />
        <ellipse className={styles.pool} cx="120" cy="388" rx="112" ry="9" />

        {/* shadow on the table */}
        <ellipse className={styles.shadow} cx="120" cy="388" rx="46" ry="5" />

        {/* ceramic base */}
        <path className={styles.base} d="M90 386 C84 386 82 378 88 370 C60 342 62 292 100 270 L140 270 C178 292 180 342 152 370 C158 378 156 386 150 386 Z" />
        <path className={styles.baseHi} d="M96 282 C80 306 80 336 96 358" />
        <rect className={styles.neck} x="111" y="236" width="18" height="36" rx="2" />
        <rect className={styles.collar} x="106" y="226" width="28" height="12" rx="3" />

        {/* bulb + halo, sitting inside the shade */}
        <circle className={styles.halo} cx="120" cy="206" r="56" fill={`url(#${uid}-bulb)`} />
        <circle className={styles.bulb} cx="120" cy="212" r="11" />

        {/* shade */}
        <path className={styles.shade} d="M94 108 L146 108 L188 208 L52 208 Z" />
        <path className={styles.pleats} d="M120 108 L120 208 M107 108 L86 208 M133 108 L154 208 M96 114 L70 208 M144 114 L170 208" />
        <ellipse className={styles.rimGlow} cx="120" cy="208" rx="68" ry="5" />
        <rect className={styles.finial} x="116" y="98" width="8" height="12" rx="2" />
        <circle className={styles.finialBall} cx="120" cy="96" r="4" />

        {/* pull chain: beaded line + knob; moves with the `pull` motion value */}
        <m.g style={{ y: pull }}>
          <line className={styles.chain} x1={CHAIN_X} y1={CHAIN_TOP} x2={CHAIN_X} y2={knobY} />
          <rect className={styles.knob} x={CHAIN_X - 4} y={knobY} width="8" height="15" rx="4" />
        </m.g>
      </svg>

      <button
        type="button"
        className={styles.hit}
        aria-label={label}
        style={{
          left: `${(CHAIN_X / VB_W) * 100}%`,
          top: `${(CHAIN_TOP / VB_H) * 100}%`,
          height: `${((CHAIN_REST + PULL_MAX + 22) / VB_H) * 100}%`,
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onClick={onClick}
      />
    </div>
  );
}
