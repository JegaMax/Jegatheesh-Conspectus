'use client';

import { useEffect, useState } from 'react';
import PullChainLamp from '@/components/lamp/PullChainLamp';
import { useTheme } from '@/components/ThemeProvider';
import { availability, personalInfo } from '@/data/portfolio';
import { yearsOfExperience } from '@/lib/site';
import styles from './Hero.module.css';

/** Deterministic star field (pure function → identical on server and client). */
const STARS = (() => {
  let s = 7;
  const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  return Array.from({ length: 44 }, () => `${(r() * 100).toFixed(1)}vw ${(r() * 100).toFixed(1)}vh 0 ${r() > 0.8 ? 1 : 0}px var(--text-2)`).join(',');
})();

function useLocalTime(tz: string) {
  const [t, setT] = useState('');
  useEffect(() => {
    const f = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: tz, hour12: false });
    const tick = () => setT(f.format(new Date()));
    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, [tz]);
  return t;
}

export default function Hero() {
  const { soundOn, toggleSound } = useTheme();
  const time = useLocalTime(personalInfo.timeZone);
  const years = yearsOfExperience();

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.stars} aria-hidden="true"><i style={{ boxShadow: STARS }} /></div>
      <div className={styles.beam} aria-hidden="true" />

      <div className={`wrap ${styles.inner}`}>
        <p className={`${styles.status} mono`} style={{ animationDelay: '0.1s' }}>
          <span className={styles.dot} aria-hidden="true" />
          <span>{availability.label}</span>
          <span className={styles.statusText}>{availability.text} · {availability.detail}</span>
        </p>

        <h1 id="hero-title" className={styles.name}>
          <span className={styles.mask}><span className={styles.rise} style={{ animationDelay: '0.05s' }}>Jegatheesh</span></span>{' '}
          <span className={styles.mask}><span className={styles.rise} style={{ animationDelay: '0.15s' }}><i>C</i>.</span></span>
          <span className="sr-only"> — Software Engineer</span>
        </h1>

        <div className={styles.copy}>
          <p className={styles.lede} style={{ animationDelay: '0.6s' }}>
            Java services, Angular&nbsp;&amp;&nbsp;React interfaces,<br />
            <em>built line by line.</em>
          </p>
          <p className={styles.intro} style={{ animationDelay: '0.72s' }}>
            Software Development Engineer with {years}+ years in full-stack web development. I design and build scalable
            applications with Java, Spring Boot, REST APIs, SQL, React and Angular, on AWS and CI/CD pipelines.
          </p>
          <div className={styles.cta} style={{ animationDelay: '0.85s' }}>
            <a href="#projects" className="btn btn-solid">View projects <span className="arr" aria-hidden="true">→</span></a>
            <a href="#contact" className="btn btn-line">Contact me</a>
          </div>
        </div>

        <div className={styles.lampWrap}>
          <div className={styles.lampBox}>
            <PullChainLamp width="clamp(170px, 19vw, 260px)" variant="hero" />
          </div>
          <div className={styles.lampCaption}>
            <span className={`${styles.hint} mono`}><span aria-hidden="true">↓</span> Pull the chain</span>
            <button type="button" className={`${styles.sound} mono`} aria-pressed={soundOn} onClick={toggleSound}>
              Click sound: {soundOn ? 'on' : 'off'}
            </button>
          </div>
        </div>
      </div>

      <div className={`wrap ${styles.meta} mono`} aria-hidden="true">
        <span>{personalInfo.location.city}, {personalInfo.location.country}</span>
        <span className={styles.metaHide}>{personalInfo.coordinates}</span>
        <span>{time ? `IST ${time}` : ' '}</span>
        <span className={styles.scrollCue}>Scroll</span>
      </div>
    </section>
  );
}
