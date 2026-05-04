"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function NewsReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const cards = el.querySelectorAll("[data-news-card]");
      if (!cards.length) return;

      cards.forEach((card, i) => {
        // Alternate: even from top (-60px), odd from bottom (+60px)
        const fromY = i % 2 === 0 ? -60 : 60;

        gsap.fromTo(
          card,
          { y: fromY, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 50%",
              end: "top 10%",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
