import type { Metadata } from 'next';
import StyledComponentsRegistry from './registry';
import GlobalStyles from '@/styles/GlobalStyles';
import { montserrat, robotoSlab } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Jegatheesh C - Software Engineer | Java | Spring Boot | React | Angular',
  description: 'Software Engineer with 4+ years of experience in full-stack development. Java, Spring Boot, React, Angular specialist based in India.',
  keywords: 'Jegatheesh C, Jegatheesh, Software Engineer, Java Developer, Spring Boot, React, Angular, Full Stack Developer, India',
  authors: [{ name: 'Jegatheesh C' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://jegamax.github.io/Jegatheesh-Conspectus/',
    title: 'Jegatheesh C - Software Engineer Portfolio',
    description: 'Software Engineer with 4+ years of experience in full-stack web application development using Java, Spring Boot, React, and Angular.',
    images: ['/assets/img/jega.jpg'],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jegatheesh C - Software Engineer Portfolio',
    description: 'Software Engineer with 4+ years of experience in full-stack web application development using Java, Spring Boot, React, and Angular.',
    images: ['/assets/img/jega.jpg'],
  },
  alternates: {
    canonical: 'https://jegamax.github.io/Jegatheesh-Conspectus/',
  },
  verification: {
    google: '8WDxnzXSfmBpP5i3QQZipeS1sCXJvJ_68PBroOurgi4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${robotoSlab.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Droid+Serif:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jegatheesh C',
              jobTitle: 'Software Engineer',
              url: 'https://jegamax.github.io/Jegatheesh-Conspectus/',
              sameAs: [
                'https://www.linkedin.com/in/jegatheesh-c',
                'https://www.instagram.com/_.jegatheesh._.c._/',
                'https://m.facebook.com/profile.php?id=100007325178542',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kanyakumari',
                addressRegion: 'Tamil Nadu',
                postalCode: '629166',
                addressCountry: 'India',
              },
              email: 'jega7354@gmail.com',
              telephone: '+919894371096',
              description: 'Software Engineer with 4+ years of experience in full-stack web application development using Java, Spring Boot, React, and Angular.',
            }),
          }}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
