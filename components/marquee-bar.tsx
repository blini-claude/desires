const TICKS = [
  "FREE SHIPPING OVER $150",
  "DROP 01 — LIMITED",
  "MADE IN SMALL RUNS",
  "WORLDWIDE",
  "SIGN UP — GET FIRST DIBS",
  "RETURNS WITHIN 14 DAYS",
];

export function MarqueeBar() {
  const items = [...TICKS, ...TICKS];
  return (
    <div className="relative z-[3] bg-ink text-bg overflow-hidden border-b border-ink">
      <div className="flex marquee-track whitespace-nowrap py-2 text-[11px] tracking-[0.2em] font-mono uppercase">
        {items.map((t, i) => (
          <span key={i} className="px-6 inline-flex items-center gap-6 shrink-0">
            <span>{t}</span>
            <span aria-hidden className="text-bg/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
