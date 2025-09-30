import { createIconResponse } from '../brand-icon';

export const runtime = 'edge';

export function GET() {
  return createIconResponse(512);
}
