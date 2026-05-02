import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-[2] mt-32 border-t border-line bg-ink text-bg">
      <div className="px-5 md:px-10 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-[clamp(48px,8vw,120px)] leading-[0.85] uppercase">
            Wear<br />the<br />want.
          </p>
        </div>

        <div className="md:col-span-4 grid grid-cols-2 gap-8 text-[12px] font-mono uppercase tracking-[0.18em]">
          <div className="grid gap-3">
            <span className="text-bg/40">Shop</span>
            <Link href="/shop" className="link-grow">All</Link>
            <Link href="/shop/tops" className="link-grow">Tops</Link>
            <Link href="/shop/bottoms" className="link-grow">Bottoms</Link>
            <Link href="/shop/outerwear" className="link-grow">Outerwear</Link>
            <Link href="/shop/accessories" className="link-grow">Accessories</Link>
          </div>
          <div className="grid gap-3">
            <span className="text-bg/40">Info</span>
            <Link href="/about" className="link-grow">About</Link>
            <Link href="/lookbook" className="link-grow">Lookbook</Link>
            <Link href="/journal" className="link-grow">Journal</Link>
            <Link href="/contact" className="link-grow">Contact</Link>
            <Link href="/help/shipping" className="link-grow">Shipping</Link>
            <Link href="/help/returns" className="link-grow">Returns</Link>
          </div>
        </div>

        <form className="md:col-span-3 grid gap-3" action="#" method="post">
          <label className="text-[12px] font-mono uppercase tracking-[0.18em] text-bg/60">
            Get first dibs
          </label>
          <div className="flex border-b border-bg/30">
            <input
              type="email"
              required
              placeholder="email@yours.com"
              className="flex-1 bg-transparent py-2 text-bg placeholder:text-bg/40 outline-none"
            />
            <button className="font-mono uppercase text-[12px] tracking-[0.18em] px-3 py-2">→</button>
          </div>
          <p className="text-[11px] text-bg/40 leading-relaxed">
            One mail per drop. No noise.
          </p>
        </form>
      </div>

      <div className="border-t border-bg/15 px-5 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-bg/50">
        <span>© {new Date().getFullYear()} Desires. All wrongs reserved.</span>
        <div className="flex gap-6">
          <Link href="/legal/terms" className="link-grow">Terms</Link>
          <Link href="/legal/privacy" className="link-grow">Privacy</Link>
          <Link href="https://instagram.com" className="link-grow">Instagram</Link>
        </div>
      </div>
    </footer>
  );
}
