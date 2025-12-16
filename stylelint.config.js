export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: [
    "**/node_modules/**",
    "**/dist/**",
    "**/es/**",
    "**/.turbo/**",
    "**/*.js",
    "**/*.ts",
    "**/*.tsx",
    "**/*.mjs"
  ],
  rules: {
    "block-no-empty": true,
    "import-notation": "string",
    "at-rule-no-deprecated": null,
    "rule-empty-line-before": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "theme",
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer"
        ]
      }
    ],
  },
};
