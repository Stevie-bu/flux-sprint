export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export async function getDictionary(locale: Locale) {
  const dict = await import(`./dictionaries/${locale}.json`);
  return dict.default;
}
