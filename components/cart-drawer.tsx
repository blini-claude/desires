"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/cart";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export function CartDrawer() {
  const { open, setOpen, items, count, subtotal, productOf, remove, setQty } = useCart();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  return (
    <>
      <button
        aria-label="Close bag"
        onClick={() => setOpen(false)}
        className="dx-drawer__overlay"
        data-open={open}
        tabIndex={open ? 0 : -1}
      />
      <aside
        className="dx-drawer dx-drawer--right"
        data-open={open}
        aria-hidden={!open}
        aria-label="Bag"
      >
        <div className="dx-drawer__bar">
          <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>
            Bag · {String(count).padStart(2, "0")} {count === 1 ? "item" : "items"}
          </p>
          <button
            type="button"
            aria-label="Close"
            className="dx-drawer__close"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden>×</span>
          </button>
        </div>

        <div className="dx-drawer__inner" style={{ display: "block", padding: 0 }}>
          {items.length === 0 ? (
            <div style={{ padding: "60px 26px", textAlign: "center" }}>
              <p className="dx-h2">Your bag is empty</p>
              <p className="dx-body" style={{ marginTop: 12, color: "rgba(0,0,0,0.6)" }}>
                Drop 01 is twenty pieces. Most are running thin.
              </p>
              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="dx-btn dx-btn--solid"
                style={{ marginTop: 24 }}
              >
                Shop the Drop
              </Link>
            </div>
          ) : (
            <ul style={{ listStyle: "none", margin: 0, padding: "8px 26px 0" }}>
              {items.map((it) => {
                const p = productOf(it.handle);
                if (!p) return null;
                return (
                  <li
                    key={`${it.handle}-${it.size}`}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "76px 1fr",
                      gap: 14,
                      padding: "16px 0",
                    }}
                  >
                    <Link
                      href={`/shop/${p.handle}`}
                      onClick={() => setOpen(false)}
                      style={{ display: "block", aspectRatio: "5/7", overflow: "hidden", background: "#f6f5f3" }}
                    >
                      <img src={p.front} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </Link>
                    <div style={{ display: "grid", gap: 4 }}>
                      <p className="dx-card__cat">{p.category}</p>
                      <Link href={`/shop/${p.handle}`} onClick={() => setOpen(false)} className="dx-card__name">
                        {p.name}
                      </Link>
                      <p className="dx-meta dx-num">Size {it.size}</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                        <div style={{ display: "inline-flex", background: "#f6f5f3" }}>
                          <button
                            type="button"
                            onClick={() => setQty(it.handle, it.size, it.qty - 1)}
                            aria-label="Decrease"
                            style={{ background: "transparent", border: 0, padding: "6px 10px", cursor: "pointer" }}
                          >
                            −
                          </button>
                          <span className="dx-num" style={{ padding: "6px 12px", minWidth: 28, textAlign: "center" }}>
                            {it.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(it.handle, it.size, it.qty + 1)}
                            aria-label="Increase"
                            style={{ background: "transparent", border: 0, padding: "6px 10px", cursor: "pointer" }}
                          >
                            +
                          </button>
                        </div>
                        <span className="dx-card__price dx-num">{fmt(p.price * it.qty)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(it.handle, it.size)}
                        className="dx-btn dx-btn--ghost"
                        style={{ marginTop: 6, alignSelf: "flex-start", fontSize: 11 }}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div style={{ borderTop: 0, padding: 26, background: "#fff" }}>
            <div style={{ background: "#f6f5f3", padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span className="dx-eyebrow">Subtotal</span>
                <span className="dx-h2 dx-num">{fmt(subtotal)}</span>
              </div>
              <p className="dx-meta" style={{ color: "rgba(0,0,0,0.55)" }}>
                Shipping &amp; taxes calculated at checkout. Free shipping over $150.
              </p>
            </div>
            <button
              type="button"
              className="dx-btn dx-btn--solid dx-btn--block"
              style={{ marginTop: 14 }}
            >
              Checkout
            </button>
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="dx-btn dx-btn--ghost"
              style={{ display: "block", textAlign: "center", marginTop: 14 }}
            >
              View full bag
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
