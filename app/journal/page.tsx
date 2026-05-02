export const metadata = { title: "Journal" };

const ENTRIES = [
  { slug: "drop-01-notes", title: "Drop 01 — How It Was Cut", date: "Apr 28, 2026", read: "4 min" },
  { slug: "the-pattern-room", title: "Inside the Pattern Room", date: "Apr 12, 2026", read: "6 min" },
  { slug: "what-we-wear", title: "What We Wear When We Make It", date: "Mar 30, 2026", read: "3 min" },
];

export default function JournalPage() {
  return (
    <section className="pw" style={{ paddingTop: 120, paddingBottom: 100 }}>
      <p className="vc-desc" style={{ color: "rgba(0,0,0,0.55)" }}>Journal</p>
      <h1 className="vc-title" style={{ color: "#000", marginTop: 6 }}>Notes</h1>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {ENTRIES.map((e) => (
          <li key={e.slug} className="py-7 grid md:grid-cols-12 gap-4 items-baseline">
            <span className="md:col-span-2 vc-desc" style={{ color: "rgba(0,0,0,0.55)" }}>
              {e.date}
            </span>
            <h2 className="md:col-span-8 vc-title" style={{ color: "#000" }}>{e.title}</h2>
            <span className="md:col-span-2 vc-desc md:text-right" style={{ color: "rgba(0,0,0,0.55)" }}>
              {e.read} →
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
