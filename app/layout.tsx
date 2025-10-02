export const runtime = 'edge';
import './globals.css';
import type { Metadata } from 'next';
import { resolveRequestLocale } from '../lib/i18n/server-locale';

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png' }]
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
