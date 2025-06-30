import { LinkComponent } from "../LinkComponent";

import "./index.css";

interface PlayerListProps {
  players: string[];
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
