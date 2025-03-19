import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://f4bc-41-81-197-188.ngrok-free.app/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/(api)/, ""),
      },
    },
  },
});
