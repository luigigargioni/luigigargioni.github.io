import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
    },
    build: {
      outDir: 'build',
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
      }),
    ],
    resolve: {
      tsconfigPaths: true,
    },
  }
})
