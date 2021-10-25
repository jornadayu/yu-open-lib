import { UserConfigExport } from 'vite'

import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

import path from 'path'

export default (): UserConfigExport => ({
  plugins: [
    // https://github.com/vitejs/vite/issues/3409
    viteCommonjs()
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'yu-open-lib',
      fileName: (format) => {
        if (format === 'umd') {
          return 'index.js'
        }

        return `index.${format}.js`
      }
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'echarts-for-react/lib/core',
        // https://github.com/transitive-bullshit/react-modern-library-boilerplate/issues/29
        'react-is'
      ]
    }
  }
})
