"use client";

import Link from "next/link";
import { useEffect } from "react";
import { PRODUCTS } from "@/lib/products";

const CATEGORIES = [
  { label: "Tops",        href: "/shop?c=Tops" },
  { label: "Bottoms",     href: "/shop?c=Bottoms" },
  { label: "Outerwear",   href: "/shop?c=Outerwear" },
  { label: "Knitwear",    href: "/shop?c=Knitwear" },
  { label: "Accessories", href: "/shop?c=Accessories" },
];

const COLLECTIONS = [
  { label: "All Pieces",   href: "/shop" },
  { label: "Drop 01 — SS26", href: "/shop?col=drop-01" },
  { label: "New In",       href: "/shop?col=new" },
  { label: "Sold Out",     href: "/shop?col=archive" },
];

const QUICK = [
  { label: "Lookbook", href: "/lookbook" },
  { label: "Journal",  href: "/journal" },
  { label: "About",    href: "/about" },
  { label: "Stockists",href: "/about#wholesale" },
];

export function ShopDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const featured = PRODUCTS.find((p) => p.handle === "atlas-work-jacket") ?? PRODUCTS[0];

  return (
    <>
      <button
        aria-label="Close shop menu"
        onClick={onClose}
        className="dx-drawer__overlay"
        data-open={open}
        tabIndex={open ? 0 : -1}
      />
      <aside
        className="dx-drawer"
        data-open={open}
        aria-hidden={!open}
        aria-label="Shop menu"
      >
        <div className="dx-drawer__bar">
          <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>Shop · Drop 01</p>
          <button
            type="button"
            aria-label="Close"
            className="dx-drawer__close"
            onClick={onClose}
          >
            <span aria-hidden>×</span>
          </button>
        </div>

        <div className="dx-drawer__inner">
          <div className="dx-drawer__col">
            <p className="dx-eyebrow dx-drawer__heading">Categories</p>
            <ul className="dx-drawer__list">
              {CATEGORIES.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} onClick={onClose} className="dx-drawer__link">{c.label}</Link>
                </li>
              ))}
            </ul>

            <p className="dx-eyebrow dx-drawer__heading" style={{ marginTop: 36 }}>Collections</p>
            <ul className="dx-drawer__list">
              {COLLECTIONS.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} onClick={onClose} className="dx-drawer__link">{c.label}</Link>
                </li>
              ))}
            </ul>

            <p className="dx-eyebrow dx-drawer__heading" style={{ marginTop: 36 }}>Elsewhere</p>
            <ul className="dx-drawer__list dx-drawer__list--small">
              {QUICK.map((q) => (
                <li key={q.href}>
                  <Link href={q.href} onClick={onClose} className="dx-drawer__link dx-drawer__link--small">{q.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="dx-drawer__featured">
            <p className="dx-eyebrow dx-drawer__heading">Featured</p>
            <Link
              href={`/shop/${featured.handle}`}
              onClick={onClose}
              className="dx-drawer__feature-card"
            >
              <div className="dx-drawer__feature-media">
                <img src={featured.front} alt={featured.name} />
              </div>
              <div className="dx-drawer__feature-row">
                <div>
                  <p className="dx-card__cat">{featured.category}</p>
                  <p className="dx-card__name">{featured.name}</p>
                </div>
                <span className="dx-card__price dx-num">${featured.price}</span>
              </div>
            </Link>
            <p className="dx-body" style={{ color: "rgba(0,0,0,0.6)", marginTop: 14 }}>
              The drop hero. Cut-and-sewn in Portugal, broken-in finish, runs short. Twenty cut.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
