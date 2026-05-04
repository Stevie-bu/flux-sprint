import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "93zrqa0c",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

// Append a DE entry to an existing internationalized array
function addDe(existing, deValue) {
  if (!existing || !Array.isArray(existing)) return [{ _key: "en", value: "" }, { _key: "de", value: deValue }];
  const filtered = existing.filter((e) => e._key !== "de");
  return [...filtered, { _key: "de", value: deValue }];
}

async function seed() {
  console.log("Adding German translations...\n");

  // --- Hero ---
  console.log("Hero...");
  const hero = await client.getDocument("hero");
  await client.patch("hero").set({
    greeting: addDe(hero.greeting, "Hallo, ich bin"),
    name: addDe(hero.name, "Harvey   Specter"),
    description: addDe(hero.description, "H.Studio ist ein Full-Service-Kreativstudio, das schöne digitale Erlebnisse und Produkte kreiert. Wir sind eine preisgekrönte Design- und Kunstgruppe, spezialisiert auf Branding, Webdesign und Entwicklung."),
  }).commit();
  console.log("  ✓\n");

  // --- Bio ---
  console.log("Bio...");
  const bio = await client.getDocument("bio");
  const deLines = [
    "Kreativdirektor   /",
    "Fotograf",
    "Geboren & aufgewachsen",
    "auf der Südseite",
    "von Chicago.",
  ];
  const migratedLines = (bio.lines || []).map((line, i) => ({
    ...line,
    text: addDe(line.text, deLines[i] || line.text?.[0]?.value || ""),
  }));
  await client.patch("bio").set({
    experienceLabel: addDe(bio.experienceLabel, "8+ Jahre Erfahrung"),
    tagLabel: addDe(bio.tagLabel, "Kreativer Freelancer"),
    lines: migratedLines,
  }).commit();
  console.log("  ✓\n");

  // --- Services ---
  const serviceDe = [
    { title: "Markenentwicklung", description: "Beschreibung dieser Dienstleistung. Erläutern Sie den Mehrwert, den Sie bieten, und die Ergebnisse, die Kunden erwarten können. Zwei bis drei Sätze sind ideal." },
    { title: "Webdesign & Entwicklung", description: "Beschreibung dieser Dienstleistung. Erläutern Sie den Mehrwert, den Sie bieten, und die Ergebnisse, die Kunden erwarten können. Zwei bis drei Sätze sind ideal." },
    { title: "Marketing", description: "Beschreibung dieser Dienstleistung. Erläutern Sie den Mehrwert, den Sie bieten, und die Ergebnisse, die Kunden erwarten können. Zwei bis drei Sätze sind ideal." },
    { title: "Fotografie", description: "Beschreibung dieser Dienstleistung. Erläutern Sie den Mehrwert, den Sie bieten, und die Ergebnisse, die Kunden erwarten können. Zwei bis drei Sätze sind ideal." },
  ];
  for (let i = 0; i < 4; i++) {
    const id = `service-${i + 1}`;
    const doc = await client.getDocument(id);
    console.log(`Service ${i + 1}...`);
    await client.patch(id).set({
      title: addDe(doc.title, serviceDe[i].title),
      description: addDe(doc.description, serviceDe[i].description),
    }).commit();
    console.log(`  ✓`);
  }
  console.log();

  // --- Articles ---
  const articleDe = [
    { title: "News-Artikel 1", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "News-Artikel 2", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "News-Artikel 3", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];
  for (let i = 0; i < 3; i++) {
    const id = `article-${i + 1}`;
    const doc = await client.getDocument(id);
    console.log(`Article ${i + 1}...`);
    await client.patch(id).set({
      title: addDe(doc.title, articleDe[i].title),
      excerpt: addDe(doc.excerpt, articleDe[i].excerpt),
    }).commit();
    console.log(`  ✓`);
  }

  console.log("\nDone! German translations added.");
}

seed().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
