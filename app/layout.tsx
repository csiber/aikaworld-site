import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'AIKA World – Anime co-op action RPG',
  description: 'Raid boss arénák és végtelen hullámok. 5 egyedi Rezonátor.',
  openGraph: {
    title: 'AIKA World – Anime co-op action RPG',
    description: 'Raid boss arénák és végtelen hullámok. 5 egyedi Rezonátor.',
    type: 'website',
    url: 'https://aikaworld.com/',
    siteName: 'AIKA World',
    locale: 'hu_HU',
    images: [
      {
        url: 'https://media.aikaworld.com/og/og-default.jpg',
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
    images: ['https://media.aikaworld.com/og/og-default.jpg']
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
        <Header />
        <main className="pt-14">{children}</main>
        <footer className="mt-24 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm">
            <span className="opacity-80">
              © {new Date().getFullYear()} aikaworld.com • Privacy • Terms •
            </span>{' '}
            <a href="/presskit" className="opacity-80 hover:opacity-100">
              Presskit
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
