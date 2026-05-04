import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CornerBrackets from "@/components/CornerBrackets";
import ImageReveal from "@/components/ImageReveal";
import ScrollTextFill from "@/components/ScrollTextFill";
import StaggerFadeIn from "@/components/StaggerFadeIn";
import ServiceReveal from "@/components/ServiceReveal";
import { ParallaxImage } from "@/components/HeroParallax";
import { getAboutPage, getSiteSettings } from "@/sanity/queries";
import { urlFor } from "@/sanity/client";
import { getDictionary, type Locale } from "@/i18n";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

const defaultData = {
  heading: "About Harvey",
  subheading: "Creative Director & Photographer",
  intro:
    "With over 8 years of experience in the creative industry, I bring a unique blend of artistic vision and technical expertise to every project.",
  bio: "I started my journey as a photographer, capturing moments that tell stories. Over the years, I evolved into a full-service creative director, working with brands across the globe to create impactful digital experiences.\n\nMy approach combines strategic thinking with bold aesthetics. I believe that great design isn't just about looking good — it's about solving problems and creating meaningful connections between brands and their audiences.\n\nWhen I'm not behind the camera or at my desk, you'll find me exploring new cities, seeking inspiration in architecture, art, and the everyday beauty of urban life.",
  skills: [
    { category: "Design", items: ["Brand Identity", "UI/UX Design", "Art Direction", "Typography"] },
    { category: "Development", items: ["Web Development", "Responsive Design", "Animation", "CMS Integration"] },
    { category: "Photography", items: ["Product Photography", "Portrait", "Editorial", "Post-Production"] },
    { category: "Strategy", items: ["Brand Strategy", "Content Strategy", "Social Media", "Consulting"] },
  ],
  experience: [
    { year: "2024–Present", role: "Creative Director", company: "H.Studio" },
    { year: "2021–2024", role: "Senior Designer", company: "Agency 976" },
    { year: "2019–2021", role: "Photographer & Designer", company: "Freelance" },
    { year: "2017–2019", role: "Junior Designer", company: "Studio Minimal" },
  ],
  philosophy:
    "I believe in the power of simplicity. Every element should serve a purpose, every pixel should earn its place. Design is not about decoration — it's about communication.",
  ctaText: "Let's create something together",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const [data, settings] = await Promise.all([
    getAboutPage().catch(() => null),
    getSiteSettings().catch(() => null),
  ]);

  const page = { ...defaultData, ...data };
  const portraitSrc = page.portrait
    ? urlFor(page.portrait).width(800).quality(80).url()
    : "/about-portrait.png";

  return (
    <>
      <main className="relative z-10">
        {/* ============================================ */}
        {/* HERO — same pattern as home: full-height,    */}
        {/* parallax image, overlay text                 */}
        {/* ============================================ */}
        <section className="relative min-h-[70dvh] w-full overflow-hidden bg-black">
          <ParallaxImage>
            <Image
              src={portraitSrc}
              alt={page.heading}
              fill
              priority
              className="object-cover object-[center_30%] opacity-40"
            />
          </ParallaxImage>

          <div className="relative flex min-h-[70dvh] flex-col px-[16px] md:px-[32px]">
            <Nav
              studioName={dict.nav.studioName}
              navLinks={dict.nav.links}
              ctaText={dict.nav.cta}
              locale={locale}
              variant="light"
            />

            <div className="flex flex-1 flex-col justify-end pb-[64px] md:pb-[80px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-white/50">
                  [ {dict.about.label} ]
                </p>
                <h1 className="font-[family-name:var(--font-inter)] text-[clamp(48px,10vw,128px)] font-light uppercase leading-[0.86] tracking-[-0.08em] text-white">
                  {page.heading}
                </h1>
                <p className="max-w-[500px] font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[1.3] tracking-[-0.72px] text-white/60">
                  {page.subheading}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* INTRO + PORTRAIT — white bg, same spacing    */}
        {/* as home About section, with image reveal     */}
        {/* ============================================ */}
        <section className="bg-white px-[16px] py-[64px] md:px-[32px] md:py-[120px]">
          <div className="flex flex-col gap-[20px] md:flex-row md:items-start md:justify-between md:gap-0">
            <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-[#1f1f1f]">
              [ 001 ]
            </p>

            <div className="flex flex-col gap-[48px] md:w-[75%]">
              {/* Intro text — scroll fill effect like Bio section */}
              <ScrollTextFill fromColor="#cccccc" toColor="#1f1f1f" start="top 80%" end="bottom 50%">
                <p className="font-[family-name:var(--font-inter)] text-[clamp(24px,3.5vw,36px)] font-light leading-[1.3] tracking-[-0.04em]">
                  {page.intro}
                </p>
              </ScrollTextFill>

              {/* Bio paragraphs */}
              <div className="flex flex-col gap-[48px] lg:flex-row lg:gap-[64px]">
                <div className="flex flex-col gap-[16px] lg:w-1/2">
                  <CornerBrackets>
                    <div className="flex flex-col gap-[16px]">
                      {page.bio.split("\n\n").slice(0, 2).map((p: string, i: number) => (
                        <p
                          key={i}
                          className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.5] tracking-[-0.56px] text-[#1f1f1f]"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </CornerBrackets>
                </div>

                {/* Portrait with reveal */}
                <div className="relative aspect-[3/4] w-full lg:w-1/2">
                  <ImageReveal direction="bottom">
                    <Image
                      src={portraitSrc}
                      alt={page.heading}
                      fill
                      className="object-cover"
                    />
                  </ImageReveal>
                </div>
              </div>

              {/* Third paragraph if exists */}
              {page.bio.split("\n\n").length > 2 && (
                <p className="max-w-[600px] font-[family-name:var(--font-inter)] text-[14px] italic font-normal leading-[1.5] tracking-[-0.56px] text-[#1f1f1f]">
                  {page.bio.split("\n\n")[2]}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SKILLS — same pattern as Services section:   */}
        {/* black bg, numbered items with reveal         */}
        {/* ============================================ */}
        <section className="w-full bg-black px-[16px] py-[64px] md:px-[32px] md:py-[120px]">
          <div className="flex flex-col gap-[32px] md:gap-[48px]">
            <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-white">
              [ expertise ]
            </p>

            <div className="flex w-full items-center justify-between font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light uppercase leading-normal tracking-[-0.08em] text-white">
              <span>[{page.skills.length}]</span>
              <span>Skills</span>
            </div>

            <div className="flex flex-col gap-[48px]">
              {page.skills.map((skill: { category: string; items: string[] }, i: number) => (
                <ServiceReveal key={i}>
                  <div className="flex w-full flex-col gap-[9px]">
                    <div className="flex w-full flex-col gap-[9px]">
                      <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-white">
                        [ {i + 1} ]
                      </p>
                      <hr data-service-line className="w-full border-t border-white/30" />
                    </div>
                    <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start lg:justify-between lg:gap-[9px]">
                      <h3 data-service-title className="shrink-0 whitespace-nowrap font-[family-name:var(--font-inter)] text-[36px] font-bold italic uppercase leading-[1.1] tracking-[-1.44px] text-white">
                        {skill.category}
                      </h3>
                      <div data-service-desc className="flex flex-wrap gap-[8px] lg:max-w-[500px]">
                        {skill.items.map((item: string, j: number) => (
                          <span
                            key={j}
                            className="rounded-[24px] border border-white/20 px-[12px] py-[6px] font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.3] tracking-[-0.56px] text-white"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ServiceReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* EXPERIENCE — light bg, stagger fade in       */}
        {/* ============================================ */}
        <section className="bg-[#f5f5f5] px-[16px] py-[64px] md:px-[32px] md:py-[120px]">
          <div className="flex flex-col gap-[48px]">
            <div className="flex items-start justify-between">
              <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal uppercase leading-[1.1] text-[#1f1f1f]">
                [ experience ]
              </p>
              <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-normal leading-[1.1] text-[#1f1f1f]">
                002
              </p>
            </div>

            <StaggerFadeIn itemSelector="[data-stagger-item]" y={30}>
              <div className="flex flex-col">
                {page.experience.map((exp: { year: string; role: string; company: string }, i: number) => (
                  <div
                    key={i}
                    data-stagger-item
                    className="flex flex-col gap-[8px] border-t border-black/15 py-[24px] md:flex-row md:items-baseline md:gap-[32px] md:py-[32px]"
                  >
                    <p className="shrink-0 font-[family-name:var(--font-geist-mono)] text-[14px] font-normal leading-[1.1] text-[#1f1f1f]/50 md:w-[160px]">
                      {exp.year}
                    </p>
                    <p className="font-[family-name:var(--font-inter)] text-[clamp(24px,3vw,36px)] font-light uppercase leading-[1.1] tracking-[-0.04em] text-black md:flex-1">
                      {exp.role}
                    </p>
                    <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.1] tracking-[-0.56px] text-[#1f1f1f]/50">
                      {exp.company}
                    </p>
                  </div>
                ))}
              </div>
            </StaggerFadeIn>
          </div>
        </section>

        {/* ============================================ */}
        {/* PHILOSOPHY + CTA — same as home portfolio    */}
        {/* CTA block with corner brackets               */}
        {/* ============================================ */}
        <section className="bg-white px-[16px] py-[64px] md:px-[32px] md:py-[120px]">
          <div className="flex flex-col items-center gap-[48px]">
            <ScrollTextFill fromColor="#cccccc" toColor="#000000" start="top 70%" end="bottom 40%">
              <h2 className="text-center font-[family-name:var(--font-inter)] text-[clamp(32px,6.67vw,96px)] font-light uppercase leading-[0.86] tracking-[-0.08em]">
                Philosophy
              </h2>
            </ScrollTextFill>

            <div className="w-full max-w-[600px]">
              <CornerBrackets>
                <div className="flex flex-col gap-[24px]">
                  <p className="font-[family-name:var(--font-inter)] text-[18px] italic leading-[1.4] tracking-[-0.72px] text-[#1f1f1f]">
                    {page.philosophy}
                  </p>
                  <a
                    href="#contact"
                    className="w-fit rounded-[24px] bg-black px-[16px] py-[12px] font-[family-name:var(--font-inter)] text-[14px] font-medium leading-normal tracking-[-0.56px] text-white hover:animate-wiggle"
                  >
                    {page.ctaText || dict.nav.cta}
                  </a>
                </div>
              </CornerBrackets>
            </div>
          </div>
        </section>
      </main>

      <Footer
        studioName={dict.nav.studioName}
        footerCta={dict.footer.cta}
        ctaText={dict.nav.cta}
        credit={dict.footer.credit}
        socialLinks={settings?.socialLinks}
        legalLinks={dict.footer.legal}
      />
    </>
  );
}
