const requiredEnv = ['STEAM_URL', 'DISCORD_URL', 'SITE_URL'] as const;

function readEnv(name: (typeof requiredEnv)[number]) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const serverEnv = {
  steamUrl: readEnv('STEAM_URL'),
  discordUrl: readEnv('DISCORD_URL'),
  siteUrl: readEnv('SITE_URL')
} as const;

export type ServerEnv = typeof serverEnv;
