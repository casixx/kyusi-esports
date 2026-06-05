import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Press_Start_2P } from "next/font/google";
import { DotGothic16 } from "next/font/google";
import Navbar from "./components/Navbar";


const dotGothic16 = DotGothic16({
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-dot-gothic-16', 
});

const pressStart2P = Press_Start_2P({
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-press-start-2p',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyusi-Esports",
  description: "Official website ng Kyusi Esports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${pressStart2P.variable} ${dotGothic16.variable}`} 
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
