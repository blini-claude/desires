import Link from "next/link";

export const metadata = { title: "Returns" };

export default function ReturnsPage() {
  return (
    <section className="dx">
      <div className="pw dx-page" style={{ maxWidth: 880 }}>
        <header className="dx-page__head">
          <p className="dx-eyebrow">Help</p>
          <h1 className="dx-h1">Returns &amp; Exchanges</h1>
        </header>

        <p className="dx-body" style={{ marginTop: "clamp(24px,4vw,40px)", maxWidth: 600 }}>
          We make small batches and we want every piece to land right. If something doesn&apos;t,
          send it back within 14 days of delivery for a full refund or an exchange.
        </p>

        <div style={{ marginTop: "clamp(40px,5vw,60px)", display: "grid", gap: 24 }}>
          {[
            ["01", "Within 14 days", "Email hello@desires.today with your order number and the piece you want to return."],
            ["02", "Tags on, unworn", "Pieces must come back in the original condition with tags attached."],
            ["03", "Free US returns",   "We email you a prepaid USPS label. International returns are buyer-paid."],
            ["04", "Refund timing", "Refunds hit your card within 5 business days of us receiving the piece."],
          ].map(([n, h, copy]) => (
            <div key={n} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 16, alignItems: "baseline" }}>
              <span className="dx-md dx-num">{n}</span>
              <div>
                <p className="dx-md">{h}</p>
                <p className="dx-body" style={{ marginTop: 6 }}>{copy}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="dx-divider" />

        <div style={{ display: "grid", gap: 24 }}>
          <div>
            <p className="dx-eyebrow" style={{ marginBottom: 8 }}>Sale &amp; Final Sale</p>
            <p className="dx-body">Anything marked Final Sale is non-returnable. Everything else is fair game.</p>
          </div>
          <div>
            <p className="dx-eyebrow" style={{ marginBottom: 8 }}>Faulty Pieces</p>
            <p className="dx-body">
              If a piece arrives faulty, email a photo to <a href="mailto:hello@desires.today" style={{ textDecoration: "underline" }}>hello@desires.today</a> and we&apos;ll
              cover return shipping plus replace or refund — your call.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "clamp(60px,8vw,100px)", textAlign: "center" }}>
          <Link href="/help/shipping" className="dx-btn dx-btn--line">Shipping</Link>
        </div>
      </div>
    </section>
  );
}
