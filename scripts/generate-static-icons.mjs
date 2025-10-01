import { writeFile } from 'node:fs/promises';
import { createElement } from 'react';
import { ImageResponse } from 'next/og';

const BACKGROUND = '#060b1a';
const FOREGROUND = '#f7f9ff';
const ACCENT = '#3a6cf4';

function createIconResponse(size) {
  return new ImageResponse(
    createElement(
      'div',
      {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: BACKGROUND,
          color: FOREGROUND,
          fontWeight: 700,
          fontSize: size * 0.48,
          letterSpacing: -size * 0.05,
          position: 'relative'
        }
      },
      createElement('div', {
        style: {
          position: 'absolute',
          inset: size * 0.12,
          borderRadius: size * 0.28,
          border: `${Math.max(2, Math.round(size * 0.04))}px solid ${ACCENT}`,
          opacity: 0.85
        }
      }),
      createElement('span', { style: { position: 'relative' } }, 'AW')
    ),
    {
      width: size,
      height: size
    }
  );
}

async function generatePng(size, fileName) {
  const response = createIconResponse(size);
  const arrayBuffer = await response.arrayBuffer();
  await writeFile(`public/${fileName}`, Buffer.from(arrayBuffer));
}

async function generateFaviconSvg() {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n  <defs>\n    <linearGradient id="g" x1="14" x2="50" y1="6" y2="58" gradientUnits="userSpaceOnUse">\n      <stop stop-color="#3a6cf4" offset="0" />\n      <stop stop-color="#1e3ea5" offset="1" />\n    </linearGradient>\n  </defs>\n  <rect width="64" height="64" rx="16" fill="#060b1a" />\n  <rect x="10" y="10" width="44" height="44" rx="12" fill="none" stroke="url(#g)" stroke-width="4" opacity="0.85" />\n  <text x="32" y="40" text-anchor="middle" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="28" font-weight="700" fill="#f7f9ff" letter-spacing="-1.6">AW</text>\n</svg>\n`;
  await writeFile('public/favicon.svg', svg, 'utf8');
}

async function main() {
  await Promise.all([
    generatePng(192, 'android-chrome-192x192.png'),
    generatePng(512, 'android-chrome-512x512.png'),
    generatePng(180, 'apple-touch-icon.png')
  ]);
  await generateFaviconSvg();
}

main().catch(error => {
  console.error('Failed to generate static icons:', error);
  process.exitCode = 1;
});
