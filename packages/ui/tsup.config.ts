import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    ignoreWatch: ["**/es", "**/dist", "**/*.css"],
    outDir: "es",
    format: ["esm"],
    // dts: true,
    clean: true,
    splitting: false,
    sourcemap: true,
    minify: false,
  },
  // {
  //   entry: ["src"],
  //   outDir: "cjs",
  //   format: ["cjs"],
  //   dts: true,
  //   clean: true,
  //   splitting: false,
  //   sourcemap: true,
  // },
  // {
  //   entry: ["src"],
  //   ignoreWatch: ["**/es", "**/dist", "**/*.css"],
  //   outDir: "dist",
  //   format: ["iife"],
  //    dts: true,
  //   clean: true,
  //   splitting: false,
  //   sourcemap: true,
  //   minify: false,
  //   /**minify: true, */
  // }
]);
