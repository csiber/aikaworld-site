const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="14" x2="50" y1="6" y2="58" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3a6cf4" offset="0" />
      <stop stop-color="#1e3ea5" offset="1" />
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="#060b1a" />
  <rect x="10" y="10" width="44" height="44" rx="12" fill="none" stroke="url(#g)" stroke-width="4" opacity="0.85" />
  <text x="32" y="40" text-anchor="middle" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="28" font-weight="700" fill="#f7f9ff" letter-spacing="-1.6">AW</text>
</svg>`;

export const runtime = 'edge';

export function GET() {
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
