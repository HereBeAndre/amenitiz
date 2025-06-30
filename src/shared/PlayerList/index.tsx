import { LinkComponent } from "../LinkComponent";

import type { TPlayers } from "../../types";

import "./index.css";

interface PlayerListProps {
  players: TPlayers;
}

export const PlayerList = ({ players }: PlayerListProps) => (
  <ul className="player-list">
    {players.map((username) => (
      <li key={username} className="player-list-item">
        <LinkComponent to={`/player/${username}`}>{username}</LinkComponent>
      </li>
    ))}
  </ul>
);
