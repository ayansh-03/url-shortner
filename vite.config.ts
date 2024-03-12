import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare' // <=== Add this
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build(),
    devServer({
      entry: 'src/index.tsx',
      adapter // <=== Add this
    })
  ]
})