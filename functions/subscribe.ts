const EMAIL_MAX_LENGTH = 254;
const EMAIL_REGEX = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

type PagesFunction<Env = unknown> = (context: {
  request: Request;
  env: Env;
}) => Promise<Response> | Response;

interface NewsletterKV {
  put(key: string, value: string): Promise<void>;
}

interface Env {
  AW_NEWSLETTER: NewsletterKV;
}

type SubscribePayload = {
  email?: unknown;
};

type SubscribeErrorCode = 'INVALID_JSON' | 'INVALID_EMAIL' | 'STORAGE_ERROR';
type SubscribeSuccessCode = 'SUCCESS';

type SubscribeResponseBody =
  | { error: { code: SubscribeErrorCode } }
  | { success: { code: SubscribeSuccessCode } };

function jsonResponse(body: SubscribeResponseBody, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

async function hashIp(ip: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(ip);
  const digest = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(digest));
  return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== 'string') {
    return null;
  }

  const email = raw.trim();

  if (!email || email.length > EMAIL_MAX_LENGTH) {
    return null;
  }

  if (!EMAIL_REGEX.test(email)) {
    return null;
  }

  return email.toLowerCase();
}

export const onRequestPost: PagesFunction<Env> = async context => {
  const { request, env } = context;

  let payload: SubscribePayload;

  try {
    payload = (await request.json()) as SubscribePayload;
  } catch (error) {
    return jsonResponse({ error: { code: 'INVALID_JSON' } }, 400);
  }

  const email = normalizeEmail(payload.email);

  if (!email) {
    return jsonResponse({ error: { code: 'INVALID_EMAIL' } }, 400);
  }

  const ip =
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    '0.0.0.0';

  try {
    const timestamp = new Date().toISOString();
    const ipHash = await hashIp(ip);
    const value = JSON.stringify({ timestamp, ipHash });

    await env.AW_NEWSLETTER.put(email, value);
  } catch (error) {
    console.error('Newsletter KV error:', error);
    return jsonResponse({ error: { code: 'STORAGE_ERROR' } }, 500);
  }

  // TODO: Introduce double opt-in flow.
  return jsonResponse({ success: { code: 'SUCCESS' } }, 200);
};
