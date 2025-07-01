import { LinkComponent } from "../LinkComponent";

import type { TPlayers } from "../../types";

import styles from "./index.module.scss";

interface PlayerListProps {
  players: TPlayers;
}

export const PlayerList = ({ players }: PlayerListProps) => (
  <ul className={styles.playerList}>
    {players.map((username) => (
      <li key={username} className={styles.playerListItem}>
        <LinkComponent to={`/player/${username}`}>{username}</LinkComponent>
      </li>
    ))}
  </ul>
);
