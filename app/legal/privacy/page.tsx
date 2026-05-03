export const metadata = { title: "Privacy" };

const SECTIONS = [
  { h: "What we collect", p: "Order details (name, shipping address, email, items purchased), checkout payment data via our processor, and basic anonymous analytics on how the site is used." },
  { h: "Why we collect it", p: "To ship your order, send you transactional email about that order, and improve the store. We do not sell your data to third parties." },
  { h: "Email & marketing", p: "If you opt into the newsletter we send one email per drop. You can unsubscribe in two clicks from any email. We never sell or share the list." },
  { h: "Cookies", p: "We use a small number of first-party cookies to keep your cart working and to count anonymous page visits. No third-party tracking cookies." },
  { h: "Payments", p: "Card details are handled by our PCI-compliant payment processor. We never see, store, or have access to full card numbers." },
  { h: "Your rights", p: "You can request a copy of the data we hold on you, or ask us to delete it, at any time. Email hello@desires.today and we'll act within 30 days." },
  { h: "Retention", p: "Order data is kept for 7 years to satisfy tax and accounting requirements. Newsletter data is kept until you unsubscribe." },
  { h: "Changes", p: "We'll update this page if we change anything material. The current version always lives at this URL." },
];

export default function PrivacyPage() {
  return (
    <section className="dx">
      <div className="pw dx-page" style={{ maxWidth: 760 }}>
        <header className="dx-page__head">
          <p className="dx-eyebrow">Legal</p>
          <h1 className="dx-h1">Privacy</h1>
        </header>

        <p className="dx-meta" style={{ marginTop: 14 }}>Last updated · April 28, 2026</p>

        <div style={{ marginTop: "clamp(40px,5vw,60px)", display: "grid", gap: 32 }}>
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <p className="dx-eyebrow" style={{ marginBottom: 10 }}>{s.h}</p>
              <p className="dx-body">{s.p}</p>
            </div>
          ))}
        </div>

        <p className="dx-body" style={{ marginTop: "clamp(60px,8vw,100px)", color: "rgba(0,0,0,0.55)" }}>
          Questions: <a href="mailto:hello@desires.today" style={{ textDecoration: "underline" }}>hello@desires.today</a>
        </p>
      </div>
    </section>
  );
}
