"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

const FILTERS = ["All", "Tops", "Bottoms", "Outerwear", "Knitwear", "Accessories"] as const;
type Filter = (typeof FILTERS)[number];

const fmt = (n: number, c: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: c, maximumFractionDigits: 0 }).format(n);

export default function ShopPage() {
  const [active, setActive] = useState<Filter>("All");

  const items = useMemo(
    () => (active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section className="dx">
      <div className="pw dx-page">
        <header className="dx-page__head">
          <div className="dx-page__eyebrow-row">
            <p className="dx-eyebrow">Drop 01 — SS26</p>
            <p className="dx-meta dx-meta--ink dx-num">{String(PRODUCTS.length).padStart(2, "0")} pieces</p>
          </div>
          <h1 className="dx-h1">Shop the Drop</h1>
        </header>
      </div>

      <div className="dx-filter">
        <div className="pw" style={{ padding: 0 }}>
          <div className="dx-filter__inner" style={{ paddingLeft: "clamp(20px,3vw,30px)", paddingRight: "clamp(20px,3vw,30px)" }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className="dx-filter__btn"
                aria-pressed={active === f}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
            <span className="dx-filter__count dx-num">{String(items.length).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      <div className="pw" style={{ paddingTop: "clamp(24px,4vw,56px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="dx-grid-shop">
          {items.map((p) => (
            <Link key={p.handle} href={`/shop/${p.handle}`} className="dx-card">
              <div className="dx-card__media">
                {p.badge && <span className="dx-card__badge">{p.badge}</span>}
                <img className="dx-card__img dx-card__img--front" src={p.front} alt={p.name} loading="lazy" />
                <img className="dx-card__img dx-card__img--back" src={p.back} alt="" aria-hidden loading="lazy" style={{ opacity: 0 }} />
                {p.soldOut && <span className="dx-card__sold">Sold Out</span>}
              </div>
              <div className="dx-card__row">
                <div>
                  <p className="dx-card__cat">{p.category}</p>
                  <p className="dx-card__name">{p.name}</p>
                </div>
                <span className="dx-card__price dx-num">{fmt(p.price, p.currency)}</span>
              </div>
            </Link>
          ))}
        </div>

        {items.length === 0 && (
          <p className="dx-body" style={{ textAlign: "center", padding: "80px 0" }}>
            Nothing in this category yet.
          </p>
        )}

        <div style={{ marginTop: "clamp(80px,10vw,140px)", textAlign: "center" }}>
          <Link href="/lookbook" className="dx-btn dx-btn--line">See the Lookbook</Link>
        </div>
      </div>
    </section>
  );
}
