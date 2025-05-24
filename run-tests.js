import { defineConfig } from 'vitest/config';
import { run } from 'vitest/node';

// Run the tests
run(defineConfig({
  test: {
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    environment: 'jsdom',
    globals: true,
  },
}));