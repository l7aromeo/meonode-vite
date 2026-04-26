import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import * as path from 'node:path'
import { dependencies } from './package.json'
import { imagetools } from 'vite-imagetools'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import babel from '@rolldown/plugin-babel'

function renderChunks(deps: Record<string, string>) {
  const chunks: Record<string, string[]> = { react: ['react'] }
  Object.keys(deps).forEach(key => {
    if (['react', 'react-dom'].includes(key)) return
    chunks[key] = [key]
  })
  return chunks
}

function manualChunks(id: string) {
  const chunks = renderChunks(dependencies)
  for (const [name, modules] of Object.entries(chunks)) {
    if (modules.some(m => id.includes(`/node_modules/${m}/`))) return name
  }
}

// https://vite.dev/config/
export default defineConfig({
  mode: process.env.NODE_ENV,
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
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
        manualChunks,
      },
    },
  },
  resolve: {
    alias: [{ find: '@src', replacement: path.resolve(__dirname, 'src') }],
  },
})
