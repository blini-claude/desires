"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/wordmark";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
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
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="site-header__link">
              {n.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="site-header__brand" aria-label="Desires — Home">
          <Wordmark />
        </Link>

        <div className="site-header__right">
          <Link href="/account" className="site-header__link site-header__link--hide-mobile">
            Account
          </Link>
          <Link href="/search" aria-label="Search" className="site-header__link">⌕</Link>
          <Link href="/cart" className="site-header__link">
            Cart <span className="site-header__cart-count">(0)</span>
          </Link>
        </div>
      </div>

      {open && (
        <div className="site-header__drawer">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="site-header__link">
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
