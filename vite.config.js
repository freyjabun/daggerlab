import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    tailwindcss()
  ],
  server: {
    // Bind IPv4 explicitly. Node 20 resolves `localhost` to ::1 first, so the
    // default bind is IPv6-only and Firefox (which requests 127.0.0.1) gets
    // NS_ERROR_NET_EMPTY_RESPONSE. Force IPv4 so http://localhost:5173 works.
    host: '127.0.0.1',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
