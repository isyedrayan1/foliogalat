import type { Metadata } from "next";
import "./globals.css";
import {
  playfairDisplay,
  poppins,
  laserFlip,
  brotesqueRegular,
  brotesqueHollow,
  mozillaHeadline,
  mozillaHeadlineCondensed,
} from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Galat Portfolio",
  description: "Professional portfolio showcasing modern web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${playfairDisplay.variable} 
          ${poppins.variable}
          ${laserFlip.variable} 
          ${brotesqueRegular.variable}
          ${brotesqueHollow.variable}
          ${mozillaHeadline.variable}
          ${mozillaHeadlineCondensed.variable}
          antialiased min-h-screen text-white font-sans
        `}
      >
        {children}
      </body>
    </html>
  );
}
