import Image from "next/image";

const articles = [
  {
    image: "/news-1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/news-2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/news-3.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
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
}: {
  image: string;
  text: string;
  offset?: boolean;
  isLast?: boolean;
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
            Read more
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

export default function News() {
  return (
    <section className="w-full bg-[#f3f3f3]">
      {/* ===== Mobile ===== */}
      <div className="flex flex-col gap-[32px] px-[16px] py-[64px] lg:hidden">
        <h2 className="font-[family-name:var(--font-inter)] text-[32px] font-light uppercase leading-[0.86] tracking-[-2.56px] text-black">
          Keep up with my latest news &amp; achievements
        </h2>
        <div className="flex snap-x snap-mandatory gap-[16px] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {articles.map((a, i) => (
            <div key={i} className="snap-start">
              <NewsCard
                image={a.image}
                text={a.text}
                offset={i % 2 === 1}
                isLast={i === articles.length - 1}
              />
            </div>
          ))}
          <div className="w-[16px] shrink-0" />
        </div>
      </div>

      {/* ===== Desktop ===== */}
      <div className="hidden px-[32px] py-[120px] lg:block">
        <div className="flex items-end justify-between">
          {/* Rotated heading on the left — sticks to left */}
          <div className="flex h-[706px] w-[110px] shrink-0 items-center justify-center">
            <h2 className="-rotate-90 whitespace-nowrap font-[family-name:var(--font-inter)] text-[64px] font-light uppercase leading-[0.86] tracking-[-5.12px] text-black">
              <span className="block">Keep up with my latest</span>
              <span className="block">news &amp; achievements</span>
            </h2>
          </div>

          {/* Scrollable cards strip — sticks to right */}
          <div className="flex max-w-[1020px] items-start overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {articles.map((a, i) => (
              <NewsCard
                key={i}
                image={a.image}
                text={a.text}
                offset={i % 2 === 1}
                isLast={i === articles.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
