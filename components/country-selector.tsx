"use client";

import { useEffect, useState } from "react";

const COUNTRIES = [
  { code: "US", label: "United States",  currency: "USD" },
  { code: "CA", label: "Canada",         currency: "CAD" },
  { code: "GB", label: "United Kingdom", currency: "GBP" },
  { code: "EU", label: "European Union", currency: "EUR" },
  { code: "AU", label: "Australia",      currency: "AUD" },
  { code: "JP", label: "Japan",          currency: "JPY" },
  { code: "ROW", label: "Rest of World", currency: "USD" },
];

const KEY = "desires.country.v1";

export function CountrySelector() {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState(COUNTRIES[0]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) {
        const c = COUNTRIES.find((x) => x.code === saved);
        if (c) setCountry(c);
      }
    } catch {}
  }, []);

  const choose = (c: typeof COUNTRIES[number]) => {
    setCountry(c);
    try { localStorage.setItem(KEY, c.code); } catch {}
    setOpen(false);
  };

  return (
    <div className="dx-country">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="dx-country__btn"
      >
        {country.code} · {country.currency}
        <span aria-hidden style={{ marginLeft: 6 }}>{open ? "▴" : "▾"}</span>
      </button>
      {open && (
        <ul role="listbox" className="dx-country__list">
          {COUNTRIES.map((c) => (
            <li key={c.code}>
              <button
                type="button"
                role="option"
                aria-selected={c.code === country.code}
                onClick={() => choose(c)}
                className="dx-country__opt"
              >
                <span>{c.label}</span>
                <span style={{ opacity: 0.5 }}>{c.currency}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
