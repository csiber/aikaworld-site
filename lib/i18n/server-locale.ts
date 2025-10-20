import { headers } from 'next/headers';
import type { Locale } from './config';
import { defaultLocale, isLocale } from './config';

const EN_PREFIX = '/en';

export async function resolveRequestLocale(): Promise<Locale> {
  const headerList = await headers();
  const headerLocale = headerList.get('x-aika-locale');

  if (isLocale(headerLocale)) {
    return headerLocale;
  }

  const middlewareUrl = headerList.get('x-middleware-request-url');

  if (middlewareUrl) {
    try {
      const url = new URL(middlewareUrl);
      if (url.pathname === EN_PREFIX || url.pathname.startsWith(`${EN_PREFIX}/`)) {
        return 'en';
      }
    } catch (error) {
      // ignore
    }
  }

  const matchedPath =
    headerList.get('x-matched-path') ?? headerList.get('x-invoke-path') ?? headerList.get('x-next-pathname');

  if (matchedPath && (matchedPath === EN_PREFIX || matchedPath.startsWith(`${EN_PREFIX}/`))) {
    return 'en';
  }

  return defaultLocale;
}
