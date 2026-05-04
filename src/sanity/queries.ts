import { client } from "./client";

// Helper: resolve internationalized array field (v5 format) with EN fallback
// v5 uses "language" field instead of "_key"
const l = (field: string) =>
  `coalesce(${field}[language == $locale][0].value, ${field}[language == "en"][0].value)`;

export async function getHero(locale: string) {
  return client.fetch(
    `*[_type == "hero"][0]{
      "greeting": ${l("greeting")},
      "name": ${l("name")},
      "description": ${l("description")},
      backgroundImage
    }`,
    { locale }
  );
}

export async function getBio(locale: string) {
  return client.fetch(
    `*[_type == "bio"][0]{
      "experienceLabel": ${l("experienceLabel")},
      number,
      "lines": lines[] {
        "text": ${l("text")},
        indent,
        _key
      },
      "tagLabel": ${l("tagLabel")}
    }`,
    { locale }
  );
}

export async function getServices(locale: string) {
  return client.fetch(
    `*[_type == "service"] | order(order asc){
      _id,
      "title": ${l("title")},
      "description": ${l("description")},
      thumbnail,
      order
    }`,
    { locale }
  );
}

export async function getProjects() {
  return client.fetch(`*[_type == "project"] | order(order asc){
    _id, title, image, tags, order
  }`);
}

export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"] | order(order asc){
    _id, author, quote, logo, order
  }`);
}

export async function getArticles(locale: string) {
  return client.fetch(
    `*[_type == "article"] | order(publishedAt desc){
      _id,
      "title": ${l("title")},
      "excerpt": ${l("excerpt")},
      image,
      link,
      publishedAt
    }`,
    { locale }
  );
}

export async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0]{
    heading, subheading, portrait, intro, bio,
    skills[]{ category, items },
    experience[]{ year, role, company },
    philosophy, ctaText
  }`);
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    studioName, navLinks, ctaText,
    aboutText, aboutImage, photoBreakImage,
    servicesLabel, servicesHeading,
    portfolioHeading, portfolioCta, testimonialsHeading,
    newsHeading, newsReadMore,
    footerCta, footerCredit, socialLinks, legalLinks
  }`);
}
