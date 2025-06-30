import { useEffect, useState } from "react";
import type { PlayersData } from "../types";

const PLAYERS_URL = "https://api.chess.com/pub/titled/GM";

export const useFetchPlayers = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(PLAYERS_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: PlayersData = await response.json();
        setPlayers(data.players);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "An error occurred while fetching players"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  return { players, loading, error };
};
