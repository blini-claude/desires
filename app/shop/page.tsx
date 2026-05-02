import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/products";
import Link from "next/link";

const FILTERS = ["All", "Tops", "Bottoms", "Outerwear", "Knitwear", "Accessories"];

export default function ShopPage() {
  return (
    <section className="px-5 md:px-10 pt-12 md:pt-20">
      <div className="mb-10 md:mb-16">
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">
          Drop 01 / Spring–Summer 2026
        </p>
        <h1 className="font-display uppercase text-[clamp(56px,12vw,200px)] mt-2">
          Shop
        </h1>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10 border-b border-line pb-4 font-mono text-[11px] tracking-[0.22em] uppercase">
        {FILTERS.map((f) => (
          <button key={f} className="link-grow text-ink/80 data-[active=true]:text-ink" data-active={f === "All"}>
            {f}
          </button>
        ))}
        <span className="ml-auto text-muted">{PRODUCTS.length} items</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.handle} p={p} />
        ))}
      </div>

      <div className="mt-24 text-center">
        <Link href="/lookbook" className="font-mono text-[11px] tracking-[0.22em] uppercase link-grow">
          See the Lookbook →
        </Link>
      </div>
    </section>
  );
}
