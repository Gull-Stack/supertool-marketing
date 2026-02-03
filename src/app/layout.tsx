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
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <html lang="en" className="dark">
      <head>
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
