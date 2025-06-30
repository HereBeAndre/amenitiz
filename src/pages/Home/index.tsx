import { useEffect, useState } from "react";

import { useFetchPlayers } from "../../hooks/useFetchPlayers";
import { HomeHeader } from "./partials/HomeHeader";
import { HomeContent } from "./partials/HomeContent";

import type { TPlayers } from "../../types";

import "./index.css";

export const Home = () => {
  // In a production application, filtering should be performed on the server side (unless e.g. the dataset is small || filtering criteria is trivial).
  const { players, loading, error } = useFetchPlayers();
  // Not ideal to have two sources of truth, but this is a POC.
  const [filteredPlayers, setFilteredPlayers] = useState<TPlayers>(players);

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
      <HomeHeader onInputChange={onInputChange} />
      <HomeContent players={filteredPlayers} loading={loading} error={error} />
    </div>
  );
};
