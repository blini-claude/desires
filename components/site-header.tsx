"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/wordmark";
import { ShopDrawer } from "@/components/shop-drawer";
import { useCart } from "@/lib/cart";

const NAV: { href: string; label: string; isShop?: boolean }[] = [
  { href: "/shop", label: "Shop", isShop: true },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const pathname = usePathname();
  const lightBg = pathname !== "/";
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close shop drawer on route change
  useEffect(() => {
    setShopOpen(false);
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="site-header" data-scrolled={scrolled || lightBg} data-light={lightBg ? "true" : undefined}>
        <div className="site-header__inner">
          <button
            aria-label="Menu"
            className="site-header__menu-btn"
            onClick={() => setOpen((s) => !s)}
          >
            <span />
            <span />
          </button>

          <nav className="site-header__nav">
            {NAV.map((n) =>
              n.isShop ? (
                <button
                  key={n.href}
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded={shopOpen}
                  className="site-header__link site-header__link--btn"
                  onClick={() => setShopOpen((s) => !s)}
                >
                  {n.label}
                </button>
              ) : (
                <Link key={n.href} href={n.href} className="site-header__link">
                  {n.label}
                </Link>
              )
            )}
          </nav>

          <Link href="/" className="site-header__brand" aria-label="Desires — Home">
            <Wordmark />
          </Link>

          <div className="site-header__right">
            <Link href="/account" className="site-header__link site-header__link--hide-mobile">
              Account
            </Link>
            <Link href="/search" aria-label="Search" className="site-header__link">⌕</Link>
            <button
              type="button"
              className="site-header__link site-header__link--btn"
              onClick={() => setCartOpen(true)}
              aria-haspopup="dialog"
            >
              Cart <span className="site-header__cart-count">({String(count).padStart(2, "0")})</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="site-header__drawer">
            <button
              type="button"
              className="site-header__link site-header__link--btn"
              onClick={() => { setOpen(false); setShopOpen(true); }}
              style={{ textAlign: "left" }}
            >
              Shop
            </button>
            {NAV.filter((n) => !n.isShop).map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="site-header__link">
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <ShopDrawer open={shopOpen} onClose={() => setShopOpen(false)} />
    </>
  );
}
