'use client';

import { useRef } from 'react';
import { m, useScroll, useSpring } from 'framer-motion';
import { experience } from '@/data/portfolio';
import { Reveal, RevealText, SectionMarker } from '@/components/ui/Reveal';
import styles from './Experience.module.css';

export default function Experience() {
  const track = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: track, offset: ['start 65%', 'end 55%'] });
  const grow = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <section id="experience" className={`section ${styles.experience}`} aria-labelledby="exp-title">
      <div className="wrap">
        <SectionMarker n="04" label="Experience" />
        <h2 id="exp-title" className={`h2 ${styles.title}`}>
          <RevealText text="Where the" /> <em><RevealText text="work happened." delay={0.12} /></em>
        </h2>

        <ol ref={track} className={styles.timeline}>
          <span className={styles.rail} aria-hidden="true">
            <m.span className={styles.railFill} style={{ scaleY: grow }} />
          </span>
          {experience.map((job, i) => (
            <li key={job.company} className={styles.entry}>
              <span className={styles.node} aria-hidden="true" />
              <Reveal className={styles.when}>
                <p className={`${styles.period} mono`}>{job.startDate} — {job.endDate}</p>
                {'duration' in job && job.duration && <p className={`${styles.dur} mono`}>{job.duration}</p>}
                <p className={`${styles.where} mono`}>{job.mode} · {job.location}</p>
              </Reveal>
              <div className={styles.what}>
                <Reveal delay={0.05}>
                  <h3 className={styles.role}>{job.title}</h3>
                  <p className={styles.company}>{job.company} <span className="mono">{job.type}</span></p>
                </Reveal>
                {'positions' in job && job.positions && (
                  <Reveal delay={0.08}>
                    <ul className={styles.positions}>
                      {job.positions.map((p) => (
                        <li key={p.title} className="mono">{p.title} · {p.startDate} — {p.endDate} · {p.duration}</li>
                      ))}
                    </ul>
                  </Reveal>
                )}
                <ul className={styles.bullets}>
                  {job.description.map((d, k) => (
                    <Reveal as="li" key={d} delay={0.06 * k}>{d}</Reveal>
                  ))}
                </ul>
                <Reveal delay={0.1}>
                  <ul className={styles.stack} aria-label={`Technologies at ${job.company}`}>
                    {job.techStack.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </Reveal>
                {i === 0 && <span className="sr-only">Current role</span>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
