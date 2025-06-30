import { useFetchPlayer } from "../../hooks/useFetchPlayer";

import "./index.css";

export const PlayerProfile = () => {
  const { profile, loading, error, sinceLastOnline } = useFetchPlayer();

  if (loading) return <p>Loading...</p>;

  if (!profile) return <p>Player not found</p>;

  return (
    <div className="container">
      <h1>{profile.name || profile.username}</h1>
      {profile.avatar && (
        <img src={profile.avatar} alt="avatar" className="avatar" />
      )}
      <p>
        <strong>Username:</strong> {profile.username}
      </p>
      <p>
        <strong>Status:</strong> {profile.status}
      </p>
      <p>
        <strong>Time since last online:</strong> {sinceLastOnline}
      </p>
    </div>
  );
};
