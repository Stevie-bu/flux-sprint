import { readFileSync } from "fs";
import { createClient } from "@sanity/client";

// Load .env.local
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

// v5 format: uses "language" instead of "_key"
function i18n(en, de) {
  const arr = [{ _key: "en", language: "en", value: en }];
  if (de) arr.push({ _key: "de", language: "de", value: de });
  return arr;
}

async function seed() {
  console.log("Re-seeding all i18n content (v5 format)...\n");

  // --- Hero (also remove old ctaText field) ---
  console.log("Hero...");
  await client.patch("hero")
    .set({
      greeting: i18n("Hello i'm", "Hallo, ich bin"),
      name: i18n("Harvey   Specter", "Harvey   Specter"),
      description: i18n(
        "H.Studio is a full-service creative studio creating beautiful digital experiences and products. We are an award winning desing and art group specializing in branding, web design and engineering.",
        "H.Studio ist ein Full-Service-Kreativstudio, das schöne digitale Erlebnisse und Produkte kreiert. Wir sind eine preisgekrönte Design- und Kunstgruppe, spezialisiert auf Branding, Webdesign und Entwicklung."
      ),
    })
    .unset(["ctaText"])
    .commit();
  console.log("  ✓\n");

  // --- Bio ---
  console.log("Bio...");
  await client.patch("bio").set({
    experienceLabel: i18n("8+ years in industry", "8+ Jahre Erfahrung"),
    tagLabel: i18n("creative freelancer", "Kreativer Freelancer"),
    lines: [
      { _key: "l1", text: i18n("A creative director   /", "Kreativdirektor   /"), indent: 0 },
      { _key: "l2", text: i18n("Photographer", "Fotograf"), indent: 15.5 },
      { _key: "l3", text: i18n("Born & raised", "Geboren & aufgewachsen"), indent: 44.3 },
      { _key: "l4", text: i18n("on the south side", "auf der Südseite"), indent: 0 },
      { _key: "l5", text: i18n("of chicago.", "von Chicago."), indent: 44 },
    ],
  }).commit();
  console.log("  ✓\n");

  // --- Services ---
  const services = [
    { id: "service-1", en: "Brand Discovery", de: "Markenentwicklung", descEn: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", descDe: "Beschreibung dieser Dienstleistung. Erläutern Sie den Mehrwert, den Sie bieten, und die Ergebnisse, die Kunden erwarten können. Zwei bis drei Sätze sind ideal." },
    { id: "service-2", en: "Web design & Dev", de: "Webdesign & Entwicklung", descEn: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", descDe: "Beschreibung dieser Dienstleistung. Erläutern Sie den Mehrwert, den Sie bieten, und die Ergebnisse, die Kunden erwarten können. Zwei bis drei Sätze sind ideal." },
    { id: "service-3", en: "Marketing", de: "Marketing", descEn: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", descDe: "Beschreibung dieser Dienstleistung. Erläutern Sie den Mehrwert, den Sie bieten, und die Ergebnisse, die Kunden erwarten können. Zwei bis drei Sätze sind ideal." },
    { id: "service-4", en: "Photography", de: "Fotografie", descEn: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", descDe: "Beschreibung dieser Dienstleistung. Erläutern Sie den Mehrwert, den Sie bieten, und die Ergebnisse, die Kunden erwarten können. Zwei bis drei Sätze sind ideal." },
  ];
  for (const s of services) {
    console.log(`${s.id}...`);
    await client.patch(s.id).set({
      title: i18n(s.en, s.de),
      description: i18n(s.descEn, s.descDe),
    }).commit();
    console.log("  ✓");
  }
  console.log();

  // --- Articles ---
  const excerptEn = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const articles = [
    { id: "article-1", en: "News Article 1", de: "News-Artikel 1" },
    { id: "article-2", en: "News Article 2", de: "News-Artikel 2" },
    { id: "article-3", en: "News Article 3", de: "News-Artikel 3" },
  ];
  for (const a of articles) {
    console.log(`${a.id}...`);
    await client.patch(a.id).set({
      title: i18n(a.en, a.de),
      excerpt: i18n(excerptEn, excerptEn),
    }).commit();
    console.log("  ✓");
  }

  console.log("\nDone! All content in v5 format with EN + DE.");
}

seed().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
