import {
  Fira_Code as FontMono,
  Inter as FontSans,
  DM_Sans,
  Manrope,
  Montserrat,
  Poppins,
  Raleway,
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

// import { Fira_Code as FontMono, Inter as FontSans } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  // fallback: ['system-ui', 'arial'],
});
export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  // fallback: ['system-ui', 'arial'],
});
export const raleWay = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});
export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});
export const dmsans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
});
