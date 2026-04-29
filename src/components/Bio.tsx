export default function Bio() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-white px-[16px] py-[48px] md:px-[32px] md:py-[120px]">
      <div className="flex w-full flex-col gap-[24px]">
        {/* Top label + divider */}
        <div className="flex w-full flex-col items-end gap-[12px]">
          <p className="w-full text-right font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-[#1f1f1f]">
            [ 8+ years in industry ]
          </p>
          <hr className="w-full border-t border-[#1f1f1f]" />
        </div>

        {/* Typography block */}
        <div className="flex flex-col items-center gap-[8px] uppercase md:items-start">
          {/* Line 1: A creative director / + 001 */}
          <div className="flex flex-col items-center gap-[12px] md:w-full md:flex-row md:items-start md:gap-[12px]">
            <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal leading-[1.1] text-[#1f1f1f] md:order-2">
              001
            </p>
            <p className="whitespace-pre font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light leading-[0.84] tracking-[-0.08em] text-black md:order-1">
              {"A creative director   /"}
            </p>
          </div>

          {/* Line 2: Photographer */}
          <div className="flex w-full items-center justify-center md:justify-start md:pl-[15.5%]">
            <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light leading-[0.84] tracking-[-0.08em] text-black">
              Photographer
            </p>
          </div>

          {/* Line 3: Born & raised */}
          <div className="flex w-full items-center justify-center md:justify-start md:pl-[44.3%]">
            <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light leading-[0.84] tracking-[-0.08em] text-black">
              {"Born "}
              <span className="font-[family-name:var(--font-playfair)] font-normal italic">
                &amp;
              </span>
              {" raised"}
            </p>
          </div>

          {/* Line 4: on the south side */}
          <div className="flex w-full items-center justify-center md:justify-start">
            <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light leading-[0.84] tracking-[-0.08em] text-black">
              on the south side
            </p>
          </div>

          {/* Line 5: of chicago. + [ creative freelancer ] */}
          <div className="flex flex-col items-center gap-[12px] md:w-full md:flex-row md:flex-wrap md:items-baseline md:gap-x-[32px] md:gap-y-[12px] md:pl-[44%]">
            <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light leading-[0.84] tracking-[-0.08em] text-black">
              of chicago.
            </p>
            <p className="whitespace-nowrap font-[family-name:var(--font-geist-mono)] text-[14px] font-normal leading-[1.1] text-[#1f1f1f] md:ml-auto">
              [ creative freelancer ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
