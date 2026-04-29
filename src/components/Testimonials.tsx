/* eslint-disable @next/next/no-img-element */

import { urlFor } from "@/sanity/client";

export type TestimonialData = {
  _id?: string;
  author: string;
  quote: string;
  logo?: unknown;
  logoSrc?: string;
  order?: number;
};

const rotations = ["rotate(-6.85deg)", "rotate(2.9deg)", "rotate(2.23deg)", "rotate(-4.15deg)"];
const positions = [
  { left: "7.08%", top: "18%", z: "z-30" },
  { left: "46.9%", top: "27.5%", z: "z-10" },
  { left: "21.2%", top: "56%", z: "z-30" },
  { left: "68.5%", top: "55.3%", z: "z-30" },
];

const defaultTestimonials = [
  {
    id: "marko",
    logo: "/logo-marko.svg",
    quote:
      "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    author: "Marko Stojković",
    rotation: "rotate(-6.85deg)",
    left: "7.08%",
    top: "18%",
    z: "z-30", // ABOVE heading
  },
  {
    id: "lukas",
    logo: "/logo-lukas.svg",
    quote:
      "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    author: "Lukas Weber",
    rotation: "rotate(2.9deg)",
    left: "46.9%",
    top: "27.5%",
    z: "z-10", // BEHIND heading
  },
  {
    id: "sarah",
    logo: "/logo-sarah.svg",
    quote:
      "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don\u2019t just make things look good; they solve business problems through visual clarity.",
    author: "Sarah Jenkins",
    rotation: "rotate(2.23deg)",
    left: "21.2%",
    top: "56%",
    z: "z-30", // ABOVE heading
  },
  {
    id: "sofia",
    logo: "/logo-sofia.svg",
    quote:
      "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    author: "Sofia Martínez",
    rotation: "rotate(-4.15deg)",
    left: "68.5%",
    top: "55.3%",
    z: "z-30", // ABOVE heading
  },
];

function TestimonialCard({
  logo,
  quote,
  author,
  cardWidth = "w-[353px]",
}: {
  logo: string;
  quote: string;
  author: string;
  cardWidth?: string;
}) {
  return (
    <div
      className={`${cardWidth} flex flex-col gap-[16px] rounded-[4px] border border-[#ddd] bg-[#f1f1f1] p-[24px]`}
    >
      <img
        src={logo}
        alt={`${author} company`}
        className="h-[24px] w-auto self-start object-contain"
      />
      <p className="font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[1.3] tracking-[-0.72px] text-[#1f1f1f]">
        {quote}
      </p>
      <p className="font-[family-name:var(--font-inter)] text-[16px] font-black uppercase leading-[1.1] tracking-[-0.64px] text-black">
        {author}
      </p>
    </div>
  );
}

type TestimonialsProps = {
  testimonials?: TestimonialData[];
};

export default function Testimonials({ testimonials: cmsTestimonials }: TestimonialsProps) {
  const items = cmsTestimonials && cmsTestimonials.length > 0
    ? cmsTestimonials.map((t, i) => ({
        ...defaultTestimonials[i] || defaultTestimonials[0],
        ...t,
        id: t._id || `t-${i}`,
        logo: t.logo ? urlFor(t.logo).width(300).url() : (t.logoSrc || defaultTestimonials[i]?.logo || "/logo-marko.svg"),
      }))
    : defaultTestimonials;
  return (
    <section className="w-full bg-white">
      {/* ===== Mobile layout ===== */}
      <div className="flex flex-col gap-[32px] px-[16px] py-[64px] lg:hidden">
        <h2 className="text-center font-[family-name:var(--font-inter)] text-[64px] font-medium capitalize leading-[0.8] tracking-[-4.48px] text-black">
          Testimonials
        </h2>
        <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto pb-[16px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((t, i) => (
            <div
              key={t.id}
              className="-mr-[10px] shrink-0 snap-start"
              style={{ transform: rotations[i % rotations.length] }}
            >
              <TestimonialCard
                logo={t.logo}
                quote={t.quote}
                author={t.author}
                cardWidth="w-[260px]"
              />
            </div>
          ))}
          <div className="w-[32px] shrink-0" />
        </div>
      </div>

      {/* ===== Desktop layout ===== */}
      <div
        className="relative hidden min-h-[987px] items-center justify-center lg:flex"
      >
        {/* Heading — z-20, between card layers */}
        <h2 className="relative z-20 text-center font-[family-name:var(--font-inter)] text-[clamp(96px,13.75vw,198px)] font-medium capitalize leading-[1.1] tracking-[-0.07em] text-black">
          Testimonials
        </h2>

        {/* Cards — each with individual z-index */}
        {items.map((t, i) => (
          <div
            key={t.id}
            className={`absolute ${positions[i % positions.length].z}`}
            style={{
              left: positions[i % positions.length].left,
              top: positions[i % positions.length].top,
              transform: rotations[i % rotations.length],
            }}
          >
            <TestimonialCard logo={t.logo} quote={t.quote} author={t.author} />
          </div>
        ))}
      </div>
    </section>
  );
}
