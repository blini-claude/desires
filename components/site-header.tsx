"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="shrink-on-scroll sticky top-0 z-[5] bg-bg/0 border-b border-line/40 transition-all duration-300 px-5 md:px-10 py-4"
    >
      <div className="flex items-center justify-between gap-6">
        <button
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="block h-px w-6 bg-ink" />
          <span className="block h-px w-6 bg-ink" />
        </button>

        <nav className="hidden md:flex items-center gap-7 text-[12px] tracking-[0.18em] font-mono uppercase">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="link-grow">
              {n.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="brand-mark font-display text-[34px] md:text-[44px] leading-none tracking-[-0.01em] uppercase">
          Desires
        </Link>

        <div className="flex items-center gap-5 text-[12px] tracking-[0.18em] font-mono uppercase">
          <Link href="/account" className="hidden md:inline link-grow">Account</Link>
          <Link href="/search" aria-label="Search" className="link-grow">⌕</Link>
          <Link href="/cart" className="link-grow">Bag <span className="text-muted">(0)</span></Link>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-4 grid gap-3 text-[14px] tracking-[0.18em] font-mono uppercase">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
