export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-black pt-[48px]">
      {/* ===== Top area: CTA + social links + divider ===== */}
      <div className="flex flex-col gap-[24px] px-[16px] lg:gap-[48px] lg:px-[32px]">
        {/* Desktop: 3-column row / Mobile: stacked */}
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          {/* CTA */}
          <div className="flex w-[298px] flex-col gap-[12px]">
            <p className="font-[family-name:var(--font-inter)] text-[24px] font-light italic uppercase leading-[1.1] tracking-[-0.96px] text-white">
              {"Have a "}
              <span className="font-black not-italic">project</span>
              {" in mind?"}
            </p>
            <a
              href="#contact"
              className="w-fit rounded-[24px] border border-white px-[16px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-white"
            >
              Let&apos;s talk
            </a>
          </div>

          {/* Social links — center on desktop, stacked on mobile */}
          <div className="flex flex-col gap-[16px] font-[family-name:var(--font-inter)] text-[18px] font-normal uppercase leading-[1.1] tracking-[-0.72px] text-white lg:gap-0 lg:text-center">
            <p>Facebook</p>
            <p>Instagram</p>
            {/* x.com and Linkedin: on mobile below, on desktop in right column */}
            <p className="lg:hidden">x.com</p>
            <p className="lg:hidden">Linkedin</p>
          </div>

          {/* Social links right column — desktop only */}
          <div className="hidden font-[family-name:var(--font-inter)] text-[18px] font-normal uppercase leading-[1.1] tracking-[-0.72px] text-white lg:block lg:text-right">
            <p>x.com</p>
            <p>Linkedin</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full border-t border-white/30" />
      </div>

      {/* ===== Bottom area: large H.Studio + legal ===== */}
      {/* Mobile */}
      <div className="flex flex-col items-center gap-[16px] px-[16px] pt-[48px] lg:hidden">
        {/* Legal links */}
        <div className="flex gap-[34px] pb-[32px] font-[family-name:var(--font-inter)] text-[12px] font-normal uppercase leading-[1.1] tracking-[-0.48px] text-white">
          <a href="#" className="underline">
            licences
          </a>
          <a href="#" className="underline">
            Privacy policy
          </a>
        </div>

        {/* Coded by + H.Studio */}
        <div className="flex w-full flex-col gap-[12px]">
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-normal uppercase leading-[1.1] text-white">
            [ Coded By Claude ]
          </p>
          <p className="-mb-[0.15em] font-[family-name:var(--font-inter)] text-[clamp(60px,24vw,91px)] font-semibold capitalize leading-[1] tracking-[-0.06em] text-white">
            H.Studio
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden items-end justify-between px-[32px] pt-[120px] lg:flex">
        {/* Large H.Studio with rotated label */}
        <div className="relative" style={{ width: "clamp(600px, 75.9vw, 1093px)" }}>
          {/* Rotated "Coded By Claude" */}
          <div className="absolute left-0 top-0 flex h-full w-[15px] items-center justify-center">
            <p className="-rotate-90 whitespace-nowrap font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-white">
              [ Coded By Claude ]
            </p>
          </div>
          <p className="-mb-[0.15em] font-[family-name:var(--font-inter)] text-[clamp(150px,20.14vw,290px)] font-semibold capitalize leading-[1] tracking-[-0.06em] text-white">
            H.Studio
          </p>
        </div>

        {/* Legal links — bottom right */}
        <div className="flex gap-[34px] pb-[32px] font-[family-name:var(--font-inter)] text-[12px] font-normal uppercase leading-[1.1] tracking-[-0.48px] text-white">
          <a href="#" className="underline">
            licences
          </a>
          <a href="#" className="underline">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}
