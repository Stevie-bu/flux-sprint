import Image from "next/image";
import { urlFor } from "@/sanity/client";
import ServiceReveal from "./ServiceReveal";

type ServiceData = {
  _id?: string;
  title: string;
  description: string;
  thumbnail?: unknown;
  image?: string;
  order?: number;
};

const defaultServices: ServiceData[] = [
  { title: "Brand Discovery", description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", image: "/service-1.png" },
  { title: "Web design & Dev", description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", image: "/service-2.png" },
  { title: "Marketing", description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", image: "/service-3.png" },
  { title: "Photography", description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", image: "/service-4.png" },
];

function ServiceItem({ number, title, description, imageSrc }: { number: number; title: string; description: string; imageSrc: string }) {
  return (
    <ServiceReveal>
      <div className="flex w-full flex-col gap-[9px]">
        <div className="flex w-full flex-col gap-[9px]">
          <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-white">
            [ {number} ]
          </p>
          <hr data-service-line className="w-full border-t border-white/30" />
        </div>
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start lg:justify-between lg:gap-[9px]">
          <h3 data-service-title className="shrink-0 whitespace-nowrap font-[family-name:var(--font-inter)] text-[36px] font-bold italic uppercase leading-[1.1] tracking-[-1.44px] text-white">
            {title}
          </h3>
          <div className="flex shrink-0 flex-col gap-[16px] lg:flex-row lg:gap-[24px]">
            <p data-service-desc className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.3] tracking-[-0.56px] text-white lg:w-[393px]">
              {description}
            </p>
            <div data-service-thumb className="relative size-[151px] shrink-0 overflow-hidden">
              <Image src={imageSrc} alt={title || "Service"} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </ServiceReveal>
  );
}

type ServicesProps = {
  services?: ServiceData[];
  sectionLabel?: string;
  heading?: string;
};

export default function Services({ services, sectionLabel = "services", heading = "Deliverables" }: ServicesProps) {
  const items = services && services.length > 0 ? services : defaultServices;

  return (
    <section className="w-full bg-black px-[16px] py-[48px] md:px-[32px] md:py-[80px]">
      <div className="flex flex-col gap-[32px] md:gap-[48px]">
        <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-white">
          [ {sectionLabel} ]
        </p>
        <div className="flex w-full items-center justify-between font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light uppercase leading-normal tracking-[-0.08em] text-white">
          <span>[{items.length}]</span>
          <span>{heading}</span>
        </div>
        <div className="flex flex-col gap-[48px]">
          {items.map((s, i) => (
            <ServiceItem
              key={s._id || i}
              number={i + 1}
              title={s.title}
              description={s.description}
              imageSrc={s.thumbnail ? urlFor(s.thumbnail).width(302).quality(80).url() : (s.image || `/service-${i + 1}.png`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
