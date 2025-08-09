import localFont from 'next/font/local';
import { Playfair_Display, Poppins } from 'next/font/google';

// Google Fonts
export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Existing Local Fonts
export const anticyclone = localFont({
  src: '../public/fonts/anticyclone/Anticyclone-VariableVF.ttf',
  variable: '--font-anticyclone',
  display: 'swap',
});

export const laserFlip = localFont({
  src: '../public/fonts/laser_flip/Laser_Flip_Font/Laser_Flip.otf',
  variable: '--font-laser-flip',
  display: 'swap',
});

// Brotesque Fonts
export const brotesqueRegular = localFont({
  src: '../public/fonts/Brotesque Regular.ttf',
  variable: '--font-brotesque',
  display: 'swap',
});

export const brotesqueHollow = localFont({
  src: '../public/fonts/Brotesque Hollow.ttf',
  variable: '--font-brotesque-hollow',
  display: 'swap',
});

// NEW MOZILLA HEADLINE FONTS
export const mozillaHeadline = localFont({
  src: [
    {
      path: '../public/fonts/mozilla-headline-type-v1.01/fonts/ttf/MozillaHeadline-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/mozilla-headline-type-v1.01/fonts/ttf/MozillaHeadline-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/mozilla-headline-type-v1.01/fonts/ttf/MozillaHeadline-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/mozilla-headline-type-v1.01/fonts/ttf/MozillaHeadline-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mozilla-headline',
  display: 'swap',
});

export const mozillaHeadlineCondensed = localFont({
  src: [
    {
      path: '../public/fonts/mozilla-headline-type-v1.01/fonts/ttf/MozillaHeadline-CondensedRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/mozilla-headline-type-v1.01/fonts/ttf/MozillaHeadline-CondensedSemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/mozilla-headline-type-v1.01/fonts/ttf/MozillaHeadline-CondensedBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mozilla-headline-condensed',
  display: 'swap',
});