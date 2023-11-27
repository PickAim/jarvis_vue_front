import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {splitVendorChunkPlugin} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    envDir: "./",
    envPrefix: "JARVIS_",
    plugins: [vue(), splitVendorChunkPlugin()],
    build: {
        outDir: "./public"
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url))
        }
    },
    test: {
        environment: "jsdom"
    }
})
