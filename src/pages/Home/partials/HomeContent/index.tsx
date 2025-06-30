import { PlayerList } from "../../../../shared/PlayerList";
import type { TPlayers } from "../../../../types";

interface HomeContentProps {
  players: TPlayers;
  loading: boolean;
  error: string | null;
}

export const HomeContent = ({ players, loading, error }: HomeContentProps) => {
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return <PlayerList players={players}></PlayerList>;
};
