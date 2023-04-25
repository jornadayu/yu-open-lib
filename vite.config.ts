import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { PluginOption, UserConfigExport } from 'vite'

export default (): UserConfigExport => ({
  plugins: [
    // https://github.com/vitejs/vite/issues/3409
    viteCommonjs(),
    visualizer({
      template: 'treemap', // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'bundle_analyzer.html'
    }) as PluginOption
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
        'react-is',
        /@mui/,
        /@nivo/,
        /echarts/,
        /zrender/
      ]
    }
  }
})
