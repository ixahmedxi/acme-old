import react from '@vitejs/plugin-react';
import { mergeConfig as _mergeConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { UserConfigExport, defineConfig } from 'vitest/config';

export const mergeConfig = (
  base: UserConfigExport,
  config: UserConfigExport,
): UserConfigExport => {
  return _mergeConfig(base, config);
};

export const baseConfig = defineConfig({
  mode: 'test',
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});

export const reactConfig = mergeConfig(baseConfig, {
  plugins: [react()],
  test: {
    environment: 'happy-dom',
  },
});
