import { useFetchPlayer } from "../../hooks/useFetchPlayer";
import { LinkComponent } from "../../shared/LinkComponent";

import "./index.css";

export const PlayerProfile = () => {
  const { profile, loading, error, sinceLastOnline } = useFetchPlayer();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  if (!profile) return <p>Player profile not found.</p>;

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
      <LinkComponent to={`/`}>Back to Chess Grandmasters</LinkComponent>
    </div>
  );
};
