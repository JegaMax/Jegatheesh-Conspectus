import { Montserrat, Roboto_Slab } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '100', '300', '700'],
  variable: '--font-roboto-slab',
  display: 'swap',
});
