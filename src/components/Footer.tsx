import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', padding: '2rem var(--gutter)', color: 'var(--text-2)' }}>
      <p className="mono">© {new Date().getFullYear()} {personalInfo.name}</p>
      <p className="mono">Designed &amp; built by hand · Next.js · Framer Motion</p>
      <a className="mono ulink" href="#home" style={{ minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>Back to top ↑</a>
    </footer>
  );
}
