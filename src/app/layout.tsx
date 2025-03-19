import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuadB TECH",
  description:
    "QuadB TECH is a software development company that specializes in web development, mobile app development, and digital marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>QuadB Technology</title>
      <link rel="icon" href="/Logo Black.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          strategy="beforeInteractive"
          src="https://www.google.com/recaptcha/api.js?render=6LcerfkqAAAAAIvyEjoxZj_RRG3EBK2NTsqXpIeC"
        />
        <div className="container overflow-x-hidden mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
