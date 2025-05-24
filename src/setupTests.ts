import '@testing-library/jest-dom';
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// This file is used to configure the testing environment
// It's imported by Vitest before running tests
// See vitest.config.ts for the configuration
