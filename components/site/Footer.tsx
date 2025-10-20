import Link from 'next/link';
import type { Locale } from '../../lib/i18n/config';
import type { Dictionary } from '../../lib/i18n/types';
import { buildInfo } from '../../lib/generated/build-info';

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Footer({ locale, dictionary }: FooterProps) {
  const basePath = locale === 'en' ? '/en' : '';
  const studioHref = `${basePath}/studio`.replace('//', '/');
  const aboutHref = `${basePath}/about`.replace('//', '/');
  const studioLabel = dictionary.header.nav.studio.label;
  const aboutLabel = dictionary.header.nav.about.label;

  return (
    <footer className="mt-16 border-t border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 text-sm text-muted-foreground md:grid-cols-2 md:items-center">
          <div className="space-y-2">
            <p>{dictionary.footer.syncNode.rights}</p>
            <p>{dictionary.footer.syncNode.aikaBy}</p>
            <p className="text-xs text-muted-foreground/80">
              {dictionary.footer.lastBuildLabel}: {buildInfo.date}
            </p>
          </div>
          <div className="flex items-center gap-4 md:justify-end">
            <Link href={studioHref} className="font-medium text-foreground transition hover:text-foreground/80">
              {studioLabel}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href={aboutHref} className="font-medium text-foreground transition hover:text-foreground/80">
              {aboutLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
