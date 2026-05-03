export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="dx">
      <div className="pw dx-page">
        <header className="dx-page__head">
          <p className="dx-eyebrow">About</p>
          <h1 className="dx-h1">A Label For Want</h1>
        </header>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(40px,6vw,80px)",
          marginTop: "clamp(40px,6vw,80px)",
        }} className="dx-about-grid">
          <div className="dx-about-grid__body" style={{ display: "grid", gap: 22 }}>
            <p className="dx-body-lg">
              Desires is a small streetwear label working in batches small enough to know each piece by name.
              Cut, sewn, and finished by people in the same room, on the same week, before they go anywhere.
            </p>
            <p className="dx-body">
              We don&apos;t do seasons. We do drops when a thing is ready. Some land twice a year, some four
              times, some never. Each piece is built around a hook you can&apos;t shake until you&apos;re wearing it.
            </p>
            <p className="dx-body">
              No license deals. No celebrity capsules. No press samples that aren&apos;t the same as the run.
              What we send out is what we put on. The clothes are the marketing.
            </p>
          </div>

          <aside className="dx-about-grid__meta" style={{ display: "grid", gap: 28 }}>
            {[
              { label: "Made In",   value: <>Portugal · Italy · Japan</> },
              { label: "Studio",    value: <>Los Angeles, CA<br />By appointment.</> },
              { label: "Press · Wholesale", value: <>hello@desires.today</> },
              { label: "Established", value: "2026" },
            ].map((row) => (
              <div key={row.label} style={{ borderTop: "1px solid #000", paddingTop: 16 }}>
                <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)", marginBottom: 8 }}>{row.label}</p>
                <p className="dx-body dx-meta--ink" style={{ color: "#000" }}>{row.value}</p>
              </div>
            ))}
          </aside>
        </div>

        <div className="dx-bleed-quote">
          <p className="dx-mega">
            &ldquo;Cut once.<br />Sewn slow.<br />Wear loud.&rdquo;
          </p>
          <p className="dx-eyebrow" style={{ marginTop: 24, color: "rgba(0,0,0,0.55)" }}>— The Cutting Room</p>
        </div>

        <hr className="dx-divider" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 28,
        }}>
          <div style={{ display: "grid", gap: 12 }}>
            <p className="dx-eyebrow">How a Drop Works</p>
            <ol style={{ display: "grid", gap: 16, marginTop: 8, paddingLeft: 0, listStyle: "none" }}>
              {[
                ["01", "We pattern, sample, and wear-test for two months minimum."],
                ["02", "We cut a fixed run. Whatever the cutting room finishes is what ships."],
                ["03", "We post it. We don't restock the same exact thing twice."],
                ["04", "When it's gone, it's gone. The next thing is already in pattern."],
              ].map(([n, copy]) => (
                <li key={n} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 16, alignItems: "baseline", borderTop: "1px solid #000", paddingTop: 16 }}>
                  <span className="dx-md dx-num">{n}</span>
                  <span className="dx-body">{copy}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div style={{ marginTop: "clamp(60px,8vw,100px)", textAlign: "center" }}>
          <p className="dx-mega">Wear loud.<br />Last long.</p>
          <a href="/shop" className="dx-btn dx-btn--solid" style={{ marginTop: 32 }}>Shop the Drop</a>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .dx-about-grid { grid-template-columns: 7fr 5fr !important; }
          .dx-about-grid__meta { padding-left: clamp(24px, 4vw, 56px); border-left: 1px solid #000; }
        }
      `}</style>
    </section>
  );
}
