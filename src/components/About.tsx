import { about, careerHighlights, courses, education, philosophy } from '@/data/portfolio';
import { asset, yearsOfExperience } from '@/lib/site';
import { Reveal, RevealText, SectionMarker } from '@/components/ui/Reveal';
import styles from './About.module.css';

export default function About() {
  const years = yearsOfExperience();
  const certs = courses.filter((c) => c.type === 'Certificate');
  const learning = courses.filter((c) => c.type === 'Course');

  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-title">
      <div className="wrap">
        <SectionMarker n="01" label="About" />

        <div className={styles.layout}>
          <div className={styles.head}>
            <h2 id="about-title" className="h2">
              <RevealText text="Engineer first," /> <RevealText text="builder always." delay={0.15} />
            </h2>
            <Reveal as="figure" delay={0.1} className={styles.portrait}>
              <picture>
                <source type="image/avif" srcSet={`${asset('/assets/img/opt/jega-sm.avif')} 360w, ${asset('/assets/img/opt/jega.avif')} 640w`} sizes="(max-width: 900px) 70vw, 360px" />
                <source type="image/webp" srcSet={`${asset('/assets/img/opt/jega-sm.webp')} 360w, ${asset('/assets/img/opt/jega.webp')} 640w`} sizes="(max-width: 900px) 70vw, 360px" />
                <img
                  src={asset('/assets/img/opt/jega.webp')}
                  alt="Portrait of Jegatheesh C, smiling, in a white polo shirt"
                  width={640} height={853} loading="lazy" decoding="async"
                />
              </picture>
              <figcaption className="mono">Jegatheesh C — {years}+ yrs in the craft</figcaption>
            </Reveal>
          </div>

          <div className={styles.body}>
            <Reveal><blockquote className={styles.quote}>{about.subtitle}</blockquote></Reveal>
            {about.description.map((p, i) => (
              <Reveal key={i} delay={0.05} as="p" className={i === 0 ? styles.lead : styles.p}>{p.replace('{years}', String(years))}</Reveal>
            ))}

            <div className={styles.cols}>
              <Reveal>
                <h3 className={`${styles.h3} mono`}>Philosophy</h3>
                <dl className={styles.philo}>
                  {philosophy.map((p) => (
                    <div key={p.k}><dt>{p.k}</dt><dd>{p.v}</dd></div>
                  ))}
                </dl>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 className={`${styles.h3} mono`}>Areas of expertise</h3>
                <ul className={styles.tags}>
                  {about.skills.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>

        <div className={styles.highlights}>
          <h3 className={`${styles.h3} mono`}>Career highlights</h3>
          <ul className={styles.hlist}>
            {careerHighlights.map((h, i) => (
              <Reveal as="li" key={h.figure} delay={i * 0.07} className={styles.hitem}>
                <span className={styles.fig}>{h.figure}</span>
                <span className={styles.figText}>{h.text}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className={styles.creds}>
          <h3 className={`${styles.h3} mono`}>Education &amp; credentials</h3>
          <div className={styles.credGrid}>
            <ul>
              {education.map((e) => (
                <li key={e.degree + e.year}>
                  <span className="mono">{e.year}</span>
                  <span><strong>{e.degree}</strong>, {e.institution}, {e.location}</span>
                  <span className={styles.grade}>{e.grade}</span>
                </li>
              ))}
            </ul>
            <ul>
              {certs.map((c) => (
                <li key={c.title}>
                  <span className="mono">{c.date || 'Certified'}</span>
                  <span><strong>{c.title}</strong>, {c.issuer}</span>
                  <span className={styles.grade}>Certificate</span>
                </li>
              ))}
              {learning.map((c) => (
                <li key={c.title}>
                  <span className="mono">{c.duration}</span>
                  <span><strong>{c.title}</strong>, {c.issuer}</span>
                  <span className={styles.grade}>Course</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
