"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

const fmt = (n: number, c: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: c, maximumFractionDigits: 0 }).format(n);

export function ProductCardQuick({ p }: { p: Product }) {
  const { add } = useCart();
  const [showQuick, setShowQuick] = useState(false);

  return (
    <div
      className="dx-card dx-card--hoverable"
      onMouseEnter={() => setShowQuick(true)}
      onMouseLeave={() => setShowQuick(false)}
    >
      <Link href={`/shop/${p.handle}`} className="dx-card__media-link" style={{ display: "block" }}>
        <div className="dx-card__media">
          {p.badge && <span className="dx-card__badge">{p.badge}</span>}
          <img className="dx-card__img dx-card__img--front" src={p.front} alt={p.name} loading="lazy" />
          <img
            className="dx-card__img dx-card__img--back"
            src={p.back}
            alt=""
            aria-hidden
            loading="lazy"
            style={{ opacity: 0 }}
          />
          {p.soldOut && <span className="dx-card__sold">Sold Out</span>}

          {!p.soldOut && (
            <div className="dx-quick" data-open={showQuick}>
              <p className="dx-quick__label">Quick add</p>
              <div className="dx-quick__sizes">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="dx-quick__size"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      add(p.handle, s, 1);
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </Link>
      <Link href={`/shop/${p.handle}`} className="dx-card__row" style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 16 }}>
        <p className="dx-card__cat">{p.category}</p>
        <p className="dx-card__name">{p.name}</p>
        <span className="dx-card__price dx-num">{fmt(p.price, p.currency)}</span>
      </Link>
    </div>
  );
}
