import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Economy from '../economy';

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

describe('Economy component', () => {
  let originalIntersectionObserver: typeof IntersectionObserver;
  let mockIntersectionObserver: MockIntersectionObserver;

  beforeEach(() => {
    originalIntersectionObserver = window.IntersectionObserver;

    window.IntersectionObserver = vi.fn().mockImplementation((callback) => {
      mockIntersectionObserver = new MockIntersectionObserver(callback);
      return mockIntersectionObserver;
    });
  });

  afterEach(() => {
    window.IntersectionObserver = originalIntersectionObserver;
    vi.restoreAllMocks();
  });

  it('renders without crashing', () => {
    render(<Economy />);
    expect(screen.getByText('Economie')).toBeInTheDocument();
  });

  it('renders the correct headings and paragraphs', () => {
    render(<Economy />);
    expect(screen.getByRole('heading', { name: 'Economie' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Situation économique' })).toBeInTheDocument();
    expect(screen.getByText(/Les activités économiques exercées dans la ville de/)).toBeInTheDocument();
    expect(screen.getByText(/L'artisanat et le commerce constituent la base de/)).toBeInTheDocument();
  });

  it('renders the image with correct alt text', () => {
    render(<Economy />);
    expect(screen.getByRole('img', { name: 'Fresque mural' })).toBeInTheDocument();
  });

  it('sets up IntersectionObserver correctly', () => {
    render(<Economy />);
    expect(window.IntersectionObserver).toHaveBeenCalledTimes(1);
    expect(window.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.1 }
    );
  });

  it('observes all scroll elements', () => {
    const { container } = render(<Economy />);
    const animatedElements = container.querySelectorAll('.animate-scroll, .animate-scale-in');

    expect(mockIntersectionObserver.elements.size).toBe(animatedElements.length);
  });

  it('adds visible class to elements when they intersect', () => {
    const { container } = render(<Economy />);

    mockIntersectionObserver.triggerIntersection(true);

    const animatedElements = container.querySelectorAll('.animate-scroll, .animate-scale-in');
    animatedElements.forEach(element => {
      expect(element).toHaveClass('visible');
    });
  });

  it.skip('cleans up observer when component unmounts', () => {
  });
});