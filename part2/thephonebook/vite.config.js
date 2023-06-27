import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  // Vite config to proxy requests to the backend
  server: {
    proxy: {
      "/api/persons": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
