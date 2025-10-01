import type { Locale } from '../config';
import type { Dictionary } from '../types';
import { enDictionary } from './en';
import { huDictionary } from './hu';

const dictionaries: Record<Locale, Dictionary> = {
  en: enDictionary,
  hu: huDictionary
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
