"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/lib/cart";
import { useRecentlyViewed } from "@/lib/recently-viewed";
import type { Product } from "@/lib/products";
import { PRODUCTS } from "@/lib/products";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

const fmt = (n: number, c: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: c, maximumFractionDigits: 0 }).format(n);

export function PDPRail({ p }: { p: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState<string | null>(null);
  const [showSizeError, setShowSizeError] = useState(false);

  // Track this view
  useRecentlyViewed(p.handle);

  const onAdd = () => {
    if (p.soldOut) return;
    if (!size) {
      setShowSizeError(true);
      return;
    }
    add(p.handle, size, 1);
  };

  return (
    <aside className="dx-pdp__rail">
      <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>{p.category}</p>
      <h1 className="dx-h2" style={{ marginTop: 8 }}>{p.name}</h1>
      <p className="dx-md dx-num" style={{ marginTop: 14 }}>{fmt(p.price, p.currency)}</p>

      <div style={{ marginTop: 36 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
          <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>Size</p>
          <button type="button" className="dx-btn dx-btn--ghost" style={{ fontSize: 11 }}>
            Size guide
          </button>
        </div>
        <div className="dx-rail dx-rail--6">
          {SIZES.map((s) => (
            <button
              key={s}
              type="button"
              className="dx-rail__cell"
              aria-pressed={size === s}
              disabled={p.soldOut}
              onClick={() => { setSize(s); setShowSizeError(false); }}
            >
              {s}
            </button>
          ))}
        </div>
        {showSizeError && (
          <p className="dx-meta" style={{ color: "#000", marginTop: 10 }}>
            Pick a size first
          </p>
        )}
      </div>

      <button
        type="button"
        disabled={p.soldOut}
        onClick={onAdd}
        className="dx-btn dx-btn--solid dx-btn--block"
        style={{ marginTop: 24 }}
      >
        {p.soldOut ? "Sold Out" : size ? `Add to Bag · ${fmt(p.price, p.currency)}` : "Add to Bag"}
      </button>

      {!p.soldOut && (
        <p className="dx-meta" style={{ marginTop: 12, color: "rgba(0,0,0,0.55)" }}>
          Ships within 3 business days · Free US shipping over $150
        </p>
      )}

      <div style={{ marginTop: 40 }}>
        <p className="dx-body">
          Cut and sewn in small batches. Garment-washed for hand-feel and a broken-in drape. Designed to wear loud and last long.
        </p>
        <ul style={{ marginTop: 20, display: "grid", gap: 8 }}>
          {[
            "100% mid-weight cotton, brushed inside",
            "Reinforced seams",
            "Embroidered Desires mark",
            "Made in Portugal",
          ].map((line) => (
            <li key={line} className="dx-meta dx-meta--ink" style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 8 }}>
              <span>—</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>

      <details style={{ marginTop: 28, paddingTop: 16 }}>
        <summary style={{ cursor: "pointer", listStyle: "none" }} className="dx-eyebrow">Shipping &amp; Returns</summary>
        <p className="dx-body" style={{ marginTop: 12 }}>
          Worldwide shipping. Free over $150. Returns accepted within 14 days, unworn, tags on.
        </p>
        <Link href="/help/shipping" className="dx-btn dx-btn--ghost" style={{ marginTop: 10, fontSize: 11 }}>
          Full shipping policy
        </Link>
      </details>

      <details style={{ marginTop: 8, paddingTop: 16 }}>
        <summary style={{ cursor: "pointer", listStyle: "none" }} className="dx-eyebrow">Fit &amp; Care</summary>
        <p className="dx-body" style={{ marginTop: 12 }}>
          Relaxed fit. Sized true. Cold wash inside-out, hang to dry. Iron low.
        </p>
      </details>

      <StickyMiniPDP p={p} size={size} onAdd={onAdd} />
    </aside>
  );
}

function StickyMiniPDP({ p, onAdd }: { p: Product; size: string | null; onAdd: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="dx-mini-pdp" data-visible={visible} aria-hidden={!visible}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px clamp(20px,3vw,30px)" }}>
        <img src={p.front} alt="" style={{ width: 44, height: 60, objectFit: "cover", background: "#f6f5f3" }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="dx-card__name" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {p.name}
          </p>
          <p className="dx-meta dx-num">{p.category}</p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          disabled={p.soldOut}
          className="dx-btn dx-btn--solid"
          style={{ padding: "14px 22px" }}
        >
          {p.soldOut ? "Sold Out" : "Add to Bag"}
        </button>
      </div>
    </div>
  );
}

export function RecentlyViewed({ currentHandle }: { currentHandle: string }) {
  const recent = useRecentlyViewed(currentHandle);
  if (recent.length === 0) return null;
  const items = recent
    .map((h) => PRODUCTS.find((p) => p.handle === h))
    .filter((p): p is Product => !!p)
    .slice(0, 4);
  if (items.length === 0) return null;

  return (
    <section style={{ marginTop: "clamp(60px,8vw,100px)" }}>
      <p className="dx-eyebrow" style={{ marginBottom: 24, color: "rgba(0,0,0,0.55)" }}>
        Recently viewed
      </p>
      <div className="dx-grid-shop">
        {items.map((p) => (
          <Link key={p.handle} href={`/shop/${p.handle}`} className="dx-card">
            <div className="dx-card__media">
              {p.badge && <span className="dx-card__badge">{p.badge}</span>}
              <img className="dx-card__img dx-card__img--front" src={p.front} alt={p.name} loading="lazy" />
              <img className="dx-card__img dx-card__img--back" src={p.back} alt="" aria-hidden loading="lazy" style={{ opacity: 0 }} />
            </div>
            <div className="dx-card__row">
              <p className="dx-card__cat">{p.category}</p>
              <p className="dx-card__name">{p.name}</p>
              <span className="dx-card__price dx-num">${p.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
