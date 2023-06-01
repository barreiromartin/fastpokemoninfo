import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/fastpokemoninfo/",
  plugins: [vue()],
  optimizeDeps: {
    // otras opciones de optimización...
    app: {
      // Configura unwrapInjectedRef a true para desenrollar las referencias inyectadas
      unwrapInjectedRef: true
    }
  }
})
