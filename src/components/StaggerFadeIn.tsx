"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type StaggerFadeInProps = {
  children: React.ReactNode;
  /** CSS selector for the items to stagger */
  itemSelector?: string;
  start?: string;
  end?: string;
  y?: number;
};

export default function StaggerFadeIn({
  children,
  itemSelector = "[data-stagger-item]",
  start = "top 85%",
  end = "bottom 40%",
  y = 40,
}: StaggerFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const items = el.querySelectorAll(itemSelector);
      if (!items.length) return;

      gsap.set(items, { opacity: 0, y });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: true,
        },
      });
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
