export type TimeFormat = `${string}:${string}:${string}`;

export interface PlayersData {
  players: string[];
}

export type TPlayers = PlayersData["players"];

export interface PlayerProfileData {
  avatar: string;
  player_id: number;
  "@id": string;
  url: string;
  name: string;
  username: string;
  followers: number;
  country: string;
  last_online: number;
  joined: number;
  status: string;
  is_streamer: boolean;
  verified: boolean;
  league: string;
  streaming_platforms: { type: string; channel_url: string }[];
}
