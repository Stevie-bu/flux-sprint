import Image from "next/image";
import { urlFor } from "@/sanity/client";
import NewsReveal from "./NewsReveal";

export type ArticleData = {
  _id?: string;
  title?: string;
  excerpt?: string;
  image?: unknown;
  imageSrc?: string;
  link?: string;
};

const defaultArticles: ArticleData[] = [
  { imageSrc: "/news-1.png", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { imageSrc: "/news-2.png", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { imageSrc: "/news-3.png", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

function ArrowSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <path
        d="M5 13L13 5M13 5H6.5M13 5V11.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NewsCard({
  image,
  text,
  offset = false,
  isLast = false,
  readMoreLabel = "Read more",
}: {
  image: string;
  text: string;
  offset?: boolean;
  isLast?: boolean;
  readMoreLabel?: string;
}) {
  return (
    <div className="flex shrink-0 items-stretch">
      {/* Card */}
      <div
        className={`flex w-[300px] shrink-0 flex-col gap-[16px] lg:w-[353px] ${offset ? "lg:pt-[120px]" : ""}`}
      >
        <div className="relative h-[398px] w-full overflow-hidden lg:h-[469px]">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
        <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.3] tracking-[-0.56px] text-[#1f1f1f]">
          {text}
        </p>
        <a
          href="#"
          className="flex w-fit items-center gap-[10px] border-b border-black py-[4px]"
        >
          <span className="font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-black">
            {readMoreLabel}
          </span>
          <ArrowSmall />
        </a>
      </div>

      {/* Vertical separator — hidden on mobile, hidden on last card */}
      {!isLast && (
        <div className="hidden w-[31px] shrink-0 items-center justify-center lg:flex">
          <div className="h-full w-0 border-l border-[#ccc]" />
        </div>
      )}
    </div>
  );
}

type NewsProps = {
  articles?: ArticleData[];
  heading?: string;
  readMoreText?: string;
};

export default function News({ articles: cmsArticles, heading = "Keep up with my latest news & achievements", readMoreText = "Read more" }: NewsProps) {
  const articles = cmsArticles && cmsArticles.length > 0 ? cmsArticles : defaultArticles;
  return (
    <section className="w-full bg-[#f3f3f3]">
      {/* ===== Mobile ===== */}
      <div className="flex flex-col gap-[32px] px-[16px] py-[64px] lg:hidden">
        <h2 className="font-[family-name:var(--font-inter)] text-[32px] font-light uppercase leading-[0.86] tracking-[-2.56px] text-black">
          {heading}
        </h2>
        <div className="flex snap-x snap-mandatory gap-[16px] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {articles.map((a, i) => (
            <div key={i} className="snap-start">
              <NewsCard
                image={a.image ? urlFor(a.image).width(706).quality(80).url() : (a.imageSrc || `/news-${i + 1}.png`)}
                text={a.excerpt || ""}
                offset={i % 2 === 1}
                isLast={i === articles.length - 1}
                readMoreLabel={readMoreText}
              />
            </div>
          ))}
          <div className="w-[16px] shrink-0" />
        </div>
      </div>

      {/* ===== Desktop ===== */}
      <NewsReveal>
      <div className="hidden px-[32px] py-[120px] lg:block">
        <div className="flex items-end justify-between">
          {/* Rotated heading on the left — sticks to left */}
          <div className="flex h-[706px] w-[110px] shrink-0 items-center justify-center">
            <h2 className="-rotate-90 whitespace-nowrap font-[family-name:var(--font-inter)] text-[64px] font-light uppercase leading-[0.86] tracking-[-5.12px] text-black">
              {heading.split(/(?<=latest\s)/).map((part, i) => (
                <span key={i} className="block">{part}</span>
              ))}
            </h2>
          </div>

          {/* Scrollable cards strip — sticks to right */}
          <div className="flex max-w-[1020px] items-start overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {articles.map((a, i) => (
              <div key={i} data-news-card>
              <NewsCard
                image={a.image ? urlFor(a.image).width(706).quality(80).url() : (a.imageSrc || `/news-${i + 1}.png`)}
                text={a.excerpt || ""}
                offset={i % 2 === 1}
                isLast={i === articles.length - 1}
                readMoreLabel={readMoreText}
              />
              </div>
            ))}
          </div>
        </div>
      </div>
      </NewsReveal>
    </section>
  );
}
