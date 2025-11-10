import type { Metadata } from "next";
import { Merriweather, Raleway } from "next/font/google";
import "./globals.css";

// FONT CONFIGURATION - Change these to swap fonts site-wide
const headingFont = Raleway({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Merriweather({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joseph Saltarelli ADR - Mediation & Arbitration",
  description: "Professional Alternative Dispute Resolution Services - Mediation and Arbitration by Joseph Saltarelli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/background6.jpg" as="image" />
      </head>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
