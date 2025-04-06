import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

import { pluginApiDocgen } from '@rspress/plugin-api-docgen';
import { pluginLastUpdated } from '@rspress/plugin-last-updated';
import { pluginPreview } from '@rspress/plugin-preview';
import { pluginShiki } from '@rspress/plugin-shiki';

const relativePath = path.join(__dirname, '../../packages/ui/src/components');

export default defineConfig({
  base: '/condev-ui/',
  root: path.join(__dirname, 'docs'),
  title: 'condev-ui',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Lemonadeccc/con-ui',
      },
    ],
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
  },
  plugins: [
    pluginPreview(),
    pluginShiki(),
    pluginApiDocgen({
      entries: {
        button: relativePath + '/Button/index.ts',
        calendar: relativePath + '/Calendar/index.ts',
      },
      apiParseTool: 'react-docgen-typescript',
    }),
    pluginLastUpdated(),
  ],
});
