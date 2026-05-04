import Image from "next/image";
import CornerBrackets from "./CornerBrackets";
import ImageReveal from "./ImageReveal";
import { urlFor } from "@/sanity/client";

type AboutProps = {
  aboutText?: string;
  aboutImage?: unknown;
};

export default function About({ aboutText, aboutImage }: AboutProps) {
  const portraitSrc = aboutImage
    ? urlFor(aboutImage).width(872).quality(80).url()
    : "/about-portrait.png";

  const text =
    aboutText ||
    "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

  return (
    <section className="w-full bg-[#f5f5f5] px-[16px] py-[48px] md:px-[32px] md:py-[80px]">
      <div className="flex flex-col gap-[20px] md:flex-row md:items-start md:justify-between md:gap-0">
        <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-[#1f1f1f] md:hidden">
          002
        </p>
        <p className="whitespace-nowrap font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-[#1f1f1f]">
          [ About ]
        </p>
        <div className="flex flex-col gap-[20px] md:flex-row md:items-end md:justify-end md:gap-[32px]">
          <div className="w-full md:min-w-[465px] md:max-w-[465px] md:self-end">
            <CornerBrackets>
              <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.3] tracking-[-0.56px] text-[#1f1f1f]">
                {text}
              </p>
            </CornerBrackets>
          </div>
          <div className="flex flex-col items-start gap-0 md:ml-auto md:flex-row md:items-start md:gap-[24px]">
            <p className="hidden shrink-0 font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-[#1f1f1f] md:block">
              002
            </p>
            <div className="relative aspect-[422/594] w-full md:aspect-[436/614] md:w-[clamp(280px,30vw,436px)]">
              <ImageReveal direction="bottom">
                <Image
                  src={portraitSrc}
                  alt="Portrait"
                  fill
                  className="object-cover"
                />
              </ImageReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
