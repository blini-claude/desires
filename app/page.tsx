import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/products";

export default function HomePage() {
  const featured = PRODUCTS.slice(0, 8);
  return (
    <>
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img
          aria-hidden
          src="https://placehold.co/2200x1400/0a0a0a/f1ece1/png?text=DESIRES&font=oswald"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
        <div className="relative z-[2] w-full px-5 md:px-10 pb-10 md:pb-16 text-bg">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-bg/70 rise [animation-delay:50ms]">
            Drop 01 / Spring–Summer 2026
          </p>
          <h1 className="font-display uppercase text-[clamp(72px,16vw,260px)] mt-2 rise [animation-delay:120ms]">
            Wear<br />the Want
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 rise [animation-delay:240ms]">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-bg text-ink px-5 py-3 font-mono text-[11px] tracking-[0.22em] uppercase hover:bg-accent hover:text-bg transition-colors"
            >
              Shop the Drop <span aria-hidden>→</span>
            </Link>
            <Link
              href="/lookbook"
              className="font-mono text-[11px] tracking-[0.22em] uppercase link-grow"
            >
              See the Lookbook
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 pt-20 md:pt-32">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">
              Drop 01 — Limited
            </p>
            <h2 className="font-display uppercase text-[clamp(48px,8vw,120px)] mt-2">
              In Stock Now
            </h2>
          </div>
          <Link href="/shop" className="hidden md:inline font-mono text-[11px] tracking-[0.22em] uppercase link-grow">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.handle} p={p} />
          ))}
        </div>
        <div className="md:hidden mt-8">
          <Link href="/shop" className="font-mono text-[11px] tracking-[0.22em] uppercase link-grow">
            View All →
          </Link>
        </div>
      </section>

      <section className="px-5 md:px-10 py-32 md:py-48">
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-6">
          A Note from Desires
        </p>
        <p className="font-display uppercase text-[clamp(36px,5.5vw,86px)] leading-[1.02] max-w-[28ch]">
          We make small runs of clothes for the want you can&apos;t shake. No
          drops bigger than the room they&apos;re cut in.
        </p>
      </section>

      <section className="relative">
        <div className="px-5 md:px-10 mb-6 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">
              Lookbook
            </p>
            <h2 className="font-display uppercase text-[clamp(40px,7vw,96px)] mt-2">
              In the Field
            </h2>
          </div>
          <Link href="/lookbook" className="font-mono text-[11px] tracking-[0.22em] uppercase link-grow">
            See All →
          </Link>
        </div>
        <div className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-10 pb-4 snap-x snap-mandatory">
          {[
            { label: "Look 01 — Rooftop", bg: "1a1a1a" },
            { label: "Look 02 — Garage", bg: "2a2418" },
            { label: "Look 03 — Highway", bg: "0f0f0f" },
            { label: "Look 04 — Back Alley", bg: "221a14" },
            { label: "Look 05 — Shoreline", bg: "0a0a0a" },
          ].map(({ label, bg }) => (
            <Link
              key={label}
              href="/lookbook"
              className="relative snap-start shrink-0 w-[78%] md:w-[42%] aspect-[4/5] overflow-hidden bg-line"
            >
              <img
                aria-hidden
                src={`https://placehold.co/900x1100/${bg}/f1ece1/png?text=${encodeURIComponent(label)}&font=oswald`}
                alt={label}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute left-3 bottom-3 font-mono text-[10px] tracking-[0.22em] uppercase text-bg/90 bg-ink/40 backdrop-blur-sm px-2 py-1">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-10 py-32 md:py-48 text-center">
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">
          Get on the list
        </p>
        <h2 className="font-display uppercase text-[clamp(48px,9vw,140px)] mt-3">
          Drops First.
        </h2>
        <form className="mt-8 mx-auto max-w-md flex border-b border-ink" action="#" method="post">
          <input
            type="email"
            required
            placeholder="email@yours.com"
            className="flex-1 bg-transparent py-3 outline-none placeholder:text-muted"
          />
          <button className="font-mono uppercase text-[11px] tracking-[0.22em] px-4 py-3">
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
}
