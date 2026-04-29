import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "studioName",
      title: "Studio Name",
      type: "string",
      description: 'z.B. "H.Studio"',
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      description: 'z.B. "Let\'s talk"',
    }),
    defineField({
      name: "aboutText",
      title: "About Text",
      type: "text",
    }),
    defineField({
      name: "aboutImage",
      title: "About Portrait",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "photoBreakImage",
      title: "Photo Break Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "servicesLabel",
      title: "Services Section Label",
      type: "string",
      description: 'z.B. "services"',
    }),
    defineField({
      name: "servicesHeading",
      title: "Services Heading",
      type: "string",
      description: 'z.B. "Deliverables"',
    }),
    defineField({
      name: "portfolioHeading",
      title: "Portfolio Heading",
      type: "string",
      description: 'z.B. "Selected Work"',
    }),
    defineField({
      name: "portfolioCta",
      title: "Portfolio CTA Text",
      type: "text",
      description: "Text im CTA-Block unter den Projekten",
    }),
    defineField({
      name: "testimonialsHeading",
      title: "Testimonials Heading",
      type: "string",
    }),
    defineField({
      name: "newsHeading",
      title: "News Heading",
      type: "string",
      description: 'z.B. "Keep up with my latest news & achievements"',
    }),
    defineField({
      name: "newsReadMore",
      title: "News Read More Text",
      type: "string",
    }),
    defineField({
      name: "footerCta",
      title: "Footer CTA Text",
      type: "string",
    }),
    defineField({
      name: "footerCredit",
      title: "Footer Credit",
      type: "string",
      description: 'z.B. "Coded By Claude"',
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
        },
      ],
    }),
    defineField({
      name: "legalLinks",
      title: "Legal Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
        },
      ],
    }),
  ],
});
