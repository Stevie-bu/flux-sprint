type BioLine = { text: string; indent: number; _key?: string };

type BioProps = {
  experienceLabel?: string;
  number?: string;
  lines?: BioLine[];
  tagLabel?: string;
};

const defaultLines: BioLine[] = [
  { text: "A creative director   /", indent: 0 },
  { text: "Photographer", indent: 15.5 },
  { text: "Born & raised", indent: 44.3 },
  { text: "on the south side", indent: 0 },
  { text: "of chicago.", indent: 44 },
];

export default function Bio({
  experienceLabel = "8+ years in industry",
  number = "001",
  lines,
  tagLabel = "creative freelancer",
}: BioProps) {
  const bioLines = lines && lines.length > 0 ? lines : defaultLines;

  return (
    <section className="flex w-full flex-col items-center justify-center bg-white px-[16px] py-[48px] md:px-[32px] md:py-[120px]">
      <div className="flex w-full flex-col gap-[24px]">
        {/* Top label + divider */}
        <div className="flex w-full flex-col items-end gap-[12px]">
          <p className="w-full text-right font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-[#1f1f1f]">
            [ {experienceLabel} ]
          </p>
          <hr className="w-full border-t border-[#1f1f1f]" />
        </div>

        {/* Typography block */}
        <div className="flex flex-col items-center gap-[8px] uppercase md:items-start">
          {bioLines.map((line, i) => {
            const isFirst = i === 0;
            const isLast = i === bioLines.length - 1;

            if (isFirst) {
              return (
                <div
                  key={line._key || i}
                  className="flex flex-col items-center gap-[12px] md:w-full md:flex-row md:items-start md:gap-[12px]"
                >
                  <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal leading-[1.1] text-[#1f1f1f] md:order-2">
                    {number}
                  </p>
                  <p className="whitespace-pre font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light leading-[0.84] tracking-[-0.08em] text-black md:order-1">
                    {line.text}
                  </p>
                </div>
              );
            }

            if (isLast) {
              return (
                <div
                  key={line._key || i}
                  className="flex flex-col items-center gap-[12px] md:w-full md:flex-row md:flex-wrap md:items-baseline md:gap-x-[32px] md:gap-y-[12px]"
                  style={{ paddingLeft: `${line.indent}%` }}
                >
                  <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light leading-[0.84] tracking-[-0.08em] text-black md:pl-0"
                    style={{ paddingLeft: 0 }}
                  >
                    {line.text}
                  </p>
                  <p className="whitespace-nowrap font-[family-name:var(--font-geist-mono)] text-[14px] font-normal leading-[1.1] text-[#1f1f1f] md:ml-auto">
                    [ {tagLabel} ]
                  </p>
                </div>
              );
            }

            // Check if line contains "&" for Playfair styling
            const hasAmpersand = line.text.includes("&");

            return (
              <div
                key={line._key || i}
                className="flex w-full items-center justify-center md:justify-start"
                style={{ paddingLeft: `${line.indent}%` }}
              >
                <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light leading-[0.84] tracking-[-0.08em] text-black md:pl-0"
                  style={{ paddingLeft: 0 }}
                >
                  {hasAmpersand
                    ? line.text.split("&").map((part, j) =>
                        j === 0 ? (
                          <span key={j}>{part}</span>
                        ) : (
                          <span key={j}>
                            <span className="font-[family-name:var(--font-playfair)] font-normal italic">
                              &amp;
                            </span>
                            {part}
                          </span>
                        )
                      )
                    : line.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
