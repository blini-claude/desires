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
  title: string;
  description?: string;
  cta: { label: string; href: string };
  /** "leftbottom" | "centerbottom" — where the cont block sits */
  align?: "left" | "center";
  /** 0..1 dark overlay strength (default 0.2 like pleasures) */
  overlay?: number;
};

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
    // Force-play all videos in case the browser deferred them.
    requestAnimationFrame(() => {
      containerRef.current?.querySelectorAll<HTMLVideoElement>("video").forEach((v) => {
        v.muted = true;
        v.play().catch(() => {});
      });
    });
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
            const align = s.align ?? "left";
            const overlay = s.overlay ?? 0.2;
            return (
              <div key={i} className="swiper-slide vc-slide">
                {/* media */}
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
                {/* dark overlay (matches pleasures: black @ 0.2) */}
                <div className="vc-overlay" style={{ opacity: overlay }} />

                {/* content block — absolute, bottom 50px, page-width inside */}
                <div className={`vc-cont vc-${align}bottom`}>
                  <div className="vc-pagewidth">
                    <div className="vc-title">{s.title}</div>
                    {s.description && (
                      <div className="vc-desc">{s.description}</div>
                    )}
                    <div className="vc-button-wrap">
                      <Link href={s.cta.href} className="vc-button">
                        {s.cta.label}
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
