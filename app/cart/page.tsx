"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export default function CartPage() {
  const { items, count, subtotal, productOf, remove, setQty } = useCart();

  return (
    <section className="dx">
      <div className="pw dx-page" style={{ minHeight: "70vh" }}>
        <header className="dx-page__head">
          <div className="dx-page__eyebrow-row">
            <p className="dx-eyebrow">Bag</p>
            <p className="dx-meta dx-meta--ink dx-num">
              {String(count).padStart(2, "0")} {count === 1 ? "item" : "items"} · {fmt(subtotal)}
            </p>
          </div>
          <h1 className="dx-h1">{count === 0 ? "Your bag is empty" : "Your Bag"}</h1>
        </header>

        {count === 0 ? (
          <div style={{ marginTop: "clamp(40px,6vw,80px)", maxWidth: 560 }}>
            <p className="dx-body">
              Nothing in the bag yet. Drop 01 is twenty pieces and most are running thin.
              Grab something before the run is gone.
            </p>
            <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/shop" className="dx-btn dx-btn--solid">Shop the Drop</Link>
              <Link href="/lookbook" className="dx-btn dx-btn--line">See the Lookbook</Link>
            </div>
          </div>
        ) : (
          <div className="dx-cart" style={{ marginTop: "clamp(40px,6vw,80px)" }}>
            <div>
              <ul className="dx-cart__items" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {items.map((it) => {
                  const p = productOf(it.handle);
                  if (!p) return null;
                  return (
                    <li key={`${it.handle}-${it.size}`} className="dx-cart__row">
                      <Link href={`/shop/${p.handle}`} className="dx-cart__thumb">
                        <img src={p.front} alt={p.name} />
                      </Link>
                      <div style={{ display: "grid", gap: 4 }}>
                        <p className="dx-card__cat">{p.category}</p>
                        <Link href={`/shop/${p.handle}`} className="dx-md">{p.name}</Link>
                        <p className="dx-meta dx-num">Size {it.size}</p>
                        <button
                          type="button"
                          onClick={() => remove(it.handle, it.size)}
                          className="dx-btn dx-btn--ghost"
                          style={{ alignSelf: "start", marginTop: 6, fontSize: 11 }}
                        >
                          Remove
                        </button>
                      </div>
                      <div style={{ display: "inline-flex", background: "#f6f5f3", alignSelf: "center" }}>
                        <button type="button" onClick={() => setQty(it.handle, it.size, it.qty - 1)} aria-label="Decrease" style={{ background: "transparent", border: 0, padding: "8px 12px", cursor: "pointer" }}>−</button>
                        <span className="dx-num" style={{ padding: "8px 14px", minWidth: 32, textAlign: "center" }}>{it.qty}</span>
                        <button type="button" onClick={() => setQty(it.handle, it.size, it.qty + 1)} aria-label="Increase" style={{ background: "transparent", border: 0, padding: "8px 12px", cursor: "pointer" }}>+</button>
                      </div>
                      <span className="dx-md dx-num" style={{ alignSelf: "center" }}>{fmt(p.price * it.qty)}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <aside className="dx-cart__summary">
              <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>Summary</p>
              <h2 className="dx-h2" style={{ marginTop: 8 }}>Your Bag</h2>

              <ul style={{ marginTop: 22, display: "grid", gap: 12, listStyle: "none", padding: 0, margin: "22px 0 0" }}>
                <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 6 }}>
                  <span className="dx-eyebrow">Subtotal</span>
                  <span className="dx-body dx-num" style={{ color: "#000" }}>{fmt(subtotal)}</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 6 }}>
                  <span className="dx-eyebrow">Shipping</span>
                  <span className="dx-body dx-num" style={{ color: "#000" }}>{subtotal >= 150 ? "Free" : "$9"}</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", paddingTop: 6 }}>
                  <span className="dx-h2">Total</span>
                  <span className="dx-h2 dx-num">{fmt(subtotal + (subtotal >= 150 || subtotal === 0 ? 0 : 9))}</span>
                </li>
              </ul>

              <button className="dx-btn dx-btn--solid dx-btn--block" style={{ marginTop: 28 }}>Checkout</button>
              <p className="dx-meta" style={{ marginTop: 14, textAlign: "center", color: "rgba(0,0,0,0.55)" }}>
                Secure checkout · Returns in 14 days
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
