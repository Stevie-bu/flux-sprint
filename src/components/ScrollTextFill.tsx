"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type ScrollTextFillProps = {
  children: React.ReactNode;
  fromColor?: string;
  toColor?: string;
  start?: string;
  end?: string;
  /** Selector for the individual line elements inside the container */
  lineSelector?: string;
};

export default function ScrollTextFill({
  children,
  fromColor = "#cccccc",
  toColor = "#000000",
  start = "top 80%",
  end = "bottom 20%",
  lineSelector = "[data-line]",
}: ScrollTextFillProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const lines = el.querySelectorAll(lineSelector);
      if (!lines.length) return;

      // Set all lines to initial gray
      gsap.set(lines, { color: fromColor });

      // Create a timeline where each line fills to black one after another,
      // spread evenly across the scroll distance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: true,
        },
      });

      // Each line gets its own tween — staggered sequentially
      lines.forEach((line, i) => {
        tl.to(
          line,
          {
            color: toColor,
            duration: 1,
            ease: "none",
          },
          i * 0.5 // offset each line so they fill one after another
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} style={{ color: fromColor }}>
      {children}
    </div>
  );
}
