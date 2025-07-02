import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { HomeContent } from './index';

const mockPlayers = ['GarryKasparov', 'Hikaru'];

describe('HomeContent', () => {
  it('renders PlayerList with players', () => {
    render(
      <MemoryRouter>
        <HomeContent players={mockPlayers} loading={false} error={null} />
      </MemoryRouter>,
    );
    expect(screen.getByText('GarryKasparov')).toBeInTheDocument();
    expect(screen.getByText('Hikaru')).toBeInTheDocument();
  });

  it('renders loading state', () => {
    render(<HomeContent players={[]} loading={true} error={null} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    render(
      <HomeContent players={[]} loading={false} error={new Error('Failed')} />,
    );
    expect(screen.getByText(/failed/i)).toBeInTheDocument();
  });
});
