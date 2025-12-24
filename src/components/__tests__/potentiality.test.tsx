import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Potentiality from '../potentiality';

class MockIntersectionObserver implements IntersectionObserver {
  callback: IntersectionObserverCallback;
  elements: Set<Element>;
  root: Document | Element | null = null;
  rootMargin: string = '0px';
  thresholds: ReadonlyArray<number> = [0];

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    this.elements = new Set();
  }

  observe(element: Element) {
    this.elements.add(element);
  }

  unobserve(element: Element) {
    this.elements.delete(element);
  }

  disconnect() {
    this.elements.clear();
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  triggerIntersection(isIntersecting: boolean) {
    const entries = Array.from(this.elements).map(element => ({
      isIntersecting,
      target: element,
      boundingClientRect: {} as DOMRectReadOnly,
      intersectionRatio: isIntersecting ? 1 : 0,
      intersectionRect: {} as DOMRectReadOnly,
      rootBounds: null,
      time: Date.now()
    }));

    this.callback(entries, this);
  }
}

describe('Potentiality component', () => {
  let originalIntersectionObserver: typeof IntersectionObserver;
  let mockIntersectionObservers: MockIntersectionObserver[] = [];

  beforeEach(() => {
    originalIntersectionObserver = window.IntersectionObserver;
    mockIntersectionObservers = [];

    window.IntersectionObserver = vi.fn().mockImplementation((callback) => {
      const mockObserver = new MockIntersectionObserver(callback);
      mockIntersectionObservers.push(mockObserver);
      return mockObserver;
    });
  });

  afterEach(() => {
    window.IntersectionObserver = originalIntersectionObserver;
    vi.restoreAllMocks();
  });

  it('renders without crashing', () => {
    render(<Potentiality />);
    expect(screen.getByText('Potentialité')).toBeInTheDocument();
  });

  it('renders the correct initial tab content', () => {
    render(<Potentiality />);

    expect(screen.getByRole('heading', { name: 'Potentialité' })).toBeInTheDocument();

    expect(screen.getByText('Forces')).toBeInTheDocument();
    expect(screen.getByText('Opportunités')).toBeInTheDocument();

    expect(screen.getByText('Forces').closest('div')).toHaveClass('bg-[#004B70]');
    expect(screen.getByText('Existence du marché international Dantokpa, des marchés secondaires et des supérettes, boutiques et magasins de stockage.')).toBeInTheDocument();
    expect(screen.getByText('Forte demande des produits et services.')).toBeInTheDocument();
  });

  it('switches tabs when clicking on a different tab', () => {
    render(<Potentiality />);

    expect(screen.getByText('Forces').closest('div')).toHaveClass('bg-[#004B70]');

    fireEvent.click(screen.getByText('Opportunités'));

    expect(screen.getByText('Opportunités').closest('div')).toHaveClass('bg-[#004B70]');
    expect(screen.getByText('Forces').closest('div')).not.toHaveClass('bg-[#004B70]');

    expect(screen.getByText('La mise en oeuvre du PAG.')).toBeInTheDocument();
    expect(screen.getByText('Disponibilité d\'espace pouvant abriter les marchés secondaires.')).toBeInTheDocument();

    expect(screen.queryByText('Existence du marché international Dantokpa, des marchés secondaires et des supérettes, boutiques et magasins de stockage.')).not.toBeInTheDocument();
  });

  it('sets up IntersectionObserver correctly', () => {
    render(<Potentiality />);
    expect(window.IntersectionObserver).toHaveBeenCalledTimes(2);
    expect(window.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.1 }
    );
  });

  it('observes all scroll elements', () => {
    const { container } = render(<Potentiality />);
    const animatedElements = container.querySelectorAll('.animate-scroll, .animate-scale-in');

    const totalObservedElements = mockIntersectionObservers.reduce(
      (total, observer) => total + observer.elements.size,
      0
    );
    expect(totalObservedElements).toBeGreaterThan(0);
    expect(totalObservedElements).toBe(animatedElements.length);
  });

  it('adds visible class to elements when they intersect', () => {
    const { container } = render(<Potentiality />);

    mockIntersectionObservers.forEach(observer => {
      observer.triggerIntersection(true);
    });

    const animatedElements = container.querySelectorAll('.animate-scroll, .animate-scale-in');
    animatedElements.forEach(element => {
      expect(element).toHaveClass('visible');
    });
  });

  it('handles tab switching correctly', () => {
    render(<Potentiality />);

    expect(screen.getByText('Forces').closest('div')).toHaveClass('bg-[#004B70]');
    expect(screen.getByText('Existence du marché international Dantokpa, des marchés secondaires et des supérettes, boutiques et magasins de stockage.')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Opportunités'));

    expect(screen.getByText('Opportunités').closest('div')).toHaveClass('bg-[#004B70]');
    expect(screen.getByText('La mise en oeuvre du PAG.')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Forces'));

    expect(screen.getByText('Forces').closest('div')).toHaveClass('bg-[#004B70]');
    expect(screen.getByText('Existence du marché international Dantokpa, des marchés secondaires et des supérettes, boutiques et magasins de stockage.')).toBeInTheDocument();
  });

  it.skip('cleans up observer when component unmounts', () => {
  });
});