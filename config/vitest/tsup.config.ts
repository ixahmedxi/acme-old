import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  splitting: true,
  sourcemap: true,
  dts: true,
  clean: true,
  minify: true,
});
