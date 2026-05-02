import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/products";
import Link from "next/link";

const FILTERS = ["All", "Tops", "Bottoms", "Outerwear", "Knitwear", "Accessories"];

export default function ShopPage() {
  return (
    <section className="pw" style={{ paddingTop: 120, paddingBottom: 80 }}>
      <header className="mb-10">
        <div className="vc-desc" style={{ color: "rgba(0,0,0,0.55)" }}>
          Drop 01 / Spring–Summer 2026
        </div>
        <h1 className="vc-title" style={{ color: "#000", marginTop: 6 }}>Shop</h1>
      </header>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10 border-b border-line pb-4">
        {FILTERS.map((f) => (
          <button
            key={f}
            className="vc-desc"
            style={{ color: f === "All" ? "#000" : "rgba(0,0,0,0.55)", background: "transparent", border: 0, padding: 0, cursor: "pointer" }}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto vc-desc" style={{ color: "rgba(0,0,0,0.45)" }}>
          {PRODUCTS.length} items
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.handle} p={p} />
        ))}
      </div>

      <div className="mt-24 text-center">
        <Link href="/lookbook" className="btn">See the Lookbook</Link>
      </div>
    </section>
  );
}
