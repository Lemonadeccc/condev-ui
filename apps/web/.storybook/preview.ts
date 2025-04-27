import type { Preview } from "@storybook/react";

import "@condev-ui/ui/es/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on.*" },
  },
};

export default preview;
