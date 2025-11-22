import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(),],
    resolve: {
        alias: {
            '@': '/src',
            '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
            '#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
            '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
            '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
            '#windows': resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows'),
        },
    },
})
