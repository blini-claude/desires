"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { ProductCardQuick } from "@/components/product-card-quick";

const FILTERS = ["All", "Tops", "Bottoms", "Outerwear", "Knitwear", "Accessories"] as const;
type Filter = (typeof FILTERS)[number];

const SORTS = [
  { key: "featured", label: "Featured" },
  { key: "newest", label: "Newest" },
  { key: "price-asc", label: "Price · Low to High" },
  { key: "price-desc", label: "Price · High to Low" },
  { key: "az", label: "Name · A–Z" },
] as const;
type SortKey = (typeof SORTS)[number]["key"];

export default function ShopPage() {
  const [active, setActive] = useState<Filter>("All");
  const [sort, setSort] = useState<SortKey>("featured");
  const [sortOpen, setSortOpen] = useState(false);

  const items = useMemo(() => {
    const list = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);
    const sorted = [...list];
    switch (sort) {
      case "newest":
        sorted.sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
        break;
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "az":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return sorted;
  }, [active, sort]);

  const sortLabel = SORTS.find((s) => s.key === sort)?.label ?? "Featured";

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
            <span className="dx-filter__count dx-num" style={{ marginLeft: "auto" }}>
              {String(items.length).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}
            </span>
            <div className="dx-sort" style={{ position: "relative", marginLeft: 20 }}>
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={sortOpen}
                onClick={() => setSortOpen((s) => !s)}
                className="dx-filter__btn"
                style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                Sort · {sortLabel}
                <span aria-hidden>{sortOpen ? "▴" : "▾"}</span>
              </button>
              {sortOpen && (
                <ul role="listbox" className="dx-sort__list">
                  {SORTS.map((s) => (
                    <li key={s.key}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={sort === s.key}
                        onClick={() => { setSort(s.key); setSortOpen(false); }}
                        className="dx-sort__opt"
                      >
                        {s.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="pw" style={{ paddingTop: "clamp(24px,4vw,56px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="dx-grid-shop">
          {items.map((p) => (
            <ProductCardQuick key={p.handle} p={p} />
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
