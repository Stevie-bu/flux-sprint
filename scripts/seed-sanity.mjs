import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import path from "path";

const client = createClient({
  projectId: "93zrqa0c",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const publicDir = path.resolve("public");

async function uploadImage(filename) {
  const filePath = path.join(publicDir, filename);
  console.log(`  Uploading ${filename}...`);
  const asset = await client.assets.upload("image", createReadStream(filePath), {
    filename,
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function seed() {
  console.log("Seeding Sanity...\n");

  // --- Hero ---
  console.log("Creating Hero...");
  const heroBg = await uploadImage("hero-bg.png");
  await client.createOrReplace({
    _id: "hero",
    _type: "hero",
    greeting: "Hello i'm",
    name: "Harvey   Specter",
    description:
      "H.Studio is a full-service creative studio creating beautiful digital experiences and products. We are an award winning desing and art group specializing in branding, web design and engineering.",
    backgroundImage: heroBg,
    ctaText: "Let's talk",
  });
  console.log("  ✓ Hero created\n");

  // --- Services ---
  console.log("Creating Services...");
  const serviceData = [
    { title: "Brand Discovery", image: "service-1.png" },
    { title: "Web design & Dev", image: "service-2.png" },
    { title: "Marketing", image: "service-3.png" },
    { title: "Photography", image: "service-4.png" },
  ];
  for (let i = 0; i < serviceData.length; i++) {
    const s = serviceData[i];
    const thumb = await uploadImage(s.image);
    await client.createOrReplace({
      _id: `service-${i + 1}`,
      _type: "service",
      title: s.title,
      description:
        "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
      thumbnail: thumb,
      order: i + 1,
    });
    console.log(`  ✓ Service ${i + 1}: ${s.title}`);
  }
  console.log();

  // --- Projects ---
  console.log("Creating Projects...");
  const projectData = [
    { title: "Surfers paradise", image: "project-1.png", tags: ["Social Media", "Photography"] },
    { title: "Cyberpunk caffe", image: "project-2.png", tags: ["Social Media", "Photography"] },
    { title: "Agency 976", image: "project-3.png", tags: ["Social Media", "Photography"] },
    { title: "Minimal Playground", image: "project-4.png", tags: ["Social Media", "Photography"] },
  ];
  for (let i = 0; i < projectData.length; i++) {
    const p = projectData[i];
    const img = await uploadImage(p.image);
    await client.createOrReplace({
      _id: `project-${i + 1}`,
      _type: "project",
      title: p.title,
      image: img,
      tags: p.tags,
      order: i + 1,
    });
    console.log(`  ✓ Project ${i + 1}: ${p.title}`);
  }
  console.log();

  // --- Testimonials ---
  console.log("Creating Testimonials...");
  const testimonialData = [
    {
      author: "Marko Stojković",
      quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
      logo: "logo-marko.svg",
    },
    {
      author: "Lukas Weber",
      quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
      logo: "logo-lukas.svg",
    },
    {
      author: "Sarah Jenkins",
      quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don\u2019t just make things look good; they solve business problems through visual clarity.",
      logo: "logo-sarah.svg",
    },
    {
      author: "Sofia Martínez",
      quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
      logo: "logo-sofia.svg",
    },
  ];
  for (let i = 0; i < testimonialData.length; i++) {
    const t = testimonialData[i];
    const logo = await uploadImage(t.logo);
    await client.createOrReplace({
      _id: `testimonial-${i + 1}`,
      _type: "testimonial",
      author: t.author,
      quote: t.quote,
      logo: logo,
      order: i + 1,
    });
    console.log(`  ✓ Testimonial ${i + 1}: ${t.author}`);
  }
  console.log();

  // --- Articles ---
  console.log("Creating Articles...");
  for (let i = 0; i < 3; i++) {
    const img = await uploadImage(`news-${i + 1}.png`);
    await client.createOrReplace({
      _id: `article-${i + 1}`,
      _type: "article",
      title: `News Article ${i + 1}`,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: img,
      publishedAt: new Date(2026, 3, 20 - i).toISOString(),
    });
    console.log(`  ✓ Article ${i + 1}`);
  }
  console.log();

  // --- Site Settings ---
  console.log("Creating Site Settings...");
  const aboutImg = await uploadImage("about-portrait.png");
  const photoBreakImg = await uploadImage("photographer.png");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    studioName: "H.Studio",
    aboutText:
      "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.",
    aboutImage: aboutImg,
    photoBreakImage: photoBreakImg,
    footerCta: "Have a project in mind?",
    socialLinks: [
      { _key: "fb", label: "Facebook", url: "https://facebook.com" },
      { _key: "ig", label: "Instagram", url: "https://instagram.com" },
      { _key: "x", label: "x.com", url: "https://x.com" },
      { _key: "li", label: "Linkedin", url: "https://linkedin.com" },
    ],
  });
  console.log("  ✓ Site Settings created\n");

  console.log("Done! All content seeded to Sanity.");
}

seed().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
