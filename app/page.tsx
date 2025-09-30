import HomePage from '../components/HomePage';
import { serverEnv } from '../lib/server-config';

export default function Page() {
  return <HomePage steamUrl={serverEnv.steamUrl} discordUrl={serverEnv.discordUrl} />;
}
