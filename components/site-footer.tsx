import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="pw" style={{ paddingTop: 80, paddingBottom: 30 }}>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="wordmark" style={{ fontSize: 32, letterSpacing: 8 }}>DESIRES</p>
            <p className="mt-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              Wear loud. Last long.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="grid gap-3">
              <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, letterSpacing: 0.6, textTransform: "uppercase" }}>Shop</span>
              <Link href="/shop">All</Link>
              <Link href="/shop?c=tops">Tops</Link>
              <Link href="/shop?c=bottoms">Bottoms</Link>
              <Link href="/shop?c=outerwear">Outerwear</Link>
              <Link href="/shop?c=accessories">Accessories</Link>
            </div>
            <div className="grid gap-3">
              <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, letterSpacing: 0.6, textTransform: "uppercase" }}>Info</span>
              <Link href="/about">About</Link>
              <Link href="/lookbook">Lookbook</Link>
              <Link href="/journal">Journal</Link>
              <Link href="/help/shipping">Shipping</Link>
              <Link href="/help/returns">Returns</Link>
            </div>
          </div>

          <form className="md:col-span-3 grid gap-3" action="#" method="post">
            <label
              style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, letterSpacing: 0.6, textTransform: "uppercase" }}
            >
              Get first dibs
            </label>
            <div className="flex border-b" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
              <input
                type="email"
                required
                placeholder="email@yours.com"
                className="flex-1 bg-transparent py-2 outline-none"
                style={{ color: "#fff" }}
              />
              <button type="submit" style={{ color: "#fff", padding: "8px 12px" }}>→</button>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: "22px" }}>
              One mail per drop. No noise.
            </p>
          </form>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="pw flex flex-col md:flex-row items-center justify-between gap-3" style={{ paddingTop: 18, paddingBottom: 18 }}>
          <span style={{ color: "rgba(255,255,255,0.45)" }}>© {new Date().getFullYear()} Desires. All wrongs reserved.</span>
          <div className="flex gap-6">
            <Link href="/legal/terms">Terms</Link>
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="https://instagram.com">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
