import Link from "next/link";

export const metadata = { title: "Shipping" };

const TABLE = [
  { region: "United States",   price: "Free over $150 · $9 under", time: "3–5 business days" },
  { region: "Canada",           price: "$18 flat",                 time: "5–8 business days" },
  { region: "European Union",   price: "$22 flat",                 time: "5–8 business days" },
  { region: "United Kingdom",   price: "$22 flat",                 time: "5–8 business days" },
  { region: "Australia · NZ",   price: "$30 flat",                 time: "7–12 business days" },
  { region: "Rest of world",    price: "$35 flat",                 time: "7–14 business days" },
];

export default function ShippingPage() {
  return (
    <section className="dx">
      <div className="pw dx-page" style={{ maxWidth: 880 }}>
        <header className="dx-page__head">
          <p className="dx-eyebrow">Help</p>
          <h1 className="dx-h1">Shipping</h1>
        </header>

        <p className="dx-body" style={{ marginTop: "clamp(24px,4vw,40px)", maxWidth: 600 }}>
          Orders ship from our Los Angeles studio Monday through Thursday. Anything placed before
          12pm PT goes out the same day. We use DHL Express for international and USPS Ground
          Advantage for domestic. Tracking arrives by email when the label is cut.
        </p>

        <div style={{ marginTop: "clamp(40px,5vw,60px)" }}>
          <p className="dx-eyebrow" style={{ marginBottom: 16 }}>Rates &amp; Times</p>
          <div style={{ display: "grid", gap: 18 }}>
            {TABLE.map((row) => (
              <div key={row.region} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, alignItems: "baseline" }}>
                <span className="dx-md">{row.region}</span>
                <span className="dx-body">{row.price}</span>
                <span className="dx-body" style={{ textAlign: "right" }}>{row.time}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="dx-divider" />

        <div style={{ display: "grid", gap: 24 }}>
          <div>
            <p className="dx-eyebrow" style={{ marginBottom: 8 }}>Customs &amp; Duties</p>
            <p className="dx-body">
              International orders may incur duties at the border. These are charged by your local
              carrier and not included at checkout.
            </p>
          </div>
          <div>
            <p className="dx-eyebrow" style={{ marginBottom: 8 }}>Lost or Damaged</p>
            <p className="dx-body">
              Email <a href="mailto:hello@desires.today" style={{ textDecoration: "underline" }}>hello@desires.today</a> within 7 days of the
              tracking event and we&apos;ll make it right.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "clamp(60px,8vw,100px)", textAlign: "center" }}>
          <Link href="/help/returns" className="dx-btn dx-btn--line">Returns &amp; Exchanges</Link>
        </div>
      </div>
    </section>
  );
}
