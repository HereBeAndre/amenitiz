import { useFetchPlayer } from "../../hooks/useFetchPlayer";
import { LinkComponent } from "../../shared/LinkComponent";
import { ProfileAvatar } from "../../shared/ProfileAvatar";
import { TimeSinceLastOnline } from "../../shared/TimeSinceLastOnline";

export const PlayerProfile = () => {
  const { profile, loading, error } = useFetchPlayer();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  if (!profile) return <p>Player profile not found.</p>;

  return (
    <div>
      <h1>{profile.name || profile.username}</h1>
      <ProfileAvatar avatar={profile.avatar} />
      <p>
        <strong>Username:</strong> {profile.username}
      </p>
      <p>
        <strong>Status:</strong> {profile.status}
      </p>
      <TimeSinceLastOnline lastOnline={profile.last_online} />
      <LinkComponent to={`/`}>Back to Chess Grandmasters</LinkComponent>
    </div>
  );
};
