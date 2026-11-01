'use client';

import { useState } from 'react';
import { asset } from '@/lib/site';
import { personalInfo } from '@/data/portfolio';
import { Reveal, RevealText, SectionMarker } from '@/components/ui/Reveal';
import styles from './Contact.module.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable: the mailto link still works */ }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <div className="wrap">
        <SectionMarker n="05" label="Contact" />
        <h2 id="contact-title" className={styles.headline}>
          <RevealText text="Have something worth building?" /> <em><RevealText text="Let’s talk." delay={0.25} /></em>
        </h2>

        <Reveal className={styles.mail} delay={0.1}>
          <a href={`mailto:${personalInfo.email}`} className={styles.email}>
            <span>{personalInfo.email}</span><span className={styles.arrow} aria-hidden="true">↗</span>
          </a>
          <button type="button" className={`${styles.copy} mono`} onClick={copy}>
            {copied ? 'Copied ✓' : 'Copy address'}
          </button>
          <span className="sr-only" role="status" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className={styles.links}>
            <li><a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"><span className="mono">LinkedIn</span><span>jegatheesh-c</span><i aria-hidden="true">↗</i><span className="sr-only">(opens in a new tab)</span></a></li>
            <li><a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer"><span className="mono">GitHub</span><span>jegamax</span><i aria-hidden="true">↗</i><span className="sr-only">(opens in a new tab)</span></a></li>
            {personalInfo.resume && (
              <li><a href={asset(personalInfo.resume)} download><span className="mono">Resume</span><span>Download PDF</span><i aria-hidden="true">↓</i></a></li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
