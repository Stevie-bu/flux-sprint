"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Each card drifts in from a slightly different Y offset
const cardOffsets = [
  { fromY: -40 },
  { fromY: 50 },
  { fromY: -30 },
  { fromY: 45 },
];

export default function TestimonialsParallax({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const heading = el.querySelector("[data-testimonial-heading]");
      const cards = el.querySelectorAll("[data-testimonial-card]");

      // Heading: subtle fade in
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      }

      // Cards: each drifts from its own Y offset to 0, staggered fade in
      // Using yPercent relative to their own position — no x/rotation changes
      cards.forEach((card, i) => {
        const offset = cardOffsets[i % cardOffsets.length];
        gsap.fromTo(
          card,
          { y: offset.fromY, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 20%",
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
