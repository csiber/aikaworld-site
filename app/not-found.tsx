export const runtime = 'edge';
export const dynamic = 'force-static';

import NotFoundContent from '../components/NotFoundContent';
import { serverEnv } from '../lib/server-config';

export default function NotFound() {
  return <NotFoundContent discordUrl={serverEnv.discordUrl} />;
}
