import { PlayerList } from '../../../../shared/PlayerList';
import type { TPlayers } from '../../../../types';

import styles from './index.module.scss';

interface HomeContentProps {
  players: TPlayers;
  loading: boolean;
  error: Error | null;
}

export const HomeContent = ({ players, loading, error }: HomeContentProps) => (
  <div className={styles.homeContent}>
    <PlayerList players={players} isLoading={loading} error={error} />
  </div>
);
