const LOOKS = [
  { n: "01", title: "Rooftop", bg: "1a1a1a" },
  { n: "02", title: "Garage", bg: "2a2418" },
  { n: "03", title: "Highway", bg: "0f0f0f" },
  { n: "04", title: "Back Alley", bg: "221a14" },
  { n: "05", title: "Shoreline", bg: "0a0a0a" },
  { n: "06", title: "Underpass", bg: "151515" },
  { n: "07", title: "Storefront", bg: "1f1810" },
  { n: "08", title: "Last Light", bg: "181818" },
];

export const metadata = { title: "Lookbook" };

export default function LookbookPage() {
  return (
    <section className="px-5 md:px-10 pt-12 md:pt-20">
      <div className="mb-12 md:mb-20">
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">
          Drop 01 / Spring–Summer 2026
        </p>
        <h1 className="font-display uppercase text-[clamp(56px,12vw,200px)] mt-2">
          Lookbook
        </h1>
        <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-ink-soft">
          Eight looks shot across one weekend. No studio. No retouching the air
          out of it. The clothes, the bodies that wear them, the places they
          end up.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-x-6 gap-y-20">
        {LOOKS.map((l, i) => {
          const span = i % 3 === 0 ? "md:col-span-12" : i % 3 === 1 ? "md:col-span-7" : "md:col-span-5";
          return (
            <figure key={l.n} className={span}>
              <div className="aspect-[4/5] overflow-hidden bg-line">
                <img
                  src={`https://placehold.co/1400x1750/${l.bg}/f1ece1/png?text=${encodeURIComponent("LOOK " + l.n)}&font=oswald`}
                  alt={`Look ${l.n} — ${l.title}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between font-mono text-[11px] tracking-[0.22em] uppercase text-muted">
                <span>Look {l.n}</span>
                <span>{l.title}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
