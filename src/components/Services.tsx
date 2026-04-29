import Image from "next/image";

const services = [
  {
    number: 1,
    title: "Brand Discovery",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/service-1.png",
  },
  {
    number: 2,
    title: "Web design & Dev",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/service-2.png",
  },
  {
    number: 3,
    title: "Marketing",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/service-3.png",
  },
  {
    number: 4,
    title: "Photography",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/service-4.png",
  },
];

function ServiceItem({
  number,
  title,
  description,
  image,
}: (typeof services)[number]) {
  return (
    <div className="flex w-full flex-col gap-[9px]">
      {/* Number label + divider */}
      <div className="flex w-full flex-col gap-[9px]">
        <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-white">
          [ {number} ]
        </p>
        <hr className="w-full border-t border-white/30" />
      </div>

      {/* Content: stacked on mobile, row on desktop */}
      <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start lg:justify-between lg:gap-[9px]">
        {/* Service title */}
        <h3 className="shrink-0 whitespace-nowrap font-[family-name:var(--font-inter)] text-[36px] font-bold italic uppercase leading-[1.1] tracking-[-1.44px] text-white">
          {title}
        </h3>

        {/* Description + thumbnail */}
        <div className="flex flex-col gap-[16px] shrink-0 lg:flex-row lg:gap-[24px]">
          <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.3] tracking-[-0.56px] text-white lg:w-[393px]">
            {description}
          </p>
          <div className="relative size-[151px] shrink-0 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="w-full bg-black px-[16px] py-[48px] md:px-[32px] md:py-[80px]">
      <div className="flex flex-col gap-[32px] md:gap-[48px]">
        {/* Section label */}
        <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-white">
          [ services ]
        </p>

        {/* Heading row: [4] ... Deliverables */}
        <div className="flex w-full items-center justify-between font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light uppercase leading-normal tracking-[-0.08em] text-white">
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        {/* Service items */}
        <div className="flex flex-col gap-[48px]">
          {services.map((service) => (
            <ServiceItem key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
