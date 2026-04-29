import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "93zrqa0c",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

async function seed() {
  console.log("Seeding text content...\n");

  // --- Bio Section ---
  console.log("Creating Bio...");
  await client.createOrReplace({
    _id: "bio",
    _type: "bio",
    experienceLabel: "8+ years in industry",
    number: "001",
    lines: [
      { _key: "l1", text: "A creative director   /", indent: 0 },
      { _key: "l2", text: "Photographer", indent: 15.5 },
      { _key: "l3", text: "Born & raised", indent: 44.3 },
      { _key: "l4", text: "on the south side", indent: 0 },
      { _key: "l5", text: "of chicago.", indent: 44 },
    ],
    tagLabel: "creative freelancer",
  });
  console.log("  ✓ Bio created\n");

  // --- Update Site Settings with all text fields ---
  console.log("Updating Site Settings...");
  await client.patch("siteSettings")
    .set({
      navLinks: [
        { _key: "n1", label: "About", href: "#about" },
        { _key: "n2", label: "Services", href: "#services" },
        { _key: "n3", label: "Projects", href: "#projects" },
        { _key: "n4", label: "News", href: "#news" },
        { _key: "n5", label: "Contact", href: "#contact" },
      ],
      ctaText: "Let's talk",
      servicesLabel: "services",
      servicesHeading: "Deliverables",
      portfolioHeading: "Selected\nWork",
      portfolioCta: "Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.",
      testimonialsHeading: "Testimonials",
      newsHeading: "Keep up with my latest news & achievements",
      newsReadMore: "Read more",
      footerCta: "Have a project in mind?",
      footerCredit: "Coded By Claude",
      legalLinks: [
        { _key: "lg1", label: "licences", href: "#" },
        { _key: "lg2", label: "Privacy policy", href: "#" },
      ],
    })
    .commit();
  console.log("  ✓ Site Settings updated\n");

  console.log("Done! All text content seeded.");
}

seed().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
