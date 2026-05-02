import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

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

  return (
    <article className="px-5 md:px-10 pt-8 md:pt-12">
      <nav className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted mb-6">
        <Link href="/" className="link-grow">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="link-grow">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{p.name}</span>
      </nav>

      <div className="grid md:grid-cols-12 gap-8 md:gap-14">
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {[p.front, p.back, p.front, p.back].map((src, i) => (
            <div key={i} className="aspect-[4/5] overflow-hidden bg-line">
              <img src={src} alt={`${p.name} — view ${i + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <aside className="md:col-span-5 md:sticky md:top-24 self-start">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted">{p.category}</p>
          <h1 className="font-display uppercase text-[clamp(40px,6vw,84px)] mt-2">{p.name}</h1>
          <p className="mt-3 text-[18px] tabular-nums">
            {new Intl.NumberFormat("en-US", { style: "currency", currency: p.currency }).format(p.price)}
          </p>

          <div className="mt-8">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted mb-3">Size</p>
            <div className="grid grid-cols-6 gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  disabled={p.soldOut}
                  className="border border-ink py-3 font-mono text-[12px] tracking-[0.18em] uppercase hover:bg-ink hover:text-bg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            disabled={p.soldOut}
            className="mt-6 w-full bg-ink text-bg py-4 font-mono text-[12px] tracking-[0.22em] uppercase hover:bg-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {p.soldOut ? "Sold Out" : "Add to Bag"}
          </button>

          <div className="mt-10 border-t border-line pt-6">
            <p className="text-[14px] leading-relaxed text-ink-soft">
              Cut and sewn in small batches. Garment-washed for hand-feel and a
              broken-in drape. Designed to wear loud and last long.
            </p>
            <ul className="mt-6 grid gap-2 text-[12px] font-mono uppercase tracking-[0.18em] text-muted">
              <li>— 100% mid-weight cotton, brushed inside</li>
              <li>— Reinforced seams</li>
              <li>— Embroidered Desires mark</li>
              <li>— Made in Portugal</li>
            </ul>
          </div>

          <details className="mt-8 border-t border-line pt-4">
            <summary className="cursor-pointer font-mono text-[12px] tracking-[0.22em] uppercase">
              Shipping & Returns
            </summary>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Worldwide shipping. Free over $150. Returns accepted within 14
              days, unworn, tags on.
            </p>
          </details>

          <details className="mt-2 border-t border-line pt-4">
            <summary className="cursor-pointer font-mono text-[12px] tracking-[0.22em] uppercase">
              Fit & Care
            </summary>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Relaxed fit. Sized true. Cold wash inside-out, hang to dry. Iron low.
            </p>
          </details>
        </aside>
      </div>

      <section className="mt-32">
        <div className="mb-8">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted">More from the drop</p>
          <h2 className="font-display uppercase text-[clamp(36px,6vw,84px)] mt-2">Pair With</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {more.map((m) => (
            <ProductCard key={m.handle} p={m} />
          ))}
        </div>
      </section>
    </article>
  );
}
