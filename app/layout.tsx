import './globals.css';
import type { Metadata } from 'next';

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
        <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-black/20 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-wide">AIKA WORLD</a>
            <nav className="flex gap-4 text-sm">
              <a href="#modes" className="hover:opacity-80">Játékmódok</a>
              <a href="/characters" className="hover:opacity-80">Karakterek</a>
              <a href="#media" className="hover:opacity-80">Média</a>
              <a href="#roadmap" className="hover:opacity-80">Roadmap</a>
              <a href="#community" className="hover:opacity-80">Közösség</a>
            </nav>
            <div className="hidden sm:flex gap-2">
              <a className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-sm" href="https://discord.gg/">
                Join Discord
              </a>
              <a className="px-3 py-1.5 rounded-md bg-accentA hover:opacity-90 text-sm" href="https://store.steampowered.com/">
                Wishlist on Steam
              </a>
            </div>
          </div>
        </header>
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
