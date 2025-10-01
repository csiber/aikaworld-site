const optionalEnv = ['STEAM_URL', 'DISCORD_URL'] as const;

function readOptionalEnv(name: (typeof optionalEnv)[number]) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : null;
}

function ensureProtocol(url: string) {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }
  return `https://${url}`;
}

function resolveSiteUrl() {
  const candidates = [
    process.env.SITE_URL,
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_URL,
    process.env.DEPLOY_PRIME_URL,
    process.env.DEPLOY_URL,
    process.env.URL
  ];

  for (const candidate of candidates) {
    if (candidate && candidate.trim().length > 0) {
      return ensureProtocol(candidate.trim());
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    return 'http://localhost:3000';
  }

  console.warn('[server-config] Missing SITE_URL environment variable. Falling back to https://aikaworld.com');
  return 'https://aikaworld.com';
}

export const serverEnv = {
  steamUrl: readOptionalEnv('STEAM_URL'),
  discordUrl: readOptionalEnv('DISCORD_URL'),
  siteUrl: resolveSiteUrl()
} as const;

export type ServerEnv = typeof serverEnv;
