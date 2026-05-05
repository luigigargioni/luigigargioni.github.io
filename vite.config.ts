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
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router')
            ) {
              return 'react-vendor'
            }
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'mui'
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three'
            }
            if (id.includes('react-icons/fa')) {
              return 'icons-fa'
            }
            if (id.includes('react-icons/md')) {
              return 'icons-md'
            }
            if (id.includes('react-icons/io')) {
              return 'icons-io'
            }
            if (id.includes('react-icons/bs')) {
              return 'icons-bs'
            }
            if (id.includes('react-icons/bi')) {
              return 'icons-bi'
            }
            if (id.includes('react-icons/ai')) {
              return 'icons-ai'
            }
            if (id.includes('react-icons/hi')) {
              return 'icons-hi'
            }
            if (id.includes('react-icons/fi')) {
              return 'icons-fi'
            }
          }
        },
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', 'react-fast-marquee'],
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
        'src/components/About/**',
        'src/components/BackToTop/**',
        'src/components/Contacts/**',
        'src/components/Education/**',
        'src/components/Experience/**',
        'src/components/Footer/**',
        'src/components/Landing/**',
        'src/components/Navbar/**',
        'src/components/ScrollProgress/**',
        'src/components/SEO/**',
        'src/components/Services/**',
        'src/components/Skills/**',
        'src/components/ThreeBackground/**',
        'src/components/index.ts',
        'src/App.tsx',
        'src/style/images.ts',
        'src/style/theme.ts',
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
