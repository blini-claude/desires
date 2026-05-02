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
    <Link href={`/shop/${p.handle}`} className="block group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f6f5f3]">
        {p.badge && (
          <span
            className="absolute left-3 top-3 z-[2] px-2 py-1"
            style={{
              fontFamily: "helvetica_neuethin, system-ui, sans-serif",
              fontSize: 11,
              letterSpacing: 0.6,
              textTransform: "uppercase",
              background: "rgba(255,255,255,0.94)",
              color: "#000",
            }}
          >
            {p.badge}
          </span>
        )}
        {p.soldOut && (
          <span
            className="absolute right-3 top-3 z-[2] px-2 py-1"
            style={{
              fontFamily: "helvetica_neuethin, system-ui, sans-serif",
              fontSize: 11,
              letterSpacing: 0.6,
              textTransform: "uppercase",
              background: "rgba(0,0,0,0.9)",
              color: "#fff",
            }}
          >
            Sold out
          </span>
        )}
        <img
          src={p.front}
          alt={p.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={p.back}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <div className="min-w-0">
          <p className="vc-desc" style={{ color: "rgba(0,0,0,0.55)" }}>{p.category}</p>
          <h3 className="vc-title" style={{ color: "#000" }}>{p.name}</h3>
        </div>
        <span className="vc-title" style={{ color: "#000", whiteSpace: "nowrap" }}>
          {fmt(p.price, p.currency)}
        </span>
      </div>
    </Link>
  );
}
