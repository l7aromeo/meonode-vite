import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import * as path from 'node:path'
import { dependencies } from './package.json'
import { imagetools } from 'vite-imagetools'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

function renderChunks(deps: Record<string, string>) {
  const chunks: Record<string, string[]> = {}
  Object.keys(deps).forEach(key => {
    if (['react', 'react-dom'].includes(key)) return
    chunks[key] = [key]
  })
  return chunks
}

// https://vite.dev/config/
export default defineConfig({
  mode: process.env.NODE_ENV,
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    imagetools(),
    ViteImageOptimizer(),
    visualizer({ open: true, sourcemap: true, filename: 'bundle_report.html' }),
  ],
  build: {
    minify: 'esbuild',
    cssMinify: 'esbuild',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  resolve: {
    alias: [{ find: '@src', replacement: path.resolve(__dirname, 'src') }],
  },
})
