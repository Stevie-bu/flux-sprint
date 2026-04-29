"use client";

import { useState } from "react";

type NavLink = { label: string; href: string; _key?: string };

type NavProps = {
  studioName?: string;
  navLinks?: NavLink[];
  ctaText?: string;
};

const defaultLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({
  studioName = "H.Studio",
  navLinks,
  ctaText = "Let's talk",
}: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const links = navLinks && navLinks.length > 0 ? navLinks : defaultLinks;

  return (
    <nav className="flex w-full items-center justify-between py-[24px]">
      <span className="font-[family-name:var(--font-inter)] text-[16px] font-semibold capitalize leading-normal tracking-[-0.64px] text-black">
        {studioName}
      </span>

      <div className="hidden items-center gap-[56px] font-[family-name:var(--font-inter)] text-[16px] font-semibold capitalize leading-normal tracking-[-0.64px] text-black md:flex">
        {links.map((l) => (
          <a key={l._key || l.href} href={l.href}>{l.label}</a>
        ))}
      </div>

      <a
        href="#contact"
        className="hidden rounded-[24px] bg-black px-[16px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-white md:block"
      >
        {ctaText}
      </a>

      <button
        className="relative z-50 flex size-[24px] flex-col items-center justify-center gap-[5px] md:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`h-[2px] w-[18px] transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45 bg-white" : "bg-black"}`} />
        <span className={`h-[2px] w-[18px] transition-all duration-300 ${isOpen ? "scale-x-0 bg-white" : "bg-black"}`} />
        <span className={`h-[2px] w-[18px] transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45 bg-white" : "bg-black"}`} />
      </button>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black transition-opacity duration-300 md:hidden ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-[40px] font-[family-name:var(--font-inter)] text-[32px] font-semibold capitalize leading-normal tracking-[-0.64px] text-white">
          {links.map((l) => (
            <a key={l._key || l.href} href={l.href} onClick={() => setIsOpen(false)}>{l.label}</a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-[48px] rounded-[24px] border border-white px-[24px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-white"
        >
          {ctaText}
        </a>
      </div>
    </nav>
  );
}
