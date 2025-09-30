import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import { serverEnv } from '../lib/server-config';

export const metadata: Metadata = {
  title: 'AIKA World – Anime co-op action RPG',
  description: 'Raid boss arénák és végtelen hullámok. 5 egyedi Rezonátor.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'AIKA World – Anime co-op action RPG',
    description: 'Raid boss arénák és végtelen hullámok. 5 egyedi Rezonátor.',
    type: 'website',
    url: serverEnv.siteUrl,
    siteName: 'AIKA World',
    locale: 'hu_HU',
    images: [
      {
        url: 'https://media.aikaworld.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'AIKA World alap megosztási kép'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIKA World – Anime co-op action RPG',
    description: 'Raid boss arénák és végtelen hullámok. 5 egyedi Rezonátor.',
    images: ['https://media.aikaworld.com/og-default.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "ENV_CF_ANALYTICS_TOKEN"}'
        />
      </head>
      <body className="min-h-dvh antialiased">
        <Header steamUrl={serverEnv.steamUrl} discordUrl={serverEnv.discordUrl} siteUrl={serverEnv.siteUrl} />
        <main className="pt-14">{children}</main>
        <footer className="mt-24 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm">
            <span className="opacity-80">© {new Date().getFullYear()} aikaworld.com • </span>
            <Link href="/privacy" className="opacity-80 hover:opacity-100">
              Adatkezelés
            </Link>
            <span className="opacity-80"> • </span>
            <Link href="/terms" className="opacity-80 hover:opacity-100">
              Felhasználási feltételek
            </Link>
            <span className="opacity-80"> • </span>
            <Link href="/presskit" className="opacity-80 hover:opacity-100">
              Presskit
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
