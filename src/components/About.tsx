import Image from "next/image";
import CornerBrackets from "./CornerBrackets";

export default function About() {
  return (
    <section className="w-full bg-[#f5f5f5] px-[16px] py-[48px] md:px-[32px] md:py-[80px]">
      {/* Mobile: stacked layout */}
      {/* Desktop: "[ About ]" left, content right */}
      <div className="flex flex-col gap-[20px] md:flex-row md:items-start md:justify-between md:gap-0">
        {/* "002" label — mobile only above [ About ] */}
        <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-[#1f1f1f] md:hidden">
          002
        </p>

        {/* [ About ] label */}
        <p className="whitespace-nowrap font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-[#1f1f1f]">
          [ About ]
        </p>

        {/* Right content area */}
        <div className="flex flex-col gap-[20px] md:flex-row md:items-end md:justify-end md:gap-[32px]">
          {/* Text block with corner brackets — fixed min-width, right-aligned to image, bottom-aligned */}
          <div className="w-full md:min-w-[465px] md:max-w-[465px] md:self-end">
            <CornerBrackets>
              <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.3] tracking-[-0.56px] text-[#1f1f1f]">
                Placeholder paragraph one. This is where you introduce yourself
                — your background, your passion for your craft, and what drives
                you creatively. Two to three sentences work best here.
                Placeholder paragraph two. Here you can describe your technical
                approach, how you collaborate with clients, or what sets your
                work apart from others in your field.
              </p>
            </CornerBrackets>
          </div>

          {/* Image + 002 label */}
          <div className="flex flex-col items-start gap-0 md:ml-auto md:flex-row md:items-start md:gap-[24px]">
            {/* "002" label — desktop only, top-left of image */}
            <p className="hidden shrink-0 font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-[#1f1f1f] md:block">
              002
            </p>

            {/* Portrait */}
            <div className="relative aspect-[422/594] w-full md:aspect-[436/614] md:w-[clamp(280px,30vw,436px)]">
              <Image
                src="/about-portrait.png"
                alt="Portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
