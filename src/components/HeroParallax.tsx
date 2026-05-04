"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxImage({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: ref });

  return (
    <div ref={ref} className="absolute inset-0 will-change-transform">
      {children}
    </div>
  );
}

export function DriftingName({ name = "Harvey   Specter" }: { name?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);

  const words = name.trim().split(/\s+/);
  const firstWord = words[0] || "";
  const secondWord = words.slice(1).join(" ") || "";

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top -50%",
        scrub: 1,
      },
    });

    tl.to(leftRef.current, { x: "-15vw", ease: "none" }, 0);
    tl.to(rightRef.current, { x: "15vw", ease: "none" }, 0);
  }, { scope: containerRef });

  return (
    <span ref={containerRef} className="flex w-full justify-center gap-[0.15em] overflow-visible">
      <span ref={leftRef} className="will-change-transform">
        {firstWord}
      </span>
      <span ref={rightRef} className="will-change-transform">
        {secondWord}
      </span>
    </span>
  );
}
