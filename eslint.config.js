import importSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

import js from "@eslint/js";

export default tseslint.config([
  // Global ignores - must be in a separate config object
  {
    ignores: [
      "apps/**/dist/**",
      "**/build/**",
      "**/es/**",
      "**/tests/**",
      "**/dist/**",
      "script/**/*.js",
      "apps/**/.next/**",
      "apps/**/out/**",
      "apps/**/build/**",
      "apps/**/next-env.d.ts",
      "**/*.config.js",
      "**/node_modules/**",
      "**/public/**/*.min.js",
      "apps/**/public/**",
      "apps/site/app/globals.css",
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // "no-console": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^\\w"],
            ["^@\\w"],
            ["^@/"],
            ["^\\u0000"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "simple-import-sort": importSort,
    },
  },
]);
