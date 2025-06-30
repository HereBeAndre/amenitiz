import { useEffect, useState } from "react";
import type { PlayersData } from "../types";

const PLAYERS_URL = "https://api.chess.com/pub/titled/GM";

export const useFetchPlayers = () => {
  const [players, setPlayers] = useState<string[]>([]);

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
        console.error("Failed to fetch players:", error);
      }
    };

    fetchPlayers();
  }, []);

  return players;
};
