import Image from "next/image";
import Nav from "./Nav";
import { urlFor } from "@/sanity/client";

type NavLink = { label: string; href: string; _key?: string };

type HeroProps = {
  greeting?: string;
  name?: string;
  description?: string;
  backgroundImage?: unknown;
  ctaText?: string;
  studioName?: string;
  navLinks?: NavLink[];
};

export default function Hero({
  greeting = "Hello i'm",
  name = "Harvey   Specter",
  description = "H.Studio is a full-service creative studio creating beautiful digital experiences and products. We are an award winning desing and art group specializing in branding, web design and engineering.",
  backgroundImage,
  ctaText = "Let's talk",
  studioName,
  navLinks,
}: HeroProps) {
  const bgSrc = backgroundImage
    ? urlFor(backgroundImage).width(1920).quality(80).url()
    : "/hero-bg.png";

  return (
    <section className="relative h-screen min-h-[635px] max-h-[847px] w-full overflow-hidden bg-[#c2ccd1]">
      <Image
        src={bgSrc}
        alt={name}
        fill
        priority
        className="object-cover object-[center_40%]"
      />

      <div className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px]" style={{ maskImage: "linear-gradient(to top, black 40%, transparent)", WebkitMaskImage: "linear-gradient(to top, black 40%, transparent)" }} />

      <div className="relative flex h-full flex-col justify-between px-[16px] pb-[24px] md:justify-start md:gap-[240px] md:px-[32px] md:pb-0">
        <Nav studioName={studioName} navLinks={navLinks} ctaText={ctaText} />

        <div className="flex h-[341px] flex-col items-center justify-between md:h-auto md:items-stretch md:justify-start">
          <div className="flex flex-col items-center md:items-start md:pb-[15px]">
            <p className="px-[18px] font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-white mix-blend-overlay md:mb-[-15px]">
              [ {greeting} ]
            </p>
            <h1 className="w-full whitespace-nowrap text-center font-[family-name:var(--font-inter)] text-[13.5vw] font-medium capitalize leading-[0.8] tracking-[-0.07em] text-white mix-blend-overlay md:mb-[-15px] md:leading-[1.1]">
              {name}
            </h1>
          </div>

          <div className="flex w-full flex-col items-center md:items-end">
            <div className="flex w-[294px] flex-col gap-[17px]">
              <p className="font-[family-name:var(--font-inter)] text-[14px] font-bold italic uppercase leading-[1.1] tracking-[-0.56px] text-[#1f1f1f]">
                {description}
              </p>
              <a
                href="#contact"
                className="w-fit rounded-[24px] bg-black px-[16px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-white"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
