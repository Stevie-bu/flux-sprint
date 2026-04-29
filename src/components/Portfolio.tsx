import Image from "next/image";
import CornerBrackets from "./CornerBrackets";
import { urlFor } from "@/sanity/client";

export type ProjectData = {
  _id?: string;
  title: string;
  image?: unknown;
  imageSrc?: string;
  tags?: string[];
};

const defaultProjects: ProjectData[] = [
  { title: "Surfers paradise", imageSrc: "/project-1.png", tags: ["Social Media", "Photography"] },
  { title: "Cyberpunk caffe", imageSrc: "/project-2.png", tags: ["Social Media", "Photography"] },
  { title: "Agency 976", imageSrc: "/project-3.png", tags: ["Social Media", "Photography"] },
  { title: "Minimal Playground", imageSrc: "/project-4.png", tags: ["Social Media", "Photography"] },
];

function getProjectImageSrc(p: ProjectData, fallbackIndex: number): string {
  if (p.image) return urlFor(p.image).width(1352).quality(80).url();
  return p.imageSrc || `/project-${fallbackIndex + 1}.png`;
}

const projects = defaultProjects;

function ArrowIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M9 23L23 9M23 9H11M23 9V21"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function resolveImage(p: ProjectData, fallbackIndex: number): string {
  if (p.image && typeof p.image === "object") return urlFor(p.image).width(1352).quality(80).url();
  if (p.imageSrc) return p.imageSrc;
  return `/project-${fallbackIndex + 1}.png`;
}

function ProjectCard({
  title,
  image,
  imageSrc,
  tags,
  desktopHeight,
  index = 0,
}: (typeof projects)[number] & { index?: number }) {
  const src = resolveImage({ title, image, imageSrc, tags }, index);
  return (
    <div className="flex w-full flex-col gap-[10px]">
      {/* Image with tag overlay */}
      <div
        className={`relative h-[390px] w-full overflow-hidden lg:${desktopHeight}`}
      >
        <Image src={src} alt={title} fill className="object-cover" />
        {/* Tags */}
        <div className="absolute bottom-[16px] left-[16px] flex gap-[12px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[24px] bg-white/30 px-[8px] py-[4px] font-[family-name:var(--font-inter)] text-[14px] font-medium tracking-[-0.56px] text-[#111] backdrop-blur-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Title + arrow */}
      <div className="flex w-full items-center justify-between">
        <h3 className="font-[family-name:var(--font-inter)] text-[24px] font-black uppercase leading-[1.1] tracking-[-0.96px] text-black lg:text-[36px] lg:tracking-[-1.44px]">
          {title}
        </h3>
        <ArrowIcon />
      </div>
    </div>
  );
}

type PortfolioProps = {
  projects?: ProjectData[];
  heading?: string;
  ctaText?: string;
  ctaButton?: string;
};

export default function Portfolio({ projects: cmsProjects, heading = "Selected\nWork", ctaText = "Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.", ctaButton = "Let's talk" }: PortfolioProps) {
  const items = cmsProjects && cmsProjects.length > 0 ? cmsProjects : defaultProjects;
  return (
    <section className="w-full bg-white px-[16px] py-[48px] lg:px-[32px] lg:py-[80px]">
      <div className="flex flex-col gap-[32px] lg:gap-[61px]">
        {/* Header */}
        <div className="flex items-start justify-between">
          {/* Left: heading + labels */}
          <div className="flex flex-col gap-[16px] uppercase lg:flex-row lg:items-start lg:gap-0">
            {/* [ portfolio ] label — mobile only above heading */}
            <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal leading-[1.1] text-[#1f1f1f] lg:hidden">
              [ portfolio ]
            </p>

            <div className="flex items-start gap-[10px]">
              <div className="font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light uppercase leading-[0.86] tracking-[-0.08em] text-black">
                {heading.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal leading-[1.1] text-[#1f1f1f]">
                004
              </p>
            </div>
          </div>

          {/* [ portfolio ] — desktop only, rotated */}
          <div className="hidden h-[110px] items-center justify-center lg:flex">
            <p className="-rotate-90 whitespace-nowrap font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-[#1f1f1f]">
              [ portfolio ]
            </p>
          </div>
        </div>

        {/* Project grid */}
        {/* Mobile: single column, all stacked */}
        <div className="flex flex-col gap-[24px] lg:hidden">
          {items.map((project, i) => (
            <ProjectCard key={project._id || project.title} {...project} index={i} />
          ))}
        </div>

        {/* Desktop: masonry 2-column layout */}
        {items.length >= 4 && (
        <div className="hidden gap-[24px] lg:flex lg:items-end">
          {/* Left column */}
          <div className="flex flex-1 flex-col justify-between self-stretch">
            <div className="flex flex-col gap-[10px]">
              {[items[0], items[1]].map((p, i) => (
                <div key={p._id || p.title} className="flex w-full flex-col gap-[10px]">
                  <div className={`relative w-full overflow-hidden ${i === 0 ? "h-[744px]" : "h-[699px]"}`}>
                    <Image src={resolveImage(p, i)} alt={p.title} fill className="object-cover" />
                    <div className="absolute bottom-[16px] left-[16px] flex gap-[12px]">
                      {(p.tags || []).map((tag) => (
                        <span key={tag} className="rounded-[24px] bg-white/30 px-[8px] py-[4px] font-[family-name:var(--font-inter)] text-[14px] font-medium tracking-[-0.56px] text-[#111] backdrop-blur-[10px]">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <h3 className="font-[family-name:var(--font-inter)] text-[36px] font-black uppercase leading-[1.1] tracking-[-1.44px] text-black">{p.title}</h3>
                    <ArrowIcon />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[465px] pt-[24px]">
              <CornerBrackets>
                <div className="flex flex-col gap-[10px]">
                  <p className="font-[family-name:var(--font-inter)] text-[14px] italic leading-[1.3] tracking-[-0.56px] text-[#1f1f1f]">{ctaText}</p>
                  <a href="#contact" className="w-fit rounded-[24px] bg-black px-[16px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-white">{ctaButton}</a>
                </div>
              </CornerBrackets>
            </div>
          </div>

          {/* Right column — offset from top */}
          <div className="flex flex-1 flex-col gap-[117px] pt-[240px]">
            {[items[2], items[3]].map((p, i) => (
              <div key={p._id || p.title} className="flex w-full flex-col gap-[10px]">
                <div className={`relative w-full overflow-hidden ${i === 0 ? "h-[699px]" : "h-[744px]"}`}>
                  <Image src={resolveImage(p, i + 2)} alt={p.title} fill className="object-cover" />
                  <div className="absolute bottom-[16px] left-[16px] flex gap-[12px]">
                    {(p.tags || []).map((tag) => (
                      <span key={tag} className="rounded-[24px] bg-white/30 px-[8px] py-[4px] font-[family-name:var(--font-inter)] text-[14px] font-medium tracking-[-0.56px] text-[#111] backdrop-blur-[10px]">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <h3 className="font-[family-name:var(--font-inter)] text-[36px] font-black uppercase leading-[1.1] tracking-[-1.44px] text-black">{p.title}</h3>
                  <ArrowIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* CTA block — mobile only */}
        <div className="lg:hidden">
          <CornerBrackets>
            <div className="flex flex-col gap-[10px]">
              <p className="font-[family-name:var(--font-inter)] text-[14px] italic leading-[1.3] tracking-[-0.56px] text-[#1f1f1f]">
                Discover how my creativity transforms ideas into impactful
                digital experiences — schedule a call with me to get started.
              </p>
              <a
                href="#contact"
                className="w-fit rounded-[24px] bg-black px-[16px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-white"
              >
                {ctaButton}
              </a>
            </div>
          </CornerBrackets>
        </div>
      </div>
    </section>
  );
}
