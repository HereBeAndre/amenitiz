import type { PlayerProfileData } from '../../../../types';
import { isError } from '../../../../utils/functions';

interface PlayerStreamingPlatformsProps {
  player: PlayerProfileData;
}

export const PlayerStreamingPlatforms = ({
  player,
}: PlayerStreamingPlatformsProps) => {
  if (isError(player)) return;

  const platforms = player.streaming_platforms;

  if (!platforms || platforms.length === 0) return 'None';

  return platforms.map((platform, index) => (
    <span key={index}>
      <a href={platform.channel_url} target="_blank" rel="noopener noreferrer">
        {platform.type}
      </a>
      {index < platforms.length - 1 ? ', ' : ''}
    </span>
  ));
};
