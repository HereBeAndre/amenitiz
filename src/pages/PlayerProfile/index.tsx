import { Navigate } from 'react-router-dom';

import { useFetchPlayer } from '../../hooks/useFetchPlayer';
import { LinkComponent } from '../../shared/LinkComponent';
import { ProfileAvatar } from '../../shared/ProfileAvatar';
import { TimeSinceLastOnline } from '../../shared/TimeSinceLastOnline';
import type { PlayerProfileData } from '../../types';

import styles from './index.module.scss';

const isError = (
  data: PlayerProfileData | undefined,
): data is { code: number; message: string } =>
  data !== undefined && 'code' in data && 'message' in data;

const renderStreamingPlatforms = (player: PlayerProfileData) => {
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

export const PlayerProfile = () => {
  const { data, isPending, error } = useFetchPlayer();

  // TODO: Could be extracted to a ad-hoc loading component shared across the app
  if (isPending)
    return <div className={styles.loadingContainer}>Loading...</div>;

  // TODO: In a production application, you would handle this more gracefully, perhaps with a toast or a custom error page.
  if (error || isError(data) || !data) {
    return <Navigate to="/" replace />;
  }

  // TODO: Should be split into smaller components
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <h1>{data.name || data.username}</h1>
        <ProfileAvatar avatar={data.avatar} />
        <p className={styles.username}>@{data.username}</p>

        <ul className={styles.profileDetails}>
          <li>
            <TimeSinceLastOnline lastOnline={data.last_online} />
          </li>
          <li>
            <strong>Status:</strong> {data.status}
          </li>
          <li>
            <strong>Verified:</strong> {data.verified ? '✅' : '❌'}
          </li>
          <li>
            <strong>Streamer:</strong> {data.is_streamer ? 'Yes' : 'No'}
          </li>
          <li>
            <strong>League:</strong> {data.league}
          </li>
          <li>
            <strong>Followers:</strong> {data.followers.toLocaleString()}
          </li>
          <li>
            <strong>Joined:</strong>{' '}
            {new Date(data.joined * 1000).toLocaleDateString()}
          </li>
          <li>
            <strong>Streaming Platforms:</strong>{' '}
            {renderStreamingPlatforms(data)}
          </li>
        </ul>

        <LinkComponent to={`/`}>← Back to Chess Grandmasters</LinkComponent>
      </div>
    </div>
  );
};
