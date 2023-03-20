import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  clean: !opts.watch,
  sourcemap: true,
  minify: !opts.watch,
  treeshake: true,
  platform: 'node',
  outDir: 'dist',
}));
