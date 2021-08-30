import { UserConfigExport } from 'vite'

import path from 'path'

export default (): UserConfigExport => ({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'yu-open-lib',
      fileName: (format: string) => {
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
        '@material-ui/core'
      ]
    }
  }
})
