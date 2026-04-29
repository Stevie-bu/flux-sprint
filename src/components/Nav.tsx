"use client";

import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between py-[24px]">
      <span className="font-[family-name:var(--font-inter)] text-[16px] font-semibold capitalize leading-normal tracking-[-0.64px] text-black">
        H.Studio
      </span>

      {/* Desktop nav links */}
      <div className="hidden items-center gap-[56px] font-[family-name:var(--font-inter)] text-[16px] font-semibold capitalize leading-normal tracking-[-0.64px] text-black md:flex">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Desktop CTA */}
      <a
        href="#contact"
        className="hidden rounded-[24px] bg-black px-[16px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-white md:block"
      >
        Let&apos;s talk
      </a>

      {/* Mobile hamburger */}
      <button
        className="relative z-50 flex size-[24px] flex-col items-center justify-center gap-[5px] md:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`h-[2px] w-[18px] transition-all duration-300 ${
            isOpen
              ? "translate-y-[7px] rotate-45 bg-white"
              : "bg-black"
          }`}
        />
        <span
          className={`h-[2px] w-[18px] transition-all duration-300 ${
            isOpen ? "scale-x-0 bg-white" : "bg-black"
          }`}
        />
        <span
          className={`h-[2px] w-[18px] transition-all duration-300 ${
            isOpen
              ? "-translate-y-[7px] -rotate-45 bg-white"
              : "bg-black"
          }`}
        />
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-[40px] font-[family-name:var(--font-inter)] text-[32px] font-semibold capitalize leading-normal tracking-[-0.64px] text-white">
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#news" onClick={() => setIsOpen(false)}>
            News
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-[48px] rounded-[24px] border border-white px-[24px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-white"
        >
          Let&apos;s talk
        </a>
      </div>
    </nav>
  );
}
