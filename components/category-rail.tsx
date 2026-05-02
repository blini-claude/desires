import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/components/product-card";

export function CategoryRail({
  title,
  kicker,
  href,
  products,
}: {
  title: string;
  kicker: string;
  href: string;
  products: Product[];
}) {
  return (
    <section className="pt-20 md:pt-28">
      <div className="px-5 md:px-10 mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">{kicker}</p>
          <h2 className="font-display uppercase text-[clamp(36px,6.5vw,96px)] mt-2">{title}</h2>
        </div>
        <Link href={href} className="font-mono text-[11px] tracking-[0.22em] uppercase link-grow whitespace-nowrap">
          See All →
        </Link>
      </div>
      <div className="flex gap-3 md:gap-5 overflow-x-auto px-5 md:px-10 pb-4 snap-x snap-mandatory">
        {products.map((p) => (
          <div key={p.handle} className="snap-start shrink-0 w-[68%] sm:w-[44%] md:w-[28%] lg:w-[22%]">
            <ProductCard p={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
