import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { CategoryRail } from "@/components/category-rail";
import { Countdown } from "@/components/countdown";
import { Wordmark } from "@/components/wordmark";
import { PRODUCTS } from "@/lib/products";

const HERO_BG = "https://placehold.co/2200x1400/0a0a0a/f1ece1/png?text=DROP+01&font=oswald";
const SPOTLIGHT_IMG = "https://placehold.co/1200x1500/1a1a1a/f1ece1/png?text=ATLAS+WORK+JACKET&font=oswald";
const STORY_IMG = "https://placehold.co/1200x1500/2a2418/f1ece1/png?text=THE+CUTTING+ROOM&font=oswald";

const NEXT_DROP = "2026-06-02T17:00:00Z"; // Drop 02 — one month out

export default function HomePage() {
  const featured = PRODUCTS[0];
  const tops = PRODUCTS.filter((p) => p.category === "Tops");
  const outerwear = PRODUCTS.filter((p) => p.category === "Outerwear");
  const bottoms = PRODUCTS.filter((p) => p.category === "Bottoms");
  const accessories = PRODUCTS.filter((p) => p.category === "Accessories");

  return (
    <>
      {/* HERO — full bleed editorial */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img
          aria-hidden
          src={HERO_BG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/40" />
        <div className="relative z-[2] w-full px-5 md:px-10 pb-10 md:pb-16 text-bg">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-bg/70 rise [animation-delay:50ms]">
            Drop 01 / Spring–Summer 2026 · 20 Pieces · One Run
          </p>
          <h1 className="font-display uppercase text-[clamp(72px,17vw,280px)] mt-2 rise [animation-delay:120ms]">
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

      {/* DROP COUNTDOWN BAR */}
      <section className="relative z-[3] bg-ink text-bg border-y border-line/30">
        <div className="px-5 md:px-10 py-12 md:py-16 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-bg/60 mb-3">Next Drop · Drop 02</p>
            <h2 className="font-display uppercase text-[clamp(40px,6vw,84px)] leading-[0.92]">
              The Pavement<br />Series
            </h2>
            <p className="mt-4 max-w-md text-[14px] text-bg/70 leading-relaxed">
              Eight pieces. One Friday. No restock. Get on the list to see it
              before anyone else.
            </p>
          </div>
          <div className="md:col-span-7">
            <Countdown to={NEXT_DROP} />
          </div>
        </div>
      </section>

      {/* FEATURED SPOTLIGHT */}
      <section className="px-5 md:px-10 pt-24 md:pt-32 grid md:grid-cols-12 gap-8 md:gap-14 items-end">
        <div className="md:col-span-7 relative aspect-[4/5] overflow-hidden bg-line">
          <img src={SPOTLIGHT_IMG} alt={featured.name} className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.22em] uppercase bg-bg/90 text-ink px-2 py-1">
            Featured · Drop 01
          </span>
        </div>
        <div className="md:col-span-5">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">Piece 01 of 20</p>
          <h2 className="font-display uppercase text-[clamp(48px,7vw,110px)] mt-2 leading-[0.92]">
            {featured.name}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft max-w-prose">
            Heavy-canvas work jacket cut to wear over knit, denim, the lot.
            Reinforced shoulders, double-needle seams, brass everything.
            Built so you stop noticing it&apos;s there.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <span className="font-display text-[40px] tabular-nums leading-none">${featured.price}</span>
            <Link
              href={`/shop/${featured.handle}`}
              className="inline-flex items-center gap-3 bg-ink text-bg px-5 py-3 font-mono text-[11px] tracking-[0.22em] uppercase hover:bg-accent transition-colors"
            >
              Shop Atlas <span aria-hidden>→</span>
            </Link>
          </div>
          <ul className="mt-10 grid gap-2 text-[12px] font-mono uppercase tracking-[0.18em] text-muted border-t border-line pt-6">
            <li>— Made in Portugal · 18oz canvas</li>
            <li>— Limited run · 80 pieces total</li>
            <li>— Worldwide shipping</li>
          </ul>
        </div>
      </section>

      {/* CATEGORY RAILS */}
      <CategoryRail title="Outerwear" kicker="Drop 01 / Heavyweight" href="/shop?c=outerwear" products={outerwear} />
      <CategoryRail title="Tops" kicker="Drop 01 / Layer Pieces" href="/shop?c=tops" products={tops} />
      <CategoryRail title="Bottoms" kicker="Drop 01 / Cut Loose" href="/shop?c=bottoms" products={bottoms} />
      <CategoryRail title="Accessories" kicker="Drop 01 / Hard Goods" href="/shop?c=accessories" products={accessories} />

      {/* EDITORIAL STORY BLOCK */}
      <section className="px-5 md:px-10 pt-32 md:pt-48 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">A Note from the Cutting Room</p>
          <h2 className="font-display uppercase text-[clamp(44px,7vw,108px)] mt-3 leading-[0.92]">
            Cut Once.<br />Sewn Slow.
          </h2>
          <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink-soft max-w-prose">
            <p>
              Every Drop is patterned, cut, and sewn in batches small enough to
              know each piece by name. We don&apos;t restock. We don&apos;t do
              seasons.
            </p>
            <p>
              When a thing&apos;s ready, it ships. When it&apos;s gone, it&apos;s gone.
              That&apos;s the whole engine.
            </p>
          </div>
          <Link href="/about" className="mt-8 inline-block font-mono text-[11px] tracking-[0.22em] uppercase link-grow">
            Read the Manifesto →
          </Link>
        </div>
        <div className="md:col-span-6 order-1 md:order-2 relative aspect-[4/5] overflow-hidden bg-line">
          <img src={STORY_IMG} alt="Inside the cutting room" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      {/* MARQUEE QUOTE */}
      <section className="mt-32 md:mt-48 overflow-hidden border-y border-ink/20 bg-bg py-6 md:py-10">
        <div className="flex marquee-track whitespace-nowrap font-display uppercase text-[clamp(64px,12vw,180px)] leading-none gap-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-12">
              <span>Wear the Want</span>
              <span aria-hidden className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* LOOKBOOK STRIP */}
      <section className="relative pt-24 md:pt-32">
        <div className="px-5 md:px-10 mb-6 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">Lookbook</p>
            <h2 className="font-display uppercase text-[clamp(40px,7vw,96px)] mt-2">In the Field</h2>
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

      {/* PRESS STRIP */}
      <section className="px-5 md:px-10 mt-32 md:mt-48 border-y border-line">
        <p className="text-center font-mono text-[10px] tracking-[0.3em] uppercase text-muted py-4">
          Featured In
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-line">
          {["HIGHSNOBIETY", "HYPEBEAST", "i-D", "DAZED", "COMPLEX"].map((m) => (
            <div key={m} className="py-10 md:py-14 flex items-center justify-center font-display uppercase text-[clamp(20px,2.4vw,32px)] tracking-[0.04em] opacity-70 hover:opacity-100 transition-opacity">
              {m}
            </div>
          ))}
        </div>
      </section>

      {/* SIGNUP TAKEOVER */}
      <section className="relative px-5 md:px-10 py-32 md:py-48 text-center overflow-hidden">
        <div className="opacity-[0.06] pointer-events-none absolute inset-0 flex items-center justify-center">
          <Wordmark className="w-[120%] text-ink" variant="horizontal" />
        </div>
        <div className="relative z-[2]">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">Get on the list</p>
          <h2 className="font-display uppercase text-[clamp(56px,11vw,180px)] mt-3 leading-[0.88]">
            Drops First.<br />No Noise.
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
          <p className="mt-4 text-[11px] font-mono uppercase tracking-[0.22em] text-muted">
            One mail per drop. Unsubscribe in two clicks.
          </p>
        </div>
      </section>

      {/* GIANT BRAND STAMP */}
      <section className="px-5 md:px-10 py-16 md:py-28 text-center">
        <Wordmark variant="stamp" className="mx-auto w-32 md:w-44 text-ink" />
        <p className="mt-6 font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
          Est · MMXXVI · Los Angeles
        </p>
      </section>
    </>
  );
}
