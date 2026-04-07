import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextSport — AI Swing Analyzer for Youth Baseball & Softball",
  description:
    "Upload your child's swing video and get instant AI-powered coaching feedback. Free to start. Built for youth baseball and softball players and their parents.",
  keywords:
    "youth baseball swing analyzer, AI baseball coaching app, baseball swing analysis, youth baseball training app",
  openGraph: {
    title: "NextSport — AI Swing Analyzer for Youth Baseball & Softball",
    description:
      "Upload your child's swing video and get instant AI-powered coaching feedback. Free to start.",
    url: "https://nextsport.ai",
    siteName: "NextSport",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
