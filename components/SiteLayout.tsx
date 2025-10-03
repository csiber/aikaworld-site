import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Locale } from '../lib/i18n/config';
import { serverEnv } from '../lib/server-config';
import type { Dictionary } from '../lib/i18n/types';
import { buildInfo } from '../lib/generated/build-info';
import Header from './Header';

type SiteLayoutProps = {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
};

export default function SiteLayout({ locale, dictionary, children }: SiteLayoutProps) {
  const basePath = locale === 'hu' ? '/hu' : '';
  const resolvedSocialLinks = dictionary.footer.links.social
    .map(link => {
      const envValue = link.envKey ? serverEnv[link.envKey] : null;
      const href = envValue ?? link.href ?? null;

      if (!href) {
        return null;
      }

      return {
        label: link.label,
        href
      };
    })
    .filter((link): link is { label: string; href: string } => link !== null);

  const resolveFooterHref = (path: string) => {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    if (path.startsWith('#')) {
      return `${basePath}${path}`;
    }

    if (path === '/') {
      return basePath || '/';
    }

    if (path.startsWith('/')) {
      return `${basePath}${path}`;
    }

    return `${basePath}/${path}`;
  };

  return (
    <>
      <Header
        steamUrl={serverEnv.steamUrl}
        discordUrl={serverEnv.discordUrl}
        locale={locale}
        dictionary={dictionary.header}
      />
      <main className="pt-14">{children}</main>
      <footer className="mt-24 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-12 text-sm">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-white/60">
                {dictionary.footer.links.navigationHeading}
              </h2>
              <nav className="mt-4 flex flex-col gap-2">
                {dictionary.footer.links.navigation.map(link => {
                  const href = resolveFooterHref(link.path);
                  const isExternal = href.startsWith('http://') || href.startsWith('https://');

                  if (isExternal) {
                    return (
                      <a
                        key={link.path}
                        href={href}
                        className="opacity-80 transition hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      >
                        {link.label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={link.path}
                      href={href}
                      className="opacity-80 transition hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              {resolvedSocialLinks.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-white/60">
                    {dictionary.footer.links.socialHeading}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2">
                    {resolvedSocialLinks.map(link => (
                      <li key={link.label}>
                        <a
                          className="inline-flex items-center gap-2 opacity-80 transition hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                          href={link.href}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-white/60">
                {dictionary.footer.legalHeading}
              </h2>
              <nav className="mt-4 flex flex-col gap-2">
                {dictionary.footer.legalLinks.map(link => (
                  <Link
                    key={link.path}
                    href={`${basePath}${link.path}`}
                    className="opacity-80 transition hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-white/60">
                {dictionary.footer.contactHeading}
              </h2>
              <div className="mt-4 space-y-3 opacity-80">
                <p>
                  {dictionary.footer.contactEmailLabel}:{' '}
                  <a
                    className="underline transition hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    href={`mailto:${dictionary.footer.contactEmail}`}
                  >
                    {dictionary.footer.contactEmail}
                  </a>
                </p>
                <div>
                  <p>{dictionary.footer.contactAddressLabel}:</p>
                  <address className="not-italic">
                    {dictionary.footer.contactAddressLines.map(line => (
                      <div key={line}>{line}</div>
                    ))}
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center gap-2 text-xs text-white/60 md:flex-row md:justify-between">
            <span>{dictionary.footer.copyrightNotice}</span>
            <span>
              {dictionary.footer.lastBuildLabel}: {buildInfo.date}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
