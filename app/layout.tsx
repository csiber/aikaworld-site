export const runtime = 'edge';
import './globals.css';
import type { Metadata } from 'next';
import Starfield from '../components/backgrounds/Starfield';
import SmoothScrollProvider from '../components/providers/SmoothScrollProvider';
import Footer from '../components/site/Footer';
import { resolveRequestLocale } from '../lib/i18n/server-locale';
import { serverEnv } from '../lib/server-config';
import { getDictionary } from '../lib/i18n/dictionaries';
import { baseMetadata } from '../lib/seo';

export const metadata: Metadata = {
  ...baseMetadata,
  icons: {
    icon: [
      { url: '/favicon.svg' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png' }]
  },
  manifest: '/site.webmanifest'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {serverEnv.cfAnalyticsToken && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: serverEnv.cfAnalyticsToken })}
          />
        )}
      </head>
      <body className="min-h-dvh bg-[#05060a] font-sans antialiased text-white">
        <SmoothScrollProvider />
        <Starfield />
        {children}
        <Footer locale={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}
