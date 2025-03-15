import importSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

import js from "@eslint/js";

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ["**/*.{js,jsx,ts,tsx}"],
  ignores: [
    "apps/**/*/static/*",
    "apps/**/*/{tmp,.dumi}/**/*",
    "*.js",
    "**/*/build/**/*",
    "**/*/es/**/*",
    "**/*/dist/**/*",
    "packages/ui/es/**/*",
    "packages/ui/dist/**/*",
  ],
  rules: {
    "no-console": "error",
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
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react-internal/safe-string-coercion": "off",
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
});
