import { client } from "./client";

export async function getHero() {
  return client.fetch(`*[_type == "hero"][0]{
    greeting, name, description, backgroundImage, ctaText
  }`);
}

export async function getBio() {
  return client.fetch(`*[_type == "bio"][0]{
    experienceLabel, number, lines, tagLabel
  }`);
}

export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(order asc){
    _id, title, description, thumbnail, order
  }`);
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

export async function getArticles() {
  return client.fetch(`*[_type == "article"] | order(publishedAt desc){
    _id, title, excerpt, image, link, publishedAt
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
