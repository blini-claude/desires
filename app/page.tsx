import { HeroCarousel, type HeroSlide } from "@/components/hero-carousel";

const HERO_SLIDES: HeroSlide[] = [
  {
    media: { kind: "video", src: "https://cdn.shopify.com/videos/c/o/v/5240c7e3ebce47d79b356148f1c73ab6.mp4" },
    kicker: "Drop 01 · Spring–Summer 2026",
    title: "Wear the Want",
    subtitle: "Twenty pieces. One run. No restock. The first chapter of Desires is live.",
    cta: { label: "Shop Drop 01", href: "/shop" },
    align: "left",
    vAlign: "bottom",
    tone: "light",
  },
  {
    media: { kind: "video", src: "https://cdn.shopify.com/videos/c/o/v/50dd35f3fb5046148dad7571cbba6c65.mp4" },
    kicker: "Featured · Piece 01 of 20",
    title: "Atlas Work Jacket",
    subtitle:
      "18oz canvas. Reinforced shoulders. Brass everything. Cut to wear over knit, denim, the lot — built so you stop noticing it's there.",
    cta: { label: "Shop Atlas — $245", href: "/shop/atlas-work-jacket" },
    align: "right",
    vAlign: "bottom",
    tone: "light",
  },
  {
    media: { kind: "video", src: "https://cdn.shopify.com/videos/c/o/v/c8c64668ce664de0a89350dd92ac1b0c.mp4" },
    kicker: "Next · Drop 02 — June 2",
    title: "The Pavement Series",
    subtitle:
      "Eight pieces, one Friday. Get on the list to see it before anyone else.",
    cta: { label: "Sign Up for First Dibs", href: "/#signup" },
    align: "center",
    vAlign: "center",
    tone: "light",
  },
  {
    media: { kind: "video", src: "https://cdn.shopify.com/videos/c/o/v/be20e94a29ab4a0bbdc8117410f526d2.mp4" },
    kicker: "Lookbook",
    title: "In the Field",
    subtitle:
      "Eight looks shot across one weekend. No studio, no retouching the air out of it.",
    cta: { label: "See the Lookbook", href: "/lookbook" },
    align: "left",
    vAlign: "bottom",
    tone: "light",
  },
  {
    media: { kind: "image", src: "https://cdn.shopify.com/s/files/1/0707/4965/1032/files/Layer_332.png?v=1770744862" },
    kicker: "A Note from the Cutting Room",
    title: "Cut Once. Sewn Slow.",
    subtitle:
      "Every Drop is patterned, cut, and sewn in batches small enough to know each piece by name. We don't restock. We don't do seasons.",
    cta: { label: "Read the Manifesto", href: "/about" },
    align: "right",
    vAlign: "top",
    tone: "light",
  },
  {
    media: { kind: "image", src: "https://cdn.shopify.com/s/files/1/0707/4965/1032/files/Layer_13332.png?v=1770745031" },
    kicker: "New · Drop 01",
    title: "Rope Cargo Pant",
    subtitle:
      "Heavyweight twill, double-knee panels, deep utility pockets. Cut loose, hemmed long.",
    cta: { label: "Shop Rope — $195", href: "/shop/rope-cargo" },
    align: "center",
    vAlign: "center",
    tone: "light",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel slides={HERO_SLIDES} />

      <section id="signup" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-bg">
        <div className="relative z-[2] px-5 md:px-12 text-center max-w-3xl">
          <h3 className="text-muted">Get on the list</h3>
          <h2 className="mt-4">Drops First. No Noise.</h2>
          <form className="mt-10 mx-auto max-w-md flex border-b border-line" action="#" method="post">
            <input
              type="email"
              required
              placeholder="email@yours.com"
              className="flex-1 bg-transparent py-3 outline-none placeholder:text-muted"
            />
            <button className="px-4 py-3 hover:text-accent transition-colors uppercase">
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-muted">
            One mail per drop. Unsubscribe in two clicks.
          </p>
        </div>
      </section>
    </>
  );
}
