'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { THEME_KEY, type Theme } from '@/lib/theme';

type Ctx = { theme: Theme; toggle: () => void; soundOn: boolean; toggleSound: () => void };
const ThemeContext = createContext<Ctx | null>(null);

export function useTheme() {
  const c = useContext(ThemeContext);
  if (!c) throw new Error('useTheme must be used inside ThemeProvider');
  return c;
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // "light" on the server; the inline head script has already set the real attribute,
  // and we sync from it on mount.
  const [theme, setTheme] = useState<Theme>('light');
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const attr = document.documentElement.getAttribute('data-theme');
    // Initial sync from the DOM (set by the pre-paint head script): an external system.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(attr === 'dark' ? 'dark' : 'light');
    try { setSoundOn(localStorage.getItem('lamp-sound') === 'on'); } catch {}

    // Follow OS changes only while the visitor hasn't made an explicit choice.
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      try { if (localStorage.getItem(THEME_KEY)) return; } catch {}
      const next: Theme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      setTheme(next);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next: Theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    // Brief class that enables colour transitions only during a switch (keeps scroll/hover cheap otherwise).
    root.classList.add('theme-switching');
    root.setAttribute('data-theme', next);
    window.setTimeout(() => root.classList.remove('theme-switching'), 700);
    try { localStorage.setItem(THEME_KEY, next); } catch {}
    setTheme(next);
  }, []);

  const toggleSound = useCallback(() => {
    setSoundOn((s) => {
      try { localStorage.setItem('lamp-sound', s ? 'off' : 'on'); } catch {}
      return !s;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggle, soundOn, toggleSound }), [theme, toggle, soundOn, toggleSound]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
