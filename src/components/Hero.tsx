import Image from "next/image";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[635px] max-h-[847px] w-full overflow-hidden bg-[#c2ccd1]">
      {/* Background image */}
      <Image
        src="/hero-bg.png"
        alt="Harvey Specter"
        fill
        priority
        className="object-cover object-[center_40%]"
      />

      {/* Bottom gradient overlay */}
      {/* Bottom blur with gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px]" style={{ maskImage: "linear-gradient(to top, black 40%, transparent)", WebkitMaskImage: "linear-gradient(to top, black 40%, transparent)" }} />

      {/* Content layer */}
      <div className="relative flex h-full flex-col justify-between px-[16px] pb-[24px] md:justify-start md:gap-[240px] md:px-[32px] md:pb-0">
        <Nav />

        {/* Hero content */}
        <div className="flex h-[341px] flex-col items-center justify-between md:h-auto md:items-stretch md:justify-start">
          {/* Heading group */}
          <div className="flex flex-col items-center md:items-start md:pb-[15px]">
            <p className="px-[18px] font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-white mix-blend-overlay md:mb-[-15px]">
              [ Hello i&apos;m ]
            </p>
            <h1 className="w-full whitespace-nowrap text-center font-[family-name:var(--font-inter)] text-[13.5vw] font-medium capitalize leading-[0.8] tracking-[-0.07em] text-white mix-blend-overlay md:mb-[-15px] md:leading-[1.1]">
              {"Harvey   Specter"}
            </h1>
          </div>

          {/* Description block */}
          <div className="flex w-full flex-col items-center md:items-end">
            <div className="flex w-[294px] flex-col gap-[17px]">
              <p className="font-[family-name:var(--font-inter)] text-[14px] font-bold italic uppercase leading-[1.1] tracking-[-0.56px] text-[#1f1f1f]">
                {"H.Studio is a "}
                <span className="font-normal">full-service</span>
                {" creative studio creating beautiful digital experiences and products. We are an "}
                <span className="font-normal">award winning</span>
                {" desing and art group specializing in branding, web design and engineering."}
              </p>
              <a
                href="#contact"
                className="w-fit rounded-[24px] bg-black px-[16px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-white"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
