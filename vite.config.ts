/// <reference types="vite-ssg" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  build: {
    cssMinify: 'lightningcss',
  },
  css: {
    transformer: 'lightningcss',
  },
  plugins: [
    vue()
  ],
  ssgOptions: {
    formatting: 'minify'
  }
})
