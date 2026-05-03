"use client";

import { useEffect, useState } from "react";

const KEY = "desires.newsletter.dismissed.v1";

export function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY)) return;
    } catch { return; }
    const t = setTimeout(() => setOpen(true), 8000);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    try { localStorage.setItem(KEY, "1"); } catch {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="dx-modal" role="dialog" aria-label="Newsletter">
      <button
        aria-label="Close"
        className="dx-modal__overlay"
        onClick={dismiss}
      />
      <div className="dx-modal__panel">
        <button
          type="button"
          aria-label="Close"
          className="dx-modal__close"
          onClick={dismiss}
        >
          <span aria-hidden>×</span>
        </button>
        {submitted ? (
          <>
            <p className="dx-eyebrow">Subscribed</p>
            <h2 className="dx-h1" style={{ marginTop: 8 }}>You&apos;re on the list</h2>
            <p className="dx-body" style={{ marginTop: 14 }}>
              Drop 02 lands in your inbox first. One email per drop. Nothing else.
            </p>
            <button type="button" onClick={dismiss} className="dx-btn dx-btn--solid" style={{ marginTop: 24 }}>
              Browse Drop 01
            </button>
          </>
        ) : (
          <>
            <p className="dx-eyebrow">Drops first · No noise</p>
            <h2 className="dx-h1" style={{ marginTop: 8 }}>Get the next drop in your inbox</h2>
            <p className="dx-body" style={{ marginTop: 14, color: "rgba(0,0,0,0.65)" }}>
              Twenty pieces sold out the last drop in eighteen days. We email subscribers a
              twelve-hour head start on Drop 02.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); if (email.trim()) { try { localStorage.setItem(KEY, "1"); } catch {} setSubmitted(true); } }}
              style={{ marginTop: 22, display: "grid", gap: 10 }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@yours.com"
                className="dx-body"
                style={{ background: "#f6f5f3", border: 0, padding: "14px 16px", outline: "none", fontSize: 14 }}
              />
              <button type="submit" className="dx-btn dx-btn--solid dx-btn--block">
                Sign Up
              </button>
            </form>
            <button type="button" onClick={dismiss} className="dx-btn dx-btn--ghost" style={{ marginTop: 16, fontSize: 11 }}>
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  );
}
