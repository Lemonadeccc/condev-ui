import path from "path";
import { defineConfig, loadEnv } from "vite";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_BASE_PATH || "/",
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "./src"),
        "@image": path.resolve(__dirname, "./public/images"),
        "@model": path.resolve(__dirname, "./public/models"),
      },
    },
    optimizeDeps: {
      include: ['@condev-ui/ui'],
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
          },
        },
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
