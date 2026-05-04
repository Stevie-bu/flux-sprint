import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "93zrqa0c",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

// Convert a plain string value to internationalized array format
function toI18nArray(value) {
  if (!value) return undefined;
  if (Array.isArray(value)) return value; // already migrated
  return [{ _key: "en", value }];
}

async function migrate() {
  console.log("Migrating documents to internationalized array format...\n");

  // --- Hero ---
  const hero = await client.getDocument("hero");
  if (hero && typeof hero.greeting === "string") {
    console.log("Migrating hero...");
    await client.patch("hero").set({
      greeting: toI18nArray(hero.greeting),
      name: toI18nArray(hero.name),
      description: toI18nArray(hero.description),
    }).commit();
    console.log("  ✓ hero migrated\n");
  } else {
    console.log("  ⊘ hero already migrated or not found\n");
  }

  // --- Bio ---
  const bio = await client.getDocument("bio");
  if (bio && typeof bio.experienceLabel === "string") {
    console.log("Migrating bio...");
    const migratedLines = (bio.lines || []).map((line) => ({
      ...line,
      text: toI18nArray(line.text),
    }));
    await client.patch("bio").set({
      experienceLabel: toI18nArray(bio.experienceLabel),
      tagLabel: toI18nArray(bio.tagLabel),
      lines: migratedLines,
    }).commit();
    console.log("  ✓ bio migrated\n");
  } else {
    console.log("  ⊘ bio already migrated or not found\n");
  }

  // --- Services ---
  for (let i = 1; i <= 4; i++) {
    const id = `service-${i}`;
    const doc = await client.getDocument(id);
    if (doc && typeof doc.title === "string") {
      console.log(`Migrating ${id}...`);
      await client.patch(id).set({
        title: toI18nArray(doc.title),
        description: toI18nArray(doc.description),
      }).commit();
      console.log(`  ✓ ${id} migrated`);
    } else {
      console.log(`  ⊘ ${id} already migrated or not found`);
    }
  }
  console.log();

  // --- Articles ---
  for (let i = 1; i <= 3; i++) {
    const id = `article-${i}`;
    const doc = await client.getDocument(id);
    if (doc && typeof doc.title === "string") {
      console.log(`Migrating ${id}...`);
      await client.patch(id).set({
        title: toI18nArray(doc.title),
        excerpt: toI18nArray(doc.excerpt),
      }).commit();
      console.log(`  ✓ ${id} migrated`);
    } else {
      console.log(`  ⊘ ${id} already migrated or not found`);
    }
  }

  console.log("\nDone! All documents migrated to internationalized array format.");
}

migrate().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
