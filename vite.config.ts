/// <reference types="vitest" />
import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    envDir: "./",
    envPrefix: "JARVIS_",
    plugins: [vue()],
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
