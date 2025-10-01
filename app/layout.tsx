export const runtime = 'edge';
import './globals.css';
import type { Metadata } from 'next';
import { resolveRequestLocale } from '../lib/i18n/server-locale';

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await resolveRequestLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "ENV_CF_ANALYTICS_TOKEN"}'
        />
      </head>
      <body className="min-h-dvh antialiased bg-[#05060a] text-white">
        {children}
      </body>
    </html>
  );
}
