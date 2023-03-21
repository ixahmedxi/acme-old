import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: false,
  splitting: true,
  clean: !opts.watch,
  sourcemap: true,
  minify: !opts.watch,
  treeshake: true,
  platform: 'node',
  outDir: 'dist',
}));
