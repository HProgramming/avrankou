import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import useIntersectionObserver from '../useIntersectionObserver';

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

describe('useIntersectionObserver hook', () => {
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

  it('creates an IntersectionObserver with the correct threshold', () => {
    const refs = { current: [] };
    renderHook(() => useIntersectionObserver(refs));

    expect(window.IntersectionObserver).toHaveBeenCalledTimes(1);
    expect(window.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.1 }
    );
  });

  it('observes all elements in the refs array', () => {
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    const refs = { current: [element1, element2] };

    renderHook(() => useIntersectionObserver(refs));

    expect(mockIntersectionObserver.elements.size).toBe(2);
    expect(mockIntersectionObserver.elements.has(element1)).toBe(true);
    expect(mockIntersectionObserver.elements.has(element2)).toBe(true);
  });

  it('adds visible class to elements when they intersect', () => {
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    const refs = { current: [element1, element2] };

    renderHook(() => useIntersectionObserver(refs));

    mockIntersectionObserver.triggerIntersection(true);

    expect(element1.classList.contains('visible')).toBe(true);
    expect(element2.classList.contains('visible')).toBe(true);
  });

  it('allows custom threshold to be passed', () => {
    const refs = { current: [] };
    const customThreshold = 0.5;

    renderHook(() => useIntersectionObserver(refs, customThreshold));

    expect(window.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: customThreshold }
    );
  });

  it('cleans up by unobserving elements when unmounted', () => {
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    const refs = { current: [element1, element2] };

    const { unmount } = renderHook(() => useIntersectionObserver(refs));

    const unobserveSpy = vi.spyOn(mockIntersectionObserver, 'unobserve');

    unmount();

    expect(unobserveSpy).toHaveBeenCalledTimes(2);
    expect(unobserveSpy).toHaveBeenCalledWith(element1);
    expect(unobserveSpy).toHaveBeenCalledWith(element2);
  });
});