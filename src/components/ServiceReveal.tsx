"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const line = el.querySelector("[data-service-line]");
      const title = el.querySelector("[data-service-title]");
      const desc = el.querySelector("[data-service-desc]");
      const thumb = el.querySelector("[data-service-thumb]");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        },
      });

      // Line expands from 0 to full width
      if (line) {
        gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
        tl.to(line, { scaleX: 1, duration: 1, ease: "none" }, 0);
      }

      // Title slides in from left with slight fade
      if (title) {
        gsap.set(title, { x: -30, opacity: 0 });
        tl.to(title, { x: 0, opacity: 1, duration: 1, ease: "none" }, 0.3);
      }

      // Description fades in
      if (desc) {
        gsap.set(desc, { opacity: 0, y: 10 });
        tl.to(desc, { opacity: 1, y: 0, duration: 1, ease: "none" }, 0.5);
      }

      // Thumbnail scales up from slightly smaller
      if (thumb) {
        gsap.set(thumb, { scale: 0.85, opacity: 0 });
        tl.to(thumb, { scale: 1, opacity: 1, duration: 1, ease: "none" }, 0.6);
      }
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
