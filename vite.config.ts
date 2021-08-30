import path from 'path'

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'yu-open-lib',
      fileName: (format: string) => `index.${format}.js`
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
}
