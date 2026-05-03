"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

const fmt = (n: number, c: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: c, maximumFractionDigits: 0 }).format(n);

export default function SearchPage() {
  const [q, setQ] = useState("");

  const matches = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(s) ||
        p.category.toLowerCase().includes(s) ||
        p.handle.toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <section className="dx">
      <div className="pw dx-page">
        <header className="dx-page__head">
          <p className="dx-eyebrow">Search</p>
          <h1 className="dx-h1">Find a Piece</h1>
        </header>

        <div style={{ marginTop: "clamp(20px,3vw,32px)" }}>
          <input
            type="search"
            autoFocus
            placeholder="Atlas, Rope, Outerwear…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="dx-body"
            style={{ background: "#f6f5f3", border: 0, padding: "16px 18px", outline: "none", width: "100%", fontSize: 16 }}
          />
          <p className="dx-meta" style={{ marginTop: 12 }}>
            {q.trim() ? <>{String(matches.length).padStart(2, "0")} match{matches.length === 1 ? "" : "es"}</> : "Type to search Drop 01."}
          </p>
        </div>

        {matches.length > 0 && (
          <div className="dx-grid-shop" style={{ marginTop: "clamp(24px,4vw,40px)" }}>
            {matches.map((p) => (
              <Link key={p.handle} href={`/shop/${p.handle}`} className="dx-card">
                <div className="dx-card__media">
                  {p.badge && <span className="dx-card__badge">{p.badge}</span>}
                  <img className="dx-card__img dx-card__img--front" src={p.front} alt={p.name} loading="lazy" />
                  <img className="dx-card__img dx-card__img--back" src={p.back} alt="" aria-hidden loading="lazy" style={{ opacity: 0 }} />
                  {p.soldOut && <span className="dx-card__sold">Sold Out</span>}
                </div>
                <div className="dx-card__row">
                  <p className="dx-card__cat">{p.category}</p>
                  <p className="dx-card__name">{p.name}</p>
                  <span className="dx-card__price dx-num">{fmt(p.price, p.currency)}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {q.trim() && matches.length === 0 && (
          <div style={{ marginTop: 60, textAlign: "center" }}>
            <p className="dx-body">Nothing matches &ldquo;{q}&rdquo;.</p>
            <Link href="/shop" className="dx-btn dx-btn--ghost" style={{ marginTop: 16 }}>Browse all twenty pieces</Link>
          </div>
        )}
      </div>
    </section>
  );
}
