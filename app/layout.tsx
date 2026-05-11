import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

const fredoka = Fredoka({
  weight: ["400", "600", "700"],
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cabrow Educational Center — Wisdom and Knowledge",
  description:
    "Quality early childhood & basic education rooted in values, creativity, and purpose. Preschool & Primary school at Choice Junction, Mallam-Kasoa Highway, Ghana.",
  keywords: ["Cabrow", "Educational Center", "Ghana", "Preschool", "Primary School", "Mallam-Kasoa"],
  openGraph: {
    title: "Cabrow Educational Center",
    description: "Roots and Wings — Growing Today, Soaring Tomorrow.",
    locale: "en_GH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
