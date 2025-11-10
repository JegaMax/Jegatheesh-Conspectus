import type { Metadata } from "next";
import { Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-droid-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jegatheesh C - Software Engineer | Java | Spring Boot | React | Angular",
  description: "Jegatheesh C - Software Engineer with 4+ years of experience in full-stack development. Java, Spring Boot, React, Angular specialist based in India.",
  keywords: [
    "Jegatheesh C",
    "Jegatheesh",
    "Software Engineer",
    "Java Developer",
    "Spring Boot",
    "React",
    "Angular",
    "Full Stack Developer",
    "India"
  ],
  authors: [{ name: "Jegatheesh C" }],
  creator: "Jegatheesh C",
  publisher: "Jegatheesh C",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jegamax.github.io/Jegatheesh-Conspectus/",
    title: "Jegatheesh C - Software Engineer Portfolio",
    description: "Software Engineer with 4+ years of experience in full-stack web application development using Java, Spring Boot, React, and Angular.",
    siteName: "Jegatheesh C Portfolio",
    images: [
      {
        url: "https://jegamax.github.io/Jegatheesh-Conspectus/assets/img/jega.jpg",
        width: 1200,
        height: 630,
        alt: "Jegatheesh C - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jegatheesh C - Software Engineer Portfolio",
    description: "Software Engineer with 4+ years of experience in full-stack web application development using Java, Spring Boot, React, and Angular.",
    images: ["https://jegamax.github.io/Jegatheesh-Conspectus/assets/img/jega.jpg"],
  },
  verification: {
    google: "8WDxnzXSfmBpP5i3QQZipeS1sCXJvJ_68PBroOurgi4",
  },
  alternates: {
    canonical: "https://jegamax.github.io/Jegatheesh-Conspectus/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${robotoSlab.variable}`}>
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        
        {/* Structured Data */}
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jegatheesh C",
              "jobTitle": "Software Engineer",
              "url": "https://jegamax.github.io/Jegatheesh-Conspectus/",
              "sameAs": [
                "https://www.linkedin.com/in/jegatheesh-c",
                "https://www.instagram.com/_.jegatheesh._.c._/",
                "https://m.facebook.com/profile.php?id=100007325178542"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kanyakumari",
                "addressRegion": "Tamil Nadu",
                "postalCode": "629166",
                "addressCountry": "India"
              },
              "email": "jega7354@gmail.com",
              "telephone": "+919894371096",
              "description": "Software Engineer with 4+ years of experience in full-stack web application development using Java, Spring Boot, React, and Angular."
            }
          `}
        </Script>
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
