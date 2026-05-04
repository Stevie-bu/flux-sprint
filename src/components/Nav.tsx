"use client";

import { useState } from "react";

type NavLink = { label: string; href: string; _key?: string };

type NavProps = {
  studioName?: string;
  navLinks?: NavLink[];
  ctaText?: string;
  locale?: string;
  variant?: "dark" | "light";
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
  locale = "en",
  variant = "dark",
}: NavProps) {
  const otherLocale = locale === "de" ? "en" : "de";
  const isDark = variant === "dark";
  const textColor = isDark ? "text-black" : "text-white";
  const barColor = isDark ? "bg-black" : "bg-white";
  const btnBg = isDark ? "bg-black text-white" : "bg-white text-black";
  const switchColor = isDark ? "text-black/50 hover:text-black" : "text-white/50 hover:text-white";
  const [isOpen, setIsOpen] = useState(false);
  const links = navLinks && navLinks.length > 0 ? navLinks : defaultLinks;

  return (
    <nav className="flex w-full items-center justify-between py-[24px]">
      <a href={`/${locale}`} className={`font-[family-name:var(--font-inter)] text-[16px] font-semibold capitalize leading-normal tracking-[-0.64px] ${textColor}`}>
        {studioName}
      </a>

      <div className={`hidden items-center gap-[56px] font-[family-name:var(--font-inter)] text-[16px] font-semibold capitalize leading-normal tracking-[-0.64px] ${textColor} md:flex`}>
        {links.map((l) => {
          const href = l.href === "#about" ? `/${locale}/about` : l.href;
          return (
            <a key={l._key || l.href} href={href} className={`relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:${barColor} after:transition-all after:duration-300 hover:after:w-full`}>{l.label}</a>
          );
        })}
      </div>

      {/* Desktop: CTA + language switcher */}
      <div className="hidden items-center gap-[16px] md:flex">
        <a
          href={`/${otherLocale}`}
          className={`font-[family-name:var(--font-inter)] text-[14px] font-medium uppercase tracking-[-0.56px] ${switchColor} transition-colors`}
        >
          {otherLocale}
        </a>
        <a
          href="#contact"
          className={`rounded-[24px] ${btnBg} px-[16px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] hover:animate-wiggle`}
        >
          {ctaText}
        </a>
      </div>

      <button
        className="relative z-50 flex size-[24px] flex-col items-center justify-center gap-[5px] md:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`h-[2px] w-[18px] transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45 bg-white" : barColor}`} />
        <span className={`h-[2px] w-[18px] transition-all duration-300 ${isOpen ? "scale-x-0 bg-white" : barColor}`} />
        <span className={`h-[2px] w-[18px] transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45 bg-white" : barColor}`} />
      </button>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black transition-opacity duration-300 md:hidden ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-[40px] font-[family-name:var(--font-inter)] text-[32px] font-semibold capitalize leading-normal tracking-[-0.64px] text-white">
          {links.map((l) => {
            const href = l.href === "#about" ? `/${locale}/about` : l.href;
            return (
              <a key={l._key || l.href} href={href} onClick={() => setIsOpen(false)}>{l.label}</a>
            );
          })}
        </div>
        <div className="mt-[48px] flex items-center gap-[24px]">
          <a
            href={`/${otherLocale}`}
            className="font-[family-name:var(--font-inter)] text-[18px] font-medium uppercase tracking-[-0.56px] text-white/50"
          >
            {otherLocale}
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="rounded-[24px] border border-white px-[24px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-white"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </nav>
  );
}
