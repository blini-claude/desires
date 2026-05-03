import Link from "next/link";

export const metadata = { title: "Account" };

export default function AccountPage() {
  return (
    <section className="dx">
      <div className="pw dx-page" style={{ maxWidth: 480 }}>
        <header className="dx-page__head">
          <p className="dx-eyebrow">Account</p>
          <h1 className="dx-h1">Sign In</h1>
        </header>

        <form action="#" method="post" style={{ display: "grid", gap: 18, marginTop: "clamp(24px,4vw,40px)" }}>
          <label style={{ display: "grid", gap: 8 }}>
            <span className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>Email</span>
            <input
              type="email"
              required
              placeholder="email@yours.com"
              className="dx-body"
              style={{ background: "#f6f5f3", border: 0, padding: "14px 16px", outline: "none" }}
            />
          </label>
          <label style={{ display: "grid", gap: 8 }}>
            <span className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>Password</span>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="dx-body"
              style={{ background: "#f6f5f3", border: 0, padding: "14px 16px", outline: "none" }}
            />
          </label>
          <button type="submit" className="dx-btn dx-btn--solid dx-btn--block" style={{ marginTop: 8 }}>
            Sign In
          </button>
        </form>

        <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <Link href="/account/register" className="dx-btn dx-btn--ghost">Create account</Link>
          <Link href="/account/forgot" className="dx-btn dx-btn--ghost">Forgot password</Link>
        </div>

        <hr className="dx-divider" />

        <div style={{ background: "#f6f5f3", padding: 28 }}>
          <p className="dx-eyebrow" style={{ color: "rgba(0,0,0,0.55)" }}>Heads up</p>
          <p className="dx-body" style={{ marginTop: 8 }}>
            Accounts are coming with Drop 02. For now you can checkout as a guest from the cart.
          </p>
        </div>
      </div>
    </section>
  );
}
