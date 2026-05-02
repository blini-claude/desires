import Link from "next/link";

type Props = {
  image: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  cta: { label: string; href: string };
  align?: "left" | "center" | "right";
  vAlign?: "top" | "center" | "bottom";
  tone?: "light" | "dark";
  height?: "full" | "tall" | "med";
};

const heightMap = {
  full: "min-h-[100vh]",
  tall: "min-h-[88vh]",
  med: "min-h-[72vh]",
} as const;

const alignMap = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
} as const;

const vAlignMap = {
  top: "justify-start pt-16 md:pt-24",
  center: "justify-center",
  bottom: "justify-end pb-12 md:pb-20",
} as const;

export function HeroSlot({
  image,
  kicker,
  title,
  subtitle,
  cta,
  align = "left",
  vAlign = "bottom",
  tone = "light",
  height = "tall",
}: Props) {
  const text = tone === "light" ? "text-bg" : "text-ink";
  const overlay =
    tone === "light"
      ? "bg-gradient-to-t from-ink/70 via-ink/15 to-ink/10"
      : "bg-gradient-to-t from-bg/40 via-transparent to-transparent";
  const btn =
    tone === "light"
      ? "bg-bg text-ink hover:bg-accent hover:text-bg"
      : "bg-ink text-bg hover:bg-accent";

  return (
    <section className={`relative ${heightMap[height]} flex overflow-hidden`}>
      <img
        aria-hidden
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className={`relative z-[2] w-full px-5 md:px-12 flex flex-col ${vAlignMap[vAlign]} ${alignMap[align]} ${text}`}>
        <div className={`max-w-[42ch] ${align === "right" ? "ml-auto" : align === "center" ? "mx-auto" : ""}`}>
          {kicker && (
            <p className={`font-mono text-[11px] tracking-[0.28em] uppercase ${tone === "light" ? "text-bg/70" : "text-muted"} rise [animation-delay:60ms]`}>
              {kicker}
            </p>
          )}
          <h2 className="font-display uppercase text-[clamp(60px,12vw,200px)] leading-[0.88] mt-3 rise [animation-delay:140ms]">
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-4 text-[14px] md:text-[16px] leading-relaxed max-w-prose ${tone === "light" ? "text-bg/85" : "text-ink-soft"} rise [animation-delay:240ms]`}>
              {subtitle}
            </p>
          )}
          <div className="mt-6 rise [animation-delay:340ms]">
            <Link
              href={cta.href}
              className={`inline-flex items-center gap-3 ${btn} px-5 py-3 font-mono text-[11px] tracking-[0.22em] uppercase transition-colors`}
            >
              {cta.label} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
