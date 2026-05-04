import { readFileSync } from "fs";
import { createClient } from "@sanity/client";

try {
  const env = readFileSync(".env.local", "utf-8");
  for (const line of env.split("\n")) {
    const [key, ...val] = line.split("=");
    if (key && val.length) process.env[key.trim()] = val.join("=").trim();
  }
} catch {}

const client = createClient({
  projectId: "93zrqa0c",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

async function seed() {
  console.log("Seeding About page...\n");

  await client.createOrReplace({
    _id: "aboutPage",
    _type: "aboutPage",
    heading: "About Harvey",
    subheading: "Creative Director & Photographer",
    intro: "With over 8 years of experience in the creative industry, I bring a unique blend of artistic vision and technical expertise to every project.",
    bio: "I started my journey as a photographer, capturing moments that tell stories. Over the years, I evolved into a full-service creative director, working with brands across the globe to create impactful digital experiences.\n\nMy approach combines strategic thinking with bold aesthetics. I believe that great design isn't just about looking good — it's about solving problems and creating meaningful connections between brands and their audiences.\n\nWhen I'm not behind the camera or at my desk, you'll find me exploring new cities, seeking inspiration in architecture, art, and the everyday beauty of urban life.",
    skills: [
      { _key: "s1", category: "Design", items: ["Brand Identity", "UI/UX Design", "Art Direction", "Typography"] },
      { _key: "s2", category: "Development", items: ["Web Development", "Responsive Design", "Animation", "CMS Integration"] },
      { _key: "s3", category: "Photography", items: ["Product Photography", "Portrait", "Editorial", "Post-Production"] },
      { _key: "s4", category: "Strategy", items: ["Brand Strategy", "Content Strategy", "Social Media", "Consulting"] },
    ],
    experience: [
      { _key: "e1", year: "2024–Present", role: "Creative Director", company: "H.Studio" },
      { _key: "e2", year: "2021–2024", role: "Senior Designer", company: "Agency 976" },
      { _key: "e3", year: "2019–2021", role: "Photographer & Designer", company: "Freelance" },
      { _key: "e4", year: "2017–2019", role: "Junior Designer", company: "Studio Minimal" },
    ],
    philosophy: "I believe in the power of simplicity. Every element should serve a purpose, every pixel should earn its place. Design is not about decoration — it's about communication.",
    ctaText: "Let's create something together",
  });

  console.log("  ✓ About page created\n");
  console.log("Done!");
}

seed().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
