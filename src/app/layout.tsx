import type { Metadata, Viewport } from 'next';
import { Fraunces, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import { MotionRoot } from '@/components/ui/Reveal';
import { themeInitScript } from '@/lib/theme';
import { SITE_URL, asset, yearsOfExperience } from '@/lib/site';
import { personalInfo } from '@/data/portfolio';

const fraunces = Fraunces({ subsets: ['latin'], axes: ['opsz'], style: ['normal', 'italic'], variable: '--font-fraunces', display: 'swap' });
const instrument = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap', preload: false });

const years = yearsOfExperience();
const TITLE = 'Jegatheesh C | Software Engineer, Java, Spring Boot, Angular & React';
const DESCRIPTION = `Portfolio of Jegatheesh C, a software engineer with ${years}+ years of full-stack experience building scalable web applications with Java, Spring Boot, REST APIs, React and Angular. Based in Kanyakumari, India.`;
const OG_IMAGE = `${SITE_URL}/assets/img/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: personalInfo.name, url: SITE_URL }],
  creator: personalInfo.name,
  alternates: { canonical: `${SITE_URL}/` },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    type: 'website', locale: 'en_US', url: `${SITE_URL}/`, siteName: 'Jegatheesh C',
    title: 'Jegatheesh C | Software Engineer',
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Jegatheesh C, software engineer: Java, Spring Boot, Angular and React' }],
  },
  twitter: { card: 'summary_large_image', title: 'Jegatheesh C | Software Engineer', description: DESCRIPTION, images: [OG_IMAGE] },
  verification: { google: '8WDxnzXSfmBpP5i3QQZipeS1sCXJvJ_68PBroOurgi4' },
  icons: {
    icon: [
      { url: asset('/assets/favicon/favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
      { url: asset('/assets/favicon/favicon-16x16.png'), sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: asset('/assets/favicon/apple-touch-icon.png'), sizes: '180x180' },
  },
  manifest: asset('/assets/favicon/site.webmanifest'),
};

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b2545' },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: personalInfo.name,
      alternateName: 'Jegatheesh Chellathurai',
      jobTitle: 'Software Engineer',
      description: DESCRIPTION,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/assets/img/opt/jega.webp`,
      email: `mailto:${personalInfo.email}`,
      sameAs: [personalInfo.social.linkedin, personalInfo.social.github, personalInfo.social.instagram, personalInfo.social.facebook],
      address: { '@type': 'PostalAddress', addressLocality: personalInfo.location.city, addressRegion: personalInfo.location.state, addressCountry: 'IN' },
      worksFor: { '@type': 'Organization', name: 'Aadhtech' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'SNS College of Technology' },
      knowsAbout: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Angular', 'React', 'JavaScript', 'TypeScript', 'MySQL', 'PostgreSQL', 'AWS', 'CI/CD', 'Microservices'],
    },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: 'Jegatheesh C, Portfolio', inLanguage: 'en', author: { '@id': `${SITE_URL}/#person` } },
    { '@type': 'ProfilePage', url: `${SITE_URL}/`, name: TITLE, mainEntity: { '@id': `${SITE_URL}/#person` } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${fraunces.variable} ${instrument.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      </head>
      <body>
        <ThemeProvider>
          <MotionRoot>{children}</MotionRoot>
        </ThemeProvider>
      </body>
    </html>
  );
}
