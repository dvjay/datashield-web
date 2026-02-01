import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    button: 'src/components/Button/index.ts',
    card: 'src/components/Card/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  // Inject CSS into JS bundles
  injectStyle: true,
  // OR use CSS extraction (recommended for libraries)
  // injectStyle: false,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"', // For Next.js 13+ app directory
    };
  },
});