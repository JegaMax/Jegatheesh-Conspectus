'use client';

import { useState } from 'react';
import { skillGroups } from '@/data/portfolio';
import { Reveal, RevealText, SectionMarker } from '@/components/ui/Reveal';
import styles from './Skills.module.css';

export default function Skills() {
  const [focus, setFocus] = useState<{ group: string; usedAt?: string; name: string } | null>(null);

  return (
    <section id="skills" className={`section ${styles.skills}`} aria-labelledby="skills-title">
      <div className="wrap">
        <SectionMarker n="02" label="Technical skills" />
        <h2 id="skills-title" className={`h2 ${styles.title}`}>
          <RevealText text="The toolkit," /> <em><RevealText text="by discipline." delay={0.15} /></em>
        </h2>

        <div className={styles.index}>
          {skillGroups.map((g, gi) => (
            <Reveal key={g.id} delay={0.04 * gi} className={styles.row}>
              <h3 className={styles.cat}><span className="mono" aria-hidden="true">{String(gi + 1).padStart(2, '0')}</span>{g.label}</h3>
              <ul className={styles.items} onMouseLeave={() => setFocus(null)}>
                {g.items.map((it) => (
                  <li key={it.name}>
                    <button
                      type="button"
                      className={styles.chip}
                      aria-pressed={focus?.name === it.name}
                      onMouseEnter={() => setFocus({ group: g.id, ...it })}
                      onFocus={() => setFocus({ group: g.id, ...it })}
                      onBlur={() => setFocus(null)}
                      onClick={() => setFocus(focus?.name === it.name ? null : { group: g.id, ...it })}
                    >
                      {it.name}
                    </button>
                  </li>
                ))}
              </ul>
              <p className={`${styles.note} mono`} aria-live="polite">
                {focus?.group === g.id ? (focus.usedAt ? `Used at → ${focus.usedAt}` : focus.name) : ''}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
