import Link from "next/link";
import { ENTRIES } from "@/lib/journal";

export const metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <section className="dx">
      <div className="pw dx-page">
        <header className="dx-page__head">
          <div className="dx-page__eyebrow-row">
            <p className="dx-eyebrow">Journal</p>
            <p className="dx-meta dx-meta--ink dx-num">{ENTRIES.length} entries</p>
          </div>
          <h1 className="dx-h1">Notes from the Studio</h1>
          <p className="dx-body" style={{ maxWidth: 640, marginTop: 16 }}>
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
          <h2 className="dx-h2" style={{ marginTop: 8 }}>One Note Per Drop</h2>
          <form action="#" method="post" style={{
            display: "flex",
            maxWidth: 460,
            margin: "28px auto 0",
            background: "#f6f5f3",
            padding: "4px 8px",
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
