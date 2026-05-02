import { HeroSlot } from "@/components/hero-slot";

const img = (text: string, bg = "0a0a0a", w = 2200, h = 1400) =>
  `https://placehold.co/${w}x${h}/${bg}/f1ece1/png?text=${encodeURIComponent(text)}&font=oswald`;

export default function HomePage() {
  return (
    <>
      <HeroSlot
        height="full"
        align="left"
        vAlign="bottom"
        tone="light"
        image={img("DROP 01")}
        kicker="Drop 01 · Spring–Summer 2026"
        title="Wear the Want"
        subtitle="Twenty pieces. One run. No restock. The first chapter of Desires is live."
        cta={{ label: "Shop Drop 01", href: "/shop" }}
      />

      <HeroSlot
        height="tall"
        align="right"
        vAlign="bottom"
        tone="light"
        image={img("ATLAS · WORK JACKET", "1a1a1a")}
        kicker="Featured · Piece 01 of 20"
        title="Atlas Work Jacket"
        subtitle="18oz canvas. Reinforced shoulders. Brass everything. Cut to wear over knit, denim, the lot — built so you stop noticing it's there."
        cta={{ label: "Shop Atlas — $245", href: "/shop/atlas-work-jacket" }}
      />

      <HeroSlot
        height="tall"
        align="center"
        vAlign="center"
        tone="light"
        image={img("THE · PAVEMENT · SERIES", "0e0e0e")}
        kicker="Next · Drop 02 — June 2"
        title="The Pavement Series"
        subtitle="Eight pieces, one Friday. Get on the list to see it before anyone else."
        cta={{ label: "Sign Up for First Dibs", href: "/#signup" }}
      />

      <HeroSlot
        height="tall"
        align="left"
        vAlign="bottom"
        tone="light"
        image={img("LOOKBOOK · DROP 01", "201810")}
        kicker="Lookbook"
        title="In the Field"
        subtitle="Eight looks shot across one weekend. No studio, no retouching the air out of it."
        cta={{ label: "See the Lookbook", href: "/lookbook" }}
      />

      <HeroSlot
        height="tall"
        align="right"
        vAlign="top"
        tone="light"
        image={img("THE · CUTTING ROOM", "1a1612")}
        kicker="A Note from the Cutting Room"
        title="Cut Once. Sewn Slow."
        subtitle="Every Drop is patterned, cut, and sewn in batches small enough to know each piece by name. We don't restock. We don't do seasons."
        cta={{ label: "Read the Manifesto", href: "/about" }}
      />

      <HeroSlot
        height="tall"
        align="center"
        vAlign="center"
        tone="light"
        image={img("ROPE · CARGO · PANT", "2a2418")}
        kicker="New · Drop 01"
        title="Rope Cargo Pant"
        subtitle="Heavyweight twill, double-knee panels, deep utility pockets. Cut loose, hemmed long."
        cta={{ label: "Shop Rope — $195", href: "/shop/rope-cargo" }}
      />

      <section id="signup" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-bg">
        <img
          aria-hidden
          src={img("WEAR · THE · WANT", "f1ece1", 2200, 1400)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
        />
        <div className="relative z-[2] px-5 md:px-12 text-center max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-muted">
            Get on the list
          </p>
          <h2 className="font-display uppercase text-[clamp(64px,13vw,220px)] mt-4 leading-[0.85]">
            Drops First.<br />No Noise.
          </h2>
          <form className="mt-10 mx-auto max-w-md flex border-b border-ink" action="#" method="post">
            <input
              type="email"
              required
              placeholder="email@yours.com"
              className="flex-1 bg-transparent py-3 outline-none placeholder:text-muted"
            />
            <button className="font-mono uppercase text-[11px] tracking-[0.22em] px-4 py-3 hover:text-accent transition-colors">
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-[11px] font-mono uppercase tracking-[0.22em] text-muted">
            One mail per drop. Unsubscribe in two clicks.
          </p>
        </div>
      </section>
    </>
  );
}
