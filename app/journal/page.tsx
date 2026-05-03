import Link from "next/link";

export const metadata = { title: "Journal" };

const ENTRIES = [
  { slug: "drop-01-notes",   title: "Drop 01 — How It Was Cut",      date: "Apr 28, 2026", read: "4 min" },
  { slug: "the-pattern-room", title: "Inside the Pattern Room",       date: "Apr 12, 2026", read: "6 min" },
  { slug: "what-we-wear",     title: "What We Wear When We Make It",  date: "Mar 30, 2026", read: "3 min" },
  { slug: "fabric-notes-01",  title: "Fabric Notes · Mid-Weight Cotton", date: "Mar 14, 2026", read: "5 min" },
  { slug: "field-test",       title: "A Year in the Atlas Jacket",    date: "Feb 22, 2026", read: "7 min" },
];

export default function JournalPage() {
  return (
    <section className="dx">
      <div className="pw dx-page">
        <header className="dx-page__head">
          <div className="dx-page__eyebrow-row">
            <p className="dx-eyebrow">Journal</p>
            <p className="dx-meta dx-meta--ink dx-num">{ENTRIES.length} entries</p>
          </div>
          <h1 className="dx-mega">Notes<span style={{ opacity: 0.35 }}>.</span></h1>
          <p className="dx-body-lg" style={{ maxWidth: 720, marginTop: 24 }}>
            Studio dispatches, field reports, and the occasional rant. Long-form when it earns it.
          </p>
        </header>

        <div className="dx-list" style={{ marginTop: "clamp(40px,6vw,80px)" }}>
          {ENTRIES.map((e) => (
            <Link key={e.slug} href={`/journal/${e.slug}`} className="dx-list__row">
              <span className="dx-meta dx-list__date dx-num">{e.date}</span>
              <h2 className="dx-list__title">{e.title}</h2>
              <span className="dx-meta dx-list__read dx-num">{e.read} →</span>
            </Link>
          ))}
        </div>

        <hr className="dx-divider" />

        <div style={{ textAlign: "center" }}>
          <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>Subscribe</p>
          <h2 className="dx-lg" style={{ marginTop: 14 }}>One Note Per Drop.</h2>
          <form action="#" method="post" style={{
            display: "flex",
            maxWidth: 460,
            margin: "28px auto 0",
            borderBottom: "1px solid #000"
          }}>
            <input
              type="email"
              required
              placeholder="email@yours.com"
              className="dx-body"
              style={{ flex: 1, background: "transparent", border: 0, outline: "none", padding: "12px 0" }}
            />
            <button type="submit" className="dx-btn dx-btn--ghost" style={{ paddingLeft: 12 }}>Sign Up →</button>
          </form>
        </div>
      </div>
    </section>
  );
}
