"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Mousewheel, Keyboard, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export type HeroMedia =
  | { kind: "video"; src: string; poster?: string }
  | { kind: "image"; src: string };

export type HeroSlide = {
  media: HeroMedia;
  kicker?: string;
  title: string;
  subtitle?: string;
  cta: { label: string; href: string };
  align?: "left" | "center" | "right";
  vAlign?: "top" | "center" | "bottom";
  tone?: "light" | "dark"; // light = white text on dark image
};

const alignMap = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
} as const;

const vAlignMap = {
  top: "justify-start pt-24 md:pt-32",
  center: "justify-center",
  bottom: "justify-end pb-16 md:pb-24",
} as const;

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const swiper = new Swiper(containerRef.current, {
      modules: [Mousewheel, Keyboard, Pagination, Autoplay],
      direction: "vertical",
      speed: 900,
      slidesPerView: 1,
      watchSlidesProgress: true,
      mousewheel: {
        forceToAxis: true,
        releaseOnEdges: true,
        thresholdDelta: 30,
        sensitivity: 1,
      },
      keyboard: { enabled: true },
      pagination: {
        el: ".vc-pagination",
        clickable: true,
        bulletClass: "vc-bullet",
        bulletActiveClass: "vc-bullet--active",
        renderBullet: (_i, cls) => `<span class="${cls}"></span>`,
      },
      autoplay: { delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: false },
    });
    swiperRef.current = swiper;
    return () => {
      swiper.destroy(true, true);
      swiperRef.current = null;
    };
  }, []);

  return (
    <section className="vc-hero">
      <div ref={containerRef} className="swiper vc-swiper">
        <div className="swiper-wrapper">
          {slides.map((s, i) => {
            const tone = s.tone ?? "light";
            const align = s.align ?? "left";
            const vAlign = s.vAlign ?? "bottom";
            const text = tone === "light" ? "text-white" : "text-black";
            const overlay =
              tone === "light"
                ? "bg-gradient-to-t from-black/65 via-black/20 to-black/10"
                : "bg-gradient-to-t from-white/40 via-transparent to-transparent";
            const btnTone =
              tone === "light"
                ? "bg-white text-black hover:bg-accent hover:text-white"
                : "bg-black text-white hover:bg-accent";

            return (
              <div key={i} className="swiper-slide vc-slide">
                <div className="vc-media">
                  {s.media.kind === "video" ? (
                    <video
                      src={s.media.src}
                      poster={s.media.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={s.media.src} alt="" />
                  )}
                </div>
                <div className={`absolute inset-0 z-[1] pointer-events-none ${overlay}`} />
                <div
                  className={`absolute inset-0 z-[2] flex flex-col px-5 md:px-12 ${vAlignMap[vAlign]} ${alignMap[align]} ${text}`}
                >
                  <div
                    className={`max-w-[44ch] ${
                      align === "right" ? "ml-auto" : align === "center" ? "mx-auto" : ""
                    }`}
                  >
                    {s.kicker && <p className="vc-kicker">{s.kicker}</p>}
                    <h2 className="vc-title">{s.title}</h2>
                    {s.subtitle && <p className="vc-sub">{s.subtitle}</p>}
                    <div className="mt-6">
                      <Link href={s.cta.href} className={`vc-cta ${btnTone}`}>
                        {s.cta.label} <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="vc-pagination" />
      </div>
    </section>
  );
}
