import { useFetchPlayers } from "../../hooks/useFetchPlayers";
import { LinkComponent } from "../../shared/LinkComponent";

import "./index.css";

export const Home = () => {
  const { players, loading, error } = useFetchPlayers();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-container">
      <h1>Chess Grandmasters</h1>
      <ul className="player-list">
        {players.map((username) => (
          <li key={username}>
            <LinkComponent to={`/player/${username}`}>{username}</LinkComponent>
          </li>
        ))}
      </ul>
    </div>
  );
};
