export const metadata = { title: "Terms" };

const SECTIONS = [
  { h: "Who we are", p: "Desires is a streetwear label operating out of Los Angeles, California. \"Desires\", \"we\", \"us\" and \"our\" refer to the label and its operating entity." },
  { h: "Using the site", p: "You may browse, shop, and read editorial content on this site for personal use. You may not scrape, mirror, resell, or otherwise repurpose the content or imagery without written permission." },
  { h: "Orders", p: "Placing an order is an offer to buy. We accept the order when we ship it. Until then we may cancel for any reason, including pricing errors or stock issues." },
  { h: "Pricing", p: "Prices are listed in US dollars and exclude taxes and duties unless stated. We reserve the right to change prices between drops." },
  { h: "Intellectual property", p: "All trademarks, designs, photography, copy, and code on this site are the property of Desires or used with permission. Don't lift them." },
  { h: "Liability", p: "We make and ship clothes. To the extent permitted by law, we are not liable for incidental or consequential damages arising from use of our products or this site." },
  { h: "Governing law", p: "These terms are governed by the laws of the State of California. Any disputes will be resolved in the courts of Los Angeles County." },
  { h: "Changes", p: "We may update these terms when we need to. The current version always lives at this URL." },
];

export default function TermsPage() {
  return (
    <section className="dx">
      <div className="pw dx-page" style={{ maxWidth: 760 }}>
        <header className="dx-page__head">
          <p className="dx-eyebrow">Legal</p>
          <h1 className="dx-h1">Terms of Sale &amp; Use</h1>
        </header>

        <p className="dx-meta" style={{ marginTop: 14 }}>Last updated · April 28, 2026</p>

        <div style={{ marginTop: "clamp(40px,5vw,60px)", display: "grid", gap: 32 }}>
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <p className="dx-eyebrow" style={{ marginBottom: 10 }}>{s.h}</p>
              <p className="dx-body">{s.p}</p>
            </div>
          ))}
        </div>

        <p className="dx-body" style={{ marginTop: "clamp(60px,8vw,100px)", color: "rgba(0,0,0,0.55)" }}>
          Questions: <a href="mailto:hello@desires.today" style={{ textDecoration: "underline" }}>hello@desires.today</a>
        </p>
      </div>
    </section>
  );
}
