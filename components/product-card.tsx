import Link from "next/link";

export type Product = {
  handle: string;
  name: string;
  price: number;
  currency: string;
  category: string;
  front: string;
  back: string;
  badge?: string;
  soldOut?: boolean;
};

const fmt = (n: number, c: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: c }).format(n);

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/shop/${p.handle}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-line/40 swap-stack">
        {p.badge && (
          <span className="absolute left-3 top-3 z-[2] font-mono text-[10px] tracking-[0.18em] uppercase bg-bg/90 text-ink px-2 py-1">
            {p.badge}
          </span>
        )}
        {p.soldOut && (
          <span className="absolute right-3 top-3 z-[2] font-mono text-[10px] tracking-[0.18em] uppercase bg-ink/90 text-bg px-2 py-1">
            Sold out
          </span>
        )}
        {/* Image stack — front fades to back on hover */}
        <img
          className="front absolute inset-0 h-full w-full object-cover"
          src={p.front}
          alt={p.name}
          loading="lazy"
        />
        <img
          className="back absolute inset-0 h-full w-full object-cover opacity-0"
          src={p.back}
          alt=""
          aria-hidden
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
            {p.category}
          </p>
          <h3 className="mt-1 text-[14px] tracking-tight truncate">{p.name}</h3>
        </div>
        <span className="text-[14px] tabular-nums">{fmt(p.price, p.currency)}</span>
      </div>
    </Link>
  );
}
