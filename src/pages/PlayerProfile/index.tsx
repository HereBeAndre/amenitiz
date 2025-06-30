import { Navigate } from "react-router-dom";
import { useFetchPlayer } from "../../hooks/useFetchPlayer";
import { LinkComponent } from "../../shared/LinkComponent";
import { ProfileAvatar } from "../../shared/ProfileAvatar";
import { TimeSinceLastOnline } from "../../shared/TimeSinceLastOnline";
import type { PlayerProfileData } from "../../types";

import "./index.css";

const renderStreamingPlatforms = (
  platforms: PlayerProfileData["streaming_platforms"]
) => {
  if (!platforms || platforms.length === 0) return "None";

  return platforms.map((platform, index) => (
    <span key={index}>
      <a href={platform.channel_url} target="_blank" rel="noopener noreferrer">
        {platform.type}
      </a>
      {index < platforms.length - 1 ? ", " : ""}
    </span>
  ));
};

export const PlayerProfile = () => {
  const { profile, loading, error } = useFetchPlayer();

  if (loading) return <p>Loading...</p>;

  if (error || !profile) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>{profile.name || profile.username}</h1>
        <ProfileAvatar avatar={profile.avatar} />
        <p className="username">@{profile.username}</p>

        <ul className="profile-details">
          <li>
            <TimeSinceLastOnline lastOnline={profile.last_online} />
          </li>
          <li>
            <strong>Status:</strong> {profile.status}
          </li>
          <li>
            <strong>Verified:</strong> {profile.verified ? "✅" : "❌"}
          </li>
          <li>
            <strong>Streamer:</strong> {profile.is_streamer ? "Yes" : "No"}
          </li>
          <li>
            <strong>League:</strong> {profile.league}
          </li>
          <li>
            <strong>Followers:</strong> {profile.followers.toLocaleString()}
          </li>
          <li>
            <strong>Joined:</strong>{" "}
            {new Date(profile.joined * 1000).toLocaleDateString()}
          </li>
          <li>
            <strong>Streaming Platforms:</strong>{" "}
            {renderStreamingPlatforms(profile.streaming_platforms)}
          </li>
        </ul>

        <LinkComponent to={`/`}>← Back to Chess Grandmasters</LinkComponent>
      </div>
    </div>
  );
};
