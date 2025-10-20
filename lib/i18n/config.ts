export const locales = ['hu', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'hu';

export const alternateLocales = locales.filter(locale => locale !== defaultLocale);

export function isLocale(value: string | null | undefined): value is Locale {
  return value != null && locales.includes(value as Locale);
}
