const { viteCommonjs } = require('@originjs/vite-plugin-commonjs')
const path = require('path')

/**
 * https://github.com/eirslett/storybook-builder-vite/issues/87
 */
const forceBundleConfigDeps = () => {
  const virtualFileId = '/virtual:/@storybook/builder-vite/vite-app.js';

  return {
      name: 'force-bundle-config-dep',
      enforce: 'pre',
      /**
       * @param {string} code 
       * @param {string} id 
       * @returns {{
       *   code: string,
       *   map: null
       * }}
       */
      transform(code, id) {
          if (id !== virtualFileId) {
            return
          }

          // match last node_modules
          // .../node_modules/.../node_modules/yy/zz -> yy/zz
          const transformedCode = code.replace(
            /import \* as (config_.*?) from '.*\/node_modules\/(.*?)'/g,
            (_substr, name, mpath) => `import * as ${name} from '${mpath}'`
          )

          return {
            code: transformedCode,
            map: null,
          }
      }
  }
}

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@etchteam/storybook-addon-status',
    '@geometricpanda/storybook-addon-badges',
    'storybook-addon-jsx',
    {
      name: '@storybook/addon-storysource'
    }
  ],
  core: {
    builder: 'storybook-builder-vite'
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    }
  },
  async viteFinal(config, options) {
    // Vite config
    return {
      ...config,
      build: {
        sourcemap: true
      },
      plugins: [
        ...config.plugins,
        forceBundleConfigDeps(),
        // https://github.com/vitejs/vite/issues/3409
        // viteCommonjs()
      ],
      optimizeDeps: {
        include: [
          "@storybook/react",
          "@storybook/client-api",
          "@storybook/client-logger"
        ],
        entries: [
          `${path.relative(
            config.root,
            path.resolve(__dirname, "../stories")
          )}/**/*.stories.@(js|jsx|ts|tsx)`
        ]
      }
    }
  }
}
