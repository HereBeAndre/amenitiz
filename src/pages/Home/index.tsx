import { useEffect, useState } from "react";

import { useFetchPlayers } from "../../hooks/useFetchPlayers";
import { HomeHeader } from "./partials";
import { HomeContent } from "./partials";

import type { TPlayers } from "../../types";

import styles from "./index.module.scss";

export const Home = () => {
  // In a production application, filtering should be performed on the server side (unless e.g. the dataset is small || filtering criteria is trivial).
  const { data, isPending, error } = useFetchPlayers();
  // Not ideal to have two sources of truth, but this is a POC.
  const [filteredPlayers, setFilteredPlayers] = useState<TPlayers | undefined>(
    data?.players
  );

  useEffect(() => {
    setFilteredPlayers(data?.players);
  }, [data]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const query = e.target.value;
    setFilteredPlayers(
      data?.players.filter((username) =>
        username.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className={styles.homeContainer}>
      <HomeHeader onInputChange={onInputChange} />
      <HomeContent
        players={filteredPlayers || []}
        loading={isPending}
        error={error}
      />
    </div>
  );
};
