import path from 'node:path'
import process from 'node:process'

import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import vueDevTools from 'vite-plugin-vue-devtools'

// 动态导入 UnoCSS
async function UnoCSS() {
  const { default: uno } = await import(`unocss/vite`)
  return uno()
}

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  base: `./`, // 修改为相对路径
  define: {
    process,
  },
  plugins: [
    vue(),
    await UnoCSS(),
    vueDevTools(),
    nodePolyfills({
      include: [`path`, `util`, `timers`, `stream`, `fs`],
      overrides: {
        // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
        // fs: 'memfs',
      },
    }),
    process.env.ANALYZE === `true` && visualizer({
      emitFile: true,
      filename: `stats.html`,
    }),
    AutoImport({
      imports: [
        `vue`,
        `pinia`,
        `@vueuse/core`,
      ],
      dirs: [
        `./src/stores`,
        `./src/utils/toast`,
      ],
    }),
    Components({
      resolvers: [],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, `./src`),
    },
  },
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: `js/[name]-[hash].js`,
        entryFileNames: `js/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
        manualChunks: {
          vendor: [`vue`, `pinia`, `@vueuse/core`],
          codemirror: [`codemirror`],
          markdown: [`marked`, `highlight.js`, `mermaid`],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    outDir: `dist`,
    assetsDir: `.`,
    emptyOutDir: true,
    sourcemap: false,
  },
}))
