import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false // Disables the error overlay
    }
  },
  // Make Vite more lenient with malformed URIs
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore certain warnings
        if (warning.code === 'INVALID_URL') return
        warn(warning)
      }
    }
  }
})
