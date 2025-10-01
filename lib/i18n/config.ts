export const locales = ['en', 'hu'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const alternateLocales = locales.filter(locale => locale !== defaultLocale);

export function isLocale(value: string | null | undefined): value is Locale {
  return value != null && locales.includes(value as Locale);
}
