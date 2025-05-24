import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../hero';

// Mock the ChevronRightIcon component
vi.mock('../icons', () => ({
  ChevronRightIcon: () => <div data-testid="chevron-right-icon" />
}));

describe('Hero component', () => {
  it('renders without crashing', () => {
    render(<Hero />);
    expect(screen.getByText('Avrankou')).toBeInTheDocument();
  });

  it('renders the correct heading and paragraph', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { name: 'Avrankou' })).toBeInTheDocument();
    expect(screen.getByText(/Tout savoir sur la ville d'Avrankou/)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Hero />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText("La ville - Mairie d'Avrankou")).toBeInTheDocument();
  });

  it('renders the ChevronRightIcon', () => {
    render(<Hero />);
    expect(screen.getByTestId('chevron-right-icon')).toBeInTheDocument();
  });

  it('has the correct background image and styling', () => {
    const { container } = render(<Hero />);
    const heroDiv = container.firstChild;
    expect(heroDiv).toHaveClass("bg-[url('./assets/hero.jpg')]");
    expect(heroDiv).toHaveClass("h-[469px]");
    expect(heroDiv).toHaveClass("bg-cover");
    expect(heroDiv).toHaveClass("bg-center");
    expect(heroDiv).toHaveClass("text-white");
  });
});
