import { Outfit, JetBrains_Mono } from 'next/font/google';

// Heading/UI font (Outfit)
export const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

// Monospace font for code/terminal aesthetic
export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});