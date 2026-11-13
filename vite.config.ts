/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    cssMinify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three'
            if (id.includes('react-icons')) return 'icons'
            if (id.includes('react')) return 'react-vendor'
          }
        },
      },
    },
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'three'],
  },
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/test/**',
        'src/index.tsx',
        'src/**/*.css',
        'src/assets/**',
        'src/i18n/**',
        'src/data/**',
        // WebGL: non eseguibile in jsdom
        'src/components/ParticleField/**',
        'src/components/index.ts',
      ],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
})
