import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VOYAGE — Luxury Travel Experiences",
  description: "We define the void. We engineer the impossible. Experience the world through a lens of absolute rarity with VOYAGE.",
};

import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-neutral-900 selection:text-white`}
      >
        <CustomCursor />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
