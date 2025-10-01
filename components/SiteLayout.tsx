import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Locale } from '../lib/i18n/config';
import { serverEnv } from '../lib/server-config';
import type { Dictionary } from '../lib/i18n/types';
import Header from './Header';

type SiteLayoutProps = {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
};

export default function SiteLayout({ locale, dictionary, children }: SiteLayoutProps) {
  const basePath = locale === 'hu' ? '/hu' : '';

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
        <div className="mx-auto flex flex-wrap items-center justify-center gap-2 px-4 py-10 text-sm opacity-80">
          <span>© {new Date().getFullYear()} aikaworld.com</span>
          <span aria-hidden>•</span>
          <Link href={`${basePath}/privacy`} className="hover:opacity-100">
            {dictionary.footer.privacy}
          </Link>
          <span aria-hidden>•</span>
          <Link href={`${basePath}/terms`} className="hover:opacity-100">
            {dictionary.footer.terms}
          </Link>
          <span aria-hidden>•</span>
          <Link href={`${basePath}/presskit`} className="hover:opacity-100">
            {dictionary.footer.presskit}
          </Link>
        </div>
      </footer>
    </>
  );
}
