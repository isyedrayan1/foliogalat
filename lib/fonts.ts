import { Inter, JetBrains_Mono } from 'next/font/google';

// Main sans-serif font for the body and UI
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Monospace font for code/terminal aesthetic
export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});