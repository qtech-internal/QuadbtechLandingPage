import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import CustomCursor from "./components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "QuadB Tech",
    template: "%s - QuadB Tech",
  },
  description:
    "QuadB Tech excels in web & mobile app development, delivering innovative digital solutions. Elevate your business with our expert tech services.",
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "google-site-verification": "35vI2M2ABkSBwhuLZbfmDBU9xgYnTc5Z068TjFjgUsM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          strategy="beforeInteractive"
          src="https://www.google.com/recaptcha/api.js?render=6LcerfkqAAAAAIvyEjoxZj_RRG3EBK2NTsqXpIeC"
        />
        <div className="container overflow-x-hidden mx-auto">
          <Navbar />
          <CustomCursor />
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
