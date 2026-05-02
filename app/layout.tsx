import type { Metadata } from "next";
import { Anton, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MarqueeBar } from "@/components/marquee-bar";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://desires.blini.world"),
  title: {
    default: "DESIRES — wear the want",
    template: "%s · DESIRES",
  },
  description:
    "DESIRES is a streetwear label of small batch garments, built from the want, made for the wear.",
  openGraph: {
    type: "website",
    siteName: "DESIRES",
    title: "DESIRES — wear the want",
    description:
      "Small batch streetwear. Made from the want, made for the wear.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${spaceGrotesk.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain bg-bg text-ink">
        <MarqueeBar />
        <SiteHeader />
        <main className="flex-1 relative z-[2]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
