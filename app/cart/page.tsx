import Link from "next/link";

export const metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <section className="pw" style={{ paddingTop: 120, paddingBottom: 100, minHeight: "60vh" }}>
      <p className="vc-desc" style={{ color: "rgba(0,0,0,0.55)" }}>Cart</p>
      <h1 className="vc-title" style={{ color: "#000", marginTop: 6 }}>Empty.</h1>
      <p className="mt-6 max-w-prose">
        Nothing in the bag yet. Go grab something before the run is gone.
      </p>
      <div className="mt-8">
        <Link href="/shop" className="btn">Shop the Drop</Link>
      </div>
    </section>
  );
}
