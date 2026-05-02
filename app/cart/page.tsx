import Link from "next/link";

export const metadata = { title: "Bag" };

export default function CartPage() {
  return (
    <section className="px-5 md:px-10 pt-12 md:pt-20 pb-32 min-h-[60vh]">
      <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">Bag</p>
      <h1 className="font-display uppercase text-[clamp(64px,12vw,200px)] mt-2 leading-[0.85]">
        Empty.
      </h1>
      <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-ink-soft">
        Nothing in the bag yet. Go grab something before the run is gone.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-flex items-center gap-3 bg-ink text-bg px-5 py-3 font-mono text-[11px] tracking-[0.22em] uppercase hover:bg-accent transition-colors"
      >
        Shop the Drop <span aria-hidden>→</span>
      </Link>
    </section>
  );
}
