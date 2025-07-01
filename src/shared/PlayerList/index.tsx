import { LinkComponent } from "../LinkComponent";

import type { TPlayers } from "../../types";

import styles from "./index.module.scss";

interface PlayerListProps {
  players: TPlayers;
  isLoading: boolean;
  error: Error | null;
}

export const PlayerList = ({ players, isLoading, error }: PlayerListProps) => {
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className={styles.playerList}>
      {players?.map((username) => (
        <li key={username} className={styles.playerListItem}>
          <LinkComponent to={`/player/${username}`}>{username}</LinkComponent>
        </li>
      ))}
    </ul>
  );
};
