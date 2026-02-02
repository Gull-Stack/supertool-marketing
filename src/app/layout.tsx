import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuperTool — The All-in-One Platform for Plastic Surgery Practices",
  description: "Websites, analytics, scheduling, billing, and patient management — built specifically for plastic surgeons. Launch your practice into the future.",
  keywords: ["plastic surgery", "practice management", "medical website", "surgeon software", "patient scheduling", "HIPAA compliant"],
  openGraph: {
    title: "SuperTool — The All-in-One Platform for Plastic Surgery Practices",
    description: "Websites, analytics, scheduling, billing, and patient management — built specifically for plastic surgeons.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
