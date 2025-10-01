const requiredEnv = ['SITE_URL'] as const;
const optionalEnv = ['STEAM_URL', 'DISCORD_URL'] as const;

function readRequiredEnv(name: (typeof requiredEnv)[number]) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function readOptionalEnv(name: (typeof optionalEnv)[number]) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : null;
}

export const serverEnv = {
  steamUrl: readOptionalEnv('STEAM_URL'),
  discordUrl: readOptionalEnv('DISCORD_URL'),
  siteUrl: readRequiredEnv('SITE_URL')
} as const;

export type ServerEnv = typeof serverEnv;
