import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { HomeHeader } from './index';

describe('HomeHeader', () => {
  it('renders the title and input', () => {
    render(<HomeHeader onInputChange={() => {}} />);
    expect(screen.getByText('Chess Grandmasters')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Search player by username'),
    ).toBeInTheDocument();
  });

  it('calls onInputChange when input changes', () => {
    const handleChange = vi.fn();
    render(<HomeHeader onInputChange={handleChange} />);
    const input = screen.getByPlaceholderText('Search player by username');
    fireEvent.change(input, { target: { value: 'Magnus' } });
    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue('Magnus');
  });
});
