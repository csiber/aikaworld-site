import { headers } from 'next/headers';
import { defaultLocale, isLocale } from './config';

const HU_PREFIX = '/hu';

export function resolveRequestLocale(): string {
  const headerList = headers();
  const headerLocale = headerList.get('x-aika-locale');

  if (isLocale(headerLocale)) {
    return headerLocale;
  }

  const middlewareUrl = headerList.get('x-middleware-request-url');

  if (middlewareUrl) {
    try {
      const url = new URL(middlewareUrl);
      if (url.pathname === HU_PREFIX || url.pathname.startsWith(`${HU_PREFIX}/`)) {
        return 'hu';
      }
    } catch (error) {
      // ignore
    }
  }

  const matchedPath =
    headerList.get('x-matched-path') ?? headerList.get('x-invoke-path') ?? headerList.get('x-next-pathname');

  if (matchedPath && (matchedPath === HU_PREFIX || matchedPath.startsWith(`${HU_PREFIX}/`))) {
    return 'hu';
  }

  return defaultLocale;
}
