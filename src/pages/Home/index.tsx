import { Link } from "react-router-dom";
import { useFetchPlayers } from "../../hooks/useFetchPlayers";

import "./index.css";

export const Home = () => {
  const players = useFetchPlayers();

  return (
    <div className="container">
      <h1>Chess Grandmasters</h1>
      <ul className="player-list">
        {players.map((username) => (
          <li key={username}>
            <Link to={`/player/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
