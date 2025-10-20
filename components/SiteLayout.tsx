import type { ReactNode } from 'react';
import type { Locale } from '../lib/i18n/config';
import { serverEnv } from '../lib/server-config';
import type { Dictionary } from '../lib/i18n/types';
import PageTransition from './animations/PageTransition';
import Header from './Header';

type SiteLayoutProps = {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
};

export default function SiteLayout({ locale, dictionary, children }: SiteLayoutProps) {
  return (
    <>
      <Header
        steamUrl={serverEnv.steamUrl}
        discordUrl={serverEnv.discordUrl}
        locale={locale}
        dictionary={dictionary.header}
      />
      <main className="pt-14">
        <PageTransition>{children}</PageTransition>
      </main>
    </>
  );
}
