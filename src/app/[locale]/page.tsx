import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import About from "@/components/About";
import PhotoBreak from "@/components/PhotoBreak";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News";
import Footer from "@/components/Footer";
import {
  getHero,
  getBio,
  getServices,
  getProjects,
  getTestimonials,
  getArticles,
  getSiteSettings,
} from "@/sanity/queries";
import { getDictionary, type Locale } from "@/i18n";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const [hero, bio, services, projects, testimonials, articles, settings] =
    await Promise.all([
      getHero(locale).catch(() => null),
      getBio(locale).catch(() => null),
      getServices(locale).catch(() => null),
      getProjects().catch(() => null),
      getTestimonials().catch(() => null),
      getArticles(locale).catch(() => null),
      getSiteSettings().catch(() => null),
    ]);

  return (
    <>
      <main className="relative z-10 bg-white">
      <Hero
        greeting={hero?.greeting || dict.hero.greeting}
        name={hero?.name}
        description={hero?.description}
        backgroundImage={hero?.backgroundImage}
        ctaText={dict.nav.cta}
        studioName={dict.nav.studioName}
        navLinks={dict.nav.links}
        locale={locale}
      />
      <Bio
        experienceLabel={bio?.experienceLabel || dict.bio.experienceLabel}
        number={bio?.number}
        lines={bio?.lines}
        tagLabel={bio?.tagLabel || dict.bio.tagLabel}
      />
      <About aboutText={settings?.aboutText} aboutImage={settings?.aboutImage} />
      <PhotoBreak image={settings?.photoBreakImage} />
      <Services
        services={services}
        sectionLabel={dict.services.label}
        heading={dict.services.heading}
      />
      <Portfolio
        projects={projects}
        heading={dict.portfolio.heading}
        ctaText={dict.portfolio.cta}
        ctaButton={dict.nav.cta}
      />
      <Testimonials testimonials={testimonials} />
      <News
        articles={articles}
        heading={dict.news.heading}
        readMoreText={dict.news.readMore}
      />
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
