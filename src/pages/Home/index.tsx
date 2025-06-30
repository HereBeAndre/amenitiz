import { useEffect, useState } from "react";

import { useFetchPlayers } from "../../hooks/useFetchPlayers";
import { TextInput } from "../../shared/TextInput";
import { PlayerList } from "../../shared/PlayerList";

import "./index.css";

const render = ({
  loading,
  error,
  players,
}: {
  loading: boolean;
  error: string | null;
  players: string[];
}) => {
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return <PlayerList players={players}></PlayerList>;
};

export const Home = () => {
  // In a production application, filtering should be performed on the server side (unless e.g. the dataset is small || filtering criteria is trivial).
  const { players, loading, error } = useFetchPlayers();
  // Not ideal to have two sources of truth, but this is a POC.
  const [filteredPlayers, setFilteredPlayers] = useState<string[]>(players);

  useEffect(() => {
    setFilteredPlayers(players);
  }, [players]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const query = e.target.value;
    setFilteredPlayers(
      players.filter((username) =>
        username.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="home-container">
      <h1>Chess Grandmasters</h1>
      <TextInput
        placeholder="Search player by username"
        onChange={onInputChange}
      />
      {render({
        loading,
        error,
        players: filteredPlayers,
      })}
    </div>
  );
};
