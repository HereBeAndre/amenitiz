import { useEffect, useState } from "react";
import type { PlayerProfileData } from "../types";
import { useParams } from "react-router-dom";
import { useLastOnline } from "./useLastOnline";

const PLAYER_PROFILE_URL = "https://api.chess.com/pub/player";

export const useFetchPlayer = () => {
  const { username } = useParams<{ username: string }>();

  const [profile, setProfile] = useState<PlayerProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setError("Username is required");
      setLoading(false);
      return;
    }

    const fetchPlayer = async () => {
      try {
        const response = await fetch(`${PLAYER_PROFILE_URL}/${username}`);
        if (!response.ok) {
          throw new Error("Player not found");
        }
        const data: PlayerProfileData = await response.json();
        setProfile(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching the player profile"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [username]);

  const sinceLastOnline = useLastOnline(profile?.last_online);

  console.log("since last online => ", sinceLastOnline);

  return { profile, loading, error, sinceLastOnline };
};
