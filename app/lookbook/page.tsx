export const metadata = { title: "Lookbook" };

type Look = { n: string; title: string; bg: string; span: "full" | "7" | "5" };

const LOOKS: Look[] = [
  { n: "01", title: "Rooftop",    bg: "0a0a0a", span: "full" },
  { n: "02", title: "Garage",     bg: "1a1a1a", span: "7" },
  { n: "03", title: "Highway",    bg: "0f0f0f", span: "5" },
  { n: "04", title: "Back Alley", bg: "151515", span: "5" },
  { n: "05", title: "Shoreline",  bg: "0a0a0a", span: "7" },
  { n: "06", title: "Underpass",  bg: "1a1a1a", span: "full" },
  { n: "07", title: "Storefront", bg: "0f0f0f", span: "7" },
  { n: "08", title: "Last Light", bg: "121212", span: "5" },
];

const ph = (l: Look, w: number, h: number) =>
  `https://placehold.co/${w}x${h}/${l.bg}/f1ece1/png?text=${encodeURIComponent("LOOK " + l.n)}&font=oswald`;

export default function LookbookPage() {
  return (
    <section className="dx">
      <div className="pw dx-page">
        <header className="dx-page__head">
          <div className="dx-page__eyebrow-row">
            <p className="dx-eyebrow">Lookbook · SS26</p>
            <p className="dx-meta dx-meta--ink dx-num">{LOOKS.length} looks · 1 weekend</p>
          </div>
          <h1 className="dx-mega">Drop 01<span style={{ opacity: 0.35 }}>.</span></h1>
          <p className="dx-body-lg" style={{ maxWidth: 720, marginTop: 24 }}>
            Eight looks shot across one weekend. No studio. No retouching the air out of it.
            The clothes, the bodies that wear them, the places they end up.
          </p>
        </header>

        <div className="dx-look" style={{ marginTop: "clamp(40px,6vw,80px)" }}>
          {LOOKS.map((l) => {
            const cls = l.span === "full" ? "dx-look__fig--full" : l.span === "7" ? "dx-look__fig--7" : "dx-look__fig--5";
            const isWide = l.span === "full";
            return (
              <figure key={l.n} className={`dx-look__fig ${cls}`}>
                <div className="dx-look__media">
                  <span className="dx-look__num dx-num">{l.n}</span>
                  <img
                    src={ph(l, isWide ? 2200 : 1400, isWide ? 1240 : 1750)}
                    alt={`Look ${l.n} — ${l.title}`}
                    loading="lazy"
                  />
                </div>
                <figcaption className="dx-look__cap">
                  <span>Look {l.n}</span>
                  <span>{l.title}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <hr className="dx-divider" />

        <div style={{ textAlign: "center" }}>
          <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>Now Available</p>
          <h2 className="dx-xl" style={{ marginTop: 16 }}>Wear the Want.</h2>
          <a href="/shop" className="dx-btn dx-btn--solid" style={{ marginTop: 28 }}>Shop the Drop</a>
        </div>
      </div>
    </section>
  );
}
