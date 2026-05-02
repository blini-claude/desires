"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Mousewheel, Keyboard, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export type HeroSlide =
  | { kind: "video"; src: string; poster?: string }
  | { kind: "image"; src: string };

type Props = { slides: HeroSlide[] };

export function HeroCarousel({ slides }: Props) {
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
          {slides.map((s, i) => (
            <div key={i} className="swiper-slide vc-slide">
              <div className="vc-media">
                {s.kind === "video" ? (
                  <video
                    src={s.src}
                    poster={s.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.src} alt="" />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="vc-pagination" />
      </div>
    </section>
  );
}
