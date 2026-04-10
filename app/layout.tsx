import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "NextSport — AI Swing Analyzer for Youth Baseball & Softball",
  description:
    "Upload your child's swing video and get instant AI-powered coaching feedback. Free to start. Built for youth baseball and softball players and their parents.",
  keywords:
    "youth baseball swing analyzer, AI baseball coaching app, baseball swing analysis, youth baseball training app, softball swing analyzer",
  openGraph: {
    title: "NextSport — AI Swing Analyzer for Youth Baseball & Softball",
    description:
      "Upload your child's swing video and get instant AI-powered coaching feedback. Free to start.",
    url: "https://nextsport.ai",
    siteName: "NextSport",
    type: "website",
  },
};

const GA_ID = "G-3W51V1P77L";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
