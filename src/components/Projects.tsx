'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { asset } from '@/lib/site';
import { Reveal, RevealText, SectionMarker } from '@/components/ui/Reveal';
import styles from './Projects.module.css';

type Project = (typeof projects)[number];

function Shot({ p, sizes, eager = false }: { p: Project; sizes: string; eager?: boolean }) {
  const base = `/assets/img/opt/${p.imageKey}`;
  return (
    <picture>
      <source type="image/avif" srcSet={asset(`${base}.avif`)} sizes={sizes} />
      <source type="image/webp" srcSet={asset(`${base}.webp`)} sizes={sizes} />
      <img
        src={asset(`${base}.webp`)} alt={p.imageAlt}
        width={p.imageSize.width} height={p.imageSize.height}
        loading={eager ? 'eager' : 'lazy'} decoding="async"
      />
    </picture>
  );
}

function Stack({ items }: { items: string[] }) {
  return <ul className={styles.stack} aria-label="Technology">{items.map((t) => <li key={t}>{t}</li>)}</ul>;
}

function Links({ p }: { p: Project }) {
  if (!p.github && !p.demo) return null;
  return (
    <div className={styles.links}>
      {p.github && <a className="ulink mono" href={p.github} target="_blank" rel="noopener noreferrer">GitHub ↗<span className="sr-only"> (opens in a new tab)</span></a>}
      {p.demo && <a className="ulink mono" href={p.demo} target="_blank" rel="noopener noreferrer">Live site ↗<span className="sr-only"> (opens in a new tab)</span></a>}
    </div>
  );
}

/** Large featured layout */
function Featured({ p }: { p: Project }) {
  return (
    <article className={styles.featured} aria-labelledby={`p-${p.slug}`}>
      <Reveal className={styles.fMedia}>
        <div className={styles.frame}><Shot p={p} sizes="(max-width: 900px) 100vw, 58vw" /></div>
        <p className={`${styles.caption} mono`}>Fig. 01 — {p.category} · {p.duration}</p>
      </Reveal>
      <div className={styles.fBody}>
        <Reveal><span className={`${styles.num} mono`}>01 / {p.category}</span></Reveal>
        <h3 id={`p-${p.slug}`} className={styles.fTitle}><RevealText text={p.title} /></h3>
        <Reveal delay={0.1}>
          <dl className={styles.dl}>
            <div><dt className="mono">Problem</dt><dd>{p.problem}</dd></div>
            <div><dt className="mono">Solution</dt><dd>{p.solution}</dd></div>
          </dl>
          <ol className={styles.arch} aria-label="System parts">
            {p.architecture.map((a, i) => <li key={a}><span className="mono">{String(i + 1).padStart(2, '0')}</span>{a}</li>)}
          </ol>
          <Stack items={p.stack} />
          <details className={styles.more}>
            <summary className="mono">Full write-up</summary>
            <p>{p.description}</p>
          </details>
          <Links p={p} />
        </Reveal>
      </div>
    </article>
  );
}

/** Horizontal showcase */
function Horizontal({ p }: { p: Project }) {
  return (
    <article className={styles.horizontal} aria-labelledby={`p-${p.slug}`}>
      <div className={styles.hText}>
        <Reveal><span className={`${styles.num} mono`}>02 / {p.category} · {p.duration}</span></Reveal>
        <h3 id={`p-${p.slug}`} className={styles.hTitle}><RevealText text={p.title} /></h3>
        <Reveal delay={0.1}>
          <p className={styles.hLead}>{p.problem}</p>
          <p className={styles.hSub}>{p.solution}</p>
          <Stack items={p.stack} />
          <Links p={p} />
        </Reveal>
      </div>
      <Reveal className={styles.hMedia} delay={0.1}>
        <div className={styles.phone}><Shot p={p} sizes="(max-width: 900px) 60vw, 260px" /></div>
      </Reveal>
    </article>
  );
}

/** Editorial index: rows expand in place; a preview image follows the cursor on hover devices */
function Index({ list }: { list: Project[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [hover, setHover] = useState<Project | null>(null);
  const preview = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent) => {
    const el = preview.current;
    if (el) el.style.transform = `translate3d(${e.clientX + 24}px, ${e.clientY - 90}px, 0)`;
  };

  return (
    <div className={styles.index} onMouseMove={move} onMouseLeave={() => setHover(null)}>
      <p className={`${styles.indexHead} mono`}>More projects</p>
      <ul>
        {list.map((p, i) => {
          const isOpen = open === p.id;
          return (
            <Reveal as="li" key={p.id} delay={i * 0.05} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
              <h3 className={styles.itemH}>
                <button
                  type="button" className={styles.itemBtn} aria-expanded={isOpen} aria-controls={`panel-${p.slug}`}
                  onClick={() => setOpen(isOpen ? null : p.id)}
                  onMouseEnter={() => setHover(p)} onFocus={() => setHover(p)} onBlur={() => setHover(null)}
                >
                  <span className={`${styles.iNum} mono`}>{String(p.id).padStart(2, '0')}</span>
                  <span className={styles.iTitle}>{p.title}</span>
                  <span className={`${styles.iMeta} mono`}>{p.category} · {p.duration}</span>
                  <span className={styles.plus} aria-hidden="true" />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    id={`panel-${p.slug}`} role="region" aria-label={`${p.title} details`}
                    className={styles.panel}
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={styles.panelIn}>
                      <div className={styles.panelMedia}><Shot p={p} sizes="(max-width: 900px) 90vw, 320px" /></div>
                      <div>
                        <dl className={styles.dl}>
                          <div><dt className="mono">Problem</dt><dd>{p.problem}</dd></div>
                          <div><dt className="mono">Solution</dt><dd>{p.solution}</dd></div>
                        </dl>
                        <Stack items={p.stack} />
                        <details className={styles.more}>
                          <summary className="mono">Full write-up</summary>
                          <p>{p.description}</p>
                        </details>
                        <Links p={p} />
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </ul>
      <div ref={preview} className={`${styles.preview} ${hover && open !== hover.id ? styles.previewOn : ""}`} aria-hidden="true">
        {hover && open !== hover.id && <Shot p={hover} sizes="260px" />}
      </div>
    </div>
  );
}

export default function Projects() {
  const [featured, horizontal, ...rest] = projects;
  return (
    <section id="projects" className={`section ${styles.projects}`} aria-labelledby="projects-title">
      <div className="wrap">
        <SectionMarker n="03" label="Featured projects" />
        <h2 id="projects-title" className={`h2 ${styles.title}`}>
          <RevealText text="Selected" /> <em><RevealText text="work." delay={0.12} /></em>
        </h2>
        <Featured p={featured} />
        <Horizontal p={horizontal} />
        <Index list={rest} />
      </div>
    </section>
  );
}
