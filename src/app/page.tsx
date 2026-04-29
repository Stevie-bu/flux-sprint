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

export default async function Home() {
  const [hero, bio, services, projects, testimonials, articles, settings] =
    await Promise.all([
      getHero().catch(() => null),
      getBio().catch(() => null),
      getServices().catch(() => null),
      getProjects().catch(() => null),
      getTestimonials().catch(() => null),
      getArticles().catch(() => null),
      getSiteSettings().catch(() => null),
    ]);

  return (
    <>
      <Hero
        greeting={hero?.greeting}
        name={hero?.name}
        description={hero?.description}
        backgroundImage={hero?.backgroundImage}
        ctaText={settings?.ctaText}
        studioName={settings?.studioName}
        navLinks={settings?.navLinks}
      />
      <Bio
        experienceLabel={bio?.experienceLabel}
        number={bio?.number}
        lines={bio?.lines}
        tagLabel={bio?.tagLabel}
      />
      <About
        aboutText={settings?.aboutText}
        aboutImage={settings?.aboutImage}
      />
      <PhotoBreak image={settings?.photoBreakImage} />
      <Services
        services={services}
        sectionLabel={settings?.servicesLabel}
        heading={settings?.servicesHeading}
      />
      <Portfolio
        projects={projects}
        heading={settings?.portfolioHeading}
        ctaText={settings?.portfolioCta}
        ctaButton={settings?.ctaText}
      />
      <Testimonials testimonials={testimonials} />
      <News
        articles={articles}
        heading={settings?.newsHeading}
        readMoreText={settings?.newsReadMore}
      />
      <Footer
        studioName={settings?.studioName}
        footerCta={settings?.footerCta}
        ctaText={settings?.ctaText}
        credit={settings?.footerCredit}
        socialLinks={settings?.socialLinks}
        legalLinks={settings?.legalLinks}
      />
    </>
  );
}
