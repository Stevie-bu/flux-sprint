"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type ImageRevealProps = {
  children: React.ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
  start?: string;
  end?: string;
};

export default function ImageReveal({
  children,
  direction = "bottom",
  start = "top 85%",
  end = "top 25%",
}: ImageRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      if (!overlay) return;

      // Animate the overlay away based on direction
      const props: gsap.TweenVars = { ease: "power2.inOut" };

      switch (direction) {
        case "bottom":
          props.yPercent = 100;
          break;
        case "top":
          props.yPercent = -100;
          break;
        case "left":
          props.xPercent = -100;
          break;
        case "right":
          props.xPercent = 100;
          break;
      }

      gsap.to(overlay, {
        ...props,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start,
          end,
          scrub: true,
        },
      });
    },
    { scope: wrapperRef }
  );

  return (
    <div ref={wrapperRef} className="relative size-full overflow-hidden">
      {children}
      {/* Black overlay that slides away on scroll */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-black will-change-transform"
      />
    </div>
  );
}
