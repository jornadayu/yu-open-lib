import path from 'path'

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'yu-open-lib'
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
