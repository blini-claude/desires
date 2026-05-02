"use client";

import { useEffect, useState } from "react";

export function Countdown({ to }: { to: string }) {
  const [now, setNow] = useState<number>(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const target = new Date(to).getTime();
  const ms = Math.max(0, target - now);
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1000);
  const cell = (n: number, label: string) => (
    <div className="flex flex-col items-center">
      <span className="font-display text-[clamp(48px,9vw,140px)] tabular-nums leading-none">
        {String(n).padStart(2, "0")}
      </span>
      <span className="mt-2 font-mono text-[10px] tracking-[0.25em] uppercase text-muted">{label}</span>
    </div>
  );
  return (
    <div className="grid grid-cols-4 gap-4 md:gap-10 items-end">
      {cell(d, "Days")}
      {cell(h, "Hours")}
      {cell(m, "Mins")}
      {cell(s, "Secs")}
    </div>
  );
}
