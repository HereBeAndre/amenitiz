import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { PlayerProfile } from './index';

const mockData = {
  avatar: 'avatar.png',
  player_id: 1,
  '@id': '/player/1',
  url: 'https://chess.com/player/1',
  name: 'Magnus Carlsen',
  username: 'MagnusCarlsen',
  followers: 123456,
  country: 'Norway',
  last_online: 1719900000,
  joined: 1500000000,
  status: 'online',
  is_streamer: true,
  verified: true,
  league: 'Grandmaster',
  streaming_platforms: [
    { type: 'Twitch', channel_url: 'https://twitch.tv/magnus' },
    { type: 'YouTube', channel_url: 'https://youtube.com/magnus' },
  ],
};

describe('PlayerProfile', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders player profile with all details', () => {
    vi.mock('../../hooks/useFetchPlayer', () => ({
      useFetchPlayer: () => ({ isPending: false, data: mockData, error: null }),
    }));
    render(
      <MemoryRouter>
        <PlayerProfile />
      </MemoryRouter>,
    );
    expect(screen.getByText('Magnus Carlsen')).toBeInTheDocument();
    expect(screen.getByText('@MagnusCarlsen')).toBeInTheDocument();
    expect(screen.getByText('online')).toBeInTheDocument();
    expect(screen.getByText('✅')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('Grandmaster')).toBeInTheDocument();
    expect(screen.getByText('123,456')).toBeInTheDocument();
    expect(screen.getByText('Twitch')).toBeInTheDocument();
    expect(screen.getByText('YouTube')).toBeInTheDocument();
    expect(
      screen.getByText('← Back to Chess Grandmasters'),
    ).toBeInTheDocument();
  });
});
