import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { defaultLocale } from './lib/i18n/config';

const PUBLIC_FILE = /\.(.*)$/;
const LOCALE_COOKIE = 'aika_locale';

function detectLocaleFromPath(pathname: string) {
  if (pathname === '/hu' || pathname.startsWith('/hu/')) {
    return 'hu';
  }
  return defaultLocale;
}

function parsePreferredLocale(acceptLanguage: string | null) {
  if (!acceptLanguage) {
    return null;
  }

  const priorities = acceptLanguage
    .split(',')
    .map(token => {
      const [lang, qValue] = token.trim().split(';q=');
      const quality = qValue ? parseFloat(qValue) : 1;
      return { lang: lang.toLowerCase(), quality };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { lang } of priorities) {
    const base = lang.split('-')[0];
    if (base === 'hu') {
      return 'hu';
    }
    if (base === 'en') {
      return 'en';
    }
  }

  return null;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/site.webmanifest') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const currentLocale = detectLocaleFromPath(pathname);

  const localePrefix = '/hu';
  const shouldRewriteHu = currentLocale === 'hu';

  const response = shouldRewriteHu
    ? (() => {
        const rewriteUrl = request.nextUrl.clone();
        if (pathname === localePrefix || pathname === `${localePrefix}/`) {
          rewriteUrl.pathname = '/';
        } else {
          rewriteUrl.pathname = pathname.replace(/^\/hu/, '') || '/';
        }
        return NextResponse.rewrite(rewriteUrl);
      })()
    : NextResponse.next();
  response.headers.set('x-aika-locale', currentLocale);

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (!cookieLocale || cookieLocale !== currentLocale) {
    response.cookies.set(LOCALE_COOKIE, currentLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365
    });
  }

  if (currentLocale === defaultLocale) {
    if (!cookieLocale) {
      const preferredLocale = parsePreferredLocale(request.headers.get('accept-language'));
      if (preferredLocale && preferredLocale !== defaultLocale) {
        const targetPath = pathname === '/' ? '' : pathname;
        const redirectUrl = new URL(`/hu${targetPath}${search}`, request.url);
        const redirectResponse = NextResponse.redirect(redirectUrl);
        redirectResponse.headers.set('x-aika-locale', 'hu');
        redirectResponse.cookies.set(LOCALE_COOKIE, 'hu', {
          path: '/',
          maxAge: 60 * 60 * 24 * 365
        });
        return redirectResponse;
      }
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|assets|.*\\..*).*)']
};
