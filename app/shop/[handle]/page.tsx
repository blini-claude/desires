import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, PRODUCTS } from "@/lib/products";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

const fmt = (n: number, c: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: c, maximumFractionDigits: 0 }).format(n);

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ handle: p.handle }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const p = getProduct(handle);
  if (!p) notFound();

  const more = PRODUCTS.filter((x) => x.handle !== p.handle).slice(0, 4);
  const shots = [p.front, p.back, p.front, p.back];

  return (
    <article className="dx">
      <div className="pw dx-page" style={{ paddingTop: "clamp(80px,10vw,120px)" }}>
        <nav className="dx-meta" style={{ marginBottom: 24 }}>
          <Link href="/" className="dx-meta">Home</Link>
          <span style={{ margin: "0 10px" }}>/</span>
          <Link href="/shop" className="dx-meta">Shop</Link>
          <span style={{ margin: "0 10px" }}>/</span>
          <span className="dx-meta dx-meta--ink">{p.name}</span>
        </nav>

        <div className="dx-pdp">
          <div className="dx-pdp__gallery">
            {shots.map((src, i) => (
              <div key={i} className="dx-pdp__shot">
                <img src={src} alt={`${p.name} — view ${i + 1}`} />
              </div>
            ))}
          </div>

          <aside className="dx-pdp__rail">
            <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>{p.category}</p>
            <h1 className="dx-xl" style={{ marginTop: 14 }}>{p.name}</h1>
            <p className="dx-md dx-num" style={{ marginTop: 18 }}>{fmt(p.price, p.currency)}</p>

            <div style={{ marginTop: 36 }}>
              <p className="dx-eyebrow" style={{ marginBottom: 12, color: "rgba(0,0,0,0.55)" }}>Size</p>
              <div className="dx-rail dx-rail--6">
                {SIZES.map((s) => (
                  <button key={s} className="dx-rail__cell" disabled={p.soldOut}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled={p.soldOut}
              className="dx-btn dx-btn--solid dx-btn--block"
              style={{ marginTop: 24 }}
            >
              {p.soldOut ? "Sold Out" : "Add to Bag"}
            </button>

            <div style={{ marginTop: 40, borderTop: "1px solid #000", paddingTop: 24 }}>
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

            <details style={{ marginTop: 28, borderTop: "1px solid #000", paddingTop: 16 }}>
              <summary style={{ cursor: "pointer", listStyle: "none" }} className="dx-eyebrow">Shipping & Returns</summary>
              <p className="dx-body" style={{ marginTop: 12 }}>
                Worldwide shipping. Free over $150. Returns accepted within 14 days, unworn, tags on.
              </p>
            </details>

            <details style={{ marginTop: 8, borderTop: "1px solid #000", paddingTop: 16 }}>
              <summary style={{ cursor: "pointer", listStyle: "none" }} className="dx-eyebrow">Fit & Care</summary>
              <p className="dx-body" style={{ marginTop: 12 }}>
                Relaxed fit. Sized true. Cold wash inside-out, hang to dry. Iron low.
              </p>
            </details>
          </aside>
        </div>

        <hr className="dx-divider" />

        <section>
          <div className="dx-page__eyebrow-row" style={{ marginBottom: 32 }}>
            <p className="dx-eyebrow">More from the drop</p>
            <Link href="/shop" className="dx-btn dx-btn--ghost">All pieces</Link>
          </div>
          <h2 className="dx-lg" style={{ marginBottom: 32 }}>Pair With.</h2>
          <div className="dx-grid-shop">
            {more.map((m) => (
              <Link key={m.handle} href={`/shop/${m.handle}`} className="dx-card">
                <div className="dx-card__media">
                  {m.badge && <span className="dx-card__badge">{m.badge}</span>}
                  <img className="dx-card__img dx-card__img--front" src={m.front} alt={m.name} loading="lazy" />
                  <img className="dx-card__img dx-card__img--back" src={m.back} alt="" aria-hidden loading="lazy" style={{ opacity: 0 }} />
                  {m.soldOut && <span className="dx-card__sold">Sold Out</span>}
                </div>
                <div className="dx-card__row">
                  <div>
                    <p className="dx-card__cat">{m.category}</p>
                    <p className="dx-card__name">{m.name}</p>
                  </div>
                  <span className="dx-card__price dx-num">{fmt(m.price, m.currency)}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
