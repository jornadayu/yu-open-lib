const {
  mergeConfig
} = require('vite');
const path = require('path');
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@etchteam/storybook-addon-status', '@storybook/addon-storysource'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      // Must follow same config in vite.config.ts
      resolve: {
        alias: {
          '@/': `${path.resolve(__dirname, '../src')}/`
        }
      },
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: []
      },
      define: {
        'process.env.NODE_DEBUG': false,
      }
    });
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['./public']
};