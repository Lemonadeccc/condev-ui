import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["**/*.test.tsx"],
    globals: true,
    environment: "jsdom",
    setupFiles: './test-setup.ts',
  },
});
