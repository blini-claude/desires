import { HeroCarousel, type HeroSlide } from "@/components/hero-carousel";

const HERO_SLIDES: HeroSlide[] = [
  {
    media: { kind: "video", src: "https://cdn.shopify.com/videos/c/o/v/5240c7e3ebce47d79b356148f1c73ab6.mp4" },
    title: "DESIRES SS26",
    description: "Drop 01 — Wear the Want",
    cta: { label: "Shop Now", href: "/shop" },
    align: "left",
  },
  {
    media: { kind: "video", src: "https://cdn.shopify.com/videos/c/o/v/50dd35f3fb5046148dad7571cbba6c65.mp4" },
    title: "ATLAS WORK JACKET",
    description: "Featured — Piece 01 of 20",
    cta: { label: "Shop Atlas", href: "/shop/atlas-work-jacket" },
    align: "left",
  },
  {
    media: { kind: "video", src: "https://cdn.shopify.com/videos/c/o/v/c8c64668ce664de0a89350dd92ac1b0c.mp4" },
    title: "THE PAVEMENT SERIES",
    description: "Drop 02 — June 2",
    cta: { label: "Sign Up", href: "/#signup" },
    align: "center",
  },
  {
    media: { kind: "video", src: "https://cdn.shopify.com/videos/c/o/v/be20e94a29ab4a0bbdc8117410f526d2.mp4" },
    title: "IN THE FIELD",
    description: "Lookbook — Drop 01",
    cta: { label: "See the Lookbook", href: "/lookbook" },
    align: "left",
  },
  {
    media: { kind: "image", src: "https://cdn.shopify.com/s/files/1/0707/4965/1032/files/Layer_332.png?v=1770744862" },
    title: "CUT ONCE. SEWN SLOW.",
    description: "A Note from the Cutting Room",
    cta: { label: "Read More", href: "/about" },
    align: "left",
  },
  {
    media: { kind: "image", src: "https://cdn.shopify.com/s/files/1/0707/4965/1032/files/Layer_13332.png?v=1770745031" },
    title: "ROPE CARGO PANT",
    description: "New — Drop 01",
    cta: { label: "Shop Rope", href: "/shop/rope-cargo" },
    align: "center",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel slides={HERO_SLIDES} />

      <section id="signup" className="pw" style={{ paddingTop: 100, paddingBottom: 100, textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
        <p className="vc-desc" style={{ color: "rgba(0,0,0,0.55)", textTransform: "uppercase" }}>
          Get on the list
        </p>
        <h2 className="vc-title" style={{ color: "#000", marginTop: 8 }}>Drops First. No Noise.</h2>
        <form className="mt-8 mx-auto flex border-b border-line" action="#" method="post" style={{ maxWidth: 420 }}>
          <input
            type="email"
            required
            placeholder="email@yours.com"
            className="flex-1 bg-transparent py-3 outline-none"
          />
          <button type="submit" style={{ padding: "12px 18px", textTransform: "uppercase", color: "#000" }}>
            Sign Up →
          </button>
        </form>
        <p className="mt-4" style={{ color: "rgba(0,0,0,0.55)" }}>
          One mail per drop. Unsubscribe in two clicks.
        </p>
      </section>
    </>
  );
}
