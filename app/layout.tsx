import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import ScrollReset from "@/components/motion/ScrollReset";
import SmoothScroll from "@/components/motion/SmoothScroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumi — Healthy Hair. Beautiful Confidence.",
  description:
    "A braiding and protective-styling studio in Scarborough, Toronto. Knotless braids, cornrows, braided updos, passion twists and locs — book in a WhatsApp message.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          <Intro />
          <ScrollReset />
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
