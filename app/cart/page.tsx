import Link from "next/link";

export const metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <section className="dx">
      <div className="pw dx-page" style={{ minHeight: "70vh" }}>
        <header className="dx-page__head">
          <div className="dx-page__eyebrow-row">
            <p className="dx-eyebrow">Bag</p>
            <p className="dx-meta dx-meta--ink dx-num">00 items · $0</p>
          </div>
          <h1 className="dx-h2">Your bag is empty</h1>
        </header>

        <div className="dx-cart" style={{ marginTop: "clamp(40px,6vw,80px)" }}>
          <div>
            <p className="dx-body" style={{ maxWidth: 560 }}>
              Nothing in the bag yet. Drop 01 is twenty pieces and most are running thin.
              Grab something before the run is gone.
            </p>

            <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/shop" className="dx-btn dx-btn--solid">Shop the Drop</Link>
              <Link href="/lookbook" className="dx-btn dx-btn--line">See the Lookbook</Link>
            </div>

            <hr className="dx-divider" />

            <div style={{ display: "grid", gap: 16 }}>
              <p className="dx-eyebrow">Help</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }} className="dx-help-grid">
                {[
                  ["Free shipping",  "On any order over $150 worldwide."],
                  ["Returns",        "14 days. Unworn. Tags on."],
                  ["Sizing",         "Relaxed fit, sized true. Size guide on each piece."],
                  ["Drops",          "When it sells out, it's gone. We don't restock."],
                ].map(([h, copy]) => (
                  <div key={h} style={{ borderTop: "1px solid #000", paddingTop: 14 }}>
                    <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)", marginBottom: 6 }}>{h}</p>
                    <p className="dx-body">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="dx-cart__summary">
            <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>Summary</p>
            <h2 className="dx-h2" style={{ marginTop: 8 }}>Your Bag</h2>

            <ul style={{ marginTop: 22, display: "grid", gap: 12 }}>
              {[
                ["Subtotal", "$0"],
                ["Shipping", "—"],
                ["Tax",      "—"],
              ].map(([k, v]) => (
                <li key={k} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #000", paddingBottom: 10 }}>
                  <span className="dx-eyebrow">{k}</span>
                  <span className="dx-body dx-num" style={{ color: "#000" }}>{v}</span>
                </li>
              ))}
              <li style={{ display: "flex", justifyContent: "space-between", paddingTop: 6 }}>
                <span className="dx-h2">Total</span>
                <span className="dx-h2 dx-num">$0</span>
              </li>
            </ul>

            <button className="dx-btn dx-btn--solid dx-btn--block" disabled style={{ marginTop: 28 }}>
              Checkout
            </button>
            <p className="dx-meta" style={{ marginTop: 14, textAlign: "center" }}>
              Add a piece to enable checkout.
            </p>
          </aside>
        </div>
      </div>

      <style>{`
        @media (min-width: 700px) {
          .dx-help-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
