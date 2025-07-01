import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import type { PlayerProfileData } from '../types';

const PLAYER_PROFILE_URL = 'https://api.chess.com/pub/player';

export const useFetchPlayer = () => {
  const { username } = useParams<{ username: string }>();

  const { isPending, error, data } = useQuery<PlayerProfileData>({
    queryKey: ['playerProfile', username],
    queryFn: async () => {
      const response = await fetch(`${PLAYER_PROFILE_URL}/${username}`);
      return await response.json();
    },
    enabled: !!username,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  return { isPending, error, data };
};
