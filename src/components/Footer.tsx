type SocialLink = { label: string; url: string; _key?: string };
type LegalLink = { label: string; href: string; _key?: string };

type FooterProps = {
  studioName?: string;
  footerCta?: string;
  ctaText?: string;
  credit?: string;
  socialLinks?: SocialLink[];
  legalLinks?: LegalLink[];
};

const defaultSocials: SocialLink[] = [
  { label: "Facebook", url: "https://facebook.com", _key: "fb" },
  { label: "Instagram", url: "https://instagram.com", _key: "ig" },
  { label: "x.com", url: "https://x.com", _key: "x" },
  { label: "Linkedin", url: "https://linkedin.com", _key: "li" },
];

const defaultLegals: LegalLink[] = [
  { label: "licences", href: "#", _key: "lic" },
  { label: "Privacy policy", href: "#", _key: "priv" },
];

export default function Footer({
  studioName = "H.Studio",
  footerCta = "Have a project in mind?",
  ctaText = "Let's talk",
  credit = "Coded By Claude",
  socialLinks,
  legalLinks,
}: FooterProps) {
  const socials = socialLinks && socialLinks.length > 0 ? socialLinks : defaultSocials;
  const legals = legalLinks && legalLinks.length > 0 ? legalLinks : defaultLegals;
  const mid = Math.ceil(socials.length / 2);
  const socialsLeft = socials.slice(0, mid);
  const socialsRight = socials.slice(mid);

  return (
    <footer className="sticky bottom-0 z-0 w-full overflow-hidden bg-black pt-[48px]">
      <div className="flex flex-col gap-[24px] px-[16px] lg:gap-[48px] lg:px-[32px]">
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          <div className="flex w-[298px] flex-col gap-[12px]">
            <p className="font-[family-name:var(--font-inter)] text-[24px] font-light italic uppercase leading-[1.1] tracking-[-0.96px] text-white">
              {footerCta}
            </p>
            <a
              href="#contact"
              className="w-fit rounded-[24px] border border-white px-[16px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-white hover:animate-wiggle"
            >
              {ctaText}
            </a>
          </div>

          {/* Social links — left group on desktop center, all stacked on mobile */}
          <div className="flex flex-col gap-[16px] font-[family-name:var(--font-inter)] text-[18px] font-normal uppercase leading-[1.1] tracking-[-0.72px] text-white lg:gap-0 lg:text-center">
            {socialsLeft.map((s) => (
              <p key={s._key || s.label}>{s.label}</p>
            ))}
            {socialsRight.map((s) => (
              <p key={s._key || s.label} className="lg:hidden">{s.label}</p>
            ))}
          </div>

          {/* Right group — desktop only */}
          <div className="hidden font-[family-name:var(--font-inter)] text-[18px] font-normal uppercase leading-[1.1] tracking-[-0.72px] text-white lg:block lg:text-right">
            {socialsRight.map((s) => (
              <p key={s._key || s.label}>{s.label}</p>
            ))}
          </div>
        </div>

        <hr className="w-full border-t border-white/30" />
      </div>

      {/* Mobile */}
      <div className="flex flex-col items-center gap-[16px] px-[16px] pt-[48px] lg:hidden">
        <div className="flex gap-[34px] pb-[32px] font-[family-name:var(--font-inter)] text-[12px] font-normal uppercase leading-[1.1] tracking-[-0.48px] text-white">
          {legals.map((l) => (
            <a key={l._key || l.label} href={l.href} className="underline">{l.label}</a>
          ))}
        </div>
        <div className="flex w-full flex-col gap-[12px]">
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-normal uppercase leading-[1.1] text-white">
            [ {credit} ]
          </p>
          <p className="-mb-[0.15em] font-[family-name:var(--font-inter)] text-[clamp(60px,24vw,91px)] font-semibold capitalize leading-[1] tracking-[-0.06em] text-white">
            {studioName}
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden items-end justify-between px-[32px] pt-[120px] lg:flex">
        <div className="relative" style={{ width: "clamp(600px, 75.9vw, 1093px)" }}>
          <div className="absolute left-0 top-0 flex h-full w-[15px] items-center justify-center">
            <p className="-rotate-90 whitespace-nowrap font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-white">
              [ {credit} ]
            </p>
          </div>
          <p className="-mb-[0.15em] font-[family-name:var(--font-inter)] text-[clamp(150px,20.14vw,290px)] font-semibold capitalize leading-[1] tracking-[-0.06em] text-white">
            {studioName}
          </p>
        </div>
        <div className="flex gap-[34px] pb-[32px] font-[family-name:var(--font-inter)] text-[12px] font-normal uppercase leading-[1.1] tracking-[-0.48px] text-white">
          {legals.map((l) => (
            <a key={l._key || l.label} href={l.href} className="underline">{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
