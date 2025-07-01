import { useQuery } from '@tanstack/react-query';

import type { PlayersData } from '../types';

const PLAYERS_URL = 'https://api.chess.com/pub/titled/GM';

export const useFetchPlayers = () => {
  const { isPending, error, data } = useQuery<PlayersData>({
    queryKey: ['players'],
    queryFn: async () => {
      const response = await fetch(PLAYERS_URL);
      return response.json();
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return { isPending, error, data };
};
