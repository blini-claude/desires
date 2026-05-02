import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MarqueeBar } from "@/components/marquee-bar";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <MarqueeBar />
        <SiteHeader />
        <main className="flex-1 relative">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
