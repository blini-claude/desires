import Link from "next/link";
import { CountrySelector } from "@/components/country-selector";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="pw" style={{ paddingTop: 32, paddingBottom: 16 }}>
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between"
          style={{ gap: 18, flexWrap: "wrap" }}
        >
          <p className="wordmark" style={{ fontSize: 18, letterSpacing: 4 }}>DESIRES</p>
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "10px 22px" }}>
            <Link href="/shop">Shop</Link>
            <Link href="/lookbook">Lookbook</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/about">About</Link>
            <Link href="/help/shipping">Shipping</Link>
            <Link href="/help/returns">Returns</Link>
          </nav>
        </div>
      </div>

      <div className="site-footer__bar">
        <div
          className="pw flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ paddingTop: 12, paddingBottom: 12 }}
        >
          <span style={{ color: "rgba(255,255,255,0.45)" }}>
            © {new Date().getFullYear()} Desires
          </span>
          <div className="flex items-center" style={{ gap: 18 }}>
            <CountrySelector />
            <Link href="/legal/terms">Terms</Link>
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="https://instagram.com">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
