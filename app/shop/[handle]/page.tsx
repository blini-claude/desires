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
    <article className="pw" style={{ paddingTop: 100, paddingBottom: 80 }}>
      <nav className="mb-6 vc-desc" style={{ color: "rgba(0,0,0,0.55)" }}>
        <Link href="/">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop">Shop</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "#000" }}>{p.name}</span>
      </nav>

      <div className="grid md:grid-cols-12 gap-8 md:gap-14">
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {[p.front, p.back, p.front, p.back].map((src, i) => (
            <div key={i} className="aspect-[4/5] overflow-hidden bg-[#f6f5f3]">
              <img src={src} alt={`${p.name} — view ${i + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <aside className="md:col-span-5 md:sticky md:top-24 self-start">
          <p className="vc-desc" style={{ color: "rgba(0,0,0,0.55)" }}>{p.category}</p>
          <h1 className="vc-title" style={{ color: "#000", marginTop: 4 }}>{p.name}</h1>
          <p className="vc-title" style={{ color: "#000", marginTop: 14 }}>
            {new Intl.NumberFormat("en-US", { style: "currency", currency: p.currency }).format(p.price)}
          </p>

          <div className="mt-8">
            <p className="vc-desc" style={{ color: "rgba(0,0,0,0.55)", marginBottom: 10, textTransform: "uppercase" }}>Size</p>
            <div className="grid grid-cols-6 gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  disabled={p.soldOut}
                  className="btn"
                  style={{ padding: "10px 0", borderWidth: 1 }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            disabled={p.soldOut}
            className="btn"
            style={{ marginTop: 22, width: "100%", padding: "14px 30px" }}
          >
            {p.soldOut ? "Sold Out" : "Add to Bag"}
          </button>

          <div className="mt-10 border-t border-line pt-6">
            <p className="vc-desc" style={{ color: "rgba(0,0,0,0.75)" }}>
              Cut and sewn in small batches. Garment-washed for hand-feel and a
              broken-in drape. Designed to wear loud and last long.
            </p>
            <ul className="mt-6 grid gap-2 vc-desc" style={{ color: "rgba(0,0,0,0.55)" }}>
              <li>— 100% mid-weight cotton, brushed inside</li>
              <li>— Reinforced seams</li>
              <li>— Embroidered Desires mark</li>
              <li>— Made in Portugal</li>
            </ul>
          </div>

          <details className="mt-8 border-t border-line pt-4">
            <summary className="cursor-pointer vc-desc" style={{ color: "#000", textTransform: "uppercase" }}>
              Shipping & Returns
            </summary>
            <p className="mt-3 vc-desc" style={{ color: "rgba(0,0,0,0.75)" }}>
              Worldwide shipping. Free over $150. Returns accepted within 14
              days, unworn, tags on.
            </p>
          </details>

          <details className="mt-2 border-t border-line pt-4">
            <summary className="cursor-pointer vc-desc" style={{ color: "#000", textTransform: "uppercase" }}>
              Fit & Care
            </summary>
            <p className="mt-3 vc-desc" style={{ color: "rgba(0,0,0,0.75)" }}>
              Relaxed fit. Sized true. Cold wash inside-out, hang to dry. Iron low.
            </p>
          </details>
        </aside>
      </div>

      <section className="mt-32">
        <div className="mb-8">
          <p className="vc-desc" style={{ color: "rgba(0,0,0,0.55)" }}>More from the drop</p>
          <h2 className="vc-title" style={{ color: "#000", marginTop: 4 }}>Pair With</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {more.map((m) => (
            <ProductCard key={m.handle} p={m} />
          ))}
        </div>
      </section>
    </article>
  );
}
