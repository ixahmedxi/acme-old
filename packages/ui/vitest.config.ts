import { mergeConfig, reactConfig } from '@acme/vitest';

export default mergeConfig(reactConfig, {
  test: {
    setupFiles: ['./vitest.setup.ts'],
  },
});
