import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, PRODUCTS } from "@/lib/products";
import { PDPRail, RecentlyViewed } from "@/components/pdp-rail";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ handle: p.handle }));
}

const fmt = (n: number, c: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: c, maximumFractionDigits: 0 }).format(n);

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

          <PDPRail p={p} />
        </div>

        <hr className="dx-divider" />

        <section>
          <div className="dx-page__eyebrow-row" style={{ marginBottom: 32 }}>
            <p className="dx-eyebrow">More from the drop</p>
            <Link href="/shop" className="dx-btn dx-btn--ghost">All pieces</Link>
          </div>
          <h2 className="dx-h2" style={{ marginBottom: 24 }}>Pair With</h2>
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
                  <p className="dx-card__cat">{m.category}</p>
                  <p className="dx-card__name">{m.name}</p>
                  <span className="dx-card__price dx-num">{fmt(m.price, m.currency)}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <RecentlyViewed currentHandle={p.handle} />
      </div>
    </article>
  );
}
