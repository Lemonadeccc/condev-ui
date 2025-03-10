export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "block-no-empty": true,
    "unit-allowed-list": ["em"],
  },
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      customSyntax: "postcss-styled-syntax",
    },
  ],
};
