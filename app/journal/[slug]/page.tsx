import Link from "next/link";
import { notFound } from "next/navigation";
import { ENTRIES, getEntry } from "@/lib/journal";

export async function generateStaticParams() {
  return ENTRIES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getEntry(slug);
  return { title: e?.title ?? "Journal" };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  const more = ENTRIES.filter((x) => x.slug !== entry.slug).slice(0, 3);

  return (
    <article className="dx">
      <div className="pw dx-page" style={{ maxWidth: 760 }}>
        <header className="dx-page__head">
          <div className="dx-page__eyebrow-row">
            <p className="dx-eyebrow">
              <Link href="/journal">Journal</Link>
            </p>
            <p className="dx-meta dx-num">{entry.date} · {entry.read}</p>
          </div>
          <h1 className="dx-h1">{entry.title}</h1>
        </header>

        <div style={{ display: "grid", gap: 20, marginTop: "clamp(24px,4vw,40px)" }}>
          {entry.body.map((para, i) => (
            <p key={i} className="dx-body">{para}</p>
          ))}
        </div>

        <hr className="dx-divider" />

        <div style={{ display: "grid", gap: 12 }}>
          <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>More notes</p>
          <ul className="dx-list" style={{ marginTop: 4 }}>
            {more.map((m) => (
              <li key={m.slug}>
                <Link href={`/journal/${m.slug}`} className="dx-list__row">
                  <span className="dx-meta dx-list__date dx-num">{m.date}</span>
                  <span className="dx-list__title">{m.title}</span>
                  <span className="dx-meta dx-list__read dx-num">{m.read} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: "clamp(60px,8vw,100px)", textAlign: "center" }}>
          <Link href="/shop" className="dx-btn dx-btn--solid">Shop the Drop</Link>
        </div>
      </div>
    </article>
  );
}
