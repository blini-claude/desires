export const metadata = { title: "Journal" };

const ENTRIES = [
  { slug: "drop-01-notes", title: "Drop 01 — How It Was Cut", date: "Apr 28, 2026", read: "4 min" },
  { slug: "the-pattern-room", title: "Inside the Pattern Room", date: "Apr 12, 2026", read: "6 min" },
  { slug: "what-we-wear", title: "What We Wear When We Make It", date: "Mar 30, 2026", read: "3 min" },
];

export default function JournalPage() {
  return (
    <section className="px-5 md:px-10 pt-12 md:pt-20 pb-32">
      <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">Journal</p>
      <h1 className="font-display uppercase text-[clamp(56px,12vw,200px)] mt-2">
        Notes
      </h1>
      <ul className="mt-16 divide-y divide-line border-y border-line">
        {ENTRIES.map((e) => (
          <li key={e.slug} className="py-8 grid md:grid-cols-12 gap-4 items-baseline group hover:bg-ink/[.02] transition-colors px-2 -mx-2">
            <span className="md:col-span-2 font-mono text-[11px] tracking-[0.22em] uppercase text-muted">{e.date}</span>
            <h2 className="md:col-span-8 text-[clamp(24px,3.5vw,42px)] tracking-tight">{e.title}</h2>
            <span className="md:col-span-2 font-mono text-[11px] tracking-[0.22em] uppercase text-muted md:text-right">{e.read} →</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
