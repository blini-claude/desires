"use client";

const MESSAGES = [
  "Free shipping on US orders over $150",
  "Drop 01 — Twenty pieces · No restock",
  "Sign up for early access to Drop 02",
  "Made in Portugal · Italy · Japan",
  "Cut once. Sewn slow. Wear loud.",
];

export function AnnouncementBar() {
  // duplicate the strip so the marquee is seamless
  const strip = [...MESSAGES, ...MESSAGES, ...MESSAGES];
  return (
    <div className="dx-announce" role="region" aria-label="Announcements">
      <div className="dx-announce__track">
        {strip.map((m, i) => (
          <span key={i} className="dx-announce__item">
            <span aria-hidden style={{ marginRight: 32, opacity: 0.4 }}>◇</span>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
