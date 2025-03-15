export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "block-no-empty": true,
  },
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      customSyntax: "postcss-styled-syntax",
    },
  ],
};
